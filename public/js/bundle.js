(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddBranchActions = function () {
  function AddBranchActions() {
    _classCallCheck(this, AddBranchActions);

    this.generateActions('addBranchSuccess', 'addBranchFail', 'updateParent', 'updateTitle', 'updateBody', 'invalidTitle', 'invalidBody');
  }

  _createClass(AddBranchActions, [{
    key: 'addBranch',
    value: function addBranch(parent, title, body) {
      var _this = this;

      $.ajax({
        type: 'POST',
        url: '/api/branches/new',
        data: { parent: parent, title: title, body: body }
      }).done(function (data) {
        _this.actions.addBranchSuccess(data.message);
      }).fail(function (jqXhr) {
        _this.actions.addBranchFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return AddBranchActions;
}();

exports.default = _alt2.default.createActions(AddBranchActions);

},{"../alt":8}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddTrunkActions = function () {
  function AddTrunkActions() {
    _classCallCheck(this, AddTrunkActions);

    this.generateActions('addTrunkSuccess', 'addTrunkFail', 'updateTitle', 'updateBody', 'invalidTitle', 'invalidBody');
  }

  _createClass(AddTrunkActions, [{
    key: 'addTrunk',
    value: function addTrunk(title, body) {
      var _this = this;

      $.ajax({
        type: 'POST',
        url: '/api/trunks/new',
        data: { title: title, body: body }
      }).done(function (data) {
        _this.actions.addTrunkSuccess(data.message);
      }).fail(function (jqXhr) {
        _this.actions.addTrunkFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return AddTrunkActions;
}();

exports.default = _alt2.default.createActions(AddTrunkActions);

},{"../alt":8}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BranchShowActions = function () {
  function BranchShowActions() {
    _classCallCheck(this, BranchShowActions);

    this.generateActions('getBranchShowSuccess', 'getBranchShowFail');
  }

  _createClass(BranchShowActions, [{
    key: 'getBranchShow',
    value: function getBranchShow(branchId) {
      var _this = this;

      $.ajax({ url: '/api/branches/' + branchId }).done(function (data) {
        _this.actions.getBranchShowSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getBranchShowFail(jqXhr);
      });
    }
  }]);

  return BranchShowActions;
}();

exports.default = _alt2.default.createActions(BranchShowActions);

},{"../alt":8}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeActions = function HomeActions() {
  _classCallCheck(this, HomeActions);
};

exports.default = _alt2.default.createActions(HomeActions);

},{"../alt":8}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarActions = function () {
  function NavbarActions() {
    _classCallCheck(this, NavbarActions);

    this.generateActions('updateOnlineUsers', 'updateAjaxAnimation', 'updateSearchQuery', 'getCharacterCountSuccess', 'getCharacterCountFail', 'findCharacterSuccess', 'findCharacterFail');
  }

  _createClass(NavbarActions, [{
    key: 'findCharacter',
    value: function findCharacter(payload) {
      var _this = this;

      $.ajax({
        url: '/api/characters/search',
        data: { name: payload.searchQuery }
      }).done(function (data) {
        (0, _underscore.assign)(payload, data);
        _this.actions.findCharacterSuccess(payload);
      }).fail(function () {
        _this.actions.findCharacterFail(payload);
      });
    }
  }, {
    key: 'getCharacterCount',
    value: function getCharacterCount() {
      var _this2 = this;

      $.ajax({ url: '/api/characters/count' }).done(function (data) {
        _this2.actions.getCharacterCountSuccess(data);
      }).fail(function (jqXhr) {
        _this2.actions.getCharacterCountFail(jqXhr);
      });
    }
  }]);

  return NavbarActions;
}();

exports.default = _alt2.default.createActions(NavbarActions);

},{"../alt":8,"underscore":"underscore"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TrunkActions = function () {
  function TrunkActions() {
    _classCallCheck(this, TrunkActions);

    this.generateActions('getTrunksSuccess', 'getTrunksFail');
  }

  _createClass(TrunkActions, [{
    key: 'getTrunks',
    value: function getTrunks() {
      var _this = this;

      $.ajax({ url: '/api/trunks' }).done(function (data) {
        _this.actions.getTrunksSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getTrunksFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return TrunkActions;
}();

exports.default = _alt2.default.createActions(TrunkActions);

},{"../alt":8}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TrunkShowActions = function () {
  function TrunkShowActions() {
    _classCallCheck(this, TrunkShowActions);

    this.generateActions('getTrunkShowSuccess', 'getTrunkShowFail');
  }

  _createClass(TrunkShowActions, [{
    key: 'getTrunkShow',
    value: function getTrunkShow(trunkId) {
      var _this = this;

      $.ajax({ url: '/api/trunks/' + trunkId }).done(function (data) {
        _this.actions.getTrunkShowSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getTrunkShowFail(jqXhr);
      });
    }
  }]);

  return TrunkShowActions;
}();

exports.default = _alt2.default.createActions(TrunkShowActions);

},{"../alt":8}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddBranchStore = require('../stores/AddBranchStore');

var _AddBranchStore2 = _interopRequireDefault(_AddBranchStore);

var _AddBranchActions = require('../actions/AddBranchActions');

var _AddBranchActions2 = _interopRequireDefault(_AddBranchActions);

var _TrunkShowActions = require('../actions/TrunkShowActions');

var _TrunkShowActions2 = _interopRequireDefault(_TrunkShowActions);

var _BranchShowActions = require('../actions/BranchShowActions');

var _BranchShowActions2 = _interopRequireDefault(_BranchShowActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddBranch = function (_React$Component) {
  _inherits(AddBranch, _React$Component);

  function AddBranch(props) {
    _classCallCheck(this, AddBranch);

    var _this = _possibleConstructorReturn(this, (AddBranch.__proto__ || Object.getPrototypeOf(AddBranch)).call(this, props));

    _this.state = _AddBranchStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(AddBranch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _AddBranchStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _AddBranchStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var parent = this.props.props.params.id;
      var title = this.state.title;
      var body = this.state.body;

      if (!title) {
        _AddBranchActions2.default.invalidTitle();
      }

      if (!body) {
        _AddBranchActions2.default.invalidBody();
      }

      if (title && body) {
        _AddBranchActions2.default.addBranch(parent, title, body);
        if (this.props.props.route.path === "/trunks/:id") {
          _TrunkShowActions2.default.getTrunkShow(this.props.props.params.id);
        } else {
          _BranchShowActions2.default.getBranchShow(this.props.props.params.id);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit.bind(this), className: 'add-branch-form' },
          _react2.default.createElement(
            'h3',
            null,
            'Add a branch'
          ),
          _react2.default.createElement(
            'div',
            { className: this.state.nameValidationState },
            _react2.default.createElement(
              'span',
              { className: 'help-block' },
              this.state.helpBlock
            ),
            _react2.default.createElement('input', { type: 'text', placeholder: 'title', className: 'title-input', ref: 'titleTextField', value: this.state.title,
              onChange: _AddBranchActions2.default.updateTitle, autoFocus: true })
          ),
          _react2.default.createElement(
            'div',
            { className: this.state.bodyValidationState },
            _react2.default.createElement('textarea', { value: this.state.body, placeholder: 'write anything.', className: 'body-input', onChange: _AddBranchActions2.default.updateBody })
          ),
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'submit-btn' },
            'Submit'
          )
        )
      );
    }
  }]);

  return AddBranch;
}(_react2.default.Component);

exports.default = AddBranch;

},{"../actions/AddBranchActions":1,"../actions/BranchShowActions":3,"../actions/TrunkShowActions":7,"../stores/AddBranchStore":20,"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddTrunkStore = require('../stores/AddTrunkStore');

var _AddTrunkStore2 = _interopRequireDefault(_AddTrunkStore);

var _AddTrunkActions = require('../actions/AddTrunkActions');

var _AddTrunkActions2 = _interopRequireDefault(_AddTrunkActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddTrunk = function (_React$Component) {
  _inherits(AddTrunk, _React$Component);

  function AddTrunk(props) {
    _classCallCheck(this, AddTrunk);

    var _this = _possibleConstructorReturn(this, (AddTrunk.__proto__ || Object.getPrototypeOf(AddTrunk)).call(this, props));

    _this.state = _AddTrunkStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(AddTrunk, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _AddTrunkStore2.default.listen(this.onChange);
      var css = "";
      this.setState({ "toggleBackgroundCover": css });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _AddTrunkStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var title = this.state.title.trim();
      var body = this.state.body;

      if (!title) {
        _AddTrunkActions2.default.invalidTitle();
        this.refs.titleTextField.getDOMNode().focus();
      }

      if (!body) {
        _AddTrunkActions2.default.invalidBody();
      }

      if (title && body) {
        _AddTrunkActions2.default.addTrunk(title, body);
      }
    }
  }, {
    key: 'onClick',
    value: function onClick(event) {
      var css = "";
      this.setState({ "toggleBackgroundCover": css });
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {
      var css = "show";
      this.setState({ "toggleBackgroundCover": css });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { className: 'background-cover ' + this.state.toggleBackgroundCover, onClick: this.onClick.bind(this) }),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit.bind(this), onFocus: this.onFocus.bind(this), className: 'add-branch-form' },
          _react2.default.createElement(
            'span',
            { className: 'clear-btn ' + this.state.toggleBackgroundCover, onClick: this.onClick.bind(this) },
            'X'
          ),
          _react2.default.createElement(
            'div',
            { className: this.state.nameValidationState },
            _react2.default.createElement(
              'span',
              { className: 'help-block' },
              this.state.helpBlock
            ),
            _react2.default.createElement('input', { type: 'text', placeholder: 'title', className: 'title-input', ref: 'titleTextField', value: this.state.title,
              onChange: _AddTrunkActions2.default.updateTitle })
          ),
          _react2.default.createElement(
            'div',
            { className: this.state.bodyValidationState },
            _react2.default.createElement('textarea', { value: this.state.body, placeholder: 'write anything.', className: 'body-input', onChange: _AddTrunkActions2.default.updateBody })
          ),
          _react2.default.createElement(
            'div',
            { className: 'btn-container' },
            _react2.default.createElement(
              'button',
              { type: 'submit', className: 'submit-btn' },
              'Submit'
            )
          )
        )
      );
    }
  }]);

  return AddTrunk;
}(_react2.default.Component);

exports.default = AddTrunk;

},{"../actions/AddTrunkActions":2,"../stores/AddTrunkStore":21,"react":"react"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, { history: this.props.history }),
        this.props.children
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

},{"./Navbar":14,"react":"react"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _BranchShowStore = require('../stores/BranchShowStore');

var _BranchShowStore2 = _interopRequireDefault(_BranchShowStore);

var _BranchShowActions = require('../actions/BranchShowActions');

var _BranchShowActions2 = _interopRequireDefault(_BranchShowActions);

var _AddBranch = require('./AddBranch');

var _AddBranch2 = _interopRequireDefault(_AddBranch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrunkShow = function (_React$Component) {
  _inherits(TrunkShow, _React$Component);

  function TrunkShow(props) {
    _classCallCheck(this, TrunkShow);

    var _this = _possibleConstructorReturn(this, (TrunkShow.__proto__ || Object.getPrototypeOf(TrunkShow)).call(this, props));

    _this.state = _BranchShowStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(TrunkShow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _BranchShowStore2.default.listen(this.onChange);
      _BranchShowActions2.default.getBranchShow(this.props.params.id);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _BranchShowStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {}
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      _BranchShowActions2.default.getBranchShow(nextProps.params.id);
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.state);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          _react2.default.createElement(
            'strong',
            null,
            this.state.title
          )
        ),
        _react2.default.createElement(
          'h4',
          null,
          this.state.body
        ),
        _react2.default.createElement(_AddBranch2.default, { props: this.props }),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'h2',
            { className: 'text-center' },
            'Branches'
          ),
          _react2.default.createElement(
            'div',
            null,
            this.state.branches.map(function (branch, index) {
              return _react2.default.createElement(
                'div',
                { key: branch._id },
                _react2.default.createElement(
                  'div',
                  { className: 'post-container' },
                  _react2.default.createElement(
                    'h4',
                    { className: 'title' },
                    branch.title
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'body' },
                    branch.body
                  ),
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/branches/' + branch._id, className: 'branches-link' },
                    'See branches'
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return TrunkShow;
}(_react2.default.Component);

exports.default = TrunkShow;

},{"../actions/BranchShowActions":3,"../stores/BranchShowStore":22,"./AddBranch":9,"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HomeStore = require('../stores/HomeStore');

var _HomeStore2 = _interopRequireDefault(_HomeStore);

var _Trunk = require('./Trunk');

var _Trunk2 = _interopRequireDefault(_Trunk);

var _AddTrunk = require('./AddTrunk');

var _AddTrunk2 = _interopRequireDefault(_AddTrunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = _HomeStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Home, [{
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      if (this.state.showAddBranch === false) {
        this.setState({ showAddBranch: true });
      } else if (this.state.showAddBranch === true) {
        this.setState({ showAddBranch: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AddTrunk2.default, null),
        _react2.default.createElement(_Trunk2.default, null)
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

},{"../stores/HomeStore":23,"./AddTrunk":10,"./Trunk":15,"react":"react"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _NavbarStore = require('../stores/NavbarStore');

var _NavbarStore2 = _interopRequireDefault(_NavbarStore);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.state = _NavbarStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _NavbarStore2.default.listen(this.onChange);
      _NavbarActions2.default.getCharacterCount();

      var socket = io.connect();

      socket.on('onlineUsers', function (data) {
        _NavbarActions2.default.updateOnlineUsers(data);
      });

      $(document).ajaxStart(function () {
        _NavbarActions2.default.updateAjaxAnimation('fadeIn');
      });

      $(document).ajaxComplete(function () {
        setTimeout(function () {
          _NavbarActions2.default.updateAjaxAnimation('fadeOut');
        }, 750);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _NavbarStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var searchQuery = this.state.searchQuery.trim();

      if (searchQuery) {
        _NavbarActions2.default.findCharacter({
          searchQuery: searchQuery,
          searchForm: this.refs.searchForm,
          history: this.props.history
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-default navbar-static-top' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-header' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              'Toggle navigation'
            ),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' })
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/', className: 'navbar-brand' },
            _react2.default.createElement(
              'span',
              { ref: 'triangles', className: 'triangles animated ' + this.state.ajaxAnimationClass },
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri' }),
              _react2.default.createElement('div', { className: 'tri invert' })
            ),
            'STEM',
            _react2.default.createElement(
              'span',
              { className: 'badge badge-up badge-danger' },
              this.state.onlineUsers
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

},{"../actions/NavbarActions":5,"../stores/NavbarStore":24,"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _TrunkStore = require('../stores/TrunkStore');

var _TrunkStore2 = _interopRequireDefault(_TrunkStore);

var _TrunkActions = require('../actions/TrunkActions');

var _TrunkActions2 = _interopRequireDefault(_TrunkActions);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trunk = function (_React$Component) {
  _inherits(Trunk, _React$Component);

  function Trunk(props) {
    _classCallCheck(this, Trunk);

    var _this = _possibleConstructorReturn(this, (Trunk.__proto__ || Object.getPrototypeOf(Trunk)).call(this, props));

    _this.state = _TrunkStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Trunk, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _TrunkStore2.default.listen(this.onChange);
      _TrunkActions2.default.getTrunks();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _TrunkStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(trunk) {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          { className: 'text-center' },
          'Trunks'
        ),
        _react2.default.createElement(
          'div',
          null,
          this.state.trunks.map(function (trunk, index) {
            return _react2.default.createElement(
              'div',
              { key: trunk._id },
              _react2.default.createElement(
                'div',
                { className: 'post-container' },
                _react2.default.createElement(
                  'h4',
                  { className: 'title' },
                  trunk.title
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'body' },
                  trunk.body
                ),
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/trunks/' + trunk._id, className: 'branches-link' },
                  'See branches'
                ),
                _react2.default.createElement('div', { className: 'avatar' }),
                _react2.default.createElement(
                  'div',
                  { className: 'branches' },
                  'x',
                  _react2.default.createElement(
                    'span',
                    { className: 'badge' },
                    '15'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'stars' },
                  '\u2605',
                  _react2.default.createElement(
                    'span',
                    { className: 'badge' },
                    '10'
                  )
                )
              )
            );
          })
        )
      );
    }
  }]);

  return Trunk;
}(_react2.default.Component);

exports.default = Trunk;

},{"../actions/TrunkActions":6,"../stores/TrunkStore":26,"react":"react","react-router":"react-router","underscore":"underscore"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TrunkShow = require('./TrunkShow.js');

var _TrunkShow2 = _interopRequireDefault(_TrunkShow);

var _AddBranch = require('./AddBranch.js');

var _AddBranch2 = _interopRequireDefault(_AddBranch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrunkComplete = function (_React$Component) {
  _inherits(TrunkComplete, _React$Component);

  function TrunkComplete(props) {
    _classCallCheck(this, TrunkComplete);

    return _possibleConstructorReturn(this, (TrunkComplete.__proto__ || Object.getPrototypeOf(TrunkComplete)).call(this, props));
  }

  _createClass(TrunkComplete, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_TrunkShow2.default, { props: this.props }),
        _react2.default.createElement(_AddBranch2.default, { props: this.props })
      );
    }
  }]);

  return TrunkComplete;
}(_react2.default.Component);

exports.default = TrunkComplete;

},{"./AddBranch.js":9,"./TrunkShow.js":17,"react":"react"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _TrunkShowStore = require('../stores/TrunkShowStore');

var _TrunkShowStore2 = _interopRequireDefault(_TrunkShowStore);

var _TrunkShowActions = require('../actions/TrunkShowActions');

var _TrunkShowActions2 = _interopRequireDefault(_TrunkShowActions);

var _AddBranch = require('./AddBranch');

var _AddBranch2 = _interopRequireDefault(_AddBranch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrunkShow = function (_React$Component) {
  _inherits(TrunkShow, _React$Component);

  function TrunkShow(props) {
    _classCallCheck(this, TrunkShow);

    var _this = _possibleConstructorReturn(this, (TrunkShow.__proto__ || Object.getPrototypeOf(TrunkShow)).call(this, props));

    _this.state = _TrunkShowStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(TrunkShow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _TrunkShowStore2.default.listen(this.onChange);
      _TrunkShowActions2.default.getTrunkShow(this.props.params.id);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _TrunkShowStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {}
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      if (this.state.showAddBranch === false) {
        this.setState({ showAddBranch: true });
      } else if (this.state.showAddBranch === true) {
        this.setState({ showAddBranch: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'post-container' },
          _react2.default.createElement(
            'h3',
            { className: 'title' },
            this.state.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'body' },
            this.state.body
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.onClick.bind(this), className: 'add-branch-toggle' },
            'Add Branch'
          )
        ),
        this.state.showAddBranch ? _react2.default.createElement(_AddBranch2.default, { props: this.props }) : null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            { className: 'text-center' },
            'Branches'
          ),
          _react2.default.createElement(
            'div',
            null,
            this.state.branches.map(function (branch, index) {
              return _react2.default.createElement(
                'div',
                { key: branch._id },
                _react2.default.createElement(
                  'div',
                  { className: 'post-container' },
                  _react2.default.createElement(
                    'h3',
                    { className: 'title' },
                    branch.title
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'body' },
                    branch.body
                  ),
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/branches/' + branch._id, className: 'branches-link' },
                    'See branches'
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return TrunkShow;
}(_react2.default.Component);

exports.default = TrunkShow;

},{"../actions/TrunkShowActions":7,"../stores/TrunkShowStore":25,"./AddBranch":9,"react":"react","react-router":"react-router"}],18:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":19,"history/lib/createBrowserHistory":35,"react":"react","react-dom":"react-dom","react-router":"react-router"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _AddTrunk = require('./components/AddTrunk');

var _AddTrunk2 = _interopRequireDefault(_AddTrunk);

var _TrunkShow = require('./components/TrunkShow');

var _TrunkShow2 = _interopRequireDefault(_TrunkShow);

var _TrunkComplete = require('./components/TrunkComplete');

var _TrunkComplete2 = _interopRequireDefault(_TrunkComplete);

var _BranchShow = require('./components/BranchShow');

var _BranchShow2 = _interopRequireDefault(_BranchShow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/trunks/:id', component: _TrunkShow2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/branches/:id', component: _BranchShow2.default })
);

},{"./components/AddTrunk":10,"./components/App":11,"./components/BranchShow":12,"./components/Home":13,"./components/TrunkComplete":16,"./components/TrunkShow":17,"react":"react","react-router":"react-router"}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddBranchActions = require('../actions/AddBranchActions');

var _AddBranchActions2 = _interopRequireDefault(_AddBranchActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddBranchStore = function () {
  function AddBranchStore() {
    _classCallCheck(this, AddBranchStore);

    this.bindActions(_AddBranchActions2.default);
    this.parent = '';
    this.title = '';
    this.body = '';
    this.helpBlock = '';
    this.titleValidationState = '';
    this.bodyValidationState = '';
  }

  _createClass(AddBranchStore, [{
    key: 'onAddBranchSuccess',
    value: function onAddBranchSuccess(successMessage) {
      this.titleValidationState = 'has-success';
      this.helpBlock = successMessage;
    }
  }, {
    key: 'onAddBranchFail',
    value: function onAddBranchFail(errorMessage) {
      this.titleValidationState = 'has-error';
      this.helpBlock = errorMessage;
    }
  }, {
    key: 'onUpdateParent',
    value: function onUpdateParent(event) {
      this.parent = event.target.value;
    }
  }, {
    key: 'onUpdateTitle',
    value: function onUpdateTitle(event) {
      this.title = event.target.value;
      this.titleValidationState = '';
      this.helpBlock = '';
    }
  }, {
    key: 'onUpdateBody',
    value: function onUpdateBody(event) {
      this.body = event.target.value;
      this.bodyValidationState = '';
    }
  }, {
    key: 'onInvalidTitle',
    value: function onInvalidTitle() {
      this.titleValidationState = 'has-error';
      this.helpBlock = 'Please enter a title.';
    }
  }, {
    key: 'onInvalidBody',
    value: function onInvalidBody() {
      this.bodyValidationState = 'has-error';
    }
  }]);

  return AddBranchStore;
}();

exports.default = _alt2.default.createStore(AddBranchStore);

},{"../actions/AddBranchActions":1,"../alt":8}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddTrunkActions = require('../actions/AddTrunkActions');

var _AddTrunkActions2 = _interopRequireDefault(_AddTrunkActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddTrunkStore = function () {
  function AddTrunkStore() {
    _classCallCheck(this, AddTrunkStore);

    this.bindActions(_AddTrunkActions2.default);
    this.title = '';
    this.body = '';
    this.helpBlock = '';
    this.titleValidationState = '';
    this.bodyValidationState = '';
    this.toggleBackgroundCover = 'show';
  }

  _createClass(AddTrunkStore, [{
    key: 'onAddTrunkSuccess',
    value: function onAddTrunkSuccess(successMessage) {
      this.titleValidationState = 'has-success';
      this.helpBlock = successMessage;
    }
  }, {
    key: 'onAddTrunkFail',
    value: function onAddTrunkFail(errorMessage) {
      this.titleValidationState = 'has-error';
      this.helpBlock = errorMessage;
    }
  }, {
    key: 'onUpdateTitle',
    value: function onUpdateTitle(event) {
      this.title = event.target.value;
      this.titleValidationState = '';
      this.helpBlock = '';
    }
  }, {
    key: 'onUpdateBody',
    value: function onUpdateBody(event) {
      this.body = event.target.value;
      this.bodyValidationState = '';
    }
  }, {
    key: 'onInvalidTitle',
    value: function onInvalidTitle() {
      this.titleValidationState = 'has-error';
      this.helpBlock = 'Please enter a title.';
    }
  }, {
    key: 'onInvalidBody',
    value: function onInvalidBody() {
      this.bodyValidationState = 'has-error';
    }
  }]);

  return AddTrunkStore;
}();

exports.default = _alt2.default.createStore(AddTrunkStore);

},{"../actions/AddTrunkActions":2,"../alt":8}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _BranchShowActions = require('../actions/BranchShowActions');

var _BranchShowActions2 = _interopRequireDefault(_BranchShowActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BranchShowStore = function () {
  function BranchShowStore() {
    _classCallCheck(this, BranchShowStore);

    this.bindActions(_BranchShowActions2.default);
    this.parent_id = '';
    this.branchId = 0;
    this.title = 'TBD';
    this.body = 'TBD';
    this.branches = [];
  }

  _createClass(BranchShowStore, [{
    key: 'onGetBranchShowSuccess',
    value: function onGetBranchShowSuccess(data) {
      this.parent_id = data[0].parent_id;
      this.title = data[0].title;
      this.body = data[0].body;
      this.branches = data[1];
    }
  }, {
    key: 'onGetBranchShowFail',
    value: function onGetBranchShowFail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }]);

  return BranchShowStore;
}();

exports.default = _alt2.default.createStore(BranchShowStore);

},{"../actions/BranchShowActions":3,"../alt":8}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _HomeActions = require('../actions/HomeActions');

var _HomeActions2 = _interopRequireDefault(_HomeActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TrunkStore = function () {
  function TrunkStore() {
    _classCallCheck(this, TrunkStore);

    this.bindActions(_HomeActions2.default);
    this.showAddBranch = false;
  }

  _createClass(TrunkStore, [{
    key: 'onGetTrunksSuccess',
    value: function onGetTrunksSuccess(data) {
      this.trunks = data;
    }
  }, {
    key: 'onGetTrunksFail',
    value: function onGetTrunksFail(errorMessage) {
      toastr.error(errorMessage);
    }
  }]);

  return TrunkStore;
}();

exports.default = _alt2.default.createStore(TrunkStore);

},{"../actions/HomeActions":4,"../alt":8}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarStore = function () {
  function NavbarStore() {
    _classCallCheck(this, NavbarStore);

    this.bindActions(_NavbarActions2.default);
    this.totalCharacters = 0;
    this.onlineUsers = 0;
    this.searchQuery = '';
    this.ajaxAnimationClass = '';
  }

  _createClass(NavbarStore, [{
    key: 'onFindCharacterSuccess',
    value: function onFindCharacterSuccess(payload) {
      payload.history.pushState(null, '/characters/' + payload.characterId);
    }
  }, {
    key: 'onFindCharacterFail',
    value: function onFindCharacterFail(payload) {
      payload.searchForm.classList.add('shake');
      setTimeout(function () {
        payload.searchForm.classList.remove('shake');
      }, 1000);
    }
  }, {
    key: 'onUpdateOnlineUsers',
    value: function onUpdateOnlineUsers(data) {
      this.onlineUsers = data.onlineUsers;
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }, {
    key: 'onUpdateSearchQuery',
    value: function onUpdateSearchQuery(event) {
      this.searchQuery = event.target.value;
    }
  }, {
    key: 'onGetCharacterCountSuccess',
    value: function onGetCharacterCountSuccess(data) {
      this.totalCharacters = data.count;
    }
  }, {
    key: 'onGetCharacterCountFail',
    value: function onGetCharacterCountFail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }]);

  return NavbarStore;
}();

exports.default = _alt2.default.createStore(NavbarStore);

},{"../actions/NavbarActions":5,"../alt":8}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _TrunkShowActions = require('../actions/TrunkShowActions');

var _TrunkShowActions2 = _interopRequireDefault(_TrunkShowActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TrunkShowStore = function () {
  function TrunkShowStore() {
    _classCallCheck(this, TrunkShowStore);

    this.bindActions(_TrunkShowActions2.default);
    this.trunkId = 0;
    this.title = 'TBD';
    this.body = 'TBD';
    this.showAddBranch = false;
    this.branches = [];
  }

  _createClass(TrunkShowStore, [{
    key: 'onGetTrunkShowSuccess',
    value: function onGetTrunkShowSuccess(data) {
      this.title = data[0].title;
      this.body = data[0].body;
      this.branches = data[1];
    }
  }, {
    key: 'onGetTrunkShowFail',
    value: function onGetTrunkShowFail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }]);

  return TrunkShowStore;
}();

exports.default = _alt2.default.createStore(TrunkShowStore);

},{"../actions/TrunkShowActions":7,"../alt":8}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _TrunkActions = require('../actions/TrunkActions');

var _TrunkActions2 = _interopRequireDefault(_TrunkActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TrunkStore = function () {
  function TrunkStore() {
    _classCallCheck(this, TrunkStore);

    this.bindActions(_TrunkActions2.default);
    this.trunks = [];
  }

  _createClass(TrunkStore, [{
    key: 'onGetTrunksSuccess',
    value: function onGetTrunksSuccess(data) {
      this.trunks = data;
    }
  }, {
    key: 'onGetTrunksFail',
    value: function onGetTrunksFail(errorMessage) {
      toastr.error(errorMessage);
    }
  }]);

  return TrunkStore;
}();

exports.default = _alt2.default.createStore(TrunkStore);

},{"../actions/TrunkActions":6,"../alt":8}],27:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":28,"./lib/keys.js":29}],28:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],29:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],30:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],31:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],32:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":44,"warning":45}],33:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],34:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],35:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":30,"./DOMStateStorage":32,"./DOMUtils":33,"./ExecutionEnvironment":34,"./createDOMHistory":36,"./parsePath":41,"_process":44,"invariant":43}],36:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":33,"./ExecutionEnvironment":34,"./createHistory":37,"_process":44,"invariant":43}],37:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":30,"./AsyncUtils":31,"./createLocation":38,"./deprecate":39,"./parsePath":41,"./runTransitionHook":42,"deep-equal":27}],38:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if (typeof action === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":30,"./parsePath":41}],39:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];
},{}],40:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],41:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./extractPath":40,"_process":44,"warning":45}],42:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":44,"warning":45}],43:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":44}],44:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],45:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":44}]},{},[18])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYWN0aW9ucy9BZGRCcmFuY2hBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvQWRkVHJ1bmtBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvQnJhbmNoU2hvd0FjdGlvbnMuanMiLCJhcHAvYWN0aW9ucy9Ib21lQWN0aW9ucy5qcyIsImFwcC9hY3Rpb25zL05hdmJhckFjdGlvbnMuanMiLCJhcHAvYWN0aW9ucy9UcnVua0FjdGlvbnMuanMiLCJhcHAvYWN0aW9ucy9UcnVua1Nob3dBY3Rpb25zLmpzIiwiYXBwL2FsdC5qcyIsImFwcC9jb21wb25lbnRzL0FkZEJyYW5jaC5qcyIsImFwcC9jb21wb25lbnRzL0FkZFRydW5rLmpzIiwiYXBwL2NvbXBvbmVudHMvQXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvQnJhbmNoU2hvdy5qcyIsImFwcC9jb21wb25lbnRzL0hvbWUuanMiLCJhcHAvY29tcG9uZW50cy9OYXZiYXIuanMiLCJhcHAvY29tcG9uZW50cy9UcnVuay5qcyIsImFwcC9jb21wb25lbnRzL1RydW5rQ29tcGxldGUuanMiLCJhcHAvY29tcG9uZW50cy9UcnVua1Nob3cuanMiLCJhcHAvbWFpbi5qcyIsImFwcC9yb3V0ZXMuanMiLCJhcHAvc3RvcmVzL0FkZEJyYW5jaFN0b3JlLmpzIiwiYXBwL3N0b3Jlcy9BZGRUcnVua1N0b3JlLmpzIiwiYXBwL3N0b3Jlcy9CcmFuY2hTaG93U3RvcmUuanMiLCJhcHAvc3RvcmVzL0hvbWVTdG9yZS5qcyIsImFwcC9zdG9yZXMvTmF2YmFyU3RvcmUuanMiLCJhcHAvc3RvcmVzL1RydW5rU2hvd1N0b3JlLmpzIiwiYXBwL3N0b3Jlcy9UcnVua1N0b3JlLmpzIiwibm9kZV9tb2R1bGVzL2RlZXAtZXF1YWwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZGVlcC1lcXVhbC9saWIvaXNfYXJndW1lbnRzLmpzIiwibm9kZV9tb2R1bGVzL2RlZXAtZXF1YWwvbGliL2tleXMuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvQWN0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9Bc3luY1V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0RPTVN0YXRlU3RvcmFnZS5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9ET01VdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudC5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVCcm93c2VySGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVET01IaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2NyZWF0ZUhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvY3JlYXRlTG9jYXRpb24uanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvZGVwcmVjYXRlLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2V4dHJhY3RQYXRoLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL3BhcnNlUGF0aC5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9ydW5UcmFuc2l0aW9uSG9vay5qcyIsIm5vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvd2FybmluZy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxnQjtBQUNKLDhCQUFjO0FBQUE7O0FBQ1osU0FBSyxlQUFMLENBQ0ksa0JBREosRUFFSSxlQUZKLEVBR0ksY0FISixFQUlJLGFBSkosRUFLSSxZQUxKLEVBTUksY0FOSixFQU9JLGFBUEo7QUFTRDs7Ozs4QkFFUyxNLEVBQVEsSyxFQUFPLEksRUFBTTtBQUFBOztBQUM3QixRQUFF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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuXG5jbGFzcyBBZGRCcmFuY2hBY3Rpb25zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nZW5lcmF0ZUFjdGlvbnMoXG4gICAgICAgICdhZGRCcmFuY2hTdWNjZXNzJyxcbiAgICAgICAgJ2FkZEJyYW5jaEZhaWwnLFxuICAgICAgICAndXBkYXRlUGFyZW50JyxcbiAgICAgICAgJ3VwZGF0ZVRpdGxlJyxcbiAgICAgICAgJ3VwZGF0ZUJvZHknLFxuICAgICAgICAnaW52YWxpZFRpdGxlJyxcbiAgICAgICAgJ2ludmFsaWRCb2R5JyxcbiAgICAgIClcbiAgfVxuXG4gIGFkZEJyYW5jaChwYXJlbnQsIHRpdGxlLCBib2R5KSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHVybDogJy9hcGkvYnJhbmNoZXMvbmV3JyxcbiAgICAgIGRhdGE6IHsgcGFyZW50OiBwYXJlbnQsIHRpdGxlOiB0aXRsZSwgYm9keTogYm9keSB9XG4gICAgfSlcbiAgICAgIC5kb25lKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5hZGRCcmFuY2hTdWNjZXNzKGRhdGEubWVzc2FnZSk7XG4gICAgICB9KVxuICAgICAgLmZhaWwoKGpxWGhyKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5hZGRCcmFuY2hGYWlsKGpxWGhyLnJlc3BvbnNlSlNPTi5tZXNzYWdlKTtcbiAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZUFjdGlvbnMoQWRkQnJhbmNoQWN0aW9ucyk7XG4gIFxuICIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcblxuY2xhc3MgQWRkVHJ1bmtBY3Rpb25zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nZW5lcmF0ZUFjdGlvbnMoXG4gICAgICAnYWRkVHJ1bmtTdWNjZXNzJyxcbiAgICAgICdhZGRUcnVua0ZhaWwnLFxuICAgICAgJ3VwZGF0ZVRpdGxlJyxcbiAgICAgICd1cGRhdGVCb2R5JyxcbiAgICAgICdpbnZhbGlkVGl0bGUnLFxuICAgICAgJ2ludmFsaWRCb2R5J1xuICAgICk7XG4gIH1cblxuICBhZGRUcnVuayh0aXRsZSwgYm9keSkge1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICB1cmw6ICcvYXBpL3RydW5rcy9uZXcnLFxuICAgICAgZGF0YTogeyB0aXRsZTogdGl0bGUsIGJvZHk6IGJvZHkgfVxuICAgIH0pXG4gICAgICAuZG9uZSgoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbnMuYWRkVHJ1bmtTdWNjZXNzKGRhdGEubWVzc2FnZSk7XG4gICAgICB9KVxuICAgICAgLmZhaWwoKGpxWGhyKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5hZGRUcnVua0ZhaWwoanFYaHIucmVzcG9uc2VKU09OLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZUFjdGlvbnMoQWRkVHJ1bmtBY3Rpb25zKTsiLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5cbmNsYXNzIEJyYW5jaFNob3dBY3Rpb25zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nZW5lcmF0ZUFjdGlvbnMoXG4gICAgICAnZ2V0QnJhbmNoU2hvd1N1Y2Nlc3MnLFxuICAgICAgJ2dldEJyYW5jaFNob3dGYWlsJ1xuICAgICk7XG4gIH1cblxuICBnZXRCcmFuY2hTaG93KGJyYW5jaElkKSB7XG4gICAgJC5hamF4KHsgdXJsOiAnL2FwaS9icmFuY2hlcy8nICsgYnJhbmNoSWQgfSlcbiAgICAgIC5kb25lKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5nZXRCcmFuY2hTaG93U3VjY2VzcyhkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuZmFpbCgoanFYaHIpID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmdldEJyYW5jaFNob3dGYWlsKGpxWGhyKTtcbiAgICAgIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZUFjdGlvbnMoQnJhbmNoU2hvd0FjdGlvbnMpOyIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcblxuY2xhc3MgSG9tZUFjdGlvbnMge1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKEhvbWVBY3Rpb25zKTsiLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5pbXBvcnQge2Fzc2lnbn0gZnJvbSAndW5kZXJzY29yZSc7XG5cbmNsYXNzIE5hdmJhckFjdGlvbnMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdlbmVyYXRlQWN0aW9ucyhcbiAgICAgICd1cGRhdGVPbmxpbmVVc2VycycsXG4gICAgICAndXBkYXRlQWpheEFuaW1hdGlvbicsXG4gICAgICAndXBkYXRlU2VhcmNoUXVlcnknLFxuICAgICAgJ2dldENoYXJhY3RlckNvdW50U3VjY2VzcycsXG4gICAgICAnZ2V0Q2hhcmFjdGVyQ291bnRGYWlsJyxcbiAgICAgICdmaW5kQ2hhcmFjdGVyU3VjY2VzcycsXG4gICAgICAnZmluZENoYXJhY3RlckZhaWwnXG4gICAgKTtcbiAgfVxuXG4gIGZpbmRDaGFyYWN0ZXIocGF5bG9hZCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvYXBpL2NoYXJhY3RlcnMvc2VhcmNoJyxcbiAgICAgIGRhdGE6IHsgbmFtZTogcGF5bG9hZC5zZWFyY2hRdWVyeSB9XG4gICAgfSlcbiAgICAgIC5kb25lKChkYXRhKSA9PiB7XG4gICAgICAgIGFzc2lnbihwYXlsb2FkLCBkYXRhKTtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmZpbmRDaGFyYWN0ZXJTdWNjZXNzKHBheWxvYWQpO1xuICAgICAgfSlcbiAgICAgIC5mYWlsKCgpID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmZpbmRDaGFyYWN0ZXJGYWlsKHBheWxvYWQpO1xuICAgICAgfSk7XG4gIH1cblxuICBnZXRDaGFyYWN0ZXJDb3VudCgpIHtcbiAgICAkLmFqYXgoeyB1cmw6ICcvYXBpL2NoYXJhY3RlcnMvY291bnQnIH0pXG4gICAgICAuZG9uZSgoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbnMuZ2V0Q2hhcmFjdGVyQ291bnRTdWNjZXNzKGRhdGEpXG4gICAgICB9KVxuICAgICAgLmZhaWwoKGpxWGhyKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5nZXRDaGFyYWN0ZXJDb3VudEZhaWwoanFYaHIpXG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlQWN0aW9ucyhOYXZiYXJBY3Rpb25zKTsiLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5cbmNsYXNzIFRydW5rQWN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zKFxuICAgICAgJ2dldFRydW5rc1N1Y2Nlc3MnLFxuICAgICAgJ2dldFRydW5rc0ZhaWwnLFxuICAgICk7XG4gIH1cblxuICBnZXRUcnVua3MoKSB7XG4gICAgJC5hamF4KHsgdXJsOiAnL2FwaS90cnVua3MnIH0pXG4gICAgICAuZG9uZShkYXRhID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmdldFRydW5rc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmZhaWwoanFYaHIgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbnMuZ2V0VHJ1bmtzRmFpbChqcVhoci5yZXNwb25zZUpTT04ubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKFRydW5rQWN0aW9ucyk7IiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuXG5jbGFzcyBUcnVua1Nob3dBY3Rpb25zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nZW5lcmF0ZUFjdGlvbnMoXG4gICAgICAnZ2V0VHJ1bmtTaG93U3VjY2VzcycsXG4gICAgICAnZ2V0VHJ1bmtTaG93RmFpbCdcbiAgICApO1xuICB9XG5cbiAgZ2V0VHJ1bmtTaG93KHRydW5rSWQpIHtcbiAgICAkLmFqYXgoeyB1cmw6ICcvYXBpL3RydW5rcy8nICsgdHJ1bmtJZCB9KVxuICAgICAgLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmdldFRydW5rU2hvd1N1Y2Nlc3MoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmZhaWwoKGpxWGhyKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5nZXRUcnVua1Nob3dGYWlsKGpxWGhyKTtcbiAgICAgIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZUFjdGlvbnMoVHJ1bmtTaG93QWN0aW9ucyk7IiwiaW1wb3J0IEFsdCBmcm9tICdhbHQnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWx0KCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBZGRCcmFuY2hTdG9yZSBmcm9tICcuLi9zdG9yZXMvQWRkQnJhbmNoU3RvcmUnO1xuaW1wb3J0IEFkZEJyYW5jaEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9BZGRCcmFuY2hBY3Rpb25zJztcbmltcG9ydCBUcnVua1Nob3dBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvVHJ1bmtTaG93QWN0aW9ucyc7XG5pbXBvcnQgQnJhbmNoU2hvd0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9CcmFuY2hTaG93QWN0aW9ucyc7XG5cbmNsYXNzIEFkZEJyYW5jaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSBBZGRCcmFuY2hTdG9yZS5nZXRTdGF0ZSgpO1xuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBBZGRCcmFuY2hTdG9yZS5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBBZGRCcmFuY2hTdG9yZS51bmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMucHJvcHMucHJvcHMucGFyYW1zLmlkO1xuICAgIHZhciB0aXRsZSA9IHRoaXMuc3RhdGUudGl0bGU7XG4gICAgdmFyIGJvZHkgPSB0aGlzLnN0YXRlLmJvZHk7XG5cbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICBBZGRCcmFuY2hBY3Rpb25zLmludmFsaWRUaXRsZSgpO1xuICAgIH1cblxuICAgIGlmICghYm9keSkge1xuICAgICAgQWRkQnJhbmNoQWN0aW9ucy5pbnZhbGlkQm9keSgpO1xuICAgIH1cblxuICAgIGlmICh0aXRsZSAmJiBib2R5KSB7XG4gICAgICBBZGRCcmFuY2hBY3Rpb25zLmFkZEJyYW5jaChwYXJlbnQsIHRpdGxlLCBib2R5KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLnByb3BzLnJvdXRlLnBhdGggPT09IFwiL3RydW5rcy86aWRcIikge1xuICAgICAgICBUcnVua1Nob3dBY3Rpb25zLmdldFRydW5rU2hvdyh0aGlzLnByb3BzLnByb3BzLnBhcmFtcy5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBCcmFuY2hTaG93QWN0aW9ucy5nZXRCcmFuY2hTaG93KHRoaXMucHJvcHMucHJvcHMucGFyYW1zLmlkKTtcbiAgICAgIH1cblxuICAgIH1cblxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2FkZC1icmFuY2gtZm9ybSc+XG4gICAgICAgICAgPGgzPkFkZCBhIGJyYW5jaDwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUubmFtZVZhbGlkYXRpb25TdGF0ZX0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hlbHAtYmxvY2snPnt0aGlzLnN0YXRlLmhlbHBCbG9ja308L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J3RpdGxlJyBjbGFzc05hbWU9J3RpdGxlLWlucHV0JyByZWY9J3RpdGxlVGV4dEZpZWxkJyB2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17QWRkQnJhbmNoQWN0aW9ucy51cGRhdGVUaXRsZX0gYXV0b0ZvY3VzIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYm9keVZhbGlkYXRpb25TdGF0ZX0+XG4gICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3RoaXMuc3RhdGUuYm9keX0gcGxhY2Vob2xkZXI9J3dyaXRlIGFueXRoaW5nLicgY2xhc3NOYW1lPSdib2R5LWlucHV0JyBvbkNoYW5nZT17QWRkQnJhbmNoQWN0aW9ucy51cGRhdGVCb2R5fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J3N1Ym1pdC1idG4nPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+IFxuICAgICAgPC9kaXY+XG4gICAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRCcmFuY2g7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFkZFRydW5rU3RvcmUgZnJvbSAnLi4vc3RvcmVzL0FkZFRydW5rU3RvcmUnO1xuaW1wb3J0IEFkZFRydW5rQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0FkZFRydW5rQWN0aW9ucyc7XG5cbmNsYXNzIEFkZFRydW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IEFkZFRydW5rU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQWRkVHJ1bmtTdG9yZS5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gICAgdmFyIGNzcyA9IFwiXCI7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XCJ0b2dnbGVCYWNrZ3JvdW5kQ292ZXJcIjpjc3N9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIEFkZFRydW5rU3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gIH1cblxuICBvbkNoYW5nZShzdGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciB0aXRsZSA9IHRoaXMuc3RhdGUudGl0bGUudHJpbSgpO1xuICAgIHZhciBib2R5ID0gdGhpcy5zdGF0ZS5ib2R5O1xuXG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgQWRkVHJ1bmtBY3Rpb25zLmludmFsaWRUaXRsZSgpO1xuICAgICAgdGhpcy5yZWZzLnRpdGxlVGV4dEZpZWxkLmdldERPTU5vZGUoKS5mb2N1cygpO1xuICAgIH1cblxuICAgIGlmICghYm9keSkge1xuICAgICAgQWRkVHJ1bmtBY3Rpb25zLmludmFsaWRCb2R5KCk7XG4gICAgfVxuXG4gICAgaWYgKHRpdGxlICYmIGJvZHkpIHtcbiAgICAgIEFkZFRydW5rQWN0aW9ucy5hZGRUcnVuayh0aXRsZSwgYm9keSk7XG4gICAgfVxuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIHZhciBjc3MgPSBcIlwiO1xuICAgIHRoaXMuc2V0U3RhdGUoe1widG9nZ2xlQmFja2dyb3VuZENvdmVyXCI6Y3NzfSk7XG4gIH1cblxuICBvbkZvY3VzKCkge1xuICAgIHZhciBjc3MgPSBcInNob3dcIjtcbiAgICB0aGlzLnNldFN0YXRlKHtcInRvZ2dsZUJhY2tncm91bmRDb3ZlclwiOmNzc30pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2JhY2tncm91bmQtY292ZXIgJyArIHRoaXMuc3RhdGUudG9nZ2xlQmFja2dyb3VuZENvdmVyfSBvbkNsaWNrPXt0aGlzLm9uQ2xpY2suYmluZCh0aGlzKX0+PC9kaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfSBvbkZvY3VzPXt0aGlzLm9uRm9jdXMuYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdhZGQtYnJhbmNoLWZvcm0nPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J2NsZWFyLWJ0biAnICsgdGhpcy5zdGF0ZS50b2dnbGVCYWNrZ3JvdW5kQ292ZXJ9IG9uQ2xpY2s9e3RoaXMub25DbGljay5iaW5kKHRoaXMpfT5YPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm5hbWVWYWxpZGF0aW9uU3RhdGV9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdoZWxwLWJsb2NrJz57dGhpcy5zdGF0ZS5oZWxwQmxvY2t9PC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSd0aXRsZScgY2xhc3NOYW1lPSd0aXRsZS1pbnB1dCcgcmVmPSd0aXRsZVRleHRGaWVsZCcgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e0FkZFRydW5rQWN0aW9ucy51cGRhdGVUaXRsZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5ib2R5VmFsaWRhdGlvblN0YXRlfT5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17dGhpcy5zdGF0ZS5ib2R5fSBwbGFjZWhvbGRlcj0nd3JpdGUgYW55dGhpbmcuJyBjbGFzc05hbWU9J2JvZHktaW5wdXQnIG9uQ2hhbmdlPXtBZGRUcnVua0FjdGlvbnMudXBkYXRlQm9keX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnRuLWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdzdWJtaXQtYnRuJz5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPiBcbiAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkVHJ1bms7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXIgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fSAvPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQnJhbmNoU2hvd1N0b3JlIGZyb20gJy4uL3N0b3Jlcy9CcmFuY2hTaG93U3RvcmUnO1xuaW1wb3J0IEJyYW5jaFNob3dBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvQnJhbmNoU2hvd0FjdGlvbnMnO1xuaW1wb3J0IEFkZEJyYW5jaCBmcm9tICcuL0FkZEJyYW5jaCc7XG5cbmNsYXNzIFRydW5rU2hvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSBCcmFuY2hTaG93U3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQnJhbmNoU2hvd1N0b3JlLmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcbiAgICBCcmFuY2hTaG93QWN0aW9ucy5nZXRCcmFuY2hTaG93KHRoaXMucHJvcHMucGFyYW1zLmlkKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIEJyYW5jaFNob3dTdG9yZS51bmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgfVxuXG4gIG9uQ2hhbmdlKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIEJyYW5jaFNob3dBY3Rpb25zLmdldEJyYW5jaFNob3cobmV4dFByb3BzLnBhcmFtcy5pZCk7XG4gIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj48c3Ryb25nPnt0aGlzLnN0YXRlLnRpdGxlfTwvc3Ryb25nPjwvaDI+XG4gICAgICAgIDxoND57dGhpcy5zdGF0ZS5ib2R5fTwvaDQ+XG4gICAgICAgIDxBZGRCcmFuY2ggcHJvcHM9e3RoaXMucHJvcHN9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5CcmFuY2hlczwvaDI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5icmFuY2hlcy5tYXAoKGJyYW5jaCwgaW5kZXgpICA9PiAge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXticmFuY2guX2lkfSA+ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9zdC1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSd0aXRsZSc+e2JyYW5jaC50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keSc+e2JyYW5jaC5ib2R5fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9icmFuY2hlcy8nICsgYnJhbmNoLl9pZH0gY2xhc3NOYW1lPSdicmFuY2hlcy1saW5rJz5TZWUgYnJhbmNoZXM8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRydW5rU2hvdzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhvbWVTdG9yZSBmcm9tICcuLi9zdG9yZXMvSG9tZVN0b3JlJ1xuaW1wb3J0IFRydW5rIGZyb20gJy4vVHJ1bmsnO1xuaW1wb3J0IEFkZFRydW5rIGZyb20gJy4vQWRkVHJ1bmsnO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IEhvbWVTdG9yZS5nZXRTdGF0ZSgpO1xuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkNoYW5nZShzdGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgb25DbGljaygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93QWRkQnJhbmNoID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRCcmFuY2g6IHRydWUgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNob3dBZGRCcmFuY2ggPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWRkQnJhbmNoOiBmYWxzZX0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QWRkVHJ1bmsgLz5cbiAgICAgICAgPFRydW5rIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBOYXZiYXJTdG9yZSBmcm9tICcuLi9zdG9yZXMvTmF2YmFyU3RvcmUnO1xuaW1wb3J0IE5hdmJhckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9OYXZiYXJBY3Rpb25zJztcblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IE5hdmJhclN0b3JlLmdldFN0YXRlKCk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIE5hdmJhclN0b3JlLmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcbiAgICBOYXZiYXJBY3Rpb25zLmdldENoYXJhY3RlckNvdW50KCk7XG5cbiAgICBsZXQgc29ja2V0ID0gaW8uY29ubmVjdCgpO1xuXG4gICAgc29ja2V0Lm9uKCdvbmxpbmVVc2VycycsIChkYXRhKSA9PiB7XG4gICAgICBOYXZiYXJBY3Rpb25zLnVwZGF0ZU9ubGluZVVzZXJzKGRhdGEpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkuYWpheFN0YXJ0KCgpID0+IHtcbiAgICAgIE5hdmJhckFjdGlvbnMudXBkYXRlQWpheEFuaW1hdGlvbignZmFkZUluJyk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5hamF4Q29tcGxldGUoKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIE5hdmJhckFjdGlvbnMudXBkYXRlQWpheEFuaW1hdGlvbignZmFkZU91dCcpO1xuICAgICAgfSwgNzUwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIE5hdmJhclN0b3JlLnVubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuICB9XG5cbiAgb25DaGFuZ2Uoc3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgc2VhcmNoUXVlcnkgPSB0aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5LnRyaW0oKTtcblxuICAgIGlmIChzZWFyY2hRdWVyeSkge1xuICAgICAgTmF2YmFyQWN0aW9ucy5maW5kQ2hhcmFjdGVyKHtcbiAgICAgICAgc2VhcmNoUXVlcnk6IHNlYXJjaFF1ZXJ5LFxuICAgICAgICBzZWFyY2hGb3JtOiB0aGlzLnJlZnMuc2VhcmNoRm9ybSxcbiAgICAgICAgaGlzdG9yeTogdGhpcy5wcm9wcy5oaXN0b3J5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbjxuYXYgY2xhc3NOYW1lPSduYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLXN0YXRpYy10b3AnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWhlYWRlcic+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nbmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWQnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9JyNuYXZiYXInPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8TGluayB0bz0nLycgY2xhc3NOYW1lPSduYXZiYXItYnJhbmQnPlxuICAgICAgICAgICAgPHNwYW4gcmVmPSd0cmlhbmdsZXMnIGNsYXNzTmFtZT17J3RyaWFuZ2xlcyBhbmltYXRlZCAnICsgdGhpcy5zdGF0ZS5hamF4QW5pbWF0aW9uQ2xhc3N9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJpIGludmVydCc+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmkgaW52ZXJ0Jz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSc+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmkgaW52ZXJ0Jz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSBpbnZlcnQnPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJpJz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSBpbnZlcnQnPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJpJz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSBpbnZlcnQnPjwvZGl2PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgU1RFTVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdiYWRnZSBiYWRnZS11cCBiYWRnZS1kYW5nZXInPnt0aGlzLnN0YXRlLm9ubGluZVVzZXJzfTwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBUcnVua1N0b3JlIGZyb20gJy4uL3N0b3Jlcy9UcnVua1N0b3JlJ1xuaW1wb3J0IFRydW5rQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL1RydW5rQWN0aW9ucyc7XG5pbXBvcnQge2ZpcnN0LCB3aXRob3V0LCBmaW5kV2hlcmV9IGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5jbGFzcyBUcnVuayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IFRydW5rU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgVHJ1bmtTdG9yZS5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gICAgVHJ1bmtBY3Rpb25zLmdldFRydW5rcygpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgVHJ1bmtTdG9yZS51bmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVDbGljayh0cnVuaykge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+VHJ1bmtzPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7IHRoaXMuc3RhdGUudHJ1bmtzLm1hcCgodHJ1bmssIGluZGV4KSAgPT4gIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXt0cnVuay5faWR9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9zdC1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+e3RydW5rLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj57dHJ1bmsuYm9keX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnL3RydW5rcy8nICsgdHJ1bmsuX2lkfSBjbGFzc05hbWU9XCJicmFuY2hlcy1saW5rXCI+U2VlIGJyYW5jaGVzPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F2YXRhcic+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnJhbmNoZXMnPng8c3BhbiBjbGFzc05hbWU9J2JhZGdlJz4xNTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGFycyc+JiM5NzMzOzxzcGFuIGNsYXNzTmFtZT0nYmFkZ2UnPjEwPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IFxufVxuXG5leHBvcnQgZGVmYXVsdCBUcnVuazsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRydW5rU2hvdyBmcm9tICcuL1RydW5rU2hvdy5qcyc7XG5pbXBvcnQgQWRkQnJhbmNoIGZyb20gJy4vQWRkQnJhbmNoLmpzJztcblxuY2xhc3MgVHJ1bmtDb21wbGV0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFRydW5rU2hvdyBwcm9wcz17dGhpcy5wcm9wc30gLz5cbiAgICAgICAgPEFkZEJyYW5jaCBwcm9wcz17dGhpcy5wcm9wc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJ1bmtDb21wbGV0ZTtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBUcnVua1Nob3dTdG9yZSBmcm9tICcuLi9zdG9yZXMvVHJ1bmtTaG93U3RvcmUnO1xuaW1wb3J0IFRydW5rU2hvd0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9UcnVua1Nob3dBY3Rpb25zJ1xuaW1wb3J0IEFkZEJyYW5jaCBmcm9tICcuL0FkZEJyYW5jaCc7XG5cbmNsYXNzIFRydW5rU2hvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSBUcnVua1Nob3dTdG9yZS5nZXRTdGF0ZSgpO1xuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBUcnVua1Nob3dTdG9yZS5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gICAgVHJ1bmtTaG93QWN0aW9ucy5nZXRUcnVua1Nob3codGhpcy5wcm9wcy5wYXJhbXMuaWQpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgVHJ1bmtTaG93U3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gIH1cblxuICBvbkNoYW5nZShzdGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgb25DbGljaygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93QWRkQnJhbmNoID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRCcmFuY2g6IHRydWUgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNob3dBZGRCcmFuY2ggPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWRkQnJhbmNoOiBmYWxzZX0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9zdC1jb250YWluZXInPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RpdGxlJz57dGhpcy5zdGF0ZS50aXRsZX08L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5Jz57dGhpcy5zdGF0ZS5ib2R5fTwvZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkNsaWNrLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImFkZC1icmFuY2gtdG9nZ2xlXCI+QWRkIEJyYW5jaDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLnNob3dBZGRCcmFuY2ggPyA8QWRkQnJhbmNoIHByb3BzPXt0aGlzLnByb3BzfSAvPiA6IG51bGwgfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5CcmFuY2hlczwvaDI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5icmFuY2hlcy5tYXAoKGJyYW5jaCwgaW5kZXgpICA9PiAge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXticmFuY2guX2lkfSA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9zdC1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e2JyYW5jaC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keSc+e2JyYW5jaC5ib2R5fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9icmFuY2hlcy8nICsgYnJhbmNoLl9pZH0gY2xhc3NOYW1lPSdicmFuY2hlcy1saW5rJz5TZWUgYnJhbmNoZXM8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRydW5rU2hvdzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY3JlYXRlQnJvd3Nlckhpc3RvcnkgZnJvbSAnaGlzdG9yeS9saWIvY3JlYXRlQnJvd3Nlckhpc3RvcnknO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5cbmxldCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcblxuUmVhY3RET00ucmVuZGVyKDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+e3JvdXRlc308L1JvdXRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Um91dGV9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuaW1wb3J0IEFkZFRydW5rIGZyb20gJy4vY29tcG9uZW50cy9BZGRUcnVuayc7XG5pbXBvcnQgVHJ1bmtTaG93IGZyb20gJy4vY29tcG9uZW50cy9UcnVua1Nob3cnO1xuaW1wb3J0IFRydW5rQ29tcGxldGUgZnJvbSAnLi9jb21wb25lbnRzL1RydW5rQ29tcGxldGUnO1xuaW1wb3J0IEJyYW5jaFNob3cgZnJvbSAnLi9jb21wb25lbnRzL0JyYW5jaFNob3cnO1xuXG5leHBvcnQgZGVmYXVsdCAoXG4gIDxSb3V0ZSBjb21wb25lbnQ9e0FwcH0+XG4gICAgPFJvdXRlIHBhdGg9Jy8nIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICA8Um91dGUgcGF0aD0nL3RydW5rcy86aWQnIGNvbXBvbmVudD17VHJ1bmtTaG93fSAvPlxuICAgIDxSb3V0ZSBwYXRoPScvYnJhbmNoZXMvOmlkJyBjb21wb25lbnQ9e0JyYW5jaFNob3d9IC8+XG4gIDwvUm91dGU+XG4pOyIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcbmltcG9ydCBBZGRCcmFuY2hBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvQWRkQnJhbmNoQWN0aW9ucyc7XG5cbmNsYXNzIEFkZEJyYW5jaFN0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iaW5kQWN0aW9ucyhBZGRCcmFuY2hBY3Rpb25zKTtcbiAgICB0aGlzLnBhcmVudCA9ICcnO1xuICAgIHRoaXMudGl0bGUgPSAnJztcbiAgICB0aGlzLmJvZHkgPSAnJztcbiAgICB0aGlzLmhlbHBCbG9jayA9ICcnO1xuICAgIHRoaXMudGl0bGVWYWxpZGF0aW9uU3RhdGUgPSAnJztcbiAgICB0aGlzLmJvZHlWYWxpZGF0aW9uU3RhdGUgPSAnJztcbiAgfVxuICBvbkFkZEJyYW5jaFN1Y2Nlc3Moc3VjY2Vzc01lc3NhZ2UpIHtcbiAgICB0aGlzLnRpdGxlVmFsaWRhdGlvblN0YXRlID0gJ2hhcy1zdWNjZXNzJztcbiAgICB0aGlzLmhlbHBCbG9jayA9IHN1Y2Nlc3NNZXNzYWdlO1xuICB9XG5cbiAgb25BZGRCcmFuY2hGYWlsKGVycm9yTWVzc2FnZSkge1xuICAgIHRoaXMudGl0bGVWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLWVycm9yJztcbiAgICB0aGlzLmhlbHBCbG9jayA9IGVycm9yTWVzc2FnZTtcbiAgfVxuXG4gIG9uVXBkYXRlUGFyZW50KGV2ZW50KSB7XG4gICAgdGhpcy5wYXJlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIH1cblxuICBvblVwZGF0ZVRpdGxlKGV2ZW50KSB7XG4gICAgdGhpcy50aXRsZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnRpdGxlVmFsaWRhdGlvblN0YXRlID0gJyc7XG4gICAgdGhpcy5oZWxwQmxvY2sgPSAnJztcbiAgfVxuXG4gIG9uVXBkYXRlQm9keShldmVudCkge1xuICAgIHRoaXMuYm9keSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLmJvZHlWYWxpZGF0aW9uU3RhdGUgPSAnJztcbiAgfVxuXG4gIG9uSW52YWxpZFRpdGxlKCkge1xuICAgIHRoaXMudGl0bGVWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLWVycm9yJztcbiAgICB0aGlzLmhlbHBCbG9jayA9ICdQbGVhc2UgZW50ZXIgYSB0aXRsZS4nO1xuICB9XG5cbiAgb25JbnZhbGlkQm9keSgpIHtcbiAgICB0aGlzLmJvZHlWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLWVycm9yJztcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVTdG9yZShBZGRCcmFuY2hTdG9yZSk7XG4iLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5pbXBvcnQgQWRkVHJ1bmtBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvQWRkVHJ1bmtBY3Rpb25zJztcblxuY2xhc3MgQWRkVHJ1bmtTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmluZEFjdGlvbnMoQWRkVHJ1bmtBY3Rpb25zKTtcbiAgICB0aGlzLnRpdGxlID0gJyc7XG4gICAgdGhpcy5ib2R5ID0gJyc7XG4gICAgdGhpcy5oZWxwQmxvY2sgPSAnJztcbiAgICB0aGlzLnRpdGxlVmFsaWRhdGlvblN0YXRlID0gJyc7XG4gICAgdGhpcy5ib2R5VmFsaWRhdGlvblN0YXRlID0gJyc7XG4gICAgdGhpcy50b2dnbGVCYWNrZ3JvdW5kQ292ZXIgPSAnc2hvdyc7XG4gIH1cblxuICBvbkFkZFRydW5rU3VjY2VzcyhzdWNjZXNzTWVzc2FnZSkge1xuICAgIHRoaXMudGl0bGVWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLXN1Y2Nlc3MnO1xuICAgIHRoaXMuaGVscEJsb2NrID0gc3VjY2Vzc01lc3NhZ2U7XG4gIH1cblxuICBvbkFkZFRydW5rRmFpbChlcnJvck1lc3NhZ2UpIHtcbiAgICB0aGlzLnRpdGxlVmFsaWRhdGlvblN0YXRlID0gJ2hhcy1lcnJvcic7XG4gICAgdGhpcy5oZWxwQmxvY2sgPSBlcnJvck1lc3NhZ2U7XG4gIH1cblxuICBvblVwZGF0ZVRpdGxlKGV2ZW50KSB7XG4gICAgdGhpcy50aXRsZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnRpdGxlVmFsaWRhdGlvblN0YXRlID0gJyc7XG4gICAgdGhpcy5oZWxwQmxvY2sgPSAnJztcbiAgfVxuXG4gIG9uVXBkYXRlQm9keShldmVudCkge1xuICAgIHRoaXMuYm9keSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLmJvZHlWYWxpZGF0aW9uU3RhdGUgPSAnJztcbiAgfVxuXG4gIG9uSW52YWxpZFRpdGxlKCkge1xuICAgIHRoaXMudGl0bGVWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLWVycm9yJztcbiAgICB0aGlzLmhlbHBCbG9jayA9ICdQbGVhc2UgZW50ZXIgYSB0aXRsZS4nO1xuICB9XG5cbiAgb25JbnZhbGlkQm9keSgpIHtcbiAgICB0aGlzLmJvZHlWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLWVycm9yJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlU3RvcmUoQWRkVHJ1bmtTdG9yZSk7IiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuaW1wb3J0IEJyYW5jaFNob3dBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvQnJhbmNoU2hvd0FjdGlvbnMnO1xuXG5jbGFzcyBCcmFuY2hTaG93U3RvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJpbmRBY3Rpb25zKEJyYW5jaFNob3dBY3Rpb25zKTtcbiAgICB0aGlzLnBhcmVudF9pZCA9ICcnO1xuICAgIHRoaXMuYnJhbmNoSWQgPSAwO1xuICAgIHRoaXMudGl0bGUgPSAnVEJEJztcbiAgICB0aGlzLmJvZHkgPSAnVEJEJztcbiAgICB0aGlzLmJyYW5jaGVzID0gW107XG4gIH1cblxuICBvbkdldEJyYW5jaFNob3dTdWNjZXNzKGRhdGEpIHtcbiAgICB0aGlzLnBhcmVudF9pZCA9IGRhdGFbMF0ucGFyZW50X2lkO1xuICAgIHRoaXMudGl0bGUgPSBkYXRhWzBdLnRpdGxlO1xuICAgIHRoaXMuYm9keSA9IGRhdGFbMF0uYm9keTtcbiAgICB0aGlzLmJyYW5jaGVzID0gZGF0YVsxXTtcbiAgfVxuXG4gIG9uR2V0QnJhbmNoU2hvd0ZhaWwoanFYaHIpIHtcbiAgICB0b2FzdHIuZXJyb3IoanFYaHIucmVzcG9uc2VKU09OLm1lc3NhZ2UpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZVN0b3JlKEJyYW5jaFNob3dTdG9yZSk7IiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuaW1wb3J0IEhvbWVBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvSG9tZUFjdGlvbnMnO1xuXG5jbGFzcyBUcnVua1N0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iaW5kQWN0aW9ucyhIb21lQWN0aW9ucyk7XG4gICAgdGhpcy5zaG93QWRkQnJhbmNoID0gZmFsc2U7XG4gIH1cblxuICBvbkdldFRydW5rc1N1Y2Nlc3MoZGF0YSkge1xuICAgIHRoaXMudHJ1bmtzID0gZGF0YTtcbiAgfVxuXG4gIG9uR2V0VHJ1bmtzRmFpbChlcnJvck1lc3NhZ2UpIHtcbiAgICB0b2FzdHIuZXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVTdG9yZShUcnVua1N0b3JlKTtcbiIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcbmltcG9ydCBOYXZiYXJBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvTmF2YmFyQWN0aW9ucyc7XG5cbmNsYXNzIE5hdmJhclN0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iaW5kQWN0aW9ucyhOYXZiYXJBY3Rpb25zKTtcbiAgICB0aGlzLnRvdGFsQ2hhcmFjdGVycyA9IDA7XG4gICAgdGhpcy5vbmxpbmVVc2VycyA9IDA7XG4gICAgdGhpcy5zZWFyY2hRdWVyeSA9ICcnO1xuICAgIHRoaXMuYWpheEFuaW1hdGlvbkNsYXNzID0gJyc7XG4gIH1cblxuICBvbkZpbmRDaGFyYWN0ZXJTdWNjZXNzKHBheWxvYWQpIHtcbiAgICBwYXlsb2FkLmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcvY2hhcmFjdGVycy8nICsgcGF5bG9hZC5jaGFyYWN0ZXJJZCk7XG4gIH1cblxuICBvbkZpbmRDaGFyYWN0ZXJGYWlsKHBheWxvYWQpIHtcbiAgICBwYXlsb2FkLnNlYXJjaEZvcm0uY2xhc3NMaXN0LmFkZCgnc2hha2UnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHBheWxvYWQuc2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdzaGFrZScpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgb25VcGRhdGVPbmxpbmVVc2VycyhkYXRhKSB7XG4gICAgdGhpcy5vbmxpbmVVc2VycyA9IGRhdGEub25saW5lVXNlcnM7XG4gIH1cblxuICBvblVwZGF0ZUFqYXhBbmltYXRpb24oY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5hamF4QW5pbWF0aW9uQ2xhc3MgPSBjbGFzc05hbWU7IC8vZmFkZWluIG9yIGZhZGVvdXRcbiAgfVxuXG4gIG9uVXBkYXRlU2VhcmNoUXVlcnkoZXZlbnQpIHtcbiAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgb25HZXRDaGFyYWN0ZXJDb3VudFN1Y2Nlc3MoZGF0YSkge1xuICAgIHRoaXMudG90YWxDaGFyYWN0ZXJzID0gZGF0YS5jb3VudDtcbiAgfVxuXG4gIG9uR2V0Q2hhcmFjdGVyQ291bnRGYWlsKGpxWGhyKSB7XG4gICAgdG9hc3RyLmVycm9yKGpxWGhyLnJlc3BvbnNlSlNPTi5tZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlU3RvcmUoTmF2YmFyU3RvcmUpOyIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcbmltcG9ydCBUcnVua1Nob3dBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvVHJ1bmtTaG93QWN0aW9ucyc7XG5cbmNsYXNzIFRydW5rU2hvd1N0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iaW5kQWN0aW9ucyhUcnVua1Nob3dBY3Rpb25zKTtcbiAgICB0aGlzLnRydW5rSWQgPSAwO1xuICAgIHRoaXMudGl0bGUgPSAnVEJEJztcbiAgICB0aGlzLmJvZHkgPSAnVEJEJztcbiAgICB0aGlzLnNob3dBZGRCcmFuY2ggPSBmYWxzZTtcbiAgICB0aGlzLmJyYW5jaGVzID0gW107XG4gIH1cblxuICBvbkdldFRydW5rU2hvd1N1Y2Nlc3MoZGF0YSkge1xuICAgIHRoaXMudGl0bGUgPSBkYXRhWzBdLnRpdGxlO1xuICAgIHRoaXMuYm9keSA9IGRhdGFbMF0uYm9keTtcbiAgICB0aGlzLmJyYW5jaGVzID0gZGF0YVsxXTtcbiAgfVxuXG4gIG9uR2V0VHJ1bmtTaG93RmFpbChqcVhocikge1xuICAgIHRvYXN0ci5lcnJvcihqcVhoci5yZXNwb25zZUpTT04ubWVzc2FnZSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlU3RvcmUoVHJ1bmtTaG93U3RvcmUpOyIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcbmltcG9ydCBUcnVua0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9UcnVua0FjdGlvbnMnO1xuXG5jbGFzcyBUcnVua1N0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iaW5kQWN0aW9ucyhUcnVua0FjdGlvbnMpO1xuICAgIHRoaXMudHJ1bmtzID0gW107XG4gIH1cblxuICBvbkdldFRydW5rc1N1Y2Nlc3MoZGF0YSkge1xuICAgIHRoaXMudHJ1bmtzID0gZGF0YTtcbiAgfVxuXG4gIG9uR2V0VHJ1bmtzRmFpbChlcnJvck1lc3NhZ2UpIHtcbiAgICB0b2FzdHIuZXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVTdG9yZShUcnVua1N0b3JlKTtcbiIsInZhciBwU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4vbGliL2tleXMuanMnKTtcbnZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vbGliL2lzX2FyZ3VtZW50cy5qcycpO1xuXG52YXIgZGVlcEVxdWFsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYWN0dWFsLCBleHBlY3RlZCwgb3B0cykge1xuICBpZiAoIW9wdHMpIG9wdHMgPSB7fTtcbiAgLy8gNy4xLiBBbGwgaWRlbnRpY2FsIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG5cbiAgfSBlbHNlIGlmIChhY3R1YWwgaW5zdGFuY2VvZiBEYXRlICYmIGV4cGVjdGVkIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBhY3R1YWwuZ2V0VGltZSgpID09PSBleHBlY3RlZC5nZXRUaW1lKCk7XG5cbiAgLy8gNy4zLiBPdGhlciBwYWlycyB0aGF0IGRvIG5vdCBib3RoIHBhc3MgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnLFxuICAvLyBlcXVpdmFsZW5jZSBpcyBkZXRlcm1pbmVkIGJ5ID09LlxuICB9IGVsc2UgaWYgKCFhY3R1YWwgfHwgIWV4cGVjdGVkIHx8IHR5cGVvZiBhY3R1YWwgIT0gJ29iamVjdCcgJiYgdHlwZW9mIGV4cGVjdGVkICE9ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9wdHMuc3RyaWN0ID8gYWN0dWFsID09PSBleHBlY3RlZCA6IGFjdHVhbCA9PSBleHBlY3RlZDtcblxuICAvLyA3LjQuIEZvciBhbGwgb3RoZXIgT2JqZWN0IHBhaXJzLCBpbmNsdWRpbmcgQXJyYXkgb2JqZWN0cywgZXF1aXZhbGVuY2UgaXNcbiAgLy8gZGV0ZXJtaW5lZCBieSBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGFzIHZlcmlmaWVkXG4gIC8vIHdpdGggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKSwgdGhlIHNhbWUgc2V0IG9mIGtleXNcbiAgLy8gKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksIGVxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeVxuICAvLyBjb3JyZXNwb25kaW5nIGtleSwgYW5kIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS4gTm90ZTogdGhpc1xuICAvLyBhY2NvdW50cyBmb3IgYm90aCBuYW1lZCBhbmQgaW5kZXhlZCBwcm9wZXJ0aWVzIG9uIEFycmF5cy5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqRXF1aXYoYWN0dWFsLCBleHBlY3RlZCwgb3B0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWRPck51bGwodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyICh4KSB7XG4gIGlmICgheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHgubGVuZ3RoICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIHguY29weSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeC5zbGljZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoeC5sZW5ndGggPiAwICYmIHR5cGVvZiB4WzBdICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gb2JqRXF1aXYoYSwgYiwgb3B0cykge1xuICB2YXIgaSwga2V5O1xuICBpZiAoaXNVbmRlZmluZWRPck51bGwoYSkgfHwgaXNVbmRlZmluZWRPck51bGwoYikpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvLyBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuXG4gIGlmIChhLnByb3RvdHlwZSAhPT0gYi5wcm90b3R5cGUpIHJldHVybiBmYWxzZTtcbiAgLy9+fn5JJ3ZlIG1hbmFnZWQgdG8gYnJlYWsgT2JqZWN0LmtleXMgdGhyb3VnaCBzY3Jld3kgYXJndW1lbnRzIHBhc3NpbmcuXG4gIC8vICAgQ29udmVydGluZyB0byBhcnJheSBzb2x2ZXMgdGhlIHByb2JsZW0uXG4gIGlmIChpc0FyZ3VtZW50cyhhKSkge1xuICAgIGlmICghaXNBcmd1bWVudHMoYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYSA9IHBTbGljZS5jYWxsKGEpO1xuICAgIGIgPSBwU2xpY2UuY2FsbChiKTtcbiAgICByZXR1cm4gZGVlcEVxdWFsKGEsIGIsIG9wdHMpO1xuICB9XG4gIGlmIChpc0J1ZmZlcihhKSkge1xuICAgIGlmICghaXNCdWZmZXIoYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB0cnkge1xuICAgIHZhciBrYSA9IG9iamVjdEtleXMoYSksXG4gICAgICAgIGtiID0gb2JqZWN0S2V5cyhiKTtcbiAgfSBjYXRjaCAoZSkgey8vaGFwcGVucyB3aGVuIG9uZSBpcyBhIHN0cmluZyBsaXRlcmFsIGFuZCB0aGUgb3RoZXIgaXNuJ3RcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChrZXlzIGluY29ycG9yYXRlc1xuICAvLyBoYXNPd25Qcm9wZXJ0eSlcbiAgaWYgKGthLmxlbmd0aCAhPSBrYi5sZW5ndGgpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvL3RoZSBzYW1lIHNldCBvZiBrZXlzIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLFxuICBrYS5zb3J0KCk7XG4gIGtiLnNvcnQoKTtcbiAgLy9+fn5jaGVhcCBrZXkgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChrYVtpXSAhPSBrYltpXSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL2VxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeSBjb3JyZXNwb25kaW5nIGtleSwgYW5kXG4gIC8vfn5+cG9zc2libHkgZXhwZW5zaXZlIGRlZXAgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGtleSA9IGthW2ldO1xuICAgIGlmICghZGVlcEVxdWFsKGFba2V5XSwgYltrZXldLCBvcHRzKSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0eXBlb2YgYSA9PT0gdHlwZW9mIGI7XG59XG4iLCJ2YXIgc3VwcG9ydHNBcmd1bWVudHNDbGFzcyA9IChmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50cylcbn0pKCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRzQXJndW1lbnRzQ2xhc3MgPyBzdXBwb3J0ZWQgOiB1bnN1cHBvcnRlZDtcblxuZXhwb3J0cy5zdXBwb3J0ZWQgPSBzdXBwb3J0ZWQ7XG5mdW5jdGlvbiBzdXBwb3J0ZWQob2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcbn07XG5cbmV4cG9ydHMudW5zdXBwb3J0ZWQgPSB1bnN1cHBvcnRlZDtcbmZ1bmN0aW9uIHVuc3VwcG9ydGVkKG9iamVjdCl7XG4gIHJldHVybiBvYmplY3QgJiZcbiAgICB0eXBlb2Ygb2JqZWN0ID09ICdvYmplY3QnICYmXG4gICAgdHlwZW9mIG9iamVjdC5sZW5ndGggPT0gJ251bWJlcicgJiZcbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnY2FsbGVlJykgJiZcbiAgICAhT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgJ2NhbGxlZScpIHx8XG4gICAgZmFsc2U7XG59O1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nXG4gID8gT2JqZWN0LmtleXMgOiBzaGltO1xuXG5leHBvcnRzLnNoaW0gPSBzaGltO1xuZnVuY3Rpb24gc2hpbSAob2JqKSB7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIGtleXMucHVzaChrZXkpO1xuICByZXR1cm4ga2V5cztcbn1cbiIsIi8qKlxuICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IGEgY2FsbCB0byBoaXN0b3J5LnB1c2guXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBQVVNIID0gJ1BVU0gnO1xuXG5leHBvcnRzLlBVU0ggPSBQVVNIO1xuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgYSBjYWxsIHRvIGhpc3RvcnkucmVwbGFjZS5cbiAqL1xudmFyIFJFUExBQ0UgPSAnUkVQTEFDRSc7XG5cbmV4cG9ydHMuUkVQTEFDRSA9IFJFUExBQ0U7XG4vKipcbiAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBzb21lIG90aGVyIGFjdGlvbiBzdWNoXG4gKiBhcyB1c2luZyBhIGJyb3dzZXIncyBiYWNrL2ZvcndhcmQgYnV0dG9ucyBhbmQvb3IgbWFudWFsbHkgbWFuaXB1bGF0aW5nXG4gKiB0aGUgVVJMIGluIGEgYnJvd3NlcidzIGxvY2F0aW9uIGJhci4gVGhpcyBpcyB0aGUgZGVmYXVsdC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0V2ZW50SGFuZGxlcnMvb25wb3BzdGF0ZVxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKi9cbnZhciBQT1AgPSAnUE9QJztcblxuZXhwb3J0cy5QT1AgPSBQT1A7XG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIFBVU0g6IFBVU0gsXG4gIFJFUExBQ0U6IFJFUExBQ0UsXG4gIFBPUDogUE9QXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5sb29wQXN5bmMgPSBsb29wQXN5bmM7XG5cbmZ1bmN0aW9uIGxvb3BBc3luYyh0dXJucywgd29yaywgY2FsbGJhY2spIHtcbiAgdmFyIGN1cnJlbnRUdXJuID0gMDtcbiAgdmFyIGlzRG9uZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgaXNEb25lID0gdHJ1ZTtcbiAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpZiAoaXNEb25lKSByZXR1cm47XG5cbiAgICBpZiAoY3VycmVudFR1cm4gPCB0dXJucykge1xuICAgICAgd29yay5jYWxsKHRoaXMsIGN1cnJlbnRUdXJuKyssIG5leHQsIGRvbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpO1xufSIsIi8qZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2F2ZVN0YXRlID0gc2F2ZVN0YXRlO1xuZXhwb3J0cy5yZWFkU3RhdGUgPSByZWFkU3RhdGU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBLZXlQcmVmaXggPSAnQEBIaXN0b3J5Lyc7XG52YXIgUXVvdGFFeGNlZWRlZEVycm9yID0gJ1F1b3RhRXhjZWVkZWRFcnJvcic7XG52YXIgU2VjdXJpdHlFcnJvciA9ICdTZWN1cml0eUVycm9yJztcblxuZnVuY3Rpb24gY3JlYXRlS2V5KGtleSkge1xuICByZXR1cm4gS2V5UHJlZml4ICsga2V5O1xufVxuXG5mdW5jdGlvbiBzYXZlU3RhdGUoa2V5LCBzdGF0ZSkge1xuICB0cnkge1xuICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGNyZWF0ZUtleShrZXkpLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5uYW1lID09PSBTZWN1cml0eUVycm9yKSB7XG4gICAgICAvLyBCbG9ja2luZyBjb29raWVzIGluIENocm9tZS9GaXJlZm94L1NhZmFyaSB0aHJvd3MgU2VjdXJpdHlFcnJvciBvbiBhbnlcbiAgICAgIC8vIGF0dGVtcHQgdG8gYWNjZXNzIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1toaXN0b3J5XSBVbmFibGUgdG8gc2F2ZSBzdGF0ZTsgc2Vzc2lvblN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBkdWUgdG8gc2VjdXJpdHkgc2V0dGluZ3MnKSA6IHVuZGVmaW5lZDtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlcnJvci5uYW1lID09PSBRdW90YUV4Y2VlZGVkRXJyb3IgJiYgd2luZG93LnNlc3Npb25TdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gU2FmYXJpIFwicHJpdmF0ZSBtb2RlXCIgdGhyb3dzIFF1b3RhRXhjZWVkZWRFcnJvci5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1toaXN0b3J5XSBVbmFibGUgdG8gc2F2ZSBzdGF0ZTsgc2Vzc2lvblN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBpbiBTYWZhcmkgcHJpdmF0ZSBtb2RlJykgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWFkU3RhdGUoa2V5KSB7XG4gIHZhciBqc29uID0gdW5kZWZpbmVkO1xuICB0cnkge1xuICAgIGpzb24gPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShjcmVhdGVLZXkoa2V5KSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLm5hbWUgPT09IFNlY3VyaXR5RXJyb3IpIHtcbiAgICAgIC8vIEJsb2NraW5nIGNvb2tpZXMgaW4gQ2hyb21lL0ZpcmVmb3gvU2FmYXJpIHRocm93cyBTZWN1cml0eUVycm9yIG9uIGFueVxuICAgICAgLy8gYXR0ZW1wdCB0byBhY2Nlc3Mgd2luZG93LnNlc3Npb25TdG9yYWdlLlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnW2hpc3RvcnldIFVuYWJsZSB0byByZWFkIHN0YXRlOyBzZXNzaW9uU3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlIGR1ZSB0byBzZWN1cml0eSBzZXR0aW5ncycpIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBpZiAoanNvbikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSWdub3JlIGludmFsaWQgSlNPTi5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyO1xuZXhwb3J0cy5yZW1vdmVFdmVudExpc3RlbmVyID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbmV4cG9ydHMuZ2V0SGFzaFBhdGggPSBnZXRIYXNoUGF0aDtcbmV4cG9ydHMucmVwbGFjZUhhc2hQYXRoID0gcmVwbGFjZUhhc2hQYXRoO1xuZXhwb3J0cy5nZXRXaW5kb3dQYXRoID0gZ2V0V2luZG93UGF0aDtcbmV4cG9ydHMuZ28gPSBnbztcbmV4cG9ydHMuZ2V0VXNlckNvbmZpcm1hdGlvbiA9IGdldFVzZXJDb25maXJtYXRpb247XG5leHBvcnRzLnN1cHBvcnRzSGlzdG9yeSA9IHN1cHBvcnRzSGlzdG9yeTtcbmV4cG9ydHMuc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2ggPSBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaDtcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgaWYgKG5vZGUuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIGlmIChub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRIYXNoUGF0aCgpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGhlcmUgYmVjYXVzZSBpdCdzIG5vdFxuICAvLyBjb25zaXN0ZW50IGFjcm9zcyBicm93c2VycyAtIEZpcmVmb3ggd2lsbCBwcmUtZGVjb2RlIGl0IVxuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVsxXSB8fCAnJztcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUhhc2hQYXRoKHBhdGgpIHtcbiAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArICcjJyArIHBhdGgpO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dQYXRoKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xufVxuXG5mdW5jdGlvbiBnbyhuKSB7XG4gIGlmIChuKSB3aW5kb3cuaGlzdG9yeS5nbyhuKTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlckNvbmZpcm1hdGlvbihtZXNzYWdlLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayh3aW5kb3cuY29uZmlybShtZXNzYWdlKSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpcyBzdXBwb3J0ZWQuIFRha2VuIGZyb20gTW9kZXJuaXpyLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9oaXN0b3J5LmpzXG4gKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yYWNrdC9yZWFjdC1yb3V0ZXIvaXNzdWVzLzU4NlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEZJWE1FOiBXb3JrIGFyb3VuZCBvdXIgYnJvd3NlciBoaXN0b3J5IG5vdCB3b3JraW5nIGNvcnJlY3RseSBvbiBDaHJvbWVcbiAgLy8gaU9TOiBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVhY3Qtcm91dGVyL2lzc3Vlcy8yNTY1XG4gIGlmICh1YS5pbmRleE9mKCdDcmlPUycpICE9PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59XG5cbi8qKlxuICogUmV0dXJucyBmYWxzZSBpZiB1c2luZyBnbyhuKSB3aXRoIGhhc2ggaGlzdG9yeSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCkge1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICByZXR1cm4gdWEuaW5kZXhPZignRmlyZWZveCcpID09PSAtMTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmV4cG9ydHMuY2FuVXNlRE9NID0gY2FuVXNlRE9NOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9FeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxudmFyIF9ET01TdGF0ZVN0b3JhZ2UgPSByZXF1aXJlKCcuL0RPTVN0YXRlU3RvcmFnZScpO1xuXG52YXIgX2NyZWF0ZURPTUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZURPTUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVET01IaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZURPTUhpc3RvcnkpO1xuXG52YXIgX3BhcnNlUGF0aCA9IHJlcXVpcmUoJy4vcGFyc2VQYXRoJyk7XG5cbnZhciBfcGFyc2VQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlUGF0aCk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgdXNlcyBIVE1MNSdzIGhpc3RvcnkgQVBJXG4gKiAocHVzaFN0YXRlLCByZXBsYWNlU3RhdGUsIGFuZCB0aGUgcG9wc3RhdGUgZXZlbnQpIHRvIG1hbmFnZSBoaXN0b3J5LlxuICogVGhpcyBpcyB0aGUgcmVjb21tZW5kZWQgbWV0aG9kIG9mIG1hbmFnaW5nIGhpc3RvcnkgaW4gYnJvd3NlcnMgYmVjYXVzZVxuICogaXQgcHJvdmlkZXMgdGhlIGNsZWFuZXN0IFVSTHMuXG4gKlxuICogTm90ZTogSW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgZnVsbFxuICogcGFnZSByZWxvYWRzIHdpbGwgYmUgdXNlZCB0byBwcmVzZXJ2ZSBVUkxzLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAhX0V4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlLCAnQnJvd3NlciBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICB2YXIgZm9yY2VSZWZyZXNoID0gb3B0aW9ucy5mb3JjZVJlZnJlc2g7XG5cbiAgdmFyIGlzU3VwcG9ydGVkID0gX0RPTVV0aWxzLnN1cHBvcnRzSGlzdG9yeSgpO1xuICB2YXIgdXNlUmVmcmVzaCA9ICFpc1N1cHBvcnRlZCB8fCBmb3JjZVJlZnJlc2g7XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uKGhpc3RvcnlTdGF0ZSkge1xuICAgIGhpc3RvcnlTdGF0ZSA9IGhpc3RvcnlTdGF0ZSB8fCB3aW5kb3cuaGlzdG9yeS5zdGF0ZSB8fCB7fTtcblxuICAgIHZhciBwYXRoID0gX0RPTVV0aWxzLmdldFdpbmRvd1BhdGgoKTtcbiAgICB2YXIgX2hpc3RvcnlTdGF0ZSA9IGhpc3RvcnlTdGF0ZTtcbiAgICB2YXIga2V5ID0gX2hpc3RvcnlTdGF0ZS5rZXk7XG5cbiAgICB2YXIgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGtleSkge1xuICAgICAgc3RhdGUgPSBfRE9NU3RhdGVTdG9yYWdlLnJlYWRTdGF0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZSA9IG51bGw7XG4gICAgICBrZXkgPSBoaXN0b3J5LmNyZWF0ZUtleSgpO1xuXG4gICAgICBpZiAoaXNTdXBwb3J0ZWQpIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShfZXh0ZW5kcyh7fSwgaGlzdG9yeVN0YXRlLCB7IGtleToga2V5IH0pLCBudWxsLCBwYXRoKTtcbiAgICB9XG5cbiAgICB2YXIgbG9jYXRpb24gPSBfcGFyc2VQYXRoMlsnZGVmYXVsdCddKHBhdGgpO1xuXG4gICAgcmV0dXJuIGhpc3RvcnkuY3JlYXRlTG9jYXRpb24oX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7IHN0YXRlOiBzdGF0ZSB9KSwgdW5kZWZpbmVkLCBrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKF9yZWYpIHtcbiAgICB2YXIgdHJhbnNpdGlvblRvID0gX3JlZi50cmFuc2l0aW9uVG87XG5cbiAgICBmdW5jdGlvbiBwb3BTdGF0ZUxpc3RlbmVyKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyBJZ25vcmUgZXh0cmFuZW91cyBwb3BzdGF0ZSBldmVudHMgaW4gV2ViS2l0LlxuXG4gICAgICB0cmFuc2l0aW9uVG8oZ2V0Q3VycmVudExvY2F0aW9uKGV2ZW50LnN0YXRlKSk7XG4gICAgfVxuXG4gICAgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncG9wc3RhdGUnLCBwb3BTdGF0ZUxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdwb3BzdGF0ZScsIHBvcFN0YXRlTGlzdGVuZXIpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBmaW5pc2hUcmFuc2l0aW9uKGxvY2F0aW9uKSB7XG4gICAgdmFyIGJhc2VuYW1lID0gbG9jYXRpb24uYmFzZW5hbWU7XG4gICAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG4gICAgdmFyIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG4gICAgdmFyIGFjdGlvbiA9IGxvY2F0aW9uLmFjdGlvbjtcbiAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5O1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSByZXR1cm47IC8vIE5vdGhpbmcgdG8gZG8uXG5cbiAgICBfRE9NU3RhdGVTdG9yYWdlLnNhdmVTdGF0ZShrZXksIHN0YXRlKTtcblxuICAgIHZhciBwYXRoID0gKGJhc2VuYW1lIHx8ICcnKSArIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaDtcbiAgICB2YXIgaGlzdG9yeVN0YXRlID0ge1xuICAgICAga2V5OiBrZXlcbiAgICB9O1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgaWYgKHVzZVJlZnJlc2gpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRoO1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIFByZXZlbnQgbG9jYXRpb24gdXBkYXRlLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoaGlzdG9yeVN0YXRlLCBudWxsLCBwYXRoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSRVBMQUNFXG4gICAgICBpZiAodXNlUmVmcmVzaCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShwYXRoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBQcmV2ZW50IGxvY2F0aW9uIHVwZGF0ZS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3RvcnlTdGF0ZSwgbnVsbCwgcGF0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgaGlzdG9yeSA9IF9jcmVhdGVET01IaXN0b3J5MlsnZGVmYXVsdCddKF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgZ2V0Q3VycmVudExvY2F0aW9uOiBnZXRDdXJyZW50TG9jYXRpb24sXG4gICAgZmluaXNoVHJhbnNpdGlvbjogZmluaXNoVHJhbnNpdGlvbixcbiAgICBzYXZlU3RhdGU6IF9ET01TdGF0ZVN0b3JhZ2Uuc2F2ZVN0YXRlXG4gIH0pKTtcblxuICB2YXIgbGlzdGVuZXJDb3VudCA9IDAsXG4gICAgICBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBsaXN0ZW5CZWZvcmUobGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIHZhciB1bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuQmVmb3JlKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bmxpc3RlbigpO1xuXG4gICAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wUG9wU3RhdGVMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIHZhciB1bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bmxpc3RlbigpO1xuXG4gICAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wUG9wU3RhdGVMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKGhpc3RvcnkpO1xuXG4gICAgaGlzdG9yeS5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIGhpc3RvcnkudW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spO1xuXG4gICAgaWYgKC0tbGlzdGVuZXJDb3VudCA9PT0gMCkgc3RvcFBvcFN0YXRlTGlzdGVuZXIoKTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwge1xuICAgIGxpc3RlbkJlZm9yZTogbGlzdGVuQmVmb3JlLFxuICAgIGxpc3RlbjogbGlzdGVuLFxuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssXG4gICAgdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rOiB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2tcbiAgfSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbnZhciBfY3JlYXRlSGlzdG9yeSA9IHJlcXVpcmUoJy4vY3JlYXRlSGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZUhpc3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlSGlzdG9yeSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZURPTUhpc3Rvcnkob3B0aW9ucykge1xuICB2YXIgaGlzdG9yeSA9IF9jcmVhdGVIaXN0b3J5MlsnZGVmYXVsdCddKF9leHRlbmRzKHtcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBfRE9NVXRpbHMuZ2V0VXNlckNvbmZpcm1hdGlvblxuICB9LCBvcHRpb25zLCB7XG4gICAgZ286IF9ET01VdGlscy5nb1xuICB9KSk7XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgIV9FeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ0RPTSBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiBoaXN0b3J5Lmxpc3RlbihsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGhpc3RvcnksIHtcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9KTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlRE9NSGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8vaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZydcbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2RlZXBFcXVhbCA9IHJlcXVpcmUoJ2RlZXAtZXF1YWwnKTtcblxudmFyIF9kZWVwRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVlcEVxdWFsKTtcblxudmFyIF9Bc3luY1V0aWxzID0gcmVxdWlyZSgnLi9Bc3luY1V0aWxzJyk7XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX2NyZWF0ZUxvY2F0aW9uMiA9IHJlcXVpcmUoJy4vY3JlYXRlTG9jYXRpb24nKTtcblxudmFyIF9jcmVhdGVMb2NhdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVMb2NhdGlvbjIpO1xuXG52YXIgX3J1blRyYW5zaXRpb25Ib29rID0gcmVxdWlyZSgnLi9ydW5UcmFuc2l0aW9uSG9vaycpO1xuXG52YXIgX3J1blRyYW5zaXRpb25Ib29rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3J1blRyYW5zaXRpb25Ib29rKTtcblxudmFyIF9wYXJzZVBhdGggPSByZXF1aXJlKCcuL3BhcnNlUGF0aCcpO1xuXG52YXIgX3BhcnNlUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZVBhdGgpO1xuXG52YXIgX2RlcHJlY2F0ZSA9IHJlcXVpcmUoJy4vZGVwcmVjYXRlJyk7XG5cbnZhciBfZGVwcmVjYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlcHJlY2F0ZSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVJhbmRvbUtleShsZW5ndGgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCBsZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJlxuICAvL2EuYWN0aW9uID09PSBiLmFjdGlvbiAmJiAvLyBEaWZmZXJlbnQgYWN0aW9uICE9PSBsb2NhdGlvbiBjaGFuZ2UuXG4gIGEua2V5ID09PSBiLmtleSAmJiBfZGVlcEVxdWFsMlsnZGVmYXVsdCddKGEuc3RhdGUsIGIuc3RhdGUpO1xufVxuXG52YXIgRGVmYXVsdEtleUxlbmd0aCA9IDY7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhpc3RvcnkoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gIHZhciBnZXRDdXJyZW50TG9jYXRpb24gPSBvcHRpb25zLmdldEN1cnJlbnRMb2NhdGlvbjtcbiAgdmFyIGZpbmlzaFRyYW5zaXRpb24gPSBvcHRpb25zLmZpbmlzaFRyYW5zaXRpb247XG4gIHZhciBzYXZlU3RhdGUgPSBvcHRpb25zLnNhdmVTdGF0ZTtcbiAgdmFyIGdvID0gb3B0aW9ucy5nbztcbiAgdmFyIGtleUxlbmd0aCA9IG9wdGlvbnMua2V5TGVuZ3RoO1xuICB2YXIgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IG9wdGlvbnMuZ2V0VXNlckNvbmZpcm1hdGlvbjtcblxuICBpZiAodHlwZW9mIGtleUxlbmd0aCAhPT0gJ251bWJlcicpIGtleUxlbmd0aCA9IERlZmF1bHRLZXlMZW5ndGg7XG5cbiAgdmFyIHRyYW5zaXRpb25Ib29rcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbkJlZm9yZShob29rKSB7XG4gICAgdHJhbnNpdGlvbkhvb2tzLnB1c2goaG9vayk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdHJhbnNpdGlvbkhvb2tzID0gdHJhbnNpdGlvbkhvb2tzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gaG9vaztcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICB2YXIgYWxsS2V5cyA9IFtdO1xuICB2YXIgY2hhbmdlTGlzdGVuZXJzID0gW107XG4gIHZhciBsb2NhdGlvbiA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBnZXRDdXJyZW50KCkge1xuICAgIGlmIChwZW5kaW5nTG9jYXRpb24gJiYgcGVuZGluZ0xvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSB7XG4gICAgICByZXR1cm4gYWxsS2V5cy5pbmRleE9mKHBlbmRpbmdMb2NhdGlvbi5rZXkpO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBhbGxLZXlzLmluZGV4T2YobG9jYXRpb24ua2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUxvY2F0aW9uKG5ld0xvY2F0aW9uKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBnZXRDdXJyZW50KCk7XG5cbiAgICBsb2NhdGlvbiA9IG5ld0xvY2F0aW9uO1xuXG4gICAgaWYgKGxvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgYWxsS2V5cyA9IFtdLmNvbmNhdChhbGxLZXlzLnNsaWNlKDAsIGN1cnJlbnQgKyAxKSwgW2xvY2F0aW9uLmtleV0pO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5SRVBMQUNFKSB7XG4gICAgICBhbGxLZXlzW2N1cnJlbnRdID0gbG9jYXRpb24ua2V5O1xuICAgIH1cblxuICAgIGNoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIobG9jYXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgY2hhbmdlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICBsaXN0ZW5lcihsb2NhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfbG9jYXRpb24gPSBnZXRDdXJyZW50TG9jYXRpb24oKTtcbiAgICAgIGFsbEtleXMgPSBbX2xvY2F0aW9uLmtleV07XG4gICAgICB1cGRhdGVMb2NhdGlvbihfbG9jYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFuZ2VMaXN0ZW5lcnMgPSBjaGFuZ2VMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBsaXN0ZW5lcjtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICAgIF9Bc3luY1V0aWxzLmxvb3BBc3luYyh0cmFuc2l0aW9uSG9va3MubGVuZ3RoLCBmdW5jdGlvbiAoaW5kZXgsIG5leHQsIGRvbmUpIHtcbiAgICAgIF9ydW5UcmFuc2l0aW9uSG9vazJbJ2RlZmF1bHQnXSh0cmFuc2l0aW9uSG9va3NbaW5kZXhdLCBsb2NhdGlvbiwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICBkb25lKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgaWYgKGdldFVzZXJDb25maXJtYXRpb24gJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGdldFVzZXJDb25maXJtYXRpb24obWVzc2FnZSwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgICAgY2FsbGJhY2sob2sgIT09IGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhtZXNzYWdlICE9PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcGVuZGluZ0xvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25UbyhuZXh0TG9jYXRpb24pIHtcbiAgICBpZiAobG9jYXRpb24gJiYgbG9jYXRpb25zQXJlRXF1YWwobG9jYXRpb24sIG5leHRMb2NhdGlvbikpIHJldHVybjsgLy8gTm90aGluZyB0byBkby5cblxuICAgIHBlbmRpbmdMb2NhdGlvbiA9IG5leHRMb2NhdGlvbjtcblxuICAgIGNvbmZpcm1UcmFuc2l0aW9uVG8obmV4dExvY2F0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmIChwZW5kaW5nTG9jYXRpb24gIT09IG5leHRMb2NhdGlvbikgcmV0dXJuOyAvLyBUcmFuc2l0aW9uIHdhcyBpbnRlcnJ1cHRlZC5cblxuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIC8vIHRyZWF0IFBVU0ggdG8gY3VycmVudCBwYXRoIGxpa2UgUkVQTEFDRSB0byBiZSBjb25zaXN0ZW50IHdpdGggYnJvd3NlcnNcbiAgICAgICAgaWYgKG5leHRMb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlBVU0gpIHtcbiAgICAgICAgICB2YXIgcHJldlBhdGggPSBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbiAgICAgICAgICB2YXIgbmV4dFBhdGggPSBjcmVhdGVQYXRoKG5leHRMb2NhdGlvbik7XG5cbiAgICAgICAgICBpZiAobmV4dFBhdGggPT09IHByZXZQYXRoKSBuZXh0TG9jYXRpb24uYWN0aW9uID0gX0FjdGlvbnMuUkVQTEFDRTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaW5pc2hUcmFuc2l0aW9uKG5leHRMb2NhdGlvbikgIT09IGZhbHNlKSB1cGRhdGVMb2NhdGlvbihuZXh0TG9jYXRpb24pO1xuICAgICAgfSBlbHNlIGlmIChsb2NhdGlvbiAmJiBuZXh0TG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHtcbiAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihsb2NhdGlvbi5rZXkpO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gYWxsS2V5cy5pbmRleE9mKG5leHRMb2NhdGlvbi5rZXkpO1xuXG4gICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xICYmIG5leHRJbmRleCAhPT0gLTEpIGdvKHByZXZJbmRleCAtIG5leHRJbmRleCk7IC8vIFJlc3RvcmUgdGhlIFVSTC5cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2gobG9jYXRpb24pIHtcbiAgICB0cmFuc2l0aW9uVG8oY3JlYXRlTG9jYXRpb24obG9jYXRpb24sIF9BY3Rpb25zLlBVU0gsIGNyZWF0ZUtleSgpKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKGxvY2F0aW9uKSB7XG4gICAgdHJhbnNpdGlvblRvKGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uLCBfQWN0aW9ucy5SRVBMQUNFLCBjcmVhdGVLZXkoKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGdvKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICBnbygxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgICByZXR1cm4gY3JlYXRlUmFuZG9tS2V5KGtleUxlbmd0aCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQYXRoKGxvY2F0aW9uKSB7XG4gICAgaWYgKGxvY2F0aW9uID09IG51bGwgfHwgdHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgcmV0dXJuIGxvY2F0aW9uO1xuXG4gICAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG5cbiAgICB2YXIgcmVzdWx0ID0gcGF0aG5hbWU7XG5cbiAgICBpZiAoc2VhcmNoKSByZXN1bHQgKz0gc2VhcmNoO1xuXG4gICAgaWYgKGhhc2gpIHJlc3VsdCArPSBoYXNoO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICByZXR1cm4gY3JlYXRlUGF0aChsb2NhdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihsb2NhdGlvbiwgYWN0aW9uKSB7XG4gICAgdmFyIGtleSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IGNyZWF0ZUtleSgpIDogYXJndW1lbnRzWzJdO1xuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAvL3dhcm5pbmcoXG4gICAgICAvLyAgZmFsc2UsXG4gICAgICAvLyAgJ1RoZSBzdGF0ZSAoMm5kKSBhcmd1bWVudCB0byBoaXN0b3J5LmNyZWF0ZUxvY2F0aW9uIGlzIGRlcHJlY2F0ZWQ7IHVzZSBhICcgK1xuICAgICAgLy8gICdsb2NhdGlvbiBkZXNjcmlwdG9yIGluc3RlYWQnXG4gICAgICAvLylcblxuICAgICAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIGxvY2F0aW9uID0gX3BhcnNlUGF0aDJbJ2RlZmF1bHQnXShsb2NhdGlvbik7XG5cbiAgICAgIGxvY2F0aW9uID0gX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7IHN0YXRlOiBhY3Rpb24gfSk7XG5cbiAgICAgIGFjdGlvbiA9IGtleTtcbiAgICAgIGtleSA9IGFyZ3VtZW50c1szXSB8fCBjcmVhdGVLZXkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NyZWF0ZUxvY2F0aW9uM1snZGVmYXVsdCddKGxvY2F0aW9uLCBhY3Rpb24sIGtleSk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICB1cGRhdGVMb2NhdGlvblN0YXRlKGxvY2F0aW9uLCBzdGF0ZSk7XG4gICAgICB1cGRhdGVMb2NhdGlvbihsb2NhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZUxvY2F0aW9uU3RhdGUoZ2V0Q3VycmVudExvY2F0aW9uKCksIHN0YXRlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvblN0YXRlKGxvY2F0aW9uLCBzdGF0ZSkge1xuICAgIGxvY2F0aW9uLnN0YXRlID0gX2V4dGVuZHMoe30sIGxvY2F0aW9uLnN0YXRlLCBzdGF0ZSk7XG4gICAgc2F2ZVN0YXRlKGxvY2F0aW9uLmtleSwgbG9jYXRpb24uc3RhdGUpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICBpZiAodHJhbnNpdGlvbkhvb2tzLmluZGV4T2YoaG9vaykgPT09IC0xKSB0cmFuc2l0aW9uSG9va3MucHVzaChob29rKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICB0cmFuc2l0aW9uSG9va3MgPSB0cmFuc2l0aW9uSG9va3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbSAhPT0gaG9vaztcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcHVzaFN0YXRlKHN0YXRlLCBwYXRoKSB7XG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgcGF0aCA9IF9wYXJzZVBhdGgyWydkZWZhdWx0J10ocGF0aCk7XG5cbiAgICBwdXNoKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgpKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcmVwbGFjZVN0YXRlKHN0YXRlLCBwYXRoKSB7XG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgcGF0aCA9IF9wYXJzZVBhdGgyWydkZWZhdWx0J10ocGF0aCk7XG5cbiAgICByZXBsYWNlKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgdHJhbnNpdGlvblRvOiB0cmFuc2l0aW9uVG8sXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBjcmVhdGVLZXk6IGNyZWF0ZUtleSxcbiAgICBjcmVhdGVQYXRoOiBjcmVhdGVQYXRoLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgY3JlYXRlTG9jYXRpb246IGNyZWF0ZUxvY2F0aW9uLFxuXG4gICAgc2V0U3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10oc2V0U3RhdGUsICdzZXRTdGF0ZSBpcyBkZXByZWNhdGVkOyB1c2UgbG9jYXRpb24ua2V5IHRvIHNhdmUgc3RhdGUgaW5zdGVhZCcpLFxuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgJ3JlZ2lzdGVyVHJhbnNpdGlvbkhvb2sgaXMgZGVwcmVjYXRlZDsgdXNlIGxpc3RlbkJlZm9yZSBpbnN0ZWFkJyksXG4gICAgdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgJ3VucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayBpcyBkZXByZWNhdGVkOyB1c2UgdGhlIGNhbGxiYWNrIHJldHVybmVkIGZyb20gbGlzdGVuQmVmb3JlIGluc3RlYWQnKSxcbiAgICBwdXNoU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocHVzaFN0YXRlLCAncHVzaFN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSBwdXNoIGluc3RlYWQnKSxcbiAgICByZXBsYWNlU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocmVwbGFjZVN0YXRlLCAncmVwbGFjZVN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSByZXBsYWNlIGluc3RlYWQnKVxuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLy9pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJ1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX3BhcnNlUGF0aCA9IHJlcXVpcmUoJy4vcGFyc2VQYXRoJyk7XG5cbnZhciBfcGFyc2VQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlUGF0aCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKCkge1xuICB2YXIgbG9jYXRpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAnLycgOiBhcmd1bWVudHNbMF07XG4gIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBfQWN0aW9ucy5QT1AgOiBhcmd1bWVudHNbMV07XG4gIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzJdO1xuXG4gIHZhciBfZm91cnRoQXJnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1szXTtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgbG9jYXRpb24gPSBfcGFyc2VQYXRoMlsnZGVmYXVsdCddKGxvY2F0aW9uKTtcblxuICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAvL3dhcm5pbmcoXG4gICAgLy8gIGZhbHNlLFxuICAgIC8vICAnVGhlIHN0YXRlICgybmQpIGFyZ3VtZW50IHRvIGNyZWF0ZUxvY2F0aW9uIGlzIGRlcHJlY2F0ZWQ7IHVzZSBhICcgK1xuICAgIC8vICAnbG9jYXRpb24gZGVzY3JpcHRvciBpbnN0ZWFkJ1xuICAgIC8vKVxuXG4gICAgbG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHsgc3RhdGU6IGFjdGlvbiB9KTtcblxuICAgIGFjdGlvbiA9IGtleSB8fCBfQWN0aW9ucy5QT1A7XG4gICAga2V5ID0gX2ZvdXJ0aEFyZztcbiAgfVxuXG4gIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaCB8fCAnJztcbiAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoIHx8ICcnO1xuICB2YXIgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZSB8fCBudWxsO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2gsXG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIGFjdGlvbjogYWN0aW9uLFxuICAgIGtleToga2V5XG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUxvY2F0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLy9pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJ1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGRlcHJlY2F0ZShmbikge1xuICByZXR1cm4gZm47XG4gIC8vcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgLy8gIHdhcm5pbmcoZmFsc2UsICdbaGlzdG9yeV0gJyArIG1lc3NhZ2UpXG4gIC8vICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAvL31cbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBkZXByZWNhdGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gZXh0cmFjdFBhdGgoc3RyaW5nKSB7XG4gIHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaCgvXmh0dHBzPzpcXC9cXC9bXlxcL10qLyk7XG5cbiAgaWYgKG1hdGNoID09IG51bGwpIHJldHVybiBzdHJpbmc7XG5cbiAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKTtcbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHRyYWN0UGF0aDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2V4dHJhY3RQYXRoID0gcmVxdWlyZSgnLi9leHRyYWN0UGF0aCcpO1xuXG52YXIgX2V4dHJhY3RQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dHJhY3RQYXRoKTtcblxuZnVuY3Rpb24gcGFyc2VQYXRoKHBhdGgpIHtcbiAgdmFyIHBhdGhuYW1lID0gX2V4dHJhY3RQYXRoMlsnZGVmYXVsdCddKHBhdGgpO1xuICB2YXIgc2VhcmNoID0gJyc7XG4gIHZhciBoYXNoID0gJyc7XG5cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKHBhdGggPT09IHBhdGhuYW1lLCAnQSBwYXRoIG11c3QgYmUgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoIG9ubHksIG5vdCBhIGZ1bGx5IHF1YWxpZmllZCBVUkwgbGlrZSBcIiVzXCInLCBwYXRoKSA6IHVuZGVmaW5lZDtcblxuICB2YXIgaGFzaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignIycpO1xuICBpZiAoaGFzaEluZGV4ICE9PSAtMSkge1xuICAgIGhhc2ggPSBwYXRobmFtZS5zdWJzdHJpbmcoaGFzaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cmluZygwLCBoYXNoSW5kZXgpO1xuICB9XG5cbiAgdmFyIHNlYXJjaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignPycpO1xuICBpZiAoc2VhcmNoSW5kZXggIT09IC0xKSB7XG4gICAgc2VhcmNoID0gcGF0aG5hbWUuc3Vic3RyaW5nKHNlYXJjaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cmluZygwLCBzZWFyY2hJbmRleCk7XG4gIH1cblxuICBpZiAocGF0aG5hbWUgPT09ICcnKSBwYXRobmFtZSA9ICcvJztcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoXG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHBhcnNlUGF0aDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gcnVuVHJhbnNpdGlvbkhvb2soaG9vaywgbG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gIHZhciByZXN1bHQgPSBob29rKGxvY2F0aW9uLCBjYWxsYmFjayk7XG5cbiAgaWYgKGhvb2subGVuZ3RoIDwgMikge1xuICAgIC8vIEFzc3VtZSB0aGUgaG9vayBydW5zIHN5bmNocm9ub3VzbHkgYW5kIGF1dG9tYXRpY2FsbHlcbiAgICAvLyBjYWxsIHRoZSBjYWxsYmFjayB3aXRoIHRoZSByZXR1cm4gdmFsdWUuXG4gICAgY2FsbGJhY2socmVzdWx0KTtcbiAgfSBlbHNlIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10ocmVzdWx0ID09PSB1bmRlZmluZWQsICdZb3Ugc2hvdWxkIG5vdCBcInJldHVyblwiIGluIGEgdHJhbnNpdGlvbiBob29rIHdpdGggYSBjYWxsYmFjayBhcmd1bWVudDsgY2FsbCB0aGUgY2FsbGJhY2sgaW5zdGVhZCcpIDogdW5kZWZpbmVkO1xuICB9XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJ1blRyYW5zaXRpb25Ib29rO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgKC9eW3NcXFddKiQvKS50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiJdfQ==