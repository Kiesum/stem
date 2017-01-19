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

},{"../alt":7}],2:[function(require,module,exports){
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

},{"../alt":7}],3:[function(require,module,exports){
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

},{"../alt":7}],4:[function(require,module,exports){
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

},{"../alt":7,"underscore":"underscore"}],5:[function(require,module,exports){
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

},{"../alt":7}],6:[function(require,module,exports){
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

},{"../alt":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],8:[function(require,module,exports){
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
      var title = this.state.title.trim();
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
          { onSubmit: this.handleSubmit.bind(this) },
          _react2.default.createElement(
            'div',
            { className: 'form-group ' + this.state.nameValidationState },
            _react2.default.createElement(
              'label',
              { className: 'control-label' },
              'Title'
            ),
            _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'titleTextField', value: this.state.title,
              onChange: _AddBranchActions2.default.updateTitle, autoFocus: true }),
            _react2.default.createElement(
              'span',
              { className: 'help-block' },
              this.state.helpBlock
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group ' + this.state.bodyValidationState },
            _react2.default.createElement('textarea', { value: this.state.body, onChange: _AddBranchActions2.default.updateBody })
          ),
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'btn btn-primary' },
            'Submit'
          )
        )
      );
    }
  }]);

  return AddBranch;
}(_react2.default.Component);

exports.default = AddBranch;

},{"../actions/AddBranchActions":1,"../actions/BranchShowActions":3,"../actions/TrunkShowActions":6,"../stores/AddBranchStore":19,"react":"react"}],9:[function(require,module,exports){
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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit.bind(this) },
          _react2.default.createElement(
            'div',
            { className: 'form-group ' + this.state.nameValidationState },
            _react2.default.createElement(
              'label',
              { className: 'control-label' },
              'Title'
            ),
            _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'titleTextField', value: this.state.title,
              onChange: _AddTrunkActions2.default.updateTitle, autoFocus: true }),
            _react2.default.createElement(
              'span',
              { className: 'help-block' },
              this.state.helpBlock
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group ' + this.state.bodyValidationState },
            _react2.default.createElement(
              'div',
              { className: 'radio radio-inline' },
              _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'bodyTextField', value: this.state.body,
                onChange: _AddTrunkActions2.default.updateBody })
            )
          ),
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'btn btn-primary' },
            'Submit'
          )
        )
      );
    }
  }]);

  return AddTrunk;
}(_react2.default.Component);

exports.default = AddTrunk;

},{"../actions/AddTrunkActions":2,"../stores/AddTrunkStore":20,"react":"react"}],10:[function(require,module,exports){
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

},{"./Navbar":13,"react":"react"}],11:[function(require,module,exports){
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
        ),
        _react2.default.createElement(_AddBranch2.default, { props: this.props })
      );
    }
  }]);

  return TrunkShow;
}(_react2.default.Component);

exports.default = TrunkShow;

},{"../actions/BranchShowActions":3,"../stores/BranchShowStore":21,"./AddBranch":8,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Trunk = require('./Trunk.js');

var _Trunk2 = _interopRequireDefault(_Trunk);

var _AddTrunk = require('./AddTrunk.js');

var _AddTrunk2 = _interopRequireDefault(_AddTrunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Trunk2.default, null),
        _react2.default.createElement(_AddTrunk2.default, null)
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

},{"./AddTrunk.js":9,"./Trunk.js":14,"react":"react"}],13:[function(require,module,exports){
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

},{"../actions/NavbarActions":4,"../stores/NavbarStore":22,"react":"react","react-router":"react-router"}],14:[function(require,module,exports){
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

},{"../actions/TrunkActions":5,"../stores/TrunkStore":24,"react":"react","react-router":"react-router","underscore":"underscore"}],15:[function(require,module,exports){
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

},{"./AddBranch.js":8,"./TrunkShow.js":16,"react":"react"}],16:[function(require,module,exports){
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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          this.state.title
        ),
        _react2.default.createElement(
          'h4',
          null,
          this.state.body
        ),
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
        ),
        _react2.default.createElement(_AddBranch2.default, { props: this.props })
      );
    }
  }]);

  return TrunkShow;
}(_react2.default.Component);

exports.default = TrunkShow;

},{"../actions/TrunkShowActions":6,"../stores/TrunkShowStore":23,"./AddBranch":8,"react":"react","react-router":"react-router"}],17:[function(require,module,exports){
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

},{"./routes":18,"history/lib/createBrowserHistory":33,"react":"react","react-dom":"react-dom","react-router":"react-router"}],18:[function(require,module,exports){
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

},{"./components/AddTrunk":9,"./components/App":10,"./components/BranchShow":11,"./components/Home":12,"./components/TrunkComplete":15,"./components/TrunkShow":16,"react":"react","react-router":"react-router"}],19:[function(require,module,exports){
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

},{"../actions/AddBranchActions":1,"../alt":7}],20:[function(require,module,exports){
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

},{"../actions/AddTrunkActions":2,"../alt":7}],21:[function(require,module,exports){
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

},{"../actions/BranchShowActions":3,"../alt":7}],22:[function(require,module,exports){
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

},{"../actions/NavbarActions":4,"../alt":7}],23:[function(require,module,exports){
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

},{"../actions/TrunkShowActions":6,"../alt":7}],24:[function(require,module,exports){
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

},{"../actions/TrunkActions":5,"../alt":7}],25:[function(require,module,exports){
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

},{"./lib/is_arguments.js":26,"./lib/keys.js":27}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],28:[function(require,module,exports){
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
},{}],29:[function(require,module,exports){
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
},{}],30:[function(require,module,exports){
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

},{"_process":42,"warning":43}],31:[function(require,module,exports){
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
},{}],32:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],33:[function(require,module,exports){
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

},{"./Actions":28,"./DOMStateStorage":30,"./DOMUtils":31,"./ExecutionEnvironment":32,"./createDOMHistory":34,"./parsePath":39,"_process":42,"invariant":41}],34:[function(require,module,exports){
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

},{"./DOMUtils":31,"./ExecutionEnvironment":32,"./createHistory":35,"_process":42,"invariant":41}],35:[function(require,module,exports){
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
},{"./Actions":28,"./AsyncUtils":29,"./createLocation":36,"./deprecate":37,"./parsePath":39,"./runTransitionHook":40,"deep-equal":25}],36:[function(require,module,exports){
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
},{"./Actions":28,"./parsePath":39}],37:[function(require,module,exports){
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
},{}],38:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],39:[function(require,module,exports){
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

},{"./extractPath":38,"_process":42,"warning":43}],40:[function(require,module,exports){
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

},{"_process":42,"warning":43}],41:[function(require,module,exports){
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

},{"_process":42}],42:[function(require,module,exports){
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

},{}],43:[function(require,module,exports){
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

},{"_process":42}]},{},[17])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYWN0aW9ucy9BZGRCcmFuY2hBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvQWRkVHJ1bmtBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvQnJhbmNoU2hvd0FjdGlvbnMuanMiLCJhcHAvYWN0aW9ucy9OYXZiYXJBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvVHJ1bmtBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvVHJ1bmtTaG93QWN0aW9ucy5qcyIsImFwcC9hbHQuanMiLCJhcHAvY29tcG9uZW50cy9BZGRCcmFuY2guanMiLCJhcHAvY29tcG9uZW50cy9BZGRUcnVuay5qcyIsImFwcC9jb21wb25lbnRzL0FwcC5qcyIsImFwcC9jb21wb25lbnRzL0JyYW5jaFNob3cuanMiLCJhcHAvY29tcG9uZW50cy9Ib21lLmpzIiwiYXBwL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwiYXBwL2NvbXBvbmVudHMvVHJ1bmsuanMiLCJhcHAvY29tcG9uZW50cy9UcnVua0NvbXBsZXRlLmpzIiwiYXBwL2NvbXBvbmVudHMvVHJ1bmtTaG93LmpzIiwiYXBwL21haW4uanMiLCJhcHAvcm91dGVzLmpzIiwiYXBwL3N0b3Jlcy9BZGRCcmFuY2hTdG9yZS5qcyIsImFwcC9zdG9yZXMvQWRkVHJ1bmtTdG9yZS5qcyIsImFwcC9zdG9yZXMvQnJhbmNoU2hvd1N0b3JlLmpzIiwiYXBwL3N0b3Jlcy9OYXZiYXJTdG9yZS5qcyIsImFwcC9zdG9yZXMvVHJ1bmtTaG93U3RvcmUuanMiLCJhcHAvc3RvcmVzL1RydW5rU3RvcmUuanMiLCJub2RlX21vZHVsZXMvZGVlcC1lcXVhbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2xpYi9pc19hcmd1bWVudHMuanMiLCJub2RlX21vZHVsZXMvZGVlcC1lcXVhbC9saWIva2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9BY3Rpb25zLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0FzeW5jVXRpbHMuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvRE9NU3RhdGVTdG9yYWdlLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0RPTVV0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2NyZWF0ZUJyb3dzZXJIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2NyZWF0ZURPTUhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvY3JlYXRlSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVMb2NhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9kZXByZWNhdGUuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvZXh0cmFjdFBhdGguanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvcGFyc2VQYXRoLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL3J1blRyYW5zaXRpb25Ib29rLmpzIiwibm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0FBOzs7Ozs7OztJQUVNLGdCO0FBQ0osOEJBQWM7QUFBQTs7QUFDWixTQUFLLGVBQUwsQ0FDSSxrQkFESixFQUVJLGVBRkosRUFHSSxjQUhKLEVBSUksYUFKSixFQUtJLFlBTEosRUFNSSxjQU5KLEVBT0ksYUFQSjtBQVNEOzs7OzhCQUVTLE0sRUFBUSxLLEVBQU8sSSxFQUFNO0FBQUE7O0FBQzdCLFFBQUUsSUFBRixDQUFPO0FBQ0wsY0FBTSxNQUREO0FBRUwsYUFBSyxtQkFGQTtBQUdMLGNBQU0sRUFB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Q0E7QUFDQTs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDakxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3BMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5cbmNsYXNzIEFkZEJyYW5jaEFjdGlvbnMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdlbmVyYXRlQWN0aW9ucyhcbiAgICAgICAgJ2FkZEJyYW5jaFN1Y2Nlc3MnLFxuICAgICAgICAnYWRkQnJhbmNoRmFpbCcsXG4gICAgICAgICd1cGRhdGVQYXJlbnQnLFxuICAgICAgICAndXBkYXRlVGl0bGUnLFxuICAgICAgICAndXBkYXRlQm9keScsXG4gICAgICAgICdpbnZhbGlkVGl0bGUnLFxuICAgICAgICAnaW52YWxpZEJvZHknLFxuICAgICAgKVxuICB9XG5cbiAgYWRkQnJhbmNoKHBhcmVudCwgdGl0bGUsIGJvZHkpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgdXJsOiAnL2FwaS9icmFuY2hlcy9uZXcnLFxuICAgICAgZGF0YTogeyBwYXJlbnQ6IHBhcmVudCwgdGl0bGU6IHRpdGxlLCBib2R5OiBib2R5IH1cbiAgICB9KVxuICAgICAgLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmFkZEJyYW5jaFN1Y2Nlc3MoZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0pXG4gICAgICAuZmFpbCgoanFYaHIpID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmFkZEJyYW5jaEZhaWwoanFYaHIucmVzcG9uc2VKU09OLm1lc3NhZ2UpO1xuICAgICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlQWN0aW9ucyhBZGRCcmFuY2hBY3Rpb25zKTtcbiAgXG4gIiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuXG5jbGFzcyBBZGRUcnVua0FjdGlvbnMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdlbmVyYXRlQWN0aW9ucyhcbiAgICAgICdhZGRUcnVua1N1Y2Nlc3MnLFxuICAgICAgJ2FkZFRydW5rRmFpbCcsXG4gICAgICAndXBkYXRlVGl0bGUnLFxuICAgICAgJ3VwZGF0ZUJvZHknLFxuICAgICAgJ2ludmFsaWRUaXRsZScsXG4gICAgICAnaW52YWxpZEJvZHknXG4gICAgKTtcbiAgfVxuXG4gIGFkZFRydW5rKHRpdGxlLCBib2R5KSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHVybDogJy9hcGkvdHJ1bmtzL25ldycsXG4gICAgICBkYXRhOiB7IHRpdGxlOiB0aXRsZSwgYm9keTogYm9keSB9XG4gICAgfSlcbiAgICAgIC5kb25lKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5hZGRUcnVua1N1Y2Nlc3MoZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0pXG4gICAgICAuZmFpbCgoanFYaHIpID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmFkZFRydW5rRmFpbChqcVhoci5yZXNwb25zZUpTT04ubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlQWN0aW9ucyhBZGRUcnVua0FjdGlvbnMpOyIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcblxuY2xhc3MgQnJhbmNoU2hvd0FjdGlvbnMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdlbmVyYXRlQWN0aW9ucyhcbiAgICAgICdnZXRCcmFuY2hTaG93U3VjY2VzcycsXG4gICAgICAnZ2V0QnJhbmNoU2hvd0ZhaWwnXG4gICAgKTtcbiAgfVxuXG4gIGdldEJyYW5jaFNob3coYnJhbmNoSWQpIHtcbiAgICAkLmFqYXgoeyB1cmw6ICcvYXBpL2JyYW5jaGVzLycgKyBicmFuY2hJZCB9KVxuICAgICAgLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmdldEJyYW5jaFNob3dTdWNjZXNzKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5mYWlsKChqcVhocikgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbnMuZ2V0QnJhbmNoU2hvd0ZhaWwoanFYaHIpO1xuICAgICAgfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlQWN0aW9ucyhCcmFuY2hTaG93QWN0aW9ucyk7IiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuaW1wb3J0IHthc3NpZ259IGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5jbGFzcyBOYXZiYXJBY3Rpb25zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nZW5lcmF0ZUFjdGlvbnMoXG4gICAgICAndXBkYXRlT25saW5lVXNlcnMnLFxuICAgICAgJ3VwZGF0ZUFqYXhBbmltYXRpb24nLFxuICAgICAgJ3VwZGF0ZVNlYXJjaFF1ZXJ5JyxcbiAgICAgICdnZXRDaGFyYWN0ZXJDb3VudFN1Y2Nlc3MnLFxuICAgICAgJ2dldENoYXJhY3RlckNvdW50RmFpbCcsXG4gICAgICAnZmluZENoYXJhY3RlclN1Y2Nlc3MnLFxuICAgICAgJ2ZpbmRDaGFyYWN0ZXJGYWlsJ1xuICAgICk7XG4gIH1cblxuICBmaW5kQ2hhcmFjdGVyKHBheWxvYWQpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL2FwaS9jaGFyYWN0ZXJzL3NlYXJjaCcsXG4gICAgICBkYXRhOiB7IG5hbWU6IHBheWxvYWQuc2VhcmNoUXVlcnkgfVxuICAgIH0pXG4gICAgICAuZG9uZSgoZGF0YSkgPT4ge1xuICAgICAgICBhc3NpZ24ocGF5bG9hZCwgZGF0YSk7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5maW5kQ2hhcmFjdGVyU3VjY2VzcyhwYXlsb2FkKTtcbiAgICAgIH0pXG4gICAgICAuZmFpbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5maW5kQ2hhcmFjdGVyRmFpbChwYXlsb2FkKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0Q2hhcmFjdGVyQ291bnQoKSB7XG4gICAgJC5hamF4KHsgdXJsOiAnL2FwaS9jaGFyYWN0ZXJzL2NvdW50JyB9KVxuICAgICAgLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmdldENoYXJhY3RlckNvdW50U3VjY2VzcyhkYXRhKVxuICAgICAgfSlcbiAgICAgIC5mYWlsKChqcVhocikgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbnMuZ2V0Q2hhcmFjdGVyQ291bnRGYWlsKGpxWGhyKVxuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZUFjdGlvbnMoTmF2YmFyQWN0aW9ucyk7IiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuXG5jbGFzcyBUcnVua0FjdGlvbnMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdlbmVyYXRlQWN0aW9ucyhcbiAgICAgICdnZXRUcnVua3NTdWNjZXNzJyxcbiAgICAgICdnZXRUcnVua3NGYWlsJyxcbiAgICApO1xuICB9XG5cbiAgZ2V0VHJ1bmtzKCkge1xuICAgICQuYWpheCh7IHVybDogJy9hcGkvdHJ1bmtzJyB9KVxuICAgICAgLmRvbmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5nZXRUcnVua3NTdWNjZXNzKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5mYWlsKGpxWGhyID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmdldFRydW5rc0ZhaWwoanFYaHIucmVzcG9uc2VKU09OLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlQWN0aW9ucyhUcnVua0FjdGlvbnMpOyIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcblxuY2xhc3MgVHJ1bmtTaG93QWN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zKFxuICAgICAgJ2dldFRydW5rU2hvd1N1Y2Nlc3MnLFxuICAgICAgJ2dldFRydW5rU2hvd0ZhaWwnXG4gICAgKTtcbiAgfVxuXG4gIGdldFRydW5rU2hvdyh0cnVua0lkKSB7XG4gICAgJC5hamF4KHsgdXJsOiAnL2FwaS90cnVua3MvJyArIHRydW5rSWQgfSlcbiAgICAgIC5kb25lKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5nZXRUcnVua1Nob3dTdWNjZXNzKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5mYWlsKChqcVhocikgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbnMuZ2V0VHJ1bmtTaG93RmFpbChqcVhocik7XG4gICAgICB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKFRydW5rU2hvd0FjdGlvbnMpOyIsImltcG9ydCBBbHQgZnJvbSAnYWx0JztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFsdCgpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWRkQnJhbmNoU3RvcmUgZnJvbSAnLi4vc3RvcmVzL0FkZEJyYW5jaFN0b3JlJztcbmltcG9ydCBBZGRCcmFuY2hBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvQWRkQnJhbmNoQWN0aW9ucyc7XG5pbXBvcnQgVHJ1bmtTaG93QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL1RydW5rU2hvd0FjdGlvbnMnO1xuaW1wb3J0IEJyYW5jaFNob3dBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvQnJhbmNoU2hvd0FjdGlvbnMnO1xuXG5jbGFzcyBBZGRCcmFuY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gQWRkQnJhbmNoU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQWRkQnJhbmNoU3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgQWRkQnJhbmNoU3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gIH1cblxuICBvbkNoYW5nZShzdGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLnByb3BzLnByb3BzLnBhcmFtcy5pZDtcbiAgICB2YXIgdGl0bGUgPSB0aGlzLnN0YXRlLnRpdGxlLnRyaW0oKTtcbiAgICB2YXIgYm9keSA9IHRoaXMuc3RhdGUuYm9keTtcblxuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIEFkZEJyYW5jaEFjdGlvbnMuaW52YWxpZFRpdGxlKCk7XG4gICAgfVxuXG4gICAgaWYgKCFib2R5KSB7XG4gICAgICBBZGRCcmFuY2hBY3Rpb25zLmludmFsaWRCb2R5KCk7XG4gICAgfVxuXG4gICAgaWYgKHRpdGxlICYmIGJvZHkpIHtcbiAgICAgIEFkZEJyYW5jaEFjdGlvbnMuYWRkQnJhbmNoKHBhcmVudCwgdGl0bGUsIGJvZHkpO1xuICAgICAgaWYgKHRoaXMucHJvcHMucHJvcHMucm91dGUucGF0aCA9PT0gXCIvdHJ1bmtzLzppZFwiKSB7XG4gICAgICAgIFRydW5rU2hvd0FjdGlvbnMuZ2V0VHJ1bmtTaG93KHRoaXMucHJvcHMucHJvcHMucGFyYW1zLmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEJyYW5jaFNob3dBY3Rpb25zLmdldEJyYW5jaFNob3codGhpcy5wcm9wcy5wcm9wcy5wYXJhbXMuaWQpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZm9ybS1ncm91cCAnICsgdGhpcy5zdGF0ZS5uYW1lVmFsaWRhdGlvblN0YXRlfT5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2NvbnRyb2wtbGFiZWwnPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgcmVmPSd0aXRsZVRleHRGaWVsZCcgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e0FkZEJyYW5jaEFjdGlvbnMudXBkYXRlVGl0bGV9IGF1dG9Gb2N1cy8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hlbHAtYmxvY2snPnt0aGlzLnN0YXRlLmhlbHBCbG9ja308L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmb3JtLWdyb3VwICcgKyB0aGlzLnN0YXRlLmJvZHlWYWxpZGF0aW9uU3RhdGV9PlxuICAgICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXt0aGlzLnN0YXRlLmJvZHl9IG9uQ2hhbmdlPXtBZGRCcmFuY2hBY3Rpb25zLnVwZGF0ZUJvZHl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5Jz5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPiBcbiAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkQnJhbmNoO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBZGRUcnVua1N0b3JlIGZyb20gJy4uL3N0b3Jlcy9BZGRUcnVua1N0b3JlJztcbmltcG9ydCBBZGRUcnVua0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9BZGRUcnVua0FjdGlvbnMnO1xuXG5jbGFzcyBBZGRUcnVuayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSBBZGRUcnVua1N0b3JlLmdldFN0YXRlKCk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIEFkZFRydW5rU3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgQWRkVHJ1bmtTdG9yZS51bmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIHRpdGxlID0gdGhpcy5zdGF0ZS50aXRsZS50cmltKCk7XG4gICAgdmFyIGJvZHkgPSB0aGlzLnN0YXRlLmJvZHk7XG5cbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICBBZGRUcnVua0FjdGlvbnMuaW52YWxpZFRpdGxlKCk7XG4gICAgICB0aGlzLnJlZnMudGl0bGVUZXh0RmllbGQuZ2V0RE9NTm9kZSgpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgaWYgKCFib2R5KSB7XG4gICAgICBBZGRUcnVua0FjdGlvbnMuaW52YWxpZEJvZHkoKTtcbiAgICB9XG5cbiAgICBpZiAodGl0bGUgJiYgYm9keSkge1xuICAgICAgQWRkVHJ1bmtBY3Rpb25zLmFkZFRydW5rKHRpdGxlLCBib2R5KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm0tZ3JvdXAgJyArIHRoaXMuc3RhdGUubmFtZVZhbGlkYXRpb25TdGF0ZX0+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdjb250cm9sLWxhYmVsJz5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHJlZj0ndGl0bGVUZXh0RmllbGQnIHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtBZGRUcnVua0FjdGlvbnMudXBkYXRlVGl0bGV9IGF1dG9Gb2N1cy8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hlbHAtYmxvY2snPnt0aGlzLnN0YXRlLmhlbHBCbG9ja308L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmb3JtLWdyb3VwICcgKyB0aGlzLnN0YXRlLmJvZHlWYWxpZGF0aW9uU3RhdGV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhZGlvIHJhZGlvLWlubGluZSc+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgcmVmPSdib2R5VGV4dEZpZWxkJyB2YWx1ZT17dGhpcy5zdGF0ZS5ib2R5fVxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e0FkZFRydW5rQWN0aW9ucy51cGRhdGVCb2R5fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+IFxuICAgICAgPC9kaXY+XG4gICAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRUcnVuazsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdmJhciBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9IC8+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBCcmFuY2hTaG93U3RvcmUgZnJvbSAnLi4vc3RvcmVzL0JyYW5jaFNob3dTdG9yZSc7XG5pbXBvcnQgQnJhbmNoU2hvd0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9CcmFuY2hTaG93QWN0aW9ucyc7XG5pbXBvcnQgQWRkQnJhbmNoIGZyb20gJy4vQWRkQnJhbmNoJztcblxuY2xhc3MgVHJ1bmtTaG93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IEJyYW5jaFNob3dTdG9yZS5nZXRTdGF0ZSgpO1xuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBCcmFuY2hTaG93U3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuICAgIEJyYW5jaFNob3dBY3Rpb25zLmdldEJyYW5jaFNob3codGhpcy5wcm9wcy5wYXJhbXMuaWQpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgQnJhbmNoU2hvd1N0b3JlLnVubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICB9XG5cbiAgb25DaGFuZ2Uoc3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgQnJhbmNoU2hvd0FjdGlvbnMuZ2V0QnJhbmNoU2hvdyhuZXh0UHJvcHMucGFyYW1zLmlkKTtcbiAgfVxuXG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPjxzdHJvbmc+e3RoaXMuc3RhdGUudGl0bGV9PC9zdHJvbmc+PC9oMj5cbiAgICAgICAgPGg0Pnt0aGlzLnN0YXRlLmJvZHl9PC9oND5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPkJyYW5jaGVzPC9oMj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmJyYW5jaGVzLm1hcCgoYnJhbmNoLCBpbmRleCkgID0+ICB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2JyYW5jaC5faWR9ID4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3N0LWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3RpdGxlJz57YnJhbmNoLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5Jz57YnJhbmNoLmJvZHl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnL2JyYW5jaGVzLycgKyBicmFuY2guX2lkfSBjbGFzc05hbWU9J2JyYW5jaGVzLWxpbmsnPlNlZSBicmFuY2hlczwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFkZEJyYW5jaCBwcm9wcz17dGhpcy5wcm9wc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJ1bmtTaG93OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJ1bmsgZnJvbSAnLi9UcnVuay5qcyc7XG5pbXBvcnQgQWRkVHJ1bmsgZnJvbSAnLi9BZGRUcnVuay5qcyc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxUcnVuayAvPlxuICAgICAgICA8QWRkVHJ1bmsgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IE5hdmJhclN0b3JlIGZyb20gJy4uL3N0b3Jlcy9OYXZiYXJTdG9yZSc7XG5pbXBvcnQgTmF2YmFyQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL05hdmJhckFjdGlvbnMnO1xuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gTmF2YmFyU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgTmF2YmFyU3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuICAgIE5hdmJhckFjdGlvbnMuZ2V0Q2hhcmFjdGVyQ291bnQoKTtcblxuICAgIGxldCBzb2NrZXQgPSBpby5jb25uZWN0KCk7XG5cbiAgICBzb2NrZXQub24oJ29ubGluZVVzZXJzJywgKGRhdGEpID0+IHtcbiAgICAgIE5hdmJhckFjdGlvbnMudXBkYXRlT25saW5lVXNlcnMoZGF0YSk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5hamF4U3RhcnQoKCkgPT4ge1xuICAgICAgTmF2YmFyQWN0aW9ucy51cGRhdGVBamF4QW5pbWF0aW9uKCdmYWRlSW4nKTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLmFqYXhDb21wbGV0ZSgoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgTmF2YmFyQWN0aW9ucy51cGRhdGVBamF4QW5pbWF0aW9uKCdmYWRlT3V0Jyk7XG4gICAgICB9LCA3NTApO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgTmF2YmFyU3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gIH1cblxuICBvbkNoYW5nZShzdGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBzZWFyY2hRdWVyeSA9IHRoaXMuc3RhdGUuc2VhcmNoUXVlcnkudHJpbSgpO1xuXG4gICAgaWYgKHNlYXJjaFF1ZXJ5KSB7XG4gICAgICBOYXZiYXJBY3Rpb25zLmZpbmRDaGFyYWN0ZXIoe1xuICAgICAgICBzZWFyY2hRdWVyeTogc2VhcmNoUXVlcnksXG4gICAgICAgIHNlYXJjaEZvcm06IHRoaXMucmVmcy5zZWFyY2hGb3JtLFxuICAgICAgICBoaXN0b3J5OiB0aGlzLnByb3BzLmhpc3RvcnlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuPG5hdiBjbGFzc05hbWU9J25hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItc3RhdGljLXRvcCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItaGVhZGVyJz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSduYXZiYXItdG9nZ2xlIGNvbGxhcHNlZCcgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nI25hdmJhcic+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxMaW5rIHRvPScvJyBjbGFzc05hbWU9J25hdmJhci1icmFuZCc+XG4gICAgICAgICAgICA8c3BhbiByZWY9J3RyaWFuZ2xlcycgY2xhc3NOYW1lPXsndHJpYW5nbGVzIGFuaW1hdGVkICcgKyB0aGlzLnN0YXRlLmFqYXhBbmltYXRpb25DbGFzc30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmkgaW52ZXJ0Jz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSBpbnZlcnQnPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJpJz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSBpbnZlcnQnPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJpIGludmVydCc+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmknPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJpIGludmVydCc+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmknPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJpIGludmVydCc+PC9kaXY+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBTVEVNXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2JhZGdlIGJhZGdlLXVwIGJhZGdlLWRhbmdlcic+e3RoaXMuc3RhdGUub25saW5lVXNlcnN9PC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IFRydW5rU3RvcmUgZnJvbSAnLi4vc3RvcmVzL1RydW5rU3RvcmUnXG5pbXBvcnQgVHJ1bmtBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvVHJ1bmtBY3Rpb25zJztcbmltcG9ydCB7Zmlyc3QsIHdpdGhvdXQsIGZpbmRXaGVyZX0gZnJvbSAndW5kZXJzY29yZSc7XG5cbmNsYXNzIFRydW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gVHJ1bmtTdG9yZS5nZXRTdGF0ZSgpO1xuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBUcnVua1N0b3JlLmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcbiAgICBUcnVua0FjdGlvbnMuZ2V0VHJ1bmtzKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBUcnVua1N0b3JlLnVubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuICB9XG5cbiAgb25DaGFuZ2Uoc3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKHRydW5rKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5UcnVua3M8L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsgdGhpcy5zdGF0ZS50cnVua3MubWFwKCh0cnVuaywgaW5kZXgpICA9PiAge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3RydW5rLl9pZH0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3N0LWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj57dHJ1bmsudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPnt0cnVuay5ib2R5fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89eycvdHJ1bmtzLycgKyB0cnVuay5faWR9IGNsYXNzTmFtZT1cImJyYW5jaGVzLWxpbmtcIj5TZWUgYnJhbmNoZXM8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXZhdGFyJz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmFuY2hlcyc+eDxzcGFuIGNsYXNzTmFtZT0nYmFkZ2UnPjE1PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0YXJzJz4mIzk3MzM7PHNwYW4gY2xhc3NOYW1lPSdiYWRnZSc+MTA8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRydW5rOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJ1bmtTaG93IGZyb20gJy4vVHJ1bmtTaG93LmpzJztcbmltcG9ydCBBZGRCcmFuY2ggZnJvbSAnLi9BZGRCcmFuY2guanMnO1xuXG5jbGFzcyBUcnVua0NvbXBsZXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8VHJ1bmtTaG93IHByb3BzPXt0aGlzLnByb3BzfSAvPlxuICAgICAgICA8QWRkQnJhbmNoIHByb3BzPXt0aGlzLnByb3BzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcnVua0NvbXBsZXRlO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IFRydW5rU2hvd1N0b3JlIGZyb20gJy4uL3N0b3Jlcy9UcnVua1Nob3dTdG9yZSc7XG5pbXBvcnQgVHJ1bmtTaG93QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL1RydW5rU2hvd0FjdGlvbnMnXG5pbXBvcnQgQWRkQnJhbmNoIGZyb20gJy4vQWRkQnJhbmNoJztcblxuY2xhc3MgVHJ1bmtTaG93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IFRydW5rU2hvd1N0b3JlLmdldFN0YXRlKCk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIFRydW5rU2hvd1N0b3JlLmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcbiAgICBUcnVua1Nob3dBY3Rpb25zLmdldFRydW5rU2hvdyh0aGlzLnByb3BzLnBhcmFtcy5pZCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBUcnVua1Nob3dTdG9yZS51bmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgfVxuXG4gIG9uQ2hhbmdlKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj57dGhpcy5zdGF0ZS50aXRsZX08L2gyPlxuICAgICAgICA8aDQ+e3RoaXMuc3RhdGUuYm9keX08L2g0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5CcmFuY2hlczwvaDI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5icmFuY2hlcy5tYXAoKGJyYW5jaCwgaW5kZXgpICA9PiAge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXticmFuY2guX2lkfSA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9zdC1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSc+e2JyYW5jaC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keSc+e2JyYW5jaC5ib2R5fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9icmFuY2hlcy8nICsgYnJhbmNoLl9pZH0gY2xhc3NOYW1lPSdicmFuY2hlcy1saW5rJz5TZWUgYnJhbmNoZXM8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBZGRCcmFuY2ggcHJvcHM9e3RoaXMucHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRydW5rU2hvdzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY3JlYXRlQnJvd3Nlckhpc3RvcnkgZnJvbSAnaGlzdG9yeS9saWIvY3JlYXRlQnJvd3Nlckhpc3RvcnknO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5cbmxldCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcblxuUmVhY3RET00ucmVuZGVyKDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+e3JvdXRlc308L1JvdXRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Um91dGV9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuaW1wb3J0IEFkZFRydW5rIGZyb20gJy4vY29tcG9uZW50cy9BZGRUcnVuayc7XG5pbXBvcnQgVHJ1bmtTaG93IGZyb20gJy4vY29tcG9uZW50cy9UcnVua1Nob3cnO1xuaW1wb3J0IFRydW5rQ29tcGxldGUgZnJvbSAnLi9jb21wb25lbnRzL1RydW5rQ29tcGxldGUnO1xuaW1wb3J0IEJyYW5jaFNob3cgZnJvbSAnLi9jb21wb25lbnRzL0JyYW5jaFNob3cnO1xuXG5leHBvcnQgZGVmYXVsdCAoXG4gIDxSb3V0ZSBjb21wb25lbnQ9e0FwcH0+XG4gICAgPFJvdXRlIHBhdGg9Jy8nIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICA8Um91dGUgcGF0aD0nL3RydW5rcy86aWQnIGNvbXBvbmVudD17VHJ1bmtTaG93fSAvPlxuICAgIDxSb3V0ZSBwYXRoPScvYnJhbmNoZXMvOmlkJyBjb21wb25lbnQ9e0JyYW5jaFNob3d9IC8+XG4gIDwvUm91dGU+XG4pOyIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcbmltcG9ydCBBZGRCcmFuY2hBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvQWRkQnJhbmNoQWN0aW9ucyc7XG5cbmNsYXNzIEFkZEJyYW5jaFN0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iaW5kQWN0aW9ucyhBZGRCcmFuY2hBY3Rpb25zKTtcbiAgICB0aGlzLnBhcmVudCA9ICcnO1xuICAgIHRoaXMudGl0bGUgPSAnJztcbiAgICB0aGlzLmJvZHkgPSAnJztcbiAgICB0aGlzLmhlbHBCbG9jayA9ICcnO1xuICAgIHRoaXMudGl0bGVWYWxpZGF0aW9uU3RhdGUgPSAnJztcbiAgICB0aGlzLmJvZHlWYWxpZGF0aW9uU3RhdGUgPSAnJztcbiAgfVxuICBvbkFkZEJyYW5jaFN1Y2Nlc3Moc3VjY2Vzc01lc3NhZ2UpIHtcbiAgICB0aGlzLnRpdGxlVmFsaWRhdGlvblN0YXRlID0gJ2hhcy1zdWNjZXNzJztcbiAgICB0aGlzLmhlbHBCbG9jayA9IHN1Y2Nlc3NNZXNzYWdlO1xuICB9XG5cbiAgb25BZGRCcmFuY2hGYWlsKGVycm9yTWVzc2FnZSkge1xuICAgIHRoaXMudGl0bGVWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLWVycm9yJztcbiAgICB0aGlzLmhlbHBCbG9jayA9IGVycm9yTWVzc2FnZTtcbiAgfVxuXG4gIG9uVXBkYXRlUGFyZW50KGV2ZW50KSB7XG4gICAgdGhpcy5wYXJlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIH1cblxuICBvblVwZGF0ZVRpdGxlKGV2ZW50KSB7XG4gICAgdGhpcy50aXRsZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnRpdGxlVmFsaWRhdGlvblN0YXRlID0gJyc7XG4gICAgdGhpcy5oZWxwQmxvY2sgPSAnJztcbiAgfVxuXG4gIG9uVXBkYXRlQm9keShldmVudCkge1xuICAgIHRoaXMuYm9keSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLmJvZHlWYWxpZGF0aW9uU3RhdGUgPSAnJztcbiAgfVxuXG4gIG9uSW52YWxpZFRpdGxlKCkge1xuICAgIHRoaXMudGl0bGVWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLWVycm9yJztcbiAgICB0aGlzLmhlbHBCbG9jayA9ICdQbGVhc2UgZW50ZXIgYSB0aXRsZS4nO1xuICB9XG5cbiAgb25JbnZhbGlkQm9keSgpIHtcbiAgICB0aGlzLmJvZHlWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLWVycm9yJztcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVTdG9yZShBZGRCcmFuY2hTdG9yZSk7XG4iLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5pbXBvcnQgQWRkVHJ1bmtBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvQWRkVHJ1bmtBY3Rpb25zJztcblxuY2xhc3MgQWRkVHJ1bmtTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmluZEFjdGlvbnMoQWRkVHJ1bmtBY3Rpb25zKTtcbiAgICB0aGlzLnRpdGxlID0gJyc7XG4gICAgdGhpcy5ib2R5ID0gJyc7XG4gICAgdGhpcy5oZWxwQmxvY2sgPSAnJztcbiAgICB0aGlzLnRpdGxlVmFsaWRhdGlvblN0YXRlID0gJyc7XG4gICAgdGhpcy5ib2R5VmFsaWRhdGlvblN0YXRlID0gJyc7XG4gIH1cblxuICBvbkFkZFRydW5rU3VjY2VzcyhzdWNjZXNzTWVzc2FnZSkge1xuICAgIHRoaXMudGl0bGVWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLXN1Y2Nlc3MnO1xuICAgIHRoaXMuaGVscEJsb2NrID0gc3VjY2Vzc01lc3NhZ2U7XG4gIH1cblxuICBvbkFkZFRydW5rRmFpbChlcnJvck1lc3NhZ2UpIHtcbiAgICB0aGlzLnRpdGxlVmFsaWRhdGlvblN0YXRlID0gJ2hhcy1lcnJvcic7XG4gICAgdGhpcy5oZWxwQmxvY2sgPSBlcnJvck1lc3NhZ2U7XG4gIH1cblxuICBvblVwZGF0ZVRpdGxlKGV2ZW50KSB7XG4gICAgdGhpcy50aXRsZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnRpdGxlVmFsaWRhdGlvblN0YXRlID0gJyc7XG4gICAgdGhpcy5oZWxwQmxvY2sgPSAnJztcbiAgfVxuXG4gIG9uVXBkYXRlQm9keShldmVudCkge1xuICAgIHRoaXMuYm9keSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLmJvZHlWYWxpZGF0aW9uU3RhdGUgPSAnJztcbiAgfVxuXG4gIG9uSW52YWxpZFRpdGxlKCkge1xuICAgIHRoaXMudGl0bGVWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLWVycm9yJztcbiAgICB0aGlzLmhlbHBCbG9jayA9ICdQbGVhc2UgZW50ZXIgYSB0aXRsZS4nO1xuICB9XG5cbiAgb25JbnZhbGlkQm9keSgpIHtcbiAgICB0aGlzLmJvZHlWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLWVycm9yJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlU3RvcmUoQWRkVHJ1bmtTdG9yZSk7IiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuaW1wb3J0IEJyYW5jaFNob3dBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvQnJhbmNoU2hvd0FjdGlvbnMnO1xuXG5jbGFzcyBCcmFuY2hTaG93U3RvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJpbmRBY3Rpb25zKEJyYW5jaFNob3dBY3Rpb25zKTtcbiAgICB0aGlzLnBhcmVudF9pZCA9ICcnO1xuICAgIHRoaXMuYnJhbmNoSWQgPSAwO1xuICAgIHRoaXMudGl0bGUgPSAnVEJEJztcbiAgICB0aGlzLmJvZHkgPSAnVEJEJztcbiAgICB0aGlzLmJyYW5jaGVzID0gW107XG4gIH1cblxuICBvbkdldEJyYW5jaFNob3dTdWNjZXNzKGRhdGEpIHtcbiAgICB0aGlzLnBhcmVudF9pZCA9IGRhdGFbMF0ucGFyZW50X2lkO1xuICAgIHRoaXMudGl0bGUgPSBkYXRhWzBdLnRpdGxlO1xuICAgIHRoaXMuYm9keSA9IGRhdGFbMF0uYm9keTtcbiAgICB0aGlzLmJyYW5jaGVzID0gZGF0YVsxXTtcbiAgfVxuXG4gIG9uR2V0QnJhbmNoU2hvd0ZhaWwoanFYaHIpIHtcbiAgICB0b2FzdHIuZXJyb3IoanFYaHIucmVzcG9uc2VKU09OLm1lc3NhZ2UpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZVN0b3JlKEJyYW5jaFNob3dTdG9yZSk7IiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuaW1wb3J0IE5hdmJhckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9OYXZiYXJBY3Rpb25zJztcblxuY2xhc3MgTmF2YmFyU3RvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJpbmRBY3Rpb25zKE5hdmJhckFjdGlvbnMpO1xuICAgIHRoaXMudG90YWxDaGFyYWN0ZXJzID0gMDtcbiAgICB0aGlzLm9ubGluZVVzZXJzID0gMDtcbiAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gJyc7XG4gICAgdGhpcy5hamF4QW5pbWF0aW9uQ2xhc3MgPSAnJztcbiAgfVxuXG4gIG9uRmluZENoYXJhY3RlclN1Y2Nlc3MocGF5bG9hZCkge1xuICAgIHBheWxvYWQuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJy9jaGFyYWN0ZXJzLycgKyBwYXlsb2FkLmNoYXJhY3RlcklkKTtcbiAgfVxuXG4gIG9uRmluZENoYXJhY3RlckZhaWwocGF5bG9hZCkge1xuICAgIHBheWxvYWQuc2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKCdzaGFrZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcGF5bG9hZC5zZWFyY2hGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3NoYWtlJyk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBvblVwZGF0ZU9ubGluZVVzZXJzKGRhdGEpIHtcbiAgICB0aGlzLm9ubGluZVVzZXJzID0gZGF0YS5vbmxpbmVVc2VycztcbiAgfVxuXG4gIG9uVXBkYXRlQWpheEFuaW1hdGlvbihjbGFzc05hbWUpIHtcbiAgICB0aGlzLmFqYXhBbmltYXRpb25DbGFzcyA9IGNsYXNzTmFtZTsgLy9mYWRlaW4gb3IgZmFkZW91dFxuICB9XG5cbiAgb25VcGRhdGVTZWFyY2hRdWVyeShldmVudCkge1xuICAgIHRoaXMuc2VhcmNoUXVlcnkgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIH1cblxuICBvbkdldENoYXJhY3RlckNvdW50U3VjY2VzcyhkYXRhKSB7XG4gICAgdGhpcy50b3RhbENoYXJhY3RlcnMgPSBkYXRhLmNvdW50O1xuICB9XG5cbiAgb25HZXRDaGFyYWN0ZXJDb3VudEZhaWwoanFYaHIpIHtcbiAgICB0b2FzdHIuZXJyb3IoanFYaHIucmVzcG9uc2VKU09OLm1lc3NhZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVTdG9yZShOYXZiYXJTdG9yZSk7IiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuaW1wb3J0IFRydW5rU2hvd0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9UcnVua1Nob3dBY3Rpb25zJztcblxuY2xhc3MgVHJ1bmtTaG93U3RvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJpbmRBY3Rpb25zKFRydW5rU2hvd0FjdGlvbnMpO1xuICAgIHRoaXMudHJ1bmtJZCA9IDA7XG4gICAgdGhpcy50aXRsZSA9ICdUQkQnO1xuICAgIHRoaXMuYm9keSA9ICdUQkQnO1xuICAgIHRoaXMuYnJhbmNoZXMgPSBbXTtcbiAgfVxuXG4gIG9uR2V0VHJ1bmtTaG93U3VjY2VzcyhkYXRhKSB7XG4gICAgdGhpcy50aXRsZSA9IGRhdGFbMF0udGl0bGU7XG4gICAgdGhpcy5ib2R5ID0gZGF0YVswXS5ib2R5O1xuICAgIHRoaXMuYnJhbmNoZXMgPSBkYXRhWzFdO1xuICB9XG5cbiAgb25HZXRUcnVua1Nob3dGYWlsKGpxWGhyKSB7XG4gICAgdG9hc3RyLmVycm9yKGpxWGhyLnJlc3BvbnNlSlNPTi5tZXNzYWdlKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVTdG9yZShUcnVua1Nob3dTdG9yZSk7IiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuaW1wb3J0IFRydW5rQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL1RydW5rQWN0aW9ucyc7XG5cbmNsYXNzIFRydW5rU3RvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJpbmRBY3Rpb25zKFRydW5rQWN0aW9ucyk7XG4gICAgdGhpcy50cnVua3MgPSBbXTtcbiAgfVxuXG4gIG9uR2V0VHJ1bmtzU3VjY2VzcyhkYXRhKSB7XG4gICAgdGhpcy50cnVua3MgPSBkYXRhO1xuICB9XG5cbiAgb25HZXRUcnVua3NGYWlsKGVycm9yTWVzc2FnZSkge1xuICAgIHRvYXN0ci5lcnJvcihlcnJvck1lc3NhZ2UpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZVN0b3JlKFRydW5rU3RvcmUpO1xuIiwidmFyIHBTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi9saWIva2V5cy5qcycpO1xudmFyIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9saWIvaXNfYXJndW1lbnRzLmpzJyk7XG5cbnZhciBkZWVwRXF1YWwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhY3R1YWwsIGV4cGVjdGVkLCBvcHRzKSB7XG4gIGlmICghb3B0cykgb3B0cyA9IHt9O1xuICAvLyA3LjEuIEFsbCBpZGVudGljYWwgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBhcyBkZXRlcm1pbmVkIGJ5ID09PS5cbiAgaWYgKGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKGFjdHVhbCBpbnN0YW5jZW9mIERhdGUgJiYgZXhwZWN0ZWQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIGFjdHVhbC5nZXRUaW1lKCkgPT09IGV4cGVjdGVkLmdldFRpbWUoKTtcblxuICAvLyA3LjMuIE90aGVyIHBhaXJzIHRoYXQgZG8gbm90IGJvdGggcGFzcyB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcsXG4gIC8vIGVxdWl2YWxlbmNlIGlzIGRldGVybWluZWQgYnkgPT0uXG4gIH0gZWxzZSBpZiAoIWFjdHVhbCB8fCAhZXhwZWN0ZWQgfHwgdHlwZW9mIGFjdHVhbCAhPSAnb2JqZWN0JyAmJiB0eXBlb2YgZXhwZWN0ZWQgIT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb3B0cy5zdHJpY3QgPyBhY3R1YWwgPT09IGV4cGVjdGVkIDogYWN0dWFsID09IGV4cGVjdGVkO1xuXG4gIC8vIDcuNC4gRm9yIGFsbCBvdGhlciBPYmplY3QgcGFpcnMsIGluY2x1ZGluZyBBcnJheSBvYmplY3RzLCBlcXVpdmFsZW5jZSBpc1xuICAvLyBkZXRlcm1pbmVkIGJ5IGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoYXMgdmVyaWZpZWRcbiAgLy8gd2l0aCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwpLCB0aGUgc2FtZSBzZXQgb2Yga2V5c1xuICAvLyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSwgZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5XG4gIC8vIGNvcnJlc3BvbmRpbmcga2V5LCBhbmQgYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LiBOb3RlOiB0aGlzXG4gIC8vIGFjY291bnRzIGZvciBib3RoIG5hbWVkIGFuZCBpbmRleGVkIHByb3BlcnRpZXMgb24gQXJyYXlzLlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmpFcXVpdihhY3R1YWwsIGV4cGVjdGVkLCBvcHRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKHgpIHtcbiAgaWYgKCF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgeC5sZW5ndGggIT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgeC5jb3B5ICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB4LnNsaWNlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh4Lmxlbmd0aCA+IDAgJiYgdHlwZW9mIHhbMF0gIT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBvYmpFcXVpdihhLCBiLCBvcHRzKSB7XG4gIHZhciBpLCBrZXk7XG4gIGlmIChpc1VuZGVmaW5lZE9yTnVsbChhKSB8fCBpc1VuZGVmaW5lZE9yTnVsbChiKSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS5cbiAgaWYgKGEucHJvdG90eXBlICE9PSBiLnByb3RvdHlwZSkgcmV0dXJuIGZhbHNlO1xuICAvL35+fkkndmUgbWFuYWdlZCB0byBicmVhayBPYmplY3Qua2V5cyB0aHJvdWdoIHNjcmV3eSBhcmd1bWVudHMgcGFzc2luZy5cbiAgLy8gICBDb252ZXJ0aW5nIHRvIGFycmF5IHNvbHZlcyB0aGUgcHJvYmxlbS5cbiAgaWYgKGlzQXJndW1lbnRzKGEpKSB7XG4gICAgaWYgKCFpc0FyZ3VtZW50cyhiKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhID0gcFNsaWNlLmNhbGwoYSk7XG4gICAgYiA9IHBTbGljZS5jYWxsKGIpO1xuICAgIHJldHVybiBkZWVwRXF1YWwoYSwgYiwgb3B0cyk7XG4gIH1cbiAgaWYgKGlzQnVmZmVyKGEpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihiKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHRyeSB7XG4gICAgdmFyIGthID0gb2JqZWN0S2V5cyhhKSxcbiAgICAgICAga2IgPSBvYmplY3RLZXlzKGIpO1xuICB9IGNhdGNoIChlKSB7Ly9oYXBwZW5zIHdoZW4gb25lIGlzIGEgc3RyaW5nIGxpdGVyYWwgYW5kIHRoZSBvdGhlciBpc24ndFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGtleXMgaW5jb3Jwb3JhdGVzXG4gIC8vIGhhc093blByb3BlcnR5KVxuICBpZiAoa2EubGVuZ3RoICE9IGtiLmxlbmd0aClcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vdGhlIHNhbWUgc2V0IG9mIGtleXMgKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksXG4gIGthLnNvcnQoKTtcbiAga2Iuc29ydCgpO1xuICAvL35+fmNoZWFwIGtleSB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGthW2ldICE9IGtiW2ldKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5IGNvcnJlc3BvbmRpbmcga2V5LCBhbmRcbiAgLy9+fn5wb3NzaWJseSBleHBlbnNpdmUgZGVlcCB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAga2V5ID0ga2FbaV07XG4gICAgaWYgKCFkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0sIG9wdHMpKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBhID09PSB0eXBlb2YgYjtcbn1cbiIsInZhciBzdXBwb3J0c0FyZ3VtZW50c0NsYXNzID0gKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnRzKVxufSkoKSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gc3VwcG9ydHNBcmd1bWVudHNDbGFzcyA/IHN1cHBvcnRlZCA6IHVuc3VwcG9ydGVkO1xuXG5leHBvcnRzLnN1cHBvcnRlZCA9IHN1cHBvcnRlZDtcbmZ1bmN0aW9uIHN1cHBvcnRlZChvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xufTtcblxuZXhwb3J0cy51bnN1cHBvcnRlZCA9IHVuc3VwcG9ydGVkO1xuZnVuY3Rpb24gdW5zdXBwb3J0ZWQob2JqZWN0KXtcbiAgcmV0dXJuIG9iamVjdCAmJlxuICAgIHR5cGVvZiBvYmplY3QgPT0gJ29iamVjdCcgJiZcbiAgICB0eXBlb2Ygb2JqZWN0Lmxlbmd0aCA9PSAnbnVtYmVyJyAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdjYWxsZWUnKSAmJlxuICAgICFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCAnY2FsbGVlJykgfHxcbiAgICBmYWxzZTtcbn07XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbidcbiAgPyBPYmplY3Qua2V5cyA6IHNoaW07XG5cbmV4cG9ydHMuc2hpbSA9IHNoaW07XG5mdW5jdGlvbiBzaGltIChvYmopIHtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikga2V5cy5wdXNoKGtleSk7XG4gIHJldHVybiBrZXlzO1xufVxuIiwiLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgYSBjYWxsIHRvIGhpc3RvcnkucHVzaC5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFBVU0ggPSAnUFVTSCc7XG5cbmV4cG9ydHMuUFVTSCA9IFBVU0g7XG4vKipcbiAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBhIGNhbGwgdG8gaGlzdG9yeS5yZXBsYWNlLlxuICovXG52YXIgUkVQTEFDRSA9ICdSRVBMQUNFJztcblxuZXhwb3J0cy5SRVBMQUNFID0gUkVQTEFDRTtcbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IHNvbWUgb3RoZXIgYWN0aW9uIHN1Y2hcbiAqIGFzIHVzaW5nIGEgYnJvd3NlcidzIGJhY2svZm9yd2FyZCBidXR0b25zIGFuZC9vciBtYW51YWxseSBtYW5pcHVsYXRpbmdcbiAqIHRoZSBVUkwgaW4gYSBicm93c2VyJ3MgbG9jYXRpb24gYmFyLiBUaGlzIGlzIHRoZSBkZWZhdWx0LlxuICpcbiAqIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93RXZlbnRIYW5kbGVycy9vbnBvcHN0YXRlXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqL1xudmFyIFBPUCA9ICdQT1AnO1xuXG5leHBvcnRzLlBPUCA9IFBPUDtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgUFVTSDogUFVTSCxcbiAgUkVQTEFDRTogUkVQTEFDRSxcbiAgUE9QOiBQT1Bcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmxvb3BBc3luYyA9IGxvb3BBc3luYztcblxuZnVuY3Rpb24gbG9vcEFzeW5jKHR1cm5zLCB3b3JrLCBjYWxsYmFjaykge1xuICB2YXIgY3VycmVudFR1cm4gPSAwO1xuICB2YXIgaXNEb25lID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBpc0RvbmUgPSB0cnVlO1xuICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGlmIChpc0RvbmUpIHJldHVybjtcblxuICAgIGlmIChjdXJyZW50VHVybiA8IHR1cm5zKSB7XG4gICAgICB3b3JrLmNhbGwodGhpcywgY3VycmVudFR1cm4rKywgbmV4dCwgZG9uZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBuZXh0KCk7XG59IiwiLyplc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zYXZlU3RhdGUgPSBzYXZlU3RhdGU7XG5leHBvcnRzLnJlYWRTdGF0ZSA9IHJlYWRTdGF0ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIEtleVByZWZpeCA9ICdAQEhpc3RvcnkvJztcbnZhciBRdW90YUV4Y2VlZGVkRXJyb3IgPSAnUXVvdGFFeGNlZWRlZEVycm9yJztcbnZhciBTZWN1cml0eUVycm9yID0gJ1NlY3VyaXR5RXJyb3InO1xuXG5mdW5jdGlvbiBjcmVhdGVLZXkoa2V5KSB7XG4gIHJldHVybiBLZXlQcmVmaXggKyBrZXk7XG59XG5cbmZ1bmN0aW9uIHNhdmVTdGF0ZShrZXksIHN0YXRlKSB7XG4gIHRyeSB7XG4gICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oY3JlYXRlS2V5KGtleSksIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLm5hbWUgPT09IFNlY3VyaXR5RXJyb3IpIHtcbiAgICAgIC8vIEJsb2NraW5nIGNvb2tpZXMgaW4gQ2hyb21lL0ZpcmVmb3gvU2FmYXJpIHRocm93cyBTZWN1cml0eUVycm9yIG9uIGFueVxuICAgICAgLy8gYXR0ZW1wdCB0byBhY2Nlc3Mgd2luZG93LnNlc3Npb25TdG9yYWdlLlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnW2hpc3RvcnldIFVuYWJsZSB0byBzYXZlIHN0YXRlOyBzZXNzaW9uU3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlIGR1ZSB0byBzZWN1cml0eSBzZXR0aW5ncycpIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVycm9yLm5hbWUgPT09IFF1b3RhRXhjZWVkZWRFcnJvciAmJiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBTYWZhcmkgXCJwcml2YXRlIG1vZGVcIiB0aHJvd3MgUXVvdGFFeGNlZWRlZEVycm9yLlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnW2hpc3RvcnldIFVuYWJsZSB0byBzYXZlIHN0YXRlOyBzZXNzaW9uU3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlIGluIFNhZmFyaSBwcml2YXRlIG1vZGUnKSA6IHVuZGVmaW5lZDtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlYWRTdGF0ZShrZXkpIHtcbiAgdmFyIGpzb24gPSB1bmRlZmluZWQ7XG4gIHRyeSB7XG4gICAganNvbiA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGNyZWF0ZUtleShrZXkpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IubmFtZSA9PT0gU2VjdXJpdHlFcnJvcikge1xuICAgICAgLy8gQmxvY2tpbmcgY29va2llcyBpbiBDaHJvbWUvRmlyZWZveC9TYWZhcmkgdGhyb3dzIFNlY3VyaXR5RXJyb3Igb24gYW55XG4gICAgICAvLyBhdHRlbXB0IHRvIGFjY2VzcyB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdbaGlzdG9yeV0gVW5hYmxlIHRvIHJlYWQgc3RhdGU7IHNlc3Npb25TdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUgZHVlIHRvIHNlY3VyaXR5IHNldHRpbmdzJykgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGlmIChqc29uKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb24pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBJZ25vcmUgaW52YWxpZCBKU09OLlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuYWRkRXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXI7XG5leHBvcnRzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSByZW1vdmVFdmVudExpc3RlbmVyO1xuZXhwb3J0cy5nZXRIYXNoUGF0aCA9IGdldEhhc2hQYXRoO1xuZXhwb3J0cy5yZXBsYWNlSGFzaFBhdGggPSByZXBsYWNlSGFzaFBhdGg7XG5leHBvcnRzLmdldFdpbmRvd1BhdGggPSBnZXRXaW5kb3dQYXRoO1xuZXhwb3J0cy5nbyA9IGdvO1xuZXhwb3J0cy5nZXRVc2VyQ29uZmlybWF0aW9uID0gZ2V0VXNlckNvbmZpcm1hdGlvbjtcbmV4cG9ydHMuc3VwcG9ydHNIaXN0b3J5ID0gc3VwcG9ydHNIaXN0b3J5O1xuZXhwb3J0cy5zdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCA9IHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoO1xuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICBpZiAobm9kZS5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgaWYgKG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlLmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEhhc2hQYXRoKCkge1xuICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LmxvY2F0aW9uLmhhc2ggaGVyZSBiZWNhdXNlIGl0J3Mgbm90XG4gIC8vIGNvbnNpc3RlbnQgYWNyb3NzIGJyb3dzZXJzIC0gRmlyZWZveCB3aWxsIHByZS1kZWNvZGUgaXQhXG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzFdIHx8ICcnO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlSGFzaFBhdGgocGF0aCkge1xuICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgJyMnICsgcGF0aCk7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1BhdGgoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2g7XG59XG5cbmZ1bmN0aW9uIGdvKG4pIHtcbiAgaWYgKG4pIHdpbmRvdy5oaXN0b3J5LmdvKG4pO1xufVxuXG5mdW5jdGlvbiBnZXRVc2VyQ29uZmlybWF0aW9uKG1lc3NhZ2UsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGlzIHN1cHBvcnRlZC4gVGFrZW4gZnJvbSBNb2Rlcm5penIuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2hpc3RvcnkuanNcbiAqIGNoYW5nZWQgdG8gYXZvaWQgZmFsc2UgbmVnYXRpdmVzIGZvciBXaW5kb3dzIFBob25lczogaHR0cHM6Ly9naXRodWIuY29tL3JhY2t0L3JlYWN0LXJvdXRlci9pc3N1ZXMvNTg2XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNIaXN0b3J5KCkge1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICBpZiAoKHVhLmluZGV4T2YoJ0FuZHJvaWQgMi4nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignQW5kcm9pZCA0LjAnKSAhPT0gLTEpICYmIHVhLmluZGV4T2YoJ01vYmlsZSBTYWZhcmknKSAhPT0gLTEgJiYgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmIHVhLmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gRklYTUU6IFdvcmsgYXJvdW5kIG91ciBicm93c2VyIGhpc3Rvcnkgbm90IHdvcmtpbmcgY29ycmVjdGx5IG9uIENocm9tZVxuICAvLyBpT1M6IGh0dHBzOi8vZ2l0aHViLmNvbS9yYWNrdC9yZWFjdC1yb3V0ZXIvaXNzdWVzLzI1NjVcbiAgaWYgKHVhLmluZGV4T2YoJ0NyaU9TJykgIT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGZhbHNlIGlmIHVzaW5nIGdvKG4pIHdpdGggaGFzaCBoaXN0b3J5IGNhdXNlcyBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2goKSB7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIHJldHVybiB1YS5pbmRleE9mKCdGaXJlZm94JykgPT09IC0xO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuZXhwb3J0cy5jYW5Vc2VET00gPSBjYW5Vc2VET007IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX0V4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG52YXIgX0RPTVN0YXRlU3RvcmFnZSA9IHJlcXVpcmUoJy4vRE9NU3RhdGVTdG9yYWdlJyk7XG5cbnZhciBfY3JlYXRlRE9NSGlzdG9yeSA9IHJlcXVpcmUoJy4vY3JlYXRlRE9NSGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZURPTUhpc3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRE9NSGlzdG9yeSk7XG5cbnZhciBfcGFyc2VQYXRoID0gcmVxdWlyZSgnLi9wYXJzZVBhdGgnKTtcblxudmFyIF9wYXJzZVBhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyc2VQYXRoKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgaGlzdG9yeSBvYmplY3QgdGhhdCB1c2VzIEhUTUw1J3MgaGlzdG9yeSBBUElcbiAqIChwdXNoU3RhdGUsIHJlcGxhY2VTdGF0ZSwgYW5kIHRoZSBwb3BzdGF0ZSBldmVudCkgdG8gbWFuYWdlIGhpc3RvcnkuXG4gKiBUaGlzIGlzIHRoZSByZWNvbW1lbmRlZCBtZXRob2Qgb2YgbWFuYWdpbmcgaGlzdG9yeSBpbiBicm93c2VycyBiZWNhdXNlXG4gKiBpdCBwcm92aWRlcyB0aGUgY2xlYW5lc3QgVVJMcy5cbiAqXG4gKiBOb3RlOiBJbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBmdWxsXG4gKiBwYWdlIHJlbG9hZHMgd2lsbCBiZSB1c2VkIHRvIHByZXNlcnZlIFVSTHMuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICFfRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UsICdCcm93c2VyIGhpc3RvcnkgbmVlZHMgYSBET00nKSA6IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UpIDogdW5kZWZpbmVkO1xuXG4gIHZhciBmb3JjZVJlZnJlc2ggPSBvcHRpb25zLmZvcmNlUmVmcmVzaDtcblxuICB2YXIgaXNTdXBwb3J0ZWQgPSBfRE9NVXRpbHMuc3VwcG9ydHNIaXN0b3J5KCk7XG4gIHZhciB1c2VSZWZyZXNoID0gIWlzU3VwcG9ydGVkIHx8IGZvcmNlUmVmcmVzaDtcblxuICBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24oaGlzdG9yeVN0YXRlKSB7XG4gICAgaGlzdG9yeVN0YXRlID0gaGlzdG9yeVN0YXRlIHx8IHdpbmRvdy5oaXN0b3J5LnN0YXRlIHx8IHt9O1xuXG4gICAgdmFyIHBhdGggPSBfRE9NVXRpbHMuZ2V0V2luZG93UGF0aCgpO1xuICAgIHZhciBfaGlzdG9yeVN0YXRlID0gaGlzdG9yeVN0YXRlO1xuICAgIHZhciBrZXkgPSBfaGlzdG9yeVN0YXRlLmtleTtcblxuICAgIHZhciBzdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBzdGF0ZSA9IF9ET01TdGF0ZVN0b3JhZ2UucmVhZFN0YXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlID0gbnVsbDtcbiAgICAgIGtleSA9IGhpc3RvcnkuY3JlYXRlS2V5KCk7XG5cbiAgICAgIGlmIChpc1N1cHBvcnRlZCkgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKF9leHRlbmRzKHt9LCBoaXN0b3J5U3RhdGUsIHsga2V5OiBrZXkgfSksIG51bGwsIHBhdGgpO1xuICAgIH1cblxuICAgIHZhciBsb2NhdGlvbiA9IF9wYXJzZVBhdGgyWydkZWZhdWx0J10ocGF0aCk7XG5cbiAgICByZXR1cm4gaGlzdG9yeS5jcmVhdGVMb2NhdGlvbihfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHsgc3RhdGU6IHN0YXRlIH0pLCB1bmRlZmluZWQsIGtleSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydFBvcFN0YXRlTGlzdGVuZXIoX3JlZikge1xuICAgIHZhciB0cmFuc2l0aW9uVG8gPSBfcmVmLnRyYW5zaXRpb25UbztcblxuICAgIGZ1bmN0aW9uIHBvcFN0YXRlTGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5zdGF0ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47IC8vIElnbm9yZSBleHRyYW5lb3VzIHBvcHN0YXRlIGV2ZW50cyBpbiBXZWJLaXQuXG5cbiAgICAgIHRyYW5zaXRpb25UbyhnZXRDdXJyZW50TG9jYXRpb24oZXZlbnQuc3RhdGUpKTtcbiAgICB9XG5cbiAgICBfRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdwb3BzdGF0ZScsIHBvcFN0YXRlTGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIF9ET01VdGlscy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ3BvcHN0YXRlJywgcG9wU3RhdGVMaXN0ZW5lcik7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmlzaFRyYW5zaXRpb24obG9jYXRpb24pIHtcbiAgICB2YXIgYmFzZW5hbWUgPSBsb2NhdGlvbi5iYXNlbmFtZTtcbiAgICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICB2YXIgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoO1xuICAgIHZhciBoYXNoID0gbG9jYXRpb24uaGFzaDtcbiAgICB2YXIgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcbiAgICB2YXIgYWN0aW9uID0gbG9jYXRpb24uYWN0aW9uO1xuICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXk7XG5cbiAgICBpZiAoYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHJldHVybjsgLy8gTm90aGluZyB0byBkby5cblxuICAgIF9ET01TdGF0ZVN0b3JhZ2Uuc2F2ZVN0YXRlKGtleSwgc3RhdGUpO1xuXG4gICAgdmFyIHBhdGggPSAoYmFzZW5hbWUgfHwgJycpICsgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xuICAgIHZhciBoaXN0b3J5U3RhdGUgPSB7XG4gICAgICBrZXk6IGtleVxuICAgIH07XG5cbiAgICBpZiAoYWN0aW9uID09PSBfQWN0aW9ucy5QVVNIKSB7XG4gICAgICBpZiAodXNlUmVmcmVzaCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGg7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gUHJldmVudCBsb2NhdGlvbiB1cGRhdGUuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShoaXN0b3J5U3RhdGUsIG51bGwsIHBhdGgpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJFUExBQ0VcbiAgICAgIGlmICh1c2VSZWZyZXNoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHBhdGgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIFByZXZlbnQgbG9jYXRpb24gdXBkYXRlLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeVN0YXRlLCBudWxsLCBwYXRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBoaXN0b3J5ID0gX2NyZWF0ZURPTUhpc3RvcnkyWydkZWZhdWx0J10oX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICBnZXRDdXJyZW50TG9jYXRpb246IGdldEN1cnJlbnRMb2NhdGlvbixcbiAgICBmaW5pc2hUcmFuc2l0aW9uOiBmaW5pc2hUcmFuc2l0aW9uLFxuICAgIHNhdmVTdGF0ZTogX0RPTVN0YXRlU3RvcmFnZS5zYXZlU3RhdGVcbiAgfSkpO1xuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMCxcbiAgICAgIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbkJlZm9yZShsaXN0ZW5lcikge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKGhpc3RvcnkpO1xuXG4gICAgdmFyIHVubGlzdGVuID0gaGlzdG9yeS5saXN0ZW5CZWZvcmUobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHVubGlzdGVuKCk7XG5cbiAgICAgIGlmICgtLWxpc3RlbmVyQ291bnQgPT09IDApIHN0b3BQb3BTdGF0ZUxpc3RlbmVyKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKGhpc3RvcnkpO1xuXG4gICAgdmFyIHVubGlzdGVuID0gaGlzdG9yeS5saXN0ZW4obGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHVubGlzdGVuKCk7XG5cbiAgICAgIGlmICgtLWxpc3RlbmVyQ291bnQgPT09IDApIHN0b3BQb3BTdGF0ZUxpc3RlbmVyKCk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgaWYgKCsrbGlzdGVuZXJDb3VudCA9PT0gMSkgc3RvcFBvcFN0YXRlTGlzdGVuZXIgPSBzdGFydFBvcFN0YXRlTGlzdGVuZXIoaGlzdG9yeSk7XG5cbiAgICBoaXN0b3J5LnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vayk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgaGlzdG9yeS51bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vayk7XG5cbiAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wUG9wU3RhdGVMaXN0ZW5lcigpO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgcmVnaXN0ZXJUcmFuc2l0aW9uSG9vazogcmVnaXN0ZXJUcmFuc2l0aW9uSG9vayxcbiAgICB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9va1xuICB9KTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlQnJvd3Nlckhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9FeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxudmFyIF9jcmVhdGVIaXN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVIaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlSGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVIaXN0b3J5KTtcblxuZnVuY3Rpb24gY3JlYXRlRE9NSGlzdG9yeShvcHRpb25zKSB7XG4gIHZhciBoaXN0b3J5ID0gX2NyZWF0ZUhpc3RvcnkyWydkZWZhdWx0J10oX2V4dGVuZHMoe1xuICAgIGdldFVzZXJDb25maXJtYXRpb246IF9ET01VdGlscy5nZXRVc2VyQ29uZmlybWF0aW9uXG4gIH0sIG9wdGlvbnMsIHtcbiAgICBnbzogX0RPTVV0aWxzLmdvXG4gIH0pKTtcblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICAhX0V4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlLCAnRE9NIGhpc3RvcnkgbmVlZHMgYSBET00nKSA6IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UpIDogdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIGhpc3RvcnkubGlzdGVuKGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwge1xuICAgIGxpc3RlbjogbGlzdGVuXG4gIH0pO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVET01IaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLy9pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJ1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfZGVlcEVxdWFsID0gcmVxdWlyZSgnZGVlcC1lcXVhbCcpO1xuXG52YXIgX2RlZXBFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWVwRXF1YWwpO1xuXG52YXIgX0FzeW5jVXRpbHMgPSByZXF1aXJlKCcuL0FzeW5jVXRpbHMnKTtcblxudmFyIF9BY3Rpb25zID0gcmVxdWlyZSgnLi9BY3Rpb25zJyk7XG5cbnZhciBfY3JlYXRlTG9jYXRpb24yID0gcmVxdWlyZSgnLi9jcmVhdGVMb2NhdGlvbicpO1xuXG52YXIgX2NyZWF0ZUxvY2F0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUxvY2F0aW9uMik7XG5cbnZhciBfcnVuVHJhbnNpdGlvbkhvb2sgPSByZXF1aXJlKCcuL3J1blRyYW5zaXRpb25Ib29rJyk7XG5cbnZhciBfcnVuVHJhbnNpdGlvbkhvb2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcnVuVHJhbnNpdGlvbkhvb2spO1xuXG52YXIgX3BhcnNlUGF0aCA9IHJlcXVpcmUoJy4vcGFyc2VQYXRoJyk7XG5cbnZhciBfcGFyc2VQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlUGF0aCk7XG5cbnZhciBfZGVwcmVjYXRlID0gcmVxdWlyZSgnLi9kZXByZWNhdGUnKTtcblxudmFyIF9kZXByZWNhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVwcmVjYXRlKTtcblxuZnVuY3Rpb24gY3JlYXRlUmFuZG9tS2V5KGxlbmd0aCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIGxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIGxvY2F0aW9uc0FyZUVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEucGF0aG5hbWUgPT09IGIucGF0aG5hbWUgJiYgYS5zZWFyY2ggPT09IGIuc2VhcmNoICYmXG4gIC8vYS5hY3Rpb24gPT09IGIuYWN0aW9uICYmIC8vIERpZmZlcmVudCBhY3Rpb24gIT09IGxvY2F0aW9uIGNoYW5nZS5cbiAgYS5rZXkgPT09IGIua2V5ICYmIF9kZWVwRXF1YWwyWydkZWZhdWx0J10oYS5zdGF0ZSwgYi5zdGF0ZSk7XG59XG5cbnZhciBEZWZhdWx0S2V5TGVuZ3RoID0gNjtcblxuZnVuY3Rpb24gY3JlYXRlSGlzdG9yeSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgdmFyIGdldEN1cnJlbnRMb2NhdGlvbiA9IG9wdGlvbnMuZ2V0Q3VycmVudExvY2F0aW9uO1xuICB2YXIgZmluaXNoVHJhbnNpdGlvbiA9IG9wdGlvbnMuZmluaXNoVHJhbnNpdGlvbjtcbiAgdmFyIHNhdmVTdGF0ZSA9IG9wdGlvbnMuc2F2ZVN0YXRlO1xuICB2YXIgZ28gPSBvcHRpb25zLmdvO1xuICB2YXIga2V5TGVuZ3RoID0gb3B0aW9ucy5rZXlMZW5ndGg7XG4gIHZhciBnZXRVc2VyQ29uZmlybWF0aW9uID0gb3B0aW9ucy5nZXRVc2VyQ29uZmlybWF0aW9uO1xuXG4gIGlmICh0eXBlb2Yga2V5TGVuZ3RoICE9PSAnbnVtYmVyJykga2V5TGVuZ3RoID0gRGVmYXVsdEtleUxlbmd0aDtcblxuICB2YXIgdHJhbnNpdGlvbkhvb2tzID0gW107XG5cbiAgZnVuY3Rpb24gbGlzdGVuQmVmb3JlKGhvb2spIHtcbiAgICB0cmFuc2l0aW9uSG9va3MucHVzaChob29rKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cmFuc2l0aW9uSG9va3MgPSB0cmFuc2l0aW9uSG9va3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBob29rO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBhbGxLZXlzID0gW107XG4gIHZhciBjaGFuZ2VMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIGxvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnQoKSB7XG4gICAgaWYgKHBlbmRpbmdMb2NhdGlvbiAmJiBwZW5kaW5nTG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHtcbiAgICAgIHJldHVybiBhbGxLZXlzLmluZGV4T2YocGVuZGluZ0xvY2F0aW9uLmtleSk7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbikge1xuICAgICAgcmV0dXJuIGFsbEtleXMuaW5kZXhPZihsb2NhdGlvbi5rZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTG9jYXRpb24obmV3TG9jYXRpb24pIHtcbiAgICB2YXIgY3VycmVudCA9IGdldEN1cnJlbnQoKTtcblxuICAgIGxvY2F0aW9uID0gbmV3TG9jYXRpb247XG5cbiAgICBpZiAobG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QVVNIKSB7XG4gICAgICBhbGxLZXlzID0gW10uY29uY2F0KGFsbEtleXMuc2xpY2UoMCwgY3VycmVudCArIDEpLCBbbG9jYXRpb24ua2V5XSk7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlJFUExBQ0UpIHtcbiAgICAgIGFsbEtleXNbY3VycmVudF0gPSBsb2NhdGlvbi5rZXk7XG4gICAgfVxuXG4gICAgY2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcihsb2NhdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICBjaGFuZ2VMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgIGxpc3RlbmVyKGxvY2F0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9sb2NhdGlvbiA9IGdldEN1cnJlbnRMb2NhdGlvbigpO1xuICAgICAgYWxsS2V5cyA9IFtfbG9jYXRpb24ua2V5XTtcbiAgICAgIHVwZGF0ZUxvY2F0aW9uKF9sb2NhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoYW5nZUxpc3RlbmVycyA9IGNoYW5nZUxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGxpc3RlbmVyO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgX0FzeW5jVXRpbHMubG9vcEFzeW5jKHRyYW5zaXRpb25Ib29rcy5sZW5ndGgsIGZ1bmN0aW9uIChpbmRleCwgbmV4dCwgZG9uZSkge1xuICAgICAgX3J1blRyYW5zaXRpb25Ib29rMlsnZGVmYXVsdCddKHRyYW5zaXRpb25Ib29rc1tpbmRleF0sIGxvY2F0aW9uLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgIGRvbmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICBpZiAoZ2V0VXNlckNvbmZpcm1hdGlvbiAmJiB0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbihtZXNzYWdlLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgICBjYWxsYmFjayhvayAhPT0gZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKG1lc3NhZ2UgIT09IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBwZW5kaW5nTG9jYXRpb24gPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvblRvKG5leHRMb2NhdGlvbikge1xuICAgIGlmIChsb2NhdGlvbiAmJiBsb2NhdGlvbnNBcmVFcXVhbChsb2NhdGlvbiwgbmV4dExvY2F0aW9uKSkgcmV0dXJuOyAvLyBOb3RoaW5nIHRvIGRvLlxuXG4gICAgcGVuZGluZ0xvY2F0aW9uID0gbmV4dExvY2F0aW9uO1xuXG4gICAgY29uZmlybVRyYW5zaXRpb25UbyhuZXh0TG9jYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKHBlbmRpbmdMb2NhdGlvbiAhPT0gbmV4dExvY2F0aW9uKSByZXR1cm47IC8vIFRyYW5zaXRpb24gd2FzIGludGVycnVwdGVkLlxuXG4gICAgICBpZiAob2spIHtcbiAgICAgICAgLy8gdHJlYXQgUFVTSCB0byBjdXJyZW50IHBhdGggbGlrZSBSRVBMQUNFIHRvIGJlIGNvbnNpc3RlbnQgd2l0aCBicm93c2Vyc1xuICAgICAgICBpZiAobmV4dExvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgICAgIHZhciBwcmV2UGF0aCA9IGNyZWF0ZVBhdGgobG9jYXRpb24pO1xuICAgICAgICAgIHZhciBuZXh0UGF0aCA9IGNyZWF0ZVBhdGgobmV4dExvY2F0aW9uKTtcblxuICAgICAgICAgIGlmIChuZXh0UGF0aCA9PT0gcHJldlBhdGgpIG5leHRMb2NhdGlvbi5hY3Rpb24gPSBfQWN0aW9ucy5SRVBMQUNFO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpbmlzaFRyYW5zaXRpb24obmV4dExvY2F0aW9uKSAhPT0gZmFsc2UpIHVwZGF0ZUxvY2F0aW9uKG5leHRMb2NhdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKGxvY2F0aW9uICYmIG5leHRMb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlBPUCkge1xuICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGxvY2F0aW9uLmtleSk7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSBhbGxLZXlzLmluZGV4T2YobmV4dExvY2F0aW9uLmtleSk7XG5cbiAgICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEgJiYgbmV4dEluZGV4ICE9PSAtMSkgZ28ocHJldkluZGV4IC0gbmV4dEluZGV4KTsgLy8gUmVzdG9yZSB0aGUgVVJMLlxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHVzaChsb2NhdGlvbikge1xuICAgIHRyYW5zaXRpb25UbyhjcmVhdGVMb2NhdGlvbihsb2NhdGlvbiwgX0FjdGlvbnMuUFVTSCwgY3JlYXRlS2V5KCkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2UobG9jYXRpb24pIHtcbiAgICB0cmFuc2l0aW9uVG8oY3JlYXRlTG9jYXRpb24obG9jYXRpb24sIF9BY3Rpb25zLlJFUExBQ0UsIGNyZWF0ZUtleSgpKSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgZ28oLTEpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29Gb3J3YXJkKCkge1xuICAgIGdvKDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBjcmVhdGVSYW5kb21LZXkoa2V5TGVuZ3RoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBhdGgobG9jYXRpb24pIHtcbiAgICBpZiAobG9jYXRpb24gPT0gbnVsbCB8fCB0eXBlb2YgbG9jYXRpb24gPT09ICdzdHJpbmcnKSByZXR1cm4gbG9jYXRpb247XG5cbiAgICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICB2YXIgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoO1xuICAgIHZhciBoYXNoID0gbG9jYXRpb24uaGFzaDtcblxuICAgIHZhciByZXN1bHQgPSBwYXRobmFtZTtcblxuICAgIGlmIChzZWFyY2gpIHJlc3VsdCArPSBzZWFyY2g7XG5cbiAgICBpZiAoaGFzaCkgcmVzdWx0ICs9IGhhc2g7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgIHJldHVybiBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uLCBhY3Rpb24pIHtcbiAgICB2YXIga2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gY3JlYXRlS2V5KCkgOiBhcmd1bWVudHNbMl07XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vd2FybmluZyhcbiAgICAgIC8vICBmYWxzZSxcbiAgICAgIC8vICAnVGhlIHN0YXRlICgybmQpIGFyZ3VtZW50IHRvIGhpc3RvcnkuY3JlYXRlTG9jYXRpb24gaXMgZGVwcmVjYXRlZDsgdXNlIGEgJyArXG4gICAgICAvLyAgJ2xvY2F0aW9uIGRlc2NyaXB0b3IgaW5zdGVhZCdcbiAgICAgIC8vKVxuXG4gICAgICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgbG9jYXRpb24gPSBfcGFyc2VQYXRoMlsnZGVmYXVsdCddKGxvY2F0aW9uKTtcblxuICAgICAgbG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHsgc3RhdGU6IGFjdGlvbiB9KTtcblxuICAgICAgYWN0aW9uID0ga2V5O1xuICAgICAga2V5ID0gYXJndW1lbnRzWzNdIHx8IGNyZWF0ZUtleSgpO1xuICAgIH1cblxuICAgIHJldHVybiBfY3JlYXRlTG9jYXRpb24zWydkZWZhdWx0J10obG9jYXRpb24sIGFjdGlvbiwga2V5KTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUpIHtcbiAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgIHVwZGF0ZUxvY2F0aW9uU3RhdGUobG9jYXRpb24sIHN0YXRlKTtcbiAgICAgIHVwZGF0ZUxvY2F0aW9uKGxvY2F0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlTG9jYXRpb25TdGF0ZShnZXRDdXJyZW50TG9jYXRpb24oKSwgc3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUxvY2F0aW9uU3RhdGUobG9jYXRpb24sIHN0YXRlKSB7XG4gICAgbG9jYXRpb24uc3RhdGUgPSBfZXh0ZW5kcyh7fSwgbG9jYXRpb24uc3RhdGUsIHN0YXRlKTtcbiAgICBzYXZlU3RhdGUobG9jYXRpb24ua2V5LCBsb2NhdGlvbi5zdGF0ZSk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIGlmICh0cmFuc2l0aW9uSG9va3MuaW5kZXhPZihob29rKSA9PT0gLTEpIHRyYW5zaXRpb25Ib29rcy5wdXNoKGhvb2spO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIHRyYW5zaXRpb25Ib29rcyA9IHRyYW5zaXRpb25Ib29rcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtICE9PSBob29rO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiBwdXNoU3RhdGUoc3RhdGUsIHBhdGgpIHtcbiAgICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSBwYXRoID0gX3BhcnNlUGF0aDJbJ2RlZmF1bHQnXShwYXRoKTtcblxuICAgIHB1c2goX2V4dGVuZHMoeyBzdGF0ZTogc3RhdGUgfSwgcGF0aCkpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZXBsYWNlU3RhdGUoc3RhdGUsIHBhdGgpIHtcbiAgICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSBwYXRoID0gX3BhcnNlUGF0aDJbJ2RlZmF1bHQnXShwYXRoKTtcblxuICAgIHJlcGxhY2UoX2V4dGVuZHMoeyBzdGF0ZTogc3RhdGUgfSwgcGF0aCkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsaXN0ZW5CZWZvcmU6IGxpc3RlbkJlZm9yZSxcbiAgICBsaXN0ZW46IGxpc3RlbixcbiAgICB0cmFuc2l0aW9uVG86IHRyYW5zaXRpb25UbyxcbiAgICBwdXNoOiBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgZ286IGdvLFxuICAgIGdvQmFjazogZ29CYWNrLFxuICAgIGdvRm9yd2FyZDogZ29Gb3J3YXJkLFxuICAgIGNyZWF0ZUtleTogY3JlYXRlS2V5LFxuICAgIGNyZWF0ZVBhdGg6IGNyZWF0ZVBhdGgsXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBjcmVhdGVMb2NhdGlvbjogY3JlYXRlTG9jYXRpb24sXG5cbiAgICBzZXRTdGF0ZTogX2RlcHJlY2F0ZTJbJ2RlZmF1bHQnXShzZXRTdGF0ZSwgJ3NldFN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSBsb2NhdGlvbi5rZXkgdG8gc2F2ZSBzdGF0ZSBpbnN0ZWFkJyksXG4gICAgcmVnaXN0ZXJUcmFuc2l0aW9uSG9vazogX2RlcHJlY2F0ZTJbJ2RlZmF1bHQnXShyZWdpc3RlclRyYW5zaXRpb25Ib29rLCAncmVnaXN0ZXJUcmFuc2l0aW9uSG9vayBpcyBkZXByZWNhdGVkOyB1c2UgbGlzdGVuQmVmb3JlIGluc3RlYWQnKSxcbiAgICB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IF9kZXByZWNhdGUyWydkZWZhdWx0J10odW5yZWdpc3RlclRyYW5zaXRpb25Ib29rLCAndW5yZWdpc3RlclRyYW5zaXRpb25Ib29rIGlzIGRlcHJlY2F0ZWQ7IHVzZSB0aGUgY2FsbGJhY2sgcmV0dXJuZWQgZnJvbSBsaXN0ZW5CZWZvcmUgaW5zdGVhZCcpLFxuICAgIHB1c2hTdGF0ZTogX2RlcHJlY2F0ZTJbJ2RlZmF1bHQnXShwdXNoU3RhdGUsICdwdXNoU3RhdGUgaXMgZGVwcmVjYXRlZDsgdXNlIHB1c2ggaW5zdGVhZCcpLFxuICAgIHJlcGxhY2VTdGF0ZTogX2RlcHJlY2F0ZTJbJ2RlZmF1bHQnXShyZXBsYWNlU3RhdGUsICdyZXBsYWNlU3RhdGUgaXMgZGVwcmVjYXRlZDsgdXNlIHJlcGxhY2UgaW5zdGVhZCcpXG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvL2ltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9BY3Rpb25zID0gcmVxdWlyZSgnLi9BY3Rpb25zJyk7XG5cbnZhciBfcGFyc2VQYXRoID0gcmVxdWlyZSgnLi9wYXJzZVBhdGgnKTtcblxudmFyIF9wYXJzZVBhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyc2VQYXRoKTtcblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oKSB7XG4gIHZhciBsb2NhdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/ICcvJyA6IGFyZ3VtZW50c1swXTtcbiAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IF9BY3Rpb25zLlBPUCA6IGFyZ3VtZW50c1sxXTtcbiAgdmFyIGtleSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMl07XG5cbiAgdmFyIF9mb3VydGhBcmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzNdO1xuXG4gIGlmICh0eXBlb2YgbG9jYXRpb24gPT09ICdzdHJpbmcnKSBsb2NhdGlvbiA9IF9wYXJzZVBhdGgyWydkZWZhdWx0J10obG9jYXRpb24pO1xuXG4gIGlmICh0eXBlb2YgYWN0aW9uID09PSAnb2JqZWN0Jykge1xuICAgIC8vd2FybmluZyhcbiAgICAvLyAgZmFsc2UsXG4gICAgLy8gICdUaGUgc3RhdGUgKDJuZCkgYXJndW1lbnQgdG8gY3JlYXRlTG9jYXRpb24gaXMgZGVwcmVjYXRlZDsgdXNlIGEgJyArXG4gICAgLy8gICdsb2NhdGlvbiBkZXNjcmlwdG9yIGluc3RlYWQnXG4gICAgLy8pXG5cbiAgICBsb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBsb2NhdGlvbiwgeyBzdGF0ZTogYWN0aW9uIH0pO1xuXG4gICAgYWN0aW9uID0ga2V5IHx8IF9BY3Rpb25zLlBPUDtcbiAgICBrZXkgPSBfZm91cnRoQXJnO1xuICB9XG5cbiAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUgfHwgJy8nO1xuICB2YXIgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoIHx8ICcnO1xuICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2ggfHwgJyc7XG4gIHZhciBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlIHx8IG51bGw7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBzZWFyY2gsXG4gICAgaGFzaDogaGFzaCxcbiAgICBzdGF0ZTogc3RhdGUsXG4gICAgYWN0aW9uOiBhY3Rpb24sXG4gICAga2V5OiBrZXlcbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlTG9jYXRpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvL2ltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnXG5cblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gZGVwcmVjYXRlKGZuKSB7XG4gIHJldHVybiBmbjtcbiAgLy9yZXR1cm4gZnVuY3Rpb24gKCkge1xuICAvLyAgd2FybmluZyhmYWxzZSwgJ1toaXN0b3J5XSAnICsgbWVzc2FnZSlcbiAgLy8gIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIC8vfVxufVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGRlcHJlY2F0ZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBleHRyYWN0UGF0aChzdHJpbmcpIHtcbiAgdmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKC9eaHR0cHM/OlxcL1xcL1teXFwvXSovKTtcblxuICBpZiAobWF0Y2ggPT0gbnVsbCkgcmV0dXJuIHN0cmluZztcblxuICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZyhtYXRjaFswXS5sZW5ndGgpO1xufVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4dHJhY3RQYXRoO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfZXh0cmFjdFBhdGggPSByZXF1aXJlKCcuL2V4dHJhY3RQYXRoJyk7XG5cbnZhciBfZXh0cmFjdFBhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0cmFjdFBhdGgpO1xuXG5mdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkge1xuICB2YXIgcGF0aG5hbWUgPSBfZXh0cmFjdFBhdGgyWydkZWZhdWx0J10ocGF0aCk7XG4gIHZhciBzZWFyY2ggPSAnJztcbiAgdmFyIGhhc2ggPSAnJztcblxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10ocGF0aCA9PT0gcGF0aG5hbWUsICdBIHBhdGggbXVzdCBiZSBwYXRobmFtZSArIHNlYXJjaCArIGhhc2ggb25seSwgbm90IGEgZnVsbHkgcXVhbGlmaWVkIFVSTCBsaWtlIFwiJXNcIicsIHBhdGgpIDogdW5kZWZpbmVkO1xuXG4gIHZhciBoYXNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoSW5kZXggIT09IC0xKSB7XG4gICAgaGFzaCA9IHBhdGhuYW1lLnN1YnN0cmluZyhoYXNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyaW5nKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgc2VhcmNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCc/Jyk7XG4gIGlmIChzZWFyY2hJbmRleCAhPT0gLTEpIHtcbiAgICBzZWFyY2ggPSBwYXRobmFtZS5zdWJzdHJpbmcoc2VhcmNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyaW5nKDAsIHNlYXJjaEluZGV4KTtcbiAgfVxuXG4gIGlmIChwYXRobmFtZSA9PT0gJycpIHBhdGhuYW1lID0gJy8nO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2hcbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gcGFyc2VQYXRoO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBydW5UcmFuc2l0aW9uSG9vayhob29rLCBsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgdmFyIHJlc3VsdCA9IGhvb2sobG9jYXRpb24sIGNhbGxiYWNrKTtcblxuICBpZiAoaG9vay5sZW5ndGggPCAyKSB7XG4gICAgLy8gQXNzdW1lIHRoZSBob29rIHJ1bnMgc3luY2hyb25vdXNseSBhbmQgYXV0b21hdGljYWxseVxuICAgIC8vIGNhbGwgdGhlIGNhbGxiYWNrIHdpdGggdGhlIHJldHVybiB2YWx1ZS5cbiAgICBjYWxsYmFjayhyZXN1bHQpO1xuICB9IGVsc2Uge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShyZXN1bHQgPT09IHVuZGVmaW5lZCwgJ1lvdSBzaG91bGQgbm90IFwicmV0dXJuXCIgaW4gYSB0cmFuc2l0aW9uIGhvb2sgd2l0aCBhIGNhbGxiYWNrIGFyZ3VtZW50OyBjYWxsIHRoZSBjYWxsYmFjayBpbnN0ZWFkJykgOiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gcnVuVHJhbnNpdGlvbkhvb2s7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAoL15bc1xcV10qJC8pLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIl19