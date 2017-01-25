import React from 'react';
import ReactDOM from 'react-dom';
import RichTextActions from '../actions/RichTextActions';
import {Editor, EditorState, RichUtils, convertFromRaw, convertToRaw, Immutable} from 'draft-js';
import {convertToHTML} from 'draft-convert';

var INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD', className: 'bold'},
  {label: 'Italic', style: 'ITALIC', className: 'italic'},
  {label: 'Underline', style: 'UNDERLINE', className: 'underline'},
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
  {label: 'H5', style: 'header-five', className: 'header-five'},
  {label: 'H6', style: 'header-six', className: 'header-six'},
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


class RichText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({editorState});
    this.logState = () => console.log(this.state.editorState.toJS());
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    this.toggleBlockType = (type) => this._toggleBlockType(type);
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
    var html = convertToHTML(this.state.editorState.getCurrentContent());
    var contentState = this.state.editorState.getCurrentContent();
    
    if (contentState.hasText()) {
      RichTextActions.addBranchFull(html);
    }
  }

  _toggleInlineStyle(inlineStyle) {
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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <BlockStyleControls
            editorState={this.state.editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineStyleControls
            editorState={this.state.editorState}
            onToggle={this.toggleInlineStyle}
          />
          <div className='external-div' onClick={this.focus}>
            <Editor
              editorState={this.state.editorState}
              onChange={this.onChange}
              handleKeyCommand={this.handleKeyCommand}
              placeholder="Enter some text..."
              ref="editor"
            />
          </div>  
          <input
            type="submit"
            value="submit"
          />  
        </form>
      </div>
    );
  }
}

export default RichText;