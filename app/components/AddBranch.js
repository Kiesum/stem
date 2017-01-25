import React from 'react';
import ReactDOM from 'react-dom';
import AddBranchStore from '../stores/AddBranchStore';
import AddBranchActions from '../actions/AddBranchActions';
import TrunkShowActions from '../actions/TrunkShowActions';
import BranchShowActions from '../actions/BranchShowActions';
import {Editor, EditorState, ContentState, RichUtils, convertFromRaw, convertToRaw, Immutable} from 'draft-js';
import {convertToHTML} from 'draft-convert';

const styleMap = {
  'CODE': {
    color: '#c7254e',
    backgroundColor: '#f9f2f4',
    padding: '2px 4px',
    fontSize: '90%',
    borderRadius: '4px',
    fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
  },
};

var INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD', className: 'bold'},
  {label: 'Italic', style: 'ITALIC', className: 'italic'},
  {label: 'Underline', style: 'UNDERLINE', className: 'underline'},
  {label: 'Highlight', style: 'CODE', className: 'code'}
];

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = this.props.className + ' RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span onMouseDown={this.onToggle}>
        <button className={className}>{this.props.label}</button>
      </span>
    );
  }
}

const InlineStyleControls = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
          className={type.className}
        />
      )}
    </div>
  );
};

const BLOCK_TYPES = [
  {label: 'H1', style: 'header-one', className: 'header-one'},
  {label: 'H2', style: 'header-two', className: 'header-two'},
  {label: 'H3', style: 'header-three', className: 'header-three'},
  {label: 'H4', style: 'header-four', className: 'header-four'},
  {label: 'Blockquote', style: 'blockquote', className: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item', className: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item', className: 'ordered-list-item'},
  {label: 'Code Block', style: 'code-block', className: 'code-block'},
];

const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
          className={type.className}
        />
      )}
    </div>
  );
};

class HelpBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddTrunkStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddTrunkStore.listen(this.onChange);
  }


  componentWillUnmount() {
    AddTrunkStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div>
        <span>{this.state.helpBlock}</span>
      </div>
    )
  }
}

class AddBranch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      active: '',
      placeholderText: 'Enter some text...',
    };
    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({editorState});
    this.logState = () => console.log(this.state.editorState.toJS());
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    this.toggleBlockType = (type) => this._toggleBlockType(type);
  }

  componentDidMount() {
    AddBranchStore.listen(this.onChange);
    var css = "";
    this.setState({"toggleBackgroundCover":css});
  }

  componentWillUnmount() {
    AddBranchStore.unlisten(this.onChange);
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  handleSubmit(e) {
    e.preventDefault();
    var parent = this.props.props.params.id;
    var body = convertToHTML(this.state.editorState.getCurrentContent());
    var contentState = this.state.editorState.getCurrentContent();

    if (!contentState.hasText()) {
      AddBranchActions.invalidBody();
    }

    if (!parent) {
      AddBranchActions.invalidParent();
    }

    if (contentState.hasText() && parent) {
      AddBranchActions.addBranch(body, parent);
      var css = "";
      this.setState({"toggleBackgroundCover":css});
      this.setState({'placeholderText': 'Enter some text...'})
      this.setState({
        editorState: EditorState.createEmpty()
      });
      if (this.props.props.route.path === "/trunks/:id") {
        TrunkShowActions.getTrunkShow(this.props.props.params.id);
      } else {
        BranchShowActions.getBranchShow(this.props.props.params.id);
      }
    }
  }

  _toggleInlineStyle(inlineStyle) {
        console.log(this.state.editorState.getCurrentContent());
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  onClick(event) {
    var css = "";
    this.setState({"toggleBackgroundCover":css});
  }

  onFocus() {
    var css = "show";
    this.setState({"toggleBackgroundCover":css});
    this.setState({'placeholderText': ''})
  }

  onBlur() {
    this.setState({'placeholderText': 'Enter some text...'})
  }

  canSubmit() {
    var contentState = this.state.editorState.getCurrentContent();

    if (contentState.hasText()) {
      return 'active';
    } else {
      return '';
    }
  }

  render() {
    return (
      <div>
        <div className={'background-cover ' + this.state.toggleBackgroundCover} onClick={this.onClick.bind(this)}></div>
        <div className='add-branch-form'>
          <span className={'clear-btn ' + this.state.toggleBackgroundCover} onClick={this.onClick.bind(this)}>X</span>
          <div className="editor-controls">
            <BlockStyleControls
              editorState={this.state.editorState}
              onToggle={this.toggleBlockType}
            />
            <InlineStyleControls
              editorState={this.state.editorState}
              onToggle={this.toggleInlineStyle}
            />
          </div>
          <form onSubmit={this.handleSubmit.bind(this)} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)}>
            <div onClick={this.focus}>
              <Editor
                editorState={this.state.editorState}
                onChange={this.onChange}
                handleKeyCommand={this.handleKeyCommand}
                customStyleMap={styleMap}
                placeholder={this.state.placeholderText}
                spellCheck={true}
                ref="editor"
              />
            </div>  
            <div className='btn-container'>
              <button type='submit' className={'submit-btn ' + this.state.active}>Submit</button>
            </div>
          </form> 
        </div>
      </div>
      )
  }

}

export default AddBranch;
