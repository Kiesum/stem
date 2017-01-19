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
            _react2.default.createElement(
              'div',
              { className: 'radio radio-inline' },
              _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'bodyTextField', value: this.state.body,
                onChange: _AddBranchActions2.default.updateBody })
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
      return _react2.default.createElement(
        'div',
        { className: 'container' },
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
            { className: 'row' },
            this.state.branches.map(function (branch, index) {
              return _react2.default.createElement(
                'div',
                { key: branch._id },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'div',
                    { className: 'caption text-center' },
                    _react2.default.createElement(
                      'ul',
                      { className: 'list-inline' },
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/branches/' + branch._id },
                        'See branches'
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'h3',
                          null,
                          branch.title
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        branch.body
                      )
                    )
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
        { className: 'alert alert-info' },
        _react2.default.createElement(
          'h1',
          null,
          'Hello from Home Component'
        ),
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
            'NEF',
            _react2.default.createElement(
              'span',
              { className: 'badge badge-up badge-danger' },
              this.state.onlineUsers
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'navbar', className: 'navbar-collapse collapse' },
          _react2.default.createElement(
            'form',
            { ref: 'searchForm', className: 'navbar-form navbar-left animated', onSubmit: this.handleSubmit.bind(this) },
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: this.state.totalCharacters + ' characters', value: this.state.searchQuery, onChange: _NavbarActions2.default.updateSearchQuery }),
              _react2.default.createElement(
                'span',
                { className: 'input-group-btn' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-default', onClick: this.handleSubmit.bind(this) },
                  _react2.default.createElement('span', { className: 'glyphicon glyphicon-search' })
                )
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'nav navbar-nav' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                'Home'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/stats' },
                'Stats'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                'Top 100 ',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/top' },
                    'Top Overall'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/top/caldari' },
                    'Caldari'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/caldari/achura' },
                        'Achura'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/caldari/civire' },
                        'Civire'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/caldari/deteis' },
                        'Deteis'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/top/gallente' },
                    'Gallente'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/gallente/gallente' },
                        'Gallente'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/gallente/intaki' },
                        'Intaki'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/gallente/jin-mei' },
                        'Jin-Mei'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/top/minmatar' },
                    'Minmatar'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/minmatar/brutor' },
                        'Brutor'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/minmatar/sebiestor' },
                        'Sebiestor'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/minmatar/vherokior' },
                        'Vherokior'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/top/amarr' },
                    'Amarr'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/amarr/amarr' },
                        'Amarr'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/amarr/ni-kunni' },
                        'Ni-Kunni'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/amarr/khanid' },
                        'Khanid'
                      )
                    )
                  )
                ),
                _react2.default.createElement('li', { className: 'divider' }),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/shame' },
                    'Hall of Shame'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                'Female ',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/female' },
                    'All'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/female/caldari' },
                    'Caldari'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/caldari/achura' },
                        'Achura'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/caldari/civire/' },
                        'Civire'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/caldari/deteis' },
                        'Deteis'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/female/gallente' },
                    'Gallente'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/gallente/gallente' },
                        'Gallente'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/gallente/intaki' },
                        'Intaki'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/gallente/jin-mei' },
                        'Jin-Mei'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/female/minmatar' },
                    'Minmatar'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/minmatar/brutor' },
                        'Brutor'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/minmatar/sebiestor' },
                        'Sebiestor'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/minmatar/vherokior' },
                        'Vherokior'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/female/amarr' },
                    'Amarr'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/amarr/amarr' },
                        'Amarr'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/amarr/ni-kunni' },
                        'Ni-Kunni'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/amarr/khanid' },
                        'Khanid'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                'Male ',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/male' },
                    'All'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/male/caldari' },
                    'Caldari'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/caldari/achura' },
                        'Achura'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/caldari/civire' },
                        'Civire'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/caldari/deteis' },
                        'Deteis'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/male/gallente' },
                    'Gallente'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/gallente/gallente' },
                        'Gallente'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/gallente/intaki' },
                        'Intaki'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/gallente/jin-mei' },
                        'Jin-Mei'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/male/minmatar' },
                    'Minmatar'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/minmatar/brutor' },
                        'Brutor'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/minmatar/sebiestor' },
                        'Sebiestor'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/minmatar/vherokior' },
                        'Vherokior'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/male/amarr' },
                    'Amarr'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/amarr/amarr' },
                        'Amarr'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/amarr/ni-kunni' },
                        'Ni-Kunni'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/amarr/khanid' },
                        'Khanid'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/add' },
                'Add'
              )
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
        { className: 'container' },
        _react2.default.createElement(
          'h2',
          { className: 'text-center' },
          'Trunks'
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          this.state.trunks.map(function (trunk, index) {
            return _react2.default.createElement(
              'div',
              { key: trunk._id },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'caption text-center' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/trunks/' + trunk._id },
                    'See branches'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'list-inline' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'h3',
                        null,
                        trunk.title
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      trunk.body
                    )
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
        { className: 'container' },
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
            { className: 'row' },
            this.state.branches.map(function (branch, index) {
              return _react2.default.createElement(
                'div',
                { key: branch._id },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'div',
                    { className: 'caption text-center' },
                    _react2.default.createElement(
                      'ul',
                      { className: 'list-inline' },
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/branches/' + branch._id },
                        'See branches'
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'h3',
                          null,
                          branch.title
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        branch.body
                      )
                    )
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
    this.branchId = 0;
    this.title = 'TBD';
    this.body = 'TBD';
    this.branches = [];
  }

  _createClass(BranchShowStore, [{
    key: 'onGetBranchShowSuccess',
    value: function onGetBranchShowSuccess(data) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYWN0aW9ucy9BZGRCcmFuY2hBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvQWRkVHJ1bmtBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvQnJhbmNoU2hvd0FjdGlvbnMuanMiLCJhcHAvYWN0aW9ucy9OYXZiYXJBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvVHJ1bmtBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvVHJ1bmtTaG93QWN0aW9ucy5qcyIsImFwcC9hbHQuanMiLCJhcHAvY29tcG9uZW50cy9BZGRCcmFuY2guanMiLCJhcHAvY29tcG9uZW50cy9BZGRUcnVuay5qcyIsImFwcC9jb21wb25lbnRzL0FwcC5qcyIsImFwcC9jb21wb25lbnRzL0JyYW5jaFNob3cuanMiLCJhcHAvY29tcG9uZW50cy9Ib21lLmpzIiwiYXBwL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwiYXBwL2NvbXBvbmVudHMvVHJ1bmsuanMiLCJhcHAvY29tcG9uZW50cy9UcnVua0NvbXBsZXRlLmpzIiwiYXBwL2NvbXBvbmVudHMvVHJ1bmtTaG93LmpzIiwiYXBwL21haW4uanMiLCJhcHAvcm91dGVzLmpzIiwiYXBwL3N0b3Jlcy9BZGRCcmFuY2hTdG9yZS5qcyIsImFwcC9zdG9yZXMvQWRkVHJ1bmtTdG9yZS5qcyIsImFwcC9zdG9yZXMvQnJhbmNoU2hvd1N0b3JlLmpzIiwiYXBwL3N0b3Jlcy9OYXZiYXJTdG9yZS5qcyIsImFwcC9zdG9yZXMvVHJ1bmtTaG93U3RvcmUuanMiLCJhcHAvc3RvcmVzL1RydW5rU3RvcmUuanMiLCJub2RlX21vZHVsZXMvZGVlcC1lcXVhbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2xpYi9pc19hcmd1bWVudHMuanMiLCJub2RlX21vZHVsZXMvZGVlcC1lcXVhbC9saWIva2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9BY3Rpb25zLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0FzeW5jVXRpbHMuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvRE9NU3RhdGVTdG9yYWdlLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0RPTVV0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2NyZWF0ZUJyb3dzZXJIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2NyZWF0ZURPTUhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvY3JlYXRlSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVMb2NhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9kZXByZWNhdGUuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvZXh0cmFjdFBhdGguanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvcGFyc2VQYXRoLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL3J1blRyYW5zaXRpb25Ib29rLmpzIiwibm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0FBOzs7Ozs7OztJQUVNLGdCO0FBQ0osOEJBQWM7QUFBQTs7QUFDWixTQUFLLGVBQUwsQ0FDSSxrQkFESixFQUVJLGVBRkosRUFHSSxjQUhKLEVBSUksYUFKSixFQUtJLFlBTEosRUFNSSxjQU5KLEVBT0ksYUFQSjtBQVNEOzs7OzhCQUVTLE0sRUFBUSxLLEVBQU8sSSxFQUFNO0FBQUE7O0FBQzdCLFFBQUUsSUFBRixDQUFPO0FBQ0wsY0FBTSxNQUREO0FBRUwsYUFBSyxtQkFGQTtBQUdMLGNBQU0sRUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNqTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcblxuY2xhc3MgQWRkQnJhbmNoQWN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zKFxuICAgICAgICAnYWRkQnJhbmNoU3VjY2VzcycsXG4gICAgICAgICdhZGRCcmFuY2hGYWlsJyxcbiAgICAgICAgJ3VwZGF0ZVBhcmVudCcsXG4gICAgICAgICd1cGRhdGVUaXRsZScsXG4gICAgICAgICd1cGRhdGVCb2R5JyxcbiAgICAgICAgJ2ludmFsaWRUaXRsZScsXG4gICAgICAgICdpbnZhbGlkQm9keScsXG4gICAgICApXG4gIH1cblxuICBhZGRCcmFuY2gocGFyZW50LCB0aXRsZSwgYm9keSkge1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICB1cmw6ICcvYXBpL2JyYW5jaGVzL25ldycsXG4gICAgICBkYXRhOiB7IHBhcmVudDogcGFyZW50LCB0aXRsZTogdGl0bGUsIGJvZHk6IGJvZHkgfVxuICAgIH0pXG4gICAgICAuZG9uZSgoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbnMuYWRkQnJhbmNoU3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgfSlcbiAgICAgIC5mYWlsKChqcVhocikgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbnMuYWRkQnJhbmNoRmFpbChqcVhoci5yZXNwb25zZUpTT04ubWVzc2FnZSk7XG4gICAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKEFkZEJyYW5jaEFjdGlvbnMpO1xuICBcbiAiLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5cbmNsYXNzIEFkZFRydW5rQWN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zKFxuICAgICAgJ2FkZFRydW5rU3VjY2VzcycsXG4gICAgICAnYWRkVHJ1bmtGYWlsJyxcbiAgICAgICd1cGRhdGVUaXRsZScsXG4gICAgICAndXBkYXRlQm9keScsXG4gICAgICAnaW52YWxpZFRpdGxlJyxcbiAgICAgICdpbnZhbGlkQm9keSdcbiAgICApO1xuICB9XG5cbiAgYWRkVHJ1bmsodGl0bGUsIGJvZHkpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgdXJsOiAnL2FwaS90cnVua3MvbmV3JyxcbiAgICAgIGRhdGE6IHsgdGl0bGU6IHRpdGxlLCBib2R5OiBib2R5IH1cbiAgICB9KVxuICAgICAgLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmFkZFRydW5rU3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgfSlcbiAgICAgIC5mYWlsKChqcVhocikgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbnMuYWRkVHJ1bmtGYWlsKGpxWGhyLnJlc3BvbnNlSlNPTi5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKEFkZFRydW5rQWN0aW9ucyk7IiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuXG5jbGFzcyBCcmFuY2hTaG93QWN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zKFxuICAgICAgJ2dldEJyYW5jaFNob3dTdWNjZXNzJyxcbiAgICAgICdnZXRCcmFuY2hTaG93RmFpbCdcbiAgICApO1xuICB9XG5cbiAgZ2V0QnJhbmNoU2hvdyhicmFuY2hJZCkge1xuICAgICQuYWpheCh7IHVybDogJy9hcGkvYnJhbmNoZXMvJyArIGJyYW5jaElkIH0pXG4gICAgICAuZG9uZSgoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbnMuZ2V0QnJhbmNoU2hvd1N1Y2Nlc3MoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmZhaWwoKGpxWGhyKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5nZXRCcmFuY2hTaG93RmFpbChqcVhocik7XG4gICAgICB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKEJyYW5jaFNob3dBY3Rpb25zKTsiLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5pbXBvcnQge2Fzc2lnbn0gZnJvbSAndW5kZXJzY29yZSc7XG5cbmNsYXNzIE5hdmJhckFjdGlvbnMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdlbmVyYXRlQWN0aW9ucyhcbiAgICAgICd1cGRhdGVPbmxpbmVVc2VycycsXG4gICAgICAndXBkYXRlQWpheEFuaW1hdGlvbicsXG4gICAgICAndXBkYXRlU2VhcmNoUXVlcnknLFxuICAgICAgJ2dldENoYXJhY3RlckNvdW50U3VjY2VzcycsXG4gICAgICAnZ2V0Q2hhcmFjdGVyQ291bnRGYWlsJyxcbiAgICAgICdmaW5kQ2hhcmFjdGVyU3VjY2VzcycsXG4gICAgICAnZmluZENoYXJhY3RlckZhaWwnXG4gICAgKTtcbiAgfVxuXG4gIGZpbmRDaGFyYWN0ZXIocGF5bG9hZCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvYXBpL2NoYXJhY3RlcnMvc2VhcmNoJyxcbiAgICAgIGRhdGE6IHsgbmFtZTogcGF5bG9hZC5zZWFyY2hRdWVyeSB9XG4gICAgfSlcbiAgICAgIC5kb25lKChkYXRhKSA9PiB7XG4gICAgICAgIGFzc2lnbihwYXlsb2FkLCBkYXRhKTtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmZpbmRDaGFyYWN0ZXJTdWNjZXNzKHBheWxvYWQpO1xuICAgICAgfSlcbiAgICAgIC5mYWlsKCgpID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmZpbmRDaGFyYWN0ZXJGYWlsKHBheWxvYWQpO1xuICAgICAgfSk7XG4gIH1cblxuICBnZXRDaGFyYWN0ZXJDb3VudCgpIHtcbiAgICAkLmFqYXgoeyB1cmw6ICcvYXBpL2NoYXJhY3RlcnMvY291bnQnIH0pXG4gICAgICAuZG9uZSgoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbnMuZ2V0Q2hhcmFjdGVyQ291bnRTdWNjZXNzKGRhdGEpXG4gICAgICB9KVxuICAgICAgLmZhaWwoKGpxWGhyKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5nZXRDaGFyYWN0ZXJDb3VudEZhaWwoanFYaHIpXG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlQWN0aW9ucyhOYXZiYXJBY3Rpb25zKTsiLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5cbmNsYXNzIFRydW5rQWN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zKFxuICAgICAgJ2dldFRydW5rc1N1Y2Nlc3MnLFxuICAgICAgJ2dldFRydW5rc0ZhaWwnLFxuICAgICk7XG4gIH1cblxuICBnZXRUcnVua3MoKSB7XG4gICAgJC5hamF4KHsgdXJsOiAnL2FwaS90cnVua3MnIH0pXG4gICAgICAuZG9uZShkYXRhID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmdldFRydW5rc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmZhaWwoanFYaHIgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbnMuZ2V0VHJ1bmtzRmFpbChqcVhoci5yZXNwb25zZUpTT04ubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKFRydW5rQWN0aW9ucyk7IiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuXG5jbGFzcyBUcnVua1Nob3dBY3Rpb25zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nZW5lcmF0ZUFjdGlvbnMoXG4gICAgICAnZ2V0VHJ1bmtTaG93U3VjY2VzcycsXG4gICAgICAnZ2V0VHJ1bmtTaG93RmFpbCdcbiAgICApO1xuICB9XG5cbiAgZ2V0VHJ1bmtTaG93KHRydW5rSWQpIHtcbiAgICAkLmFqYXgoeyB1cmw6ICcvYXBpL3RydW5rcy8nICsgdHJ1bmtJZCB9KVxuICAgICAgLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmdldFRydW5rU2hvd1N1Y2Nlc3MoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmZhaWwoKGpxWGhyKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5nZXRUcnVua1Nob3dGYWlsKGpxWGhyKTtcbiAgICAgIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZUFjdGlvbnMoVHJ1bmtTaG93QWN0aW9ucyk7IiwiaW1wb3J0IEFsdCBmcm9tICdhbHQnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWx0KCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBZGRCcmFuY2hTdG9yZSBmcm9tICcuLi9zdG9yZXMvQWRkQnJhbmNoU3RvcmUnO1xuaW1wb3J0IEFkZEJyYW5jaEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9BZGRCcmFuY2hBY3Rpb25zJztcbmltcG9ydCBUcnVua1Nob3dBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvVHJ1bmtTaG93QWN0aW9ucyc7XG5pbXBvcnQgQnJhbmNoU2hvd0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9CcmFuY2hTaG93QWN0aW9ucyc7XG5cbmNsYXNzIEFkZEJyYW5jaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSBBZGRCcmFuY2hTdG9yZS5nZXRTdGF0ZSgpO1xuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBBZGRCcmFuY2hTdG9yZS5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBBZGRCcmFuY2hTdG9yZS51bmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMucHJvcHMucHJvcHMucGFyYW1zLmlkO1xuICAgIHZhciB0aXRsZSA9IHRoaXMuc3RhdGUudGl0bGUudHJpbSgpO1xuICAgIHZhciBib2R5ID0gdGhpcy5zdGF0ZS5ib2R5O1xuXG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgQWRkQnJhbmNoQWN0aW9ucy5pbnZhbGlkVGl0bGUoKTtcbiAgICB9XG5cbiAgICBpZiAoIWJvZHkpIHtcbiAgICAgIEFkZEJyYW5jaEFjdGlvbnMuaW52YWxpZEJvZHkoKTtcbiAgICB9XG5cbiAgICBpZiAodGl0bGUgJiYgYm9keSkge1xuICAgICAgQWRkQnJhbmNoQWN0aW9ucy5hZGRCcmFuY2gocGFyZW50LCB0aXRsZSwgYm9keSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5wcm9wcy5yb3V0ZS5wYXRoID09PSBcIi90cnVua3MvOmlkXCIpIHtcbiAgICAgICAgVHJ1bmtTaG93QWN0aW9ucy5nZXRUcnVua1Nob3codGhpcy5wcm9wcy5wcm9wcy5wYXJhbXMuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQnJhbmNoU2hvd0FjdGlvbnMuZ2V0QnJhbmNoU2hvdyh0aGlzLnByb3BzLnByb3BzLnBhcmFtcy5pZCk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmb3JtLWdyb3VwICcgKyB0aGlzLnN0YXRlLm5hbWVWYWxpZGF0aW9uU3RhdGV9PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nY29udHJvbC1sYWJlbCc+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyByZWY9J3RpdGxlVGV4dEZpZWxkJyB2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17QWRkQnJhbmNoQWN0aW9ucy51cGRhdGVUaXRsZX0gYXV0b0ZvY3VzLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naGVscC1ibG9jayc+e3RoaXMuc3RhdGUuaGVscEJsb2NrfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm0tZ3JvdXAgJyArIHRoaXMuc3RhdGUuYm9keVZhbGlkYXRpb25TdGF0ZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFkaW8gcmFkaW8taW5saW5lJz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyByZWY9J2JvZHlUZXh0RmllbGQnIHZhbHVlPXt0aGlzLnN0YXRlLmJvZHl9XG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17QWRkQnJhbmNoQWN0aW9ucy51cGRhdGVCb2R5fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+IFxuICAgICAgPC9kaXY+XG4gICAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRCcmFuY2g7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFkZFRydW5rU3RvcmUgZnJvbSAnLi4vc3RvcmVzL0FkZFRydW5rU3RvcmUnO1xuaW1wb3J0IEFkZFRydW5rQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0FkZFRydW5rQWN0aW9ucyc7XG5cbmNsYXNzIEFkZFRydW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IEFkZFRydW5rU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQWRkVHJ1bmtTdG9yZS5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBBZGRUcnVua1N0b3JlLnVubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuICB9XG5cbiAgb25DaGFuZ2Uoc3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIgdGl0bGUgPSB0aGlzLnN0YXRlLnRpdGxlLnRyaW0oKTtcbiAgICB2YXIgYm9keSA9IHRoaXMuc3RhdGUuYm9keTtcblxuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIEFkZFRydW5rQWN0aW9ucy5pbnZhbGlkVGl0bGUoKTtcbiAgICAgIHRoaXMucmVmcy50aXRsZVRleHRGaWVsZC5nZXRET01Ob2RlKCkuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBpZiAoIWJvZHkpIHtcbiAgICAgIEFkZFRydW5rQWN0aW9ucy5pbnZhbGlkQm9keSgpO1xuICAgIH1cblxuICAgIGlmICh0aXRsZSAmJiBib2R5KSB7XG4gICAgICBBZGRUcnVua0FjdGlvbnMuYWRkVHJ1bmsodGl0bGUsIGJvZHkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZm9ybS1ncm91cCAnICsgdGhpcy5zdGF0ZS5uYW1lVmFsaWRhdGlvblN0YXRlfT5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2NvbnRyb2wtbGFiZWwnPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgcmVmPSd0aXRsZVRleHRGaWVsZCcgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e0FkZFRydW5rQWN0aW9ucy51cGRhdGVUaXRsZX0gYXV0b0ZvY3VzLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naGVscC1ibG9jayc+e3RoaXMuc3RhdGUuaGVscEJsb2NrfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm0tZ3JvdXAgJyArIHRoaXMuc3RhdGUuYm9keVZhbGlkYXRpb25TdGF0ZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFkaW8gcmFkaW8taW5saW5lJz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyByZWY9J2JvZHlUZXh0RmllbGQnIHZhbHVlPXt0aGlzLnN0YXRlLmJvZHl9XG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17QWRkVHJ1bmtBY3Rpb25zLnVwZGF0ZUJvZHl9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSc+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT4gXG4gICAgICA8L2Rpdj5cbiAgICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRydW5rOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX0gLz5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEJyYW5jaFNob3dTdG9yZSBmcm9tICcuLi9zdG9yZXMvQnJhbmNoU2hvd1N0b3JlJztcbmltcG9ydCBCcmFuY2hTaG93QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0JyYW5jaFNob3dBY3Rpb25zJztcbmltcG9ydCBBZGRCcmFuY2ggZnJvbSAnLi9BZGRCcmFuY2gnO1xuXG5jbGFzcyBUcnVua1Nob3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gQnJhbmNoU2hvd1N0b3JlLmdldFN0YXRlKCk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIEJyYW5jaFNob3dTdG9yZS5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gICAgQnJhbmNoU2hvd0FjdGlvbnMuZ2V0QnJhbmNoU2hvdyh0aGlzLnByb3BzLnBhcmFtcy5pZCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBCcmFuY2hTaG93U3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gIH1cblxuICBvbkNoYW5nZShzdGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBCcmFuY2hTaG93QWN0aW9ucy5nZXRCcmFuY2hTaG93KG5leHRQcm9wcy5wYXJhbXMuaWQpO1xuICB9XG5cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxoMj48c3Ryb25nPnt0aGlzLnN0YXRlLnRpdGxlfTwvc3Ryb25nPjwvaDI+XG4gICAgICAgIDxoND57dGhpcy5zdGF0ZS5ib2R5fTwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5CcmFuY2hlczwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICB7IHRoaXMuc3RhdGUuYnJhbmNoZXMubWFwKChicmFuY2gsIGluZGV4KSAgPT4gIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17YnJhbmNoLl9pZH0gPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcHRpb24gdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3QtaW5saW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9icmFuY2hlcy8nICsgYnJhbmNoLl9pZH0+U2VlIGJyYW5jaGVzPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxoMz57YnJhbmNoLnRpdGxlfTwvaDM+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57YnJhbmNoLmJvZHl9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFkZEJyYW5jaCBwcm9wcz17dGhpcy5wcm9wc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJ1bmtTaG93OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJ1bmsgZnJvbSAnLi9UcnVuay5qcyc7XG5pbXBvcnQgQWRkVHJ1bmsgZnJvbSAnLi9BZGRUcnVuay5qcyc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1pbmZvJz5cbiAgICAgICAgPGgxPkhlbGxvIGZyb20gSG9tZSBDb21wb25lbnQ8L2gxPlxuICAgICAgICA8VHJ1bmsgLz5cbiAgICAgICAgPEFkZFRydW5rIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBOYXZiYXJTdG9yZSBmcm9tICcuLi9zdG9yZXMvTmF2YmFyU3RvcmUnO1xuaW1wb3J0IE5hdmJhckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9OYXZiYXJBY3Rpb25zJztcblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IE5hdmJhclN0b3JlLmdldFN0YXRlKCk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIE5hdmJhclN0b3JlLmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcbiAgICBOYXZiYXJBY3Rpb25zLmdldENoYXJhY3RlckNvdW50KCk7XG5cbiAgICBsZXQgc29ja2V0ID0gaW8uY29ubmVjdCgpO1xuXG4gICAgc29ja2V0Lm9uKCdvbmxpbmVVc2VycycsIChkYXRhKSA9PiB7XG4gICAgICBOYXZiYXJBY3Rpb25zLnVwZGF0ZU9ubGluZVVzZXJzKGRhdGEpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkuYWpheFN0YXJ0KCgpID0+IHtcbiAgICAgIE5hdmJhckFjdGlvbnMudXBkYXRlQWpheEFuaW1hdGlvbignZmFkZUluJyk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5hamF4Q29tcGxldGUoKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIE5hdmJhckFjdGlvbnMudXBkYXRlQWpheEFuaW1hdGlvbignZmFkZU91dCcpO1xuICAgICAgfSwgNzUwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIE5hdmJhclN0b3JlLnVubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuICB9XG5cbiAgb25DaGFuZ2Uoc3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgc2VhcmNoUXVlcnkgPSB0aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5LnRyaW0oKTtcblxuICAgIGlmIChzZWFyY2hRdWVyeSkge1xuICAgICAgTmF2YmFyQWN0aW9ucy5maW5kQ2hhcmFjdGVyKHtcbiAgICAgICAgc2VhcmNoUXVlcnk6IHNlYXJjaFF1ZXJ5LFxuICAgICAgICBzZWFyY2hGb3JtOiB0aGlzLnJlZnMuc2VhcmNoRm9ybSxcbiAgICAgICAgaGlzdG9yeTogdGhpcy5wcm9wcy5oaXN0b3J5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbjxuYXYgY2xhc3NOYW1lPSduYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLXN0YXRpYy10b3AnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWhlYWRlcic+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nbmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWQnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9JyNuYXZiYXInPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8TGluayB0bz0nLycgY2xhc3NOYW1lPSduYXZiYXItYnJhbmQnPlxuICAgICAgICAgICAgPHNwYW4gcmVmPSd0cmlhbmdsZXMnIGNsYXNzTmFtZT17J3RyaWFuZ2xlcyBhbmltYXRlZCAnICsgdGhpcy5zdGF0ZS5hamF4QW5pbWF0aW9uQ2xhc3N9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJpIGludmVydCc+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmkgaW52ZXJ0Jz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSc+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmkgaW52ZXJ0Jz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSBpbnZlcnQnPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJpJz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSBpbnZlcnQnPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJpJz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSBpbnZlcnQnPjwvZGl2PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgTkVGXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2JhZGdlIGJhZGdlLXVwIGJhZGdlLWRhbmdlcic+e3RoaXMuc3RhdGUub25saW5lVXNlcnN9PC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9J25hdmJhcicgY2xhc3NOYW1lPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UnPlxuICAgICAgICAgIDxmb3JtIHJlZj0nc2VhcmNoRm9ybScgY2xhc3NOYW1lPSduYXZiYXItZm9ybSBuYXZiYXItbGVmdCBhbmltYXRlZCcgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWdyb3VwJz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBwbGFjZWhvbGRlcj17dGhpcy5zdGF0ZS50b3RhbENoYXJhY3RlcnMgKyAnIGNoYXJhY3RlcnMnfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hRdWVyeX0gb25DaGFuZ2U9e05hdmJhckFjdGlvbnMudXBkYXRlU2VhcmNoUXVlcnl9IC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAtYnRuJz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0JyBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT48c3BhbiBjbGFzc05hbWU9J2dseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoJz48L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXYgbmF2YmFyLW5hdic+XG4gICAgICAgICAgICA8bGk+PExpbmsgdG89Jy8nPkhvbWU8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayB0bz0nL3N0YXRzJz5TdGF0czwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZHJvcGRvd24nPlxuICAgICAgICAgICAgICA8YSBocmVmPScjJyBjbGFzc05hbWU9J2Ryb3Bkb3duLXRvZ2dsZScgZGF0YS10b2dnbGU9J2Ryb3Bkb3duJz5Ub3AgMTAwIDxzcGFuIGNsYXNzTmFtZT0nY2FyZXQnPjwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2Ryb3Bkb3duLW1lbnUnPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL3RvcCc+VG9wIE92ZXJhbGw8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkcm9wZG93bi1zdWJtZW51Jz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvdG9wL2NhbGRhcmknPkNhbGRhcmk8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdkcm9wZG93bi1tZW51Jz5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvdG9wL2NhbGRhcmkvYWNodXJhJz5BY2h1cmE8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvdG9wL2NhbGRhcmkvY2l2aXJlJz5DaXZpcmU8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvdG9wL2NhbGRhcmkvZGV0ZWlzJz5EZXRlaXM8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkcm9wZG93bi1zdWJtZW51Jz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvdG9wL2dhbGxlbnRlJz5HYWxsZW50ZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2Ryb3Bkb3duLW1lbnUnPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy90b3AvZ2FsbGVudGUvZ2FsbGVudGUnPkdhbGxlbnRlPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL3RvcC9nYWxsZW50ZS9pbnRha2knPkludGFraTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy90b3AvZ2FsbGVudGUvamluLW1laSc+SmluLU1laTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2Ryb3Bkb3duLXN1Ym1lbnUnPlxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy90b3AvbWlubWF0YXInPk1pbm1hdGFyPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL3RvcC9taW5tYXRhci9icnV0b3InPkJydXRvcjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy90b3AvbWlubWF0YXIvc2ViaWVzdG9yJz5TZWJpZXN0b3I8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvdG9wL21pbm1hdGFyL3ZoZXJva2lvcic+Vmhlcm9raW9yPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZHJvcGRvd24tc3VibWVudSc+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz0nL3RvcC9hbWFycic+QW1hcnI8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdkcm9wZG93bi1tZW51Jz5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvdG9wL2FtYXJyL2FtYXJyJz5BbWFycjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy90b3AvYW1hcnIvbmkta3VubmknPk5pLUt1bm5pPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL3RvcC9hbWFyci9raGFuaWQnPktoYW5pZDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2RpdmlkZXInPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvc2hhbWUnPkhhbGwgb2YgU2hhbWU8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkcm9wZG93bic+XG4gICAgICAgICAgICAgIDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0nZHJvcGRvd24tdG9nZ2xlJyBkYXRhLXRvZ2dsZT0nZHJvcGRvd24nPkZlbWFsZSA8c3BhbiBjbGFzc05hbWU9J2NhcmV0Jz48L3NwYW4+PC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdkcm9wZG93bi1tZW51Jz5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy9mZW1hbGUnPkFsbDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2Ryb3Bkb3duLXN1Ym1lbnUnPlxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9mZW1hbGUvY2FsZGFyaSc+Q2FsZGFyaTwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2Ryb3Bkb3duLW1lbnUnPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy9mZW1hbGUvY2FsZGFyaS9hY2h1cmEnPkFjaHVyYTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy9mZW1hbGUvY2FsZGFyaS9jaXZpcmUvJz5DaXZpcmU8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvZmVtYWxlL2NhbGRhcmkvZGV0ZWlzJz5EZXRlaXM8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkcm9wZG93bi1zdWJtZW51Jz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvZmVtYWxlL2dhbGxlbnRlJz5HYWxsZW50ZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2Ryb3Bkb3duLW1lbnUnPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy9mZW1hbGUvZ2FsbGVudGUvZ2FsbGVudGUnPkdhbGxlbnRlPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL2ZlbWFsZS9nYWxsZW50ZS9pbnRha2knPkludGFraTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy9mZW1hbGUvZ2FsbGVudGUvamluLW1laSc+SmluLU1laTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2Ryb3Bkb3duLXN1Ym1lbnUnPlxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9mZW1hbGUvbWlubWF0YXInPk1pbm1hdGFyPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL2ZlbWFsZS9taW5tYXRhci9icnV0b3InPkJydXRvcjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy9mZW1hbGUvbWlubWF0YXIvc2ViaWVzdG9yJz5TZWJpZXN0b3I8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvZmVtYWxlL21pbm1hdGFyL3ZoZXJva2lvcic+Vmhlcm9raW9yPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZHJvcGRvd24tc3VibWVudSc+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz0nL2ZlbWFsZS9hbWFycic+QW1hcnI8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdkcm9wZG93bi1tZW51Jz5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvZmVtYWxlL2FtYXJyL2FtYXJyJz5BbWFycjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy9mZW1hbGUvYW1hcnIvbmkta3VubmknPk5pLUt1bm5pPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL2ZlbWFsZS9hbWFyci9raGFuaWQnPktoYW5pZDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2Ryb3Bkb3duJz5cbiAgICAgICAgICAgICAgPGEgaHJlZj0nIycgY2xhc3NOYW1lPSdkcm9wZG93bi10b2dnbGUnIGRhdGEtdG9nZ2xlPSdkcm9wZG93bic+TWFsZSA8c3BhbiBjbGFzc05hbWU9J2NhcmV0Jz48L3NwYW4+PC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdkcm9wZG93bi1tZW51Jz5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy9tYWxlJz5BbGw8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkcm9wZG93bi1zdWJtZW51Jz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvbWFsZS9jYWxkYXJpJz5DYWxkYXJpPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL21hbGUvY2FsZGFyaS9hY2h1cmEnPkFjaHVyYTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy9tYWxlL2NhbGRhcmkvY2l2aXJlJz5DaXZpcmU8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvbWFsZS9jYWxkYXJpL2RldGVpcyc+RGV0ZWlzPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZHJvcGRvd24tc3VibWVudSc+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz0nL21hbGUvZ2FsbGVudGUnPkdhbGxlbnRlPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL21hbGUvZ2FsbGVudGUvZ2FsbGVudGUnPkdhbGxlbnRlPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL21hbGUvZ2FsbGVudGUvaW50YWtpJz5JbnRha2k8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvbWFsZS9nYWxsZW50ZS9qaW4tbWVpJz5KaW4tTWVpPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZHJvcGRvd24tc3VibWVudSc+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz0nL21hbGUvbWlubWF0YXInPk1pbm1hdGFyPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL21hbGUvbWlubWF0YXIvYnJ1dG9yJz5CcnV0b3I8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvbWFsZS9taW5tYXRhci9zZWJpZXN0b3InPlNlYmllc3RvcjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy9tYWxlL21pbm1hdGFyL3ZoZXJva2lvcic+Vmhlcm9raW9yPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZHJvcGRvd24tc3VibWVudSc+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz0nL21hbGUvYW1hcnInPkFtYXJyPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL21hbGUvYW1hcnIvYW1hcnInPkFtYXJyPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL21hbGUvYW1hcnIvbmkta3VubmknPk5pLUt1bm5pPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL21hbGUvYW1hcnIva2hhbmlkJz5LaGFuaWQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgdG89Jy9hZGQnPkFkZDwvTGluaz48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBUcnVua1N0b3JlIGZyb20gJy4uL3N0b3Jlcy9UcnVua1N0b3JlJ1xuaW1wb3J0IFRydW5rQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL1RydW5rQWN0aW9ucyc7XG5pbXBvcnQge2ZpcnN0LCB3aXRob3V0LCBmaW5kV2hlcmV9IGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5jbGFzcyBUcnVuayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IFRydW5rU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgVHJ1bmtTdG9yZS5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gICAgVHJ1bmtBY3Rpb25zLmdldFRydW5rcygpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgVHJ1bmtTdG9yZS51bmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVDbGljayh0cnVuaykge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlRydW5rczwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgIHsgdGhpcy5zdGF0ZS50cnVua3MubWFwKCh0cnVuaywgaW5kZXgpICA9PiAge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3RydW5rLl9pZH0gPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FwdGlvbiB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnL3RydW5rcy8nICsgdHJ1bmsuX2lkfT5TZWUgYnJhbmNoZXM8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3QtaW5saW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PGgzPnt0cnVuay50aXRsZX08L2gzPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPnt0cnVuay5ib2R5fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJ1bms7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcnVua1Nob3cgZnJvbSAnLi9UcnVua1Nob3cuanMnO1xuaW1wb3J0IEFkZEJyYW5jaCBmcm9tICcuL0FkZEJyYW5jaC5qcyc7XG5cbmNsYXNzIFRydW5rQ29tcGxldGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxUcnVua1Nob3cgcHJvcHM9e3RoaXMucHJvcHN9IC8+XG4gICAgICAgIDxBZGRCcmFuY2ggcHJvcHM9e3RoaXMucHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRydW5rQ29tcGxldGU7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgVHJ1bmtTaG93U3RvcmUgZnJvbSAnLi4vc3RvcmVzL1RydW5rU2hvd1N0b3JlJztcbmltcG9ydCBUcnVua1Nob3dBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvVHJ1bmtTaG93QWN0aW9ucydcbmltcG9ydCBBZGRCcmFuY2ggZnJvbSAnLi9BZGRCcmFuY2gnO1xuXG5jbGFzcyBUcnVua1Nob3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gVHJ1bmtTaG93U3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgVHJ1bmtTaG93U3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuICAgIFRydW5rU2hvd0FjdGlvbnMuZ2V0VHJ1bmtTaG93KHRoaXMucHJvcHMucGFyYW1zLmlkKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIFRydW5rU2hvd1N0b3JlLnVubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICB9XG5cbiAgb25DaGFuZ2Uoc3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxoMj48c3Ryb25nPnt0aGlzLnN0YXRlLnRpdGxlfTwvc3Ryb25nPjwvaDI+XG4gICAgICAgIDxoND57dGhpcy5zdGF0ZS5ib2R5fTwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5CcmFuY2hlczwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICB7IHRoaXMuc3RhdGUuYnJhbmNoZXMubWFwKChicmFuY2gsIGluZGV4KSAgPT4gIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17YnJhbmNoLl9pZH0gPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcHRpb24gdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3QtaW5saW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9icmFuY2hlcy8nICsgYnJhbmNoLl9pZH0+U2VlIGJyYW5jaGVzPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxoMz57YnJhbmNoLnRpdGxlfTwvaDM+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57YnJhbmNoLmJvZHl9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFkZEJyYW5jaCBwcm9wcz17dGhpcy5wcm9wc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJ1bmtTaG93OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjcmVhdGVCcm93c2VySGlzdG9yeSBmcm9tICdoaXN0b3J5L2xpYi9jcmVhdGVCcm93c2VySGlzdG9yeSc7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcblxubGV0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xuXG5SZWFjdERPTS5yZW5kZXIoPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT57cm91dGVzfTwvUm91dGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgQWRkVHJ1bmsgZnJvbSAnLi9jb21wb25lbnRzL0FkZFRydW5rJztcbmltcG9ydCBUcnVua1Nob3cgZnJvbSAnLi9jb21wb25lbnRzL1RydW5rU2hvdyc7XG5pbXBvcnQgVHJ1bmtDb21wbGV0ZSBmcm9tICcuL2NvbXBvbmVudHMvVHJ1bmtDb21wbGV0ZSc7XG5pbXBvcnQgQnJhbmNoU2hvdyBmcm9tICcuL2NvbXBvbmVudHMvQnJhbmNoU2hvdyc7XG5cbmV4cG9ydCBkZWZhdWx0IChcbiAgPFJvdXRlIGNvbXBvbmVudD17QXBwfT5cbiAgICA8Um91dGUgcGF0aD0nLycgY29tcG9uZW50PXtIb21lfSAvPlxuICAgIDxSb3V0ZSBwYXRoPScvdHJ1bmtzLzppZCcgY29tcG9uZW50PXtUcnVua1Nob3d9IC8+XG4gICAgPFJvdXRlIHBhdGg9Jy9icmFuY2hlcy86aWQnIGNvbXBvbmVudD17QnJhbmNoU2hvd30gLz5cbiAgPC9Sb3V0ZT5cbik7IiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuaW1wb3J0IEFkZEJyYW5jaEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9BZGRCcmFuY2hBY3Rpb25zJztcblxuY2xhc3MgQWRkQnJhbmNoU3RvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJpbmRBY3Rpb25zKEFkZEJyYW5jaEFjdGlvbnMpO1xuICAgIHRoaXMucGFyZW50ID0gJyc7XG4gICAgdGhpcy50aXRsZSA9ICcnO1xuICAgIHRoaXMuYm9keSA9ICcnO1xuICAgIHRoaXMuaGVscEJsb2NrID0gJyc7XG4gICAgdGhpcy50aXRsZVZhbGlkYXRpb25TdGF0ZSA9ICcnO1xuICAgIHRoaXMuYm9keVZhbGlkYXRpb25TdGF0ZSA9ICcnO1xuICB9XG4gIG9uQWRkQnJhbmNoU3VjY2VzcyhzdWNjZXNzTWVzc2FnZSkge1xuICAgIHRoaXMudGl0bGVWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLXN1Y2Nlc3MnO1xuICAgIHRoaXMuaGVscEJsb2NrID0gc3VjY2Vzc01lc3NhZ2U7XG4gIH1cblxuICBvbkFkZEJyYW5jaEZhaWwoZXJyb3JNZXNzYWdlKSB7XG4gICAgdGhpcy50aXRsZVZhbGlkYXRpb25TdGF0ZSA9ICdoYXMtZXJyb3InO1xuICAgIHRoaXMuaGVscEJsb2NrID0gZXJyb3JNZXNzYWdlO1xuICB9XG5cbiAgb25VcGRhdGVQYXJlbnQoZXZlbnQpIHtcbiAgICB0aGlzLnBhcmVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgfVxuXG4gIG9uVXBkYXRlVGl0bGUoZXZlbnQpIHtcbiAgICB0aGlzLnRpdGxlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMudGl0bGVWYWxpZGF0aW9uU3RhdGUgPSAnJztcbiAgICB0aGlzLmhlbHBCbG9jayA9ICcnO1xuICB9XG5cbiAgb25VcGRhdGVCb2R5KGV2ZW50KSB7XG4gICAgdGhpcy5ib2R5ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuYm9keVZhbGlkYXRpb25TdGF0ZSA9ICcnO1xuICB9XG5cbiAgb25JbnZhbGlkVGl0bGUoKSB7XG4gICAgdGhpcy50aXRsZVZhbGlkYXRpb25TdGF0ZSA9ICdoYXMtZXJyb3InO1xuICAgIHRoaXMuaGVscEJsb2NrID0gJ1BsZWFzZSBlbnRlciBhIHRpdGxlLic7XG4gIH1cblxuICBvbkludmFsaWRCb2R5KCkge1xuICAgIHRoaXMuYm9keVZhbGlkYXRpb25TdGF0ZSA9ICdoYXMtZXJyb3InO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZVN0b3JlKEFkZEJyYW5jaFN0b3JlKTtcbiIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcbmltcG9ydCBBZGRUcnVua0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9BZGRUcnVua0FjdGlvbnMnO1xuXG5jbGFzcyBBZGRUcnVua1N0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iaW5kQWN0aW9ucyhBZGRUcnVua0FjdGlvbnMpO1xuICAgIHRoaXMudGl0bGUgPSAnJztcbiAgICB0aGlzLmJvZHkgPSAnJztcbiAgICB0aGlzLmhlbHBCbG9jayA9ICcnO1xuICAgIHRoaXMudGl0bGVWYWxpZGF0aW9uU3RhdGUgPSAnJztcbiAgICB0aGlzLmJvZHlWYWxpZGF0aW9uU3RhdGUgPSAnJztcbiAgfVxuXG4gIG9uQWRkVHJ1bmtTdWNjZXNzKHN1Y2Nlc3NNZXNzYWdlKSB7XG4gICAgdGhpcy50aXRsZVZhbGlkYXRpb25TdGF0ZSA9ICdoYXMtc3VjY2Vzcyc7XG4gICAgdGhpcy5oZWxwQmxvY2sgPSBzdWNjZXNzTWVzc2FnZTtcbiAgfVxuXG4gIG9uQWRkVHJ1bmtGYWlsKGVycm9yTWVzc2FnZSkge1xuICAgIHRoaXMudGl0bGVWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLWVycm9yJztcbiAgICB0aGlzLmhlbHBCbG9jayA9IGVycm9yTWVzc2FnZTtcbiAgfVxuXG4gIG9uVXBkYXRlVGl0bGUoZXZlbnQpIHtcbiAgICB0aGlzLnRpdGxlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMudGl0bGVWYWxpZGF0aW9uU3RhdGUgPSAnJztcbiAgICB0aGlzLmhlbHBCbG9jayA9ICcnO1xuICB9XG5cbiAgb25VcGRhdGVCb2R5KGV2ZW50KSB7XG4gICAgdGhpcy5ib2R5ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuYm9keVZhbGlkYXRpb25TdGF0ZSA9ICcnO1xuICB9XG5cbiAgb25JbnZhbGlkVGl0bGUoKSB7XG4gICAgdGhpcy50aXRsZVZhbGlkYXRpb25TdGF0ZSA9ICdoYXMtZXJyb3InO1xuICAgIHRoaXMuaGVscEJsb2NrID0gJ1BsZWFzZSBlbnRlciBhIHRpdGxlLic7XG4gIH1cblxuICBvbkludmFsaWRCb2R5KCkge1xuICAgIHRoaXMuYm9keVZhbGlkYXRpb25TdGF0ZSA9ICdoYXMtZXJyb3InO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVTdG9yZShBZGRUcnVua1N0b3JlKTsiLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5pbXBvcnQgQnJhbmNoU2hvd0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9CcmFuY2hTaG93QWN0aW9ucyc7XG5cbmNsYXNzIEJyYW5jaFNob3dTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmluZEFjdGlvbnMoQnJhbmNoU2hvd0FjdGlvbnMpO1xuICAgIHRoaXMuYnJhbmNoSWQgPSAwO1xuICAgIHRoaXMudGl0bGUgPSAnVEJEJztcbiAgICB0aGlzLmJvZHkgPSAnVEJEJztcbiAgICB0aGlzLmJyYW5jaGVzID0gW107XG4gIH1cblxuICBvbkdldEJyYW5jaFNob3dTdWNjZXNzKGRhdGEpIHtcbiAgICB0aGlzLnRpdGxlID0gZGF0YVswXS50aXRsZTtcbiAgICB0aGlzLmJvZHkgPSBkYXRhWzBdLmJvZHk7XG4gICAgdGhpcy5icmFuY2hlcyA9IGRhdGFbMV07XG4gIH1cblxuICBvbkdldEJyYW5jaFNob3dGYWlsKGpxWGhyKSB7XG4gICAgdG9hc3RyLmVycm9yKGpxWGhyLnJlc3BvbnNlSlNPTi5tZXNzYWdlKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVTdG9yZShCcmFuY2hTaG93U3RvcmUpOyIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcbmltcG9ydCBOYXZiYXJBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvTmF2YmFyQWN0aW9ucyc7XG5cbmNsYXNzIE5hdmJhclN0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iaW5kQWN0aW9ucyhOYXZiYXJBY3Rpb25zKTtcbiAgICB0aGlzLnRvdGFsQ2hhcmFjdGVycyA9IDA7XG4gICAgdGhpcy5vbmxpbmVVc2VycyA9IDA7XG4gICAgdGhpcy5zZWFyY2hRdWVyeSA9ICcnO1xuICAgIHRoaXMuYWpheEFuaW1hdGlvbkNsYXNzID0gJyc7XG4gIH1cblxuICBvbkZpbmRDaGFyYWN0ZXJTdWNjZXNzKHBheWxvYWQpIHtcbiAgICBwYXlsb2FkLmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcvY2hhcmFjdGVycy8nICsgcGF5bG9hZC5jaGFyYWN0ZXJJZCk7XG4gIH1cblxuICBvbkZpbmRDaGFyYWN0ZXJGYWlsKHBheWxvYWQpIHtcbiAgICBwYXlsb2FkLnNlYXJjaEZvcm0uY2xhc3NMaXN0LmFkZCgnc2hha2UnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHBheWxvYWQuc2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdzaGFrZScpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgb25VcGRhdGVPbmxpbmVVc2VycyhkYXRhKSB7XG4gICAgdGhpcy5vbmxpbmVVc2VycyA9IGRhdGEub25saW5lVXNlcnM7XG4gIH1cblxuICBvblVwZGF0ZUFqYXhBbmltYXRpb24oY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5hamF4QW5pbWF0aW9uQ2xhc3MgPSBjbGFzc05hbWU7IC8vZmFkZWluIG9yIGZhZGVvdXRcbiAgfVxuXG4gIG9uVXBkYXRlU2VhcmNoUXVlcnkoZXZlbnQpIHtcbiAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgb25HZXRDaGFyYWN0ZXJDb3VudFN1Y2Nlc3MoZGF0YSkge1xuICAgIHRoaXMudG90YWxDaGFyYWN0ZXJzID0gZGF0YS5jb3VudDtcbiAgfVxuXG4gIG9uR2V0Q2hhcmFjdGVyQ291bnRGYWlsKGpxWGhyKSB7XG4gICAgdG9hc3RyLmVycm9yKGpxWGhyLnJlc3BvbnNlSlNPTi5tZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlU3RvcmUoTmF2YmFyU3RvcmUpOyIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcbmltcG9ydCBUcnVua1Nob3dBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvVHJ1bmtTaG93QWN0aW9ucyc7XG5cbmNsYXNzIFRydW5rU2hvd1N0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iaW5kQWN0aW9ucyhUcnVua1Nob3dBY3Rpb25zKTtcbiAgICB0aGlzLnRydW5rSWQgPSAwO1xuICAgIHRoaXMudGl0bGUgPSAnVEJEJztcbiAgICB0aGlzLmJvZHkgPSAnVEJEJztcbiAgICB0aGlzLmJyYW5jaGVzID0gW107XG4gIH1cblxuICBvbkdldFRydW5rU2hvd1N1Y2Nlc3MoZGF0YSkge1xuICAgIHRoaXMudGl0bGUgPSBkYXRhWzBdLnRpdGxlO1xuICAgIHRoaXMuYm9keSA9IGRhdGFbMF0uYm9keTtcbiAgICB0aGlzLmJyYW5jaGVzID0gZGF0YVsxXTtcbiAgfVxuXG4gIG9uR2V0VHJ1bmtTaG93RmFpbChqcVhocikge1xuICAgIHRvYXN0ci5lcnJvcihqcVhoci5yZXNwb25zZUpTT04ubWVzc2FnZSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlU3RvcmUoVHJ1bmtTaG93U3RvcmUpOyIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcbmltcG9ydCBUcnVua0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9UcnVua0FjdGlvbnMnO1xuXG5jbGFzcyBUcnVua1N0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iaW5kQWN0aW9ucyhUcnVua0FjdGlvbnMpO1xuICAgIHRoaXMudHJ1bmtzID0gW107XG4gIH1cblxuICBvbkdldFRydW5rc1N1Y2Nlc3MoZGF0YSkge1xuICAgIHRoaXMudHJ1bmtzID0gZGF0YTtcbiAgfVxuXG4gIG9uR2V0VHJ1bmtzRmFpbChlcnJvck1lc3NhZ2UpIHtcbiAgICB0b2FzdHIuZXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVTdG9yZShUcnVua1N0b3JlKTtcbiIsInZhciBwU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4vbGliL2tleXMuanMnKTtcbnZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vbGliL2lzX2FyZ3VtZW50cy5qcycpO1xuXG52YXIgZGVlcEVxdWFsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYWN0dWFsLCBleHBlY3RlZCwgb3B0cykge1xuICBpZiAoIW9wdHMpIG9wdHMgPSB7fTtcbiAgLy8gNy4xLiBBbGwgaWRlbnRpY2FsIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG5cbiAgfSBlbHNlIGlmIChhY3R1YWwgaW5zdGFuY2VvZiBEYXRlICYmIGV4cGVjdGVkIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBhY3R1YWwuZ2V0VGltZSgpID09PSBleHBlY3RlZC5nZXRUaW1lKCk7XG5cbiAgLy8gNy4zLiBPdGhlciBwYWlycyB0aGF0IGRvIG5vdCBib3RoIHBhc3MgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnLFxuICAvLyBlcXVpdmFsZW5jZSBpcyBkZXRlcm1pbmVkIGJ5ID09LlxuICB9IGVsc2UgaWYgKCFhY3R1YWwgfHwgIWV4cGVjdGVkIHx8IHR5cGVvZiBhY3R1YWwgIT0gJ29iamVjdCcgJiYgdHlwZW9mIGV4cGVjdGVkICE9ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9wdHMuc3RyaWN0ID8gYWN0dWFsID09PSBleHBlY3RlZCA6IGFjdHVhbCA9PSBleHBlY3RlZDtcblxuICAvLyA3LjQuIEZvciBhbGwgb3RoZXIgT2JqZWN0IHBhaXJzLCBpbmNsdWRpbmcgQXJyYXkgb2JqZWN0cywgZXF1aXZhbGVuY2UgaXNcbiAgLy8gZGV0ZXJtaW5lZCBieSBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGFzIHZlcmlmaWVkXG4gIC8vIHdpdGggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKSwgdGhlIHNhbWUgc2V0IG9mIGtleXNcbiAgLy8gKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksIGVxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeVxuICAvLyBjb3JyZXNwb25kaW5nIGtleSwgYW5kIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS4gTm90ZTogdGhpc1xuICAvLyBhY2NvdW50cyBmb3IgYm90aCBuYW1lZCBhbmQgaW5kZXhlZCBwcm9wZXJ0aWVzIG9uIEFycmF5cy5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqRXF1aXYoYWN0dWFsLCBleHBlY3RlZCwgb3B0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWRPck51bGwodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyICh4KSB7XG4gIGlmICgheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHgubGVuZ3RoICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIHguY29weSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeC5zbGljZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoeC5sZW5ndGggPiAwICYmIHR5cGVvZiB4WzBdICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gb2JqRXF1aXYoYSwgYiwgb3B0cykge1xuICB2YXIgaSwga2V5O1xuICBpZiAoaXNVbmRlZmluZWRPck51bGwoYSkgfHwgaXNVbmRlZmluZWRPck51bGwoYikpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvLyBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuXG4gIGlmIChhLnByb3RvdHlwZSAhPT0gYi5wcm90b3R5cGUpIHJldHVybiBmYWxzZTtcbiAgLy9+fn5JJ3ZlIG1hbmFnZWQgdG8gYnJlYWsgT2JqZWN0LmtleXMgdGhyb3VnaCBzY3Jld3kgYXJndW1lbnRzIHBhc3NpbmcuXG4gIC8vICAgQ29udmVydGluZyB0byBhcnJheSBzb2x2ZXMgdGhlIHByb2JsZW0uXG4gIGlmIChpc0FyZ3VtZW50cyhhKSkge1xuICAgIGlmICghaXNBcmd1bWVudHMoYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYSA9IHBTbGljZS5jYWxsKGEpO1xuICAgIGIgPSBwU2xpY2UuY2FsbChiKTtcbiAgICByZXR1cm4gZGVlcEVxdWFsKGEsIGIsIG9wdHMpO1xuICB9XG4gIGlmIChpc0J1ZmZlcihhKSkge1xuICAgIGlmICghaXNCdWZmZXIoYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB0cnkge1xuICAgIHZhciBrYSA9IG9iamVjdEtleXMoYSksXG4gICAgICAgIGtiID0gb2JqZWN0S2V5cyhiKTtcbiAgfSBjYXRjaCAoZSkgey8vaGFwcGVucyB3aGVuIG9uZSBpcyBhIHN0cmluZyBsaXRlcmFsIGFuZCB0aGUgb3RoZXIgaXNuJ3RcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChrZXlzIGluY29ycG9yYXRlc1xuICAvLyBoYXNPd25Qcm9wZXJ0eSlcbiAgaWYgKGthLmxlbmd0aCAhPSBrYi5sZW5ndGgpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvL3RoZSBzYW1lIHNldCBvZiBrZXlzIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLFxuICBrYS5zb3J0KCk7XG4gIGtiLnNvcnQoKTtcbiAgLy9+fn5jaGVhcCBrZXkgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChrYVtpXSAhPSBrYltpXSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL2VxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeSBjb3JyZXNwb25kaW5nIGtleSwgYW5kXG4gIC8vfn5+cG9zc2libHkgZXhwZW5zaXZlIGRlZXAgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGtleSA9IGthW2ldO1xuICAgIGlmICghZGVlcEVxdWFsKGFba2V5XSwgYltrZXldLCBvcHRzKSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0eXBlb2YgYSA9PT0gdHlwZW9mIGI7XG59XG4iLCJ2YXIgc3VwcG9ydHNBcmd1bWVudHNDbGFzcyA9IChmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50cylcbn0pKCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRzQXJndW1lbnRzQ2xhc3MgPyBzdXBwb3J0ZWQgOiB1bnN1cHBvcnRlZDtcblxuZXhwb3J0cy5zdXBwb3J0ZWQgPSBzdXBwb3J0ZWQ7XG5mdW5jdGlvbiBzdXBwb3J0ZWQob2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcbn07XG5cbmV4cG9ydHMudW5zdXBwb3J0ZWQgPSB1bnN1cHBvcnRlZDtcbmZ1bmN0aW9uIHVuc3VwcG9ydGVkKG9iamVjdCl7XG4gIHJldHVybiBvYmplY3QgJiZcbiAgICB0eXBlb2Ygb2JqZWN0ID09ICdvYmplY3QnICYmXG4gICAgdHlwZW9mIG9iamVjdC5sZW5ndGggPT0gJ251bWJlcicgJiZcbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnY2FsbGVlJykgJiZcbiAgICAhT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgJ2NhbGxlZScpIHx8XG4gICAgZmFsc2U7XG59O1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nXG4gID8gT2JqZWN0LmtleXMgOiBzaGltO1xuXG5leHBvcnRzLnNoaW0gPSBzaGltO1xuZnVuY3Rpb24gc2hpbSAob2JqKSB7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIGtleXMucHVzaChrZXkpO1xuICByZXR1cm4ga2V5cztcbn1cbiIsIi8qKlxuICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IGEgY2FsbCB0byBoaXN0b3J5LnB1c2guXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBQVVNIID0gJ1BVU0gnO1xuXG5leHBvcnRzLlBVU0ggPSBQVVNIO1xuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgYSBjYWxsIHRvIGhpc3RvcnkucmVwbGFjZS5cbiAqL1xudmFyIFJFUExBQ0UgPSAnUkVQTEFDRSc7XG5cbmV4cG9ydHMuUkVQTEFDRSA9IFJFUExBQ0U7XG4vKipcbiAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBzb21lIG90aGVyIGFjdGlvbiBzdWNoXG4gKiBhcyB1c2luZyBhIGJyb3dzZXIncyBiYWNrL2ZvcndhcmQgYnV0dG9ucyBhbmQvb3IgbWFudWFsbHkgbWFuaXB1bGF0aW5nXG4gKiB0aGUgVVJMIGluIGEgYnJvd3NlcidzIGxvY2F0aW9uIGJhci4gVGhpcyBpcyB0aGUgZGVmYXVsdC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0V2ZW50SGFuZGxlcnMvb25wb3BzdGF0ZVxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKi9cbnZhciBQT1AgPSAnUE9QJztcblxuZXhwb3J0cy5QT1AgPSBQT1A7XG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIFBVU0g6IFBVU0gsXG4gIFJFUExBQ0U6IFJFUExBQ0UsXG4gIFBPUDogUE9QXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5sb29wQXN5bmMgPSBsb29wQXN5bmM7XG5cbmZ1bmN0aW9uIGxvb3BBc3luYyh0dXJucywgd29yaywgY2FsbGJhY2spIHtcbiAgdmFyIGN1cnJlbnRUdXJuID0gMDtcbiAgdmFyIGlzRG9uZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgaXNEb25lID0gdHJ1ZTtcbiAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpZiAoaXNEb25lKSByZXR1cm47XG5cbiAgICBpZiAoY3VycmVudFR1cm4gPCB0dXJucykge1xuICAgICAgd29yay5jYWxsKHRoaXMsIGN1cnJlbnRUdXJuKyssIG5leHQsIGRvbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpO1xufSIsIi8qZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2F2ZVN0YXRlID0gc2F2ZVN0YXRlO1xuZXhwb3J0cy5yZWFkU3RhdGUgPSByZWFkU3RhdGU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBLZXlQcmVmaXggPSAnQEBIaXN0b3J5Lyc7XG52YXIgUXVvdGFFeGNlZWRlZEVycm9yID0gJ1F1b3RhRXhjZWVkZWRFcnJvcic7XG52YXIgU2VjdXJpdHlFcnJvciA9ICdTZWN1cml0eUVycm9yJztcblxuZnVuY3Rpb24gY3JlYXRlS2V5KGtleSkge1xuICByZXR1cm4gS2V5UHJlZml4ICsga2V5O1xufVxuXG5mdW5jdGlvbiBzYXZlU3RhdGUoa2V5LCBzdGF0ZSkge1xuICB0cnkge1xuICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGNyZWF0ZUtleShrZXkpLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5uYW1lID09PSBTZWN1cml0eUVycm9yKSB7XG4gICAgICAvLyBCbG9ja2luZyBjb29raWVzIGluIENocm9tZS9GaXJlZm94L1NhZmFyaSB0aHJvd3MgU2VjdXJpdHlFcnJvciBvbiBhbnlcbiAgICAgIC8vIGF0dGVtcHQgdG8gYWNjZXNzIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1toaXN0b3J5XSBVbmFibGUgdG8gc2F2ZSBzdGF0ZTsgc2Vzc2lvblN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBkdWUgdG8gc2VjdXJpdHkgc2V0dGluZ3MnKSA6IHVuZGVmaW5lZDtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlcnJvci5uYW1lID09PSBRdW90YUV4Y2VlZGVkRXJyb3IgJiYgd2luZG93LnNlc3Npb25TdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gU2FmYXJpIFwicHJpdmF0ZSBtb2RlXCIgdGhyb3dzIFF1b3RhRXhjZWVkZWRFcnJvci5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1toaXN0b3J5XSBVbmFibGUgdG8gc2F2ZSBzdGF0ZTsgc2Vzc2lvblN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBpbiBTYWZhcmkgcHJpdmF0ZSBtb2RlJykgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWFkU3RhdGUoa2V5KSB7XG4gIHZhciBqc29uID0gdW5kZWZpbmVkO1xuICB0cnkge1xuICAgIGpzb24gPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShjcmVhdGVLZXkoa2V5KSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLm5hbWUgPT09IFNlY3VyaXR5RXJyb3IpIHtcbiAgICAgIC8vIEJsb2NraW5nIGNvb2tpZXMgaW4gQ2hyb21lL0ZpcmVmb3gvU2FmYXJpIHRocm93cyBTZWN1cml0eUVycm9yIG9uIGFueVxuICAgICAgLy8gYXR0ZW1wdCB0byBhY2Nlc3Mgd2luZG93LnNlc3Npb25TdG9yYWdlLlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnW2hpc3RvcnldIFVuYWJsZSB0byByZWFkIHN0YXRlOyBzZXNzaW9uU3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlIGR1ZSB0byBzZWN1cml0eSBzZXR0aW5ncycpIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBpZiAoanNvbikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSWdub3JlIGludmFsaWQgSlNPTi5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyO1xuZXhwb3J0cy5yZW1vdmVFdmVudExpc3RlbmVyID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbmV4cG9ydHMuZ2V0SGFzaFBhdGggPSBnZXRIYXNoUGF0aDtcbmV4cG9ydHMucmVwbGFjZUhhc2hQYXRoID0gcmVwbGFjZUhhc2hQYXRoO1xuZXhwb3J0cy5nZXRXaW5kb3dQYXRoID0gZ2V0V2luZG93UGF0aDtcbmV4cG9ydHMuZ28gPSBnbztcbmV4cG9ydHMuZ2V0VXNlckNvbmZpcm1hdGlvbiA9IGdldFVzZXJDb25maXJtYXRpb247XG5leHBvcnRzLnN1cHBvcnRzSGlzdG9yeSA9IHN1cHBvcnRzSGlzdG9yeTtcbmV4cG9ydHMuc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2ggPSBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaDtcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgaWYgKG5vZGUuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIGlmIChub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRIYXNoUGF0aCgpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGhlcmUgYmVjYXVzZSBpdCdzIG5vdFxuICAvLyBjb25zaXN0ZW50IGFjcm9zcyBicm93c2VycyAtIEZpcmVmb3ggd2lsbCBwcmUtZGVjb2RlIGl0IVxuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVsxXSB8fCAnJztcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUhhc2hQYXRoKHBhdGgpIHtcbiAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArICcjJyArIHBhdGgpO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dQYXRoKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xufVxuXG5mdW5jdGlvbiBnbyhuKSB7XG4gIGlmIChuKSB3aW5kb3cuaGlzdG9yeS5nbyhuKTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlckNvbmZpcm1hdGlvbihtZXNzYWdlLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayh3aW5kb3cuY29uZmlybShtZXNzYWdlKSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpcyBzdXBwb3J0ZWQuIFRha2VuIGZyb20gTW9kZXJuaXpyLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9oaXN0b3J5LmpzXG4gKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yYWNrdC9yZWFjdC1yb3V0ZXIvaXNzdWVzLzU4NlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEZJWE1FOiBXb3JrIGFyb3VuZCBvdXIgYnJvd3NlciBoaXN0b3J5IG5vdCB3b3JraW5nIGNvcnJlY3RseSBvbiBDaHJvbWVcbiAgLy8gaU9TOiBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVhY3Qtcm91dGVyL2lzc3Vlcy8yNTY1XG4gIGlmICh1YS5pbmRleE9mKCdDcmlPUycpICE9PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59XG5cbi8qKlxuICogUmV0dXJucyBmYWxzZSBpZiB1c2luZyBnbyhuKSB3aXRoIGhhc2ggaGlzdG9yeSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCkge1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICByZXR1cm4gdWEuaW5kZXhPZignRmlyZWZveCcpID09PSAtMTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmV4cG9ydHMuY2FuVXNlRE9NID0gY2FuVXNlRE9NOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9FeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxudmFyIF9ET01TdGF0ZVN0b3JhZ2UgPSByZXF1aXJlKCcuL0RPTVN0YXRlU3RvcmFnZScpO1xuXG52YXIgX2NyZWF0ZURPTUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZURPTUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVET01IaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZURPTUhpc3RvcnkpO1xuXG52YXIgX3BhcnNlUGF0aCA9IHJlcXVpcmUoJy4vcGFyc2VQYXRoJyk7XG5cbnZhciBfcGFyc2VQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlUGF0aCk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgdXNlcyBIVE1MNSdzIGhpc3RvcnkgQVBJXG4gKiAocHVzaFN0YXRlLCByZXBsYWNlU3RhdGUsIGFuZCB0aGUgcG9wc3RhdGUgZXZlbnQpIHRvIG1hbmFnZSBoaXN0b3J5LlxuICogVGhpcyBpcyB0aGUgcmVjb21tZW5kZWQgbWV0aG9kIG9mIG1hbmFnaW5nIGhpc3RvcnkgaW4gYnJvd3NlcnMgYmVjYXVzZVxuICogaXQgcHJvdmlkZXMgdGhlIGNsZWFuZXN0IFVSTHMuXG4gKlxuICogTm90ZTogSW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgZnVsbFxuICogcGFnZSByZWxvYWRzIHdpbGwgYmUgdXNlZCB0byBwcmVzZXJ2ZSBVUkxzLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAhX0V4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlLCAnQnJvd3NlciBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICB2YXIgZm9yY2VSZWZyZXNoID0gb3B0aW9ucy5mb3JjZVJlZnJlc2g7XG5cbiAgdmFyIGlzU3VwcG9ydGVkID0gX0RPTVV0aWxzLnN1cHBvcnRzSGlzdG9yeSgpO1xuICB2YXIgdXNlUmVmcmVzaCA9ICFpc1N1cHBvcnRlZCB8fCBmb3JjZVJlZnJlc2g7XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uKGhpc3RvcnlTdGF0ZSkge1xuICAgIGhpc3RvcnlTdGF0ZSA9IGhpc3RvcnlTdGF0ZSB8fCB3aW5kb3cuaGlzdG9yeS5zdGF0ZSB8fCB7fTtcblxuICAgIHZhciBwYXRoID0gX0RPTVV0aWxzLmdldFdpbmRvd1BhdGgoKTtcbiAgICB2YXIgX2hpc3RvcnlTdGF0ZSA9IGhpc3RvcnlTdGF0ZTtcbiAgICB2YXIga2V5ID0gX2hpc3RvcnlTdGF0ZS5rZXk7XG5cbiAgICB2YXIgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGtleSkge1xuICAgICAgc3RhdGUgPSBfRE9NU3RhdGVTdG9yYWdlLnJlYWRTdGF0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZSA9IG51bGw7XG4gICAgICBrZXkgPSBoaXN0b3J5LmNyZWF0ZUtleSgpO1xuXG4gICAgICBpZiAoaXNTdXBwb3J0ZWQpIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShfZXh0ZW5kcyh7fSwgaGlzdG9yeVN0YXRlLCB7IGtleToga2V5IH0pLCBudWxsLCBwYXRoKTtcbiAgICB9XG5cbiAgICB2YXIgbG9jYXRpb24gPSBfcGFyc2VQYXRoMlsnZGVmYXVsdCddKHBhdGgpO1xuXG4gICAgcmV0dXJuIGhpc3RvcnkuY3JlYXRlTG9jYXRpb24oX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7IHN0YXRlOiBzdGF0ZSB9KSwgdW5kZWZpbmVkLCBrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKF9yZWYpIHtcbiAgICB2YXIgdHJhbnNpdGlvblRvID0gX3JlZi50cmFuc2l0aW9uVG87XG5cbiAgICBmdW5jdGlvbiBwb3BTdGF0ZUxpc3RlbmVyKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyBJZ25vcmUgZXh0cmFuZW91cyBwb3BzdGF0ZSBldmVudHMgaW4gV2ViS2l0LlxuXG4gICAgICB0cmFuc2l0aW9uVG8oZ2V0Q3VycmVudExvY2F0aW9uKGV2ZW50LnN0YXRlKSk7XG4gICAgfVxuXG4gICAgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncG9wc3RhdGUnLCBwb3BTdGF0ZUxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdwb3BzdGF0ZScsIHBvcFN0YXRlTGlzdGVuZXIpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBmaW5pc2hUcmFuc2l0aW9uKGxvY2F0aW9uKSB7XG4gICAgdmFyIGJhc2VuYW1lID0gbG9jYXRpb24uYmFzZW5hbWU7XG4gICAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG4gICAgdmFyIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG4gICAgdmFyIGFjdGlvbiA9IGxvY2F0aW9uLmFjdGlvbjtcbiAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5O1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSByZXR1cm47IC8vIE5vdGhpbmcgdG8gZG8uXG5cbiAgICBfRE9NU3RhdGVTdG9yYWdlLnNhdmVTdGF0ZShrZXksIHN0YXRlKTtcblxuICAgIHZhciBwYXRoID0gKGJhc2VuYW1lIHx8ICcnKSArIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaDtcbiAgICB2YXIgaGlzdG9yeVN0YXRlID0ge1xuICAgICAga2V5OiBrZXlcbiAgICB9O1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgaWYgKHVzZVJlZnJlc2gpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRoO1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIFByZXZlbnQgbG9jYXRpb24gdXBkYXRlLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoaGlzdG9yeVN0YXRlLCBudWxsLCBwYXRoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSRVBMQUNFXG4gICAgICBpZiAodXNlUmVmcmVzaCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShwYXRoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBQcmV2ZW50IGxvY2F0aW9uIHVwZGF0ZS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3RvcnlTdGF0ZSwgbnVsbCwgcGF0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgaGlzdG9yeSA9IF9jcmVhdGVET01IaXN0b3J5MlsnZGVmYXVsdCddKF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgZ2V0Q3VycmVudExvY2F0aW9uOiBnZXRDdXJyZW50TG9jYXRpb24sXG4gICAgZmluaXNoVHJhbnNpdGlvbjogZmluaXNoVHJhbnNpdGlvbixcbiAgICBzYXZlU3RhdGU6IF9ET01TdGF0ZVN0b3JhZ2Uuc2F2ZVN0YXRlXG4gIH0pKTtcblxuICB2YXIgbGlzdGVuZXJDb3VudCA9IDAsXG4gICAgICBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBsaXN0ZW5CZWZvcmUobGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIHZhciB1bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuQmVmb3JlKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bmxpc3RlbigpO1xuXG4gICAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wUG9wU3RhdGVMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIHZhciB1bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bmxpc3RlbigpO1xuXG4gICAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wUG9wU3RhdGVMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKGhpc3RvcnkpO1xuXG4gICAgaGlzdG9yeS5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIGhpc3RvcnkudW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spO1xuXG4gICAgaWYgKC0tbGlzdGVuZXJDb3VudCA9PT0gMCkgc3RvcFBvcFN0YXRlTGlzdGVuZXIoKTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwge1xuICAgIGxpc3RlbkJlZm9yZTogbGlzdGVuQmVmb3JlLFxuICAgIGxpc3RlbjogbGlzdGVuLFxuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssXG4gICAgdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rOiB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2tcbiAgfSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbnZhciBfY3JlYXRlSGlzdG9yeSA9IHJlcXVpcmUoJy4vY3JlYXRlSGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZUhpc3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlSGlzdG9yeSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZURPTUhpc3Rvcnkob3B0aW9ucykge1xuICB2YXIgaGlzdG9yeSA9IF9jcmVhdGVIaXN0b3J5MlsnZGVmYXVsdCddKF9leHRlbmRzKHtcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBfRE9NVXRpbHMuZ2V0VXNlckNvbmZpcm1hdGlvblxuICB9LCBvcHRpb25zLCB7XG4gICAgZ286IF9ET01VdGlscy5nb1xuICB9KSk7XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgIV9FeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ0RPTSBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiBoaXN0b3J5Lmxpc3RlbihsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGhpc3RvcnksIHtcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9KTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlRE9NSGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8vaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZydcbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2RlZXBFcXVhbCA9IHJlcXVpcmUoJ2RlZXAtZXF1YWwnKTtcblxudmFyIF9kZWVwRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVlcEVxdWFsKTtcblxudmFyIF9Bc3luY1V0aWxzID0gcmVxdWlyZSgnLi9Bc3luY1V0aWxzJyk7XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX2NyZWF0ZUxvY2F0aW9uMiA9IHJlcXVpcmUoJy4vY3JlYXRlTG9jYXRpb24nKTtcblxudmFyIF9jcmVhdGVMb2NhdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVMb2NhdGlvbjIpO1xuXG52YXIgX3J1blRyYW5zaXRpb25Ib29rID0gcmVxdWlyZSgnLi9ydW5UcmFuc2l0aW9uSG9vaycpO1xuXG52YXIgX3J1blRyYW5zaXRpb25Ib29rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3J1blRyYW5zaXRpb25Ib29rKTtcblxudmFyIF9wYXJzZVBhdGggPSByZXF1aXJlKCcuL3BhcnNlUGF0aCcpO1xuXG52YXIgX3BhcnNlUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZVBhdGgpO1xuXG52YXIgX2RlcHJlY2F0ZSA9IHJlcXVpcmUoJy4vZGVwcmVjYXRlJyk7XG5cbnZhciBfZGVwcmVjYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlcHJlY2F0ZSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVJhbmRvbUtleShsZW5ndGgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCBsZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJlxuICAvL2EuYWN0aW9uID09PSBiLmFjdGlvbiAmJiAvLyBEaWZmZXJlbnQgYWN0aW9uICE9PSBsb2NhdGlvbiBjaGFuZ2UuXG4gIGEua2V5ID09PSBiLmtleSAmJiBfZGVlcEVxdWFsMlsnZGVmYXVsdCddKGEuc3RhdGUsIGIuc3RhdGUpO1xufVxuXG52YXIgRGVmYXVsdEtleUxlbmd0aCA9IDY7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhpc3RvcnkoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gIHZhciBnZXRDdXJyZW50TG9jYXRpb24gPSBvcHRpb25zLmdldEN1cnJlbnRMb2NhdGlvbjtcbiAgdmFyIGZpbmlzaFRyYW5zaXRpb24gPSBvcHRpb25zLmZpbmlzaFRyYW5zaXRpb247XG4gIHZhciBzYXZlU3RhdGUgPSBvcHRpb25zLnNhdmVTdGF0ZTtcbiAgdmFyIGdvID0gb3B0aW9ucy5nbztcbiAgdmFyIGtleUxlbmd0aCA9IG9wdGlvbnMua2V5TGVuZ3RoO1xuICB2YXIgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IG9wdGlvbnMuZ2V0VXNlckNvbmZpcm1hdGlvbjtcblxuICBpZiAodHlwZW9mIGtleUxlbmd0aCAhPT0gJ251bWJlcicpIGtleUxlbmd0aCA9IERlZmF1bHRLZXlMZW5ndGg7XG5cbiAgdmFyIHRyYW5zaXRpb25Ib29rcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbkJlZm9yZShob29rKSB7XG4gICAgdHJhbnNpdGlvbkhvb2tzLnB1c2goaG9vayk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdHJhbnNpdGlvbkhvb2tzID0gdHJhbnNpdGlvbkhvb2tzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gaG9vaztcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICB2YXIgYWxsS2V5cyA9IFtdO1xuICB2YXIgY2hhbmdlTGlzdGVuZXJzID0gW107XG4gIHZhciBsb2NhdGlvbiA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBnZXRDdXJyZW50KCkge1xuICAgIGlmIChwZW5kaW5nTG9jYXRpb24gJiYgcGVuZGluZ0xvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSB7XG4gICAgICByZXR1cm4gYWxsS2V5cy5pbmRleE9mKHBlbmRpbmdMb2NhdGlvbi5rZXkpO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBhbGxLZXlzLmluZGV4T2YobG9jYXRpb24ua2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUxvY2F0aW9uKG5ld0xvY2F0aW9uKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBnZXRDdXJyZW50KCk7XG5cbiAgICBsb2NhdGlvbiA9IG5ld0xvY2F0aW9uO1xuXG4gICAgaWYgKGxvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgYWxsS2V5cyA9IFtdLmNvbmNhdChhbGxLZXlzLnNsaWNlKDAsIGN1cnJlbnQgKyAxKSwgW2xvY2F0aW9uLmtleV0pO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5SRVBMQUNFKSB7XG4gICAgICBhbGxLZXlzW2N1cnJlbnRdID0gbG9jYXRpb24ua2V5O1xuICAgIH1cblxuICAgIGNoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIobG9jYXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgY2hhbmdlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICBsaXN0ZW5lcihsb2NhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfbG9jYXRpb24gPSBnZXRDdXJyZW50TG9jYXRpb24oKTtcbiAgICAgIGFsbEtleXMgPSBbX2xvY2F0aW9uLmtleV07XG4gICAgICB1cGRhdGVMb2NhdGlvbihfbG9jYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFuZ2VMaXN0ZW5lcnMgPSBjaGFuZ2VMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBsaXN0ZW5lcjtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICAgIF9Bc3luY1V0aWxzLmxvb3BBc3luYyh0cmFuc2l0aW9uSG9va3MubGVuZ3RoLCBmdW5jdGlvbiAoaW5kZXgsIG5leHQsIGRvbmUpIHtcbiAgICAgIF9ydW5UcmFuc2l0aW9uSG9vazJbJ2RlZmF1bHQnXSh0cmFuc2l0aW9uSG9va3NbaW5kZXhdLCBsb2NhdGlvbiwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICBkb25lKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgaWYgKGdldFVzZXJDb25maXJtYXRpb24gJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGdldFVzZXJDb25maXJtYXRpb24obWVzc2FnZSwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgICAgY2FsbGJhY2sob2sgIT09IGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhtZXNzYWdlICE9PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcGVuZGluZ0xvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25UbyhuZXh0TG9jYXRpb24pIHtcbiAgICBpZiAobG9jYXRpb24gJiYgbG9jYXRpb25zQXJlRXF1YWwobG9jYXRpb24sIG5leHRMb2NhdGlvbikpIHJldHVybjsgLy8gTm90aGluZyB0byBkby5cblxuICAgIHBlbmRpbmdMb2NhdGlvbiA9IG5leHRMb2NhdGlvbjtcblxuICAgIGNvbmZpcm1UcmFuc2l0aW9uVG8obmV4dExvY2F0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmIChwZW5kaW5nTG9jYXRpb24gIT09IG5leHRMb2NhdGlvbikgcmV0dXJuOyAvLyBUcmFuc2l0aW9uIHdhcyBpbnRlcnJ1cHRlZC5cblxuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIC8vIHRyZWF0IFBVU0ggdG8gY3VycmVudCBwYXRoIGxpa2UgUkVQTEFDRSB0byBiZSBjb25zaXN0ZW50IHdpdGggYnJvd3NlcnNcbiAgICAgICAgaWYgKG5leHRMb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlBVU0gpIHtcbiAgICAgICAgICB2YXIgcHJldlBhdGggPSBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbiAgICAgICAgICB2YXIgbmV4dFBhdGggPSBjcmVhdGVQYXRoKG5leHRMb2NhdGlvbik7XG5cbiAgICAgICAgICBpZiAobmV4dFBhdGggPT09IHByZXZQYXRoKSBuZXh0TG9jYXRpb24uYWN0aW9uID0gX0FjdGlvbnMuUkVQTEFDRTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaW5pc2hUcmFuc2l0aW9uKG5leHRMb2NhdGlvbikgIT09IGZhbHNlKSB1cGRhdGVMb2NhdGlvbihuZXh0TG9jYXRpb24pO1xuICAgICAgfSBlbHNlIGlmIChsb2NhdGlvbiAmJiBuZXh0TG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHtcbiAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihsb2NhdGlvbi5rZXkpO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gYWxsS2V5cy5pbmRleE9mKG5leHRMb2NhdGlvbi5rZXkpO1xuXG4gICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xICYmIG5leHRJbmRleCAhPT0gLTEpIGdvKHByZXZJbmRleCAtIG5leHRJbmRleCk7IC8vIFJlc3RvcmUgdGhlIFVSTC5cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2gobG9jYXRpb24pIHtcbiAgICB0cmFuc2l0aW9uVG8oY3JlYXRlTG9jYXRpb24obG9jYXRpb24sIF9BY3Rpb25zLlBVU0gsIGNyZWF0ZUtleSgpKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKGxvY2F0aW9uKSB7XG4gICAgdHJhbnNpdGlvblRvKGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uLCBfQWN0aW9ucy5SRVBMQUNFLCBjcmVhdGVLZXkoKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGdvKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICBnbygxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgICByZXR1cm4gY3JlYXRlUmFuZG9tS2V5KGtleUxlbmd0aCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQYXRoKGxvY2F0aW9uKSB7XG4gICAgaWYgKGxvY2F0aW9uID09IG51bGwgfHwgdHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgcmV0dXJuIGxvY2F0aW9uO1xuXG4gICAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG5cbiAgICB2YXIgcmVzdWx0ID0gcGF0aG5hbWU7XG5cbiAgICBpZiAoc2VhcmNoKSByZXN1bHQgKz0gc2VhcmNoO1xuXG4gICAgaWYgKGhhc2gpIHJlc3VsdCArPSBoYXNoO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICByZXR1cm4gY3JlYXRlUGF0aChsb2NhdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihsb2NhdGlvbiwgYWN0aW9uKSB7XG4gICAgdmFyIGtleSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IGNyZWF0ZUtleSgpIDogYXJndW1lbnRzWzJdO1xuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAvL3dhcm5pbmcoXG4gICAgICAvLyAgZmFsc2UsXG4gICAgICAvLyAgJ1RoZSBzdGF0ZSAoMm5kKSBhcmd1bWVudCB0byBoaXN0b3J5LmNyZWF0ZUxvY2F0aW9uIGlzIGRlcHJlY2F0ZWQ7IHVzZSBhICcgK1xuICAgICAgLy8gICdsb2NhdGlvbiBkZXNjcmlwdG9yIGluc3RlYWQnXG4gICAgICAvLylcblxuICAgICAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIGxvY2F0aW9uID0gX3BhcnNlUGF0aDJbJ2RlZmF1bHQnXShsb2NhdGlvbik7XG5cbiAgICAgIGxvY2F0aW9uID0gX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7IHN0YXRlOiBhY3Rpb24gfSk7XG5cbiAgICAgIGFjdGlvbiA9IGtleTtcbiAgICAgIGtleSA9IGFyZ3VtZW50c1szXSB8fCBjcmVhdGVLZXkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NyZWF0ZUxvY2F0aW9uM1snZGVmYXVsdCddKGxvY2F0aW9uLCBhY3Rpb24sIGtleSk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICB1cGRhdGVMb2NhdGlvblN0YXRlKGxvY2F0aW9uLCBzdGF0ZSk7XG4gICAgICB1cGRhdGVMb2NhdGlvbihsb2NhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZUxvY2F0aW9uU3RhdGUoZ2V0Q3VycmVudExvY2F0aW9uKCksIHN0YXRlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvblN0YXRlKGxvY2F0aW9uLCBzdGF0ZSkge1xuICAgIGxvY2F0aW9uLnN0YXRlID0gX2V4dGVuZHMoe30sIGxvY2F0aW9uLnN0YXRlLCBzdGF0ZSk7XG4gICAgc2F2ZVN0YXRlKGxvY2F0aW9uLmtleSwgbG9jYXRpb24uc3RhdGUpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICBpZiAodHJhbnNpdGlvbkhvb2tzLmluZGV4T2YoaG9vaykgPT09IC0xKSB0cmFuc2l0aW9uSG9va3MucHVzaChob29rKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICB0cmFuc2l0aW9uSG9va3MgPSB0cmFuc2l0aW9uSG9va3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbSAhPT0gaG9vaztcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcHVzaFN0YXRlKHN0YXRlLCBwYXRoKSB7XG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgcGF0aCA9IF9wYXJzZVBhdGgyWydkZWZhdWx0J10ocGF0aCk7XG5cbiAgICBwdXNoKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgpKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcmVwbGFjZVN0YXRlKHN0YXRlLCBwYXRoKSB7XG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgcGF0aCA9IF9wYXJzZVBhdGgyWydkZWZhdWx0J10ocGF0aCk7XG5cbiAgICByZXBsYWNlKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgdHJhbnNpdGlvblRvOiB0cmFuc2l0aW9uVG8sXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBjcmVhdGVLZXk6IGNyZWF0ZUtleSxcbiAgICBjcmVhdGVQYXRoOiBjcmVhdGVQYXRoLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgY3JlYXRlTG9jYXRpb246IGNyZWF0ZUxvY2F0aW9uLFxuXG4gICAgc2V0U3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10oc2V0U3RhdGUsICdzZXRTdGF0ZSBpcyBkZXByZWNhdGVkOyB1c2UgbG9jYXRpb24ua2V5IHRvIHNhdmUgc3RhdGUgaW5zdGVhZCcpLFxuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgJ3JlZ2lzdGVyVHJhbnNpdGlvbkhvb2sgaXMgZGVwcmVjYXRlZDsgdXNlIGxpc3RlbkJlZm9yZSBpbnN0ZWFkJyksXG4gICAgdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgJ3VucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayBpcyBkZXByZWNhdGVkOyB1c2UgdGhlIGNhbGxiYWNrIHJldHVybmVkIGZyb20gbGlzdGVuQmVmb3JlIGluc3RlYWQnKSxcbiAgICBwdXNoU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocHVzaFN0YXRlLCAncHVzaFN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSBwdXNoIGluc3RlYWQnKSxcbiAgICByZXBsYWNlU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocmVwbGFjZVN0YXRlLCAncmVwbGFjZVN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSByZXBsYWNlIGluc3RlYWQnKVxuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLy9pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJ1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX3BhcnNlUGF0aCA9IHJlcXVpcmUoJy4vcGFyc2VQYXRoJyk7XG5cbnZhciBfcGFyc2VQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlUGF0aCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKCkge1xuICB2YXIgbG9jYXRpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAnLycgOiBhcmd1bWVudHNbMF07XG4gIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBfQWN0aW9ucy5QT1AgOiBhcmd1bWVudHNbMV07XG4gIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzJdO1xuXG4gIHZhciBfZm91cnRoQXJnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1szXTtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgbG9jYXRpb24gPSBfcGFyc2VQYXRoMlsnZGVmYXVsdCddKGxvY2F0aW9uKTtcblxuICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAvL3dhcm5pbmcoXG4gICAgLy8gIGZhbHNlLFxuICAgIC8vICAnVGhlIHN0YXRlICgybmQpIGFyZ3VtZW50IHRvIGNyZWF0ZUxvY2F0aW9uIGlzIGRlcHJlY2F0ZWQ7IHVzZSBhICcgK1xuICAgIC8vICAnbG9jYXRpb24gZGVzY3JpcHRvciBpbnN0ZWFkJ1xuICAgIC8vKVxuXG4gICAgbG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHsgc3RhdGU6IGFjdGlvbiB9KTtcblxuICAgIGFjdGlvbiA9IGtleSB8fCBfQWN0aW9ucy5QT1A7XG4gICAga2V5ID0gX2ZvdXJ0aEFyZztcbiAgfVxuXG4gIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaCB8fCAnJztcbiAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoIHx8ICcnO1xuICB2YXIgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZSB8fCBudWxsO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2gsXG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIGFjdGlvbjogYWN0aW9uLFxuICAgIGtleToga2V5XG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUxvY2F0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLy9pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJ1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGRlcHJlY2F0ZShmbikge1xuICByZXR1cm4gZm47XG4gIC8vcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgLy8gIHdhcm5pbmcoZmFsc2UsICdbaGlzdG9yeV0gJyArIG1lc3NhZ2UpXG4gIC8vICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAvL31cbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBkZXByZWNhdGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gZXh0cmFjdFBhdGgoc3RyaW5nKSB7XG4gIHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaCgvXmh0dHBzPzpcXC9cXC9bXlxcL10qLyk7XG5cbiAgaWYgKG1hdGNoID09IG51bGwpIHJldHVybiBzdHJpbmc7XG5cbiAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKTtcbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHRyYWN0UGF0aDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2V4dHJhY3RQYXRoID0gcmVxdWlyZSgnLi9leHRyYWN0UGF0aCcpO1xuXG52YXIgX2V4dHJhY3RQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dHJhY3RQYXRoKTtcblxuZnVuY3Rpb24gcGFyc2VQYXRoKHBhdGgpIHtcbiAgdmFyIHBhdGhuYW1lID0gX2V4dHJhY3RQYXRoMlsnZGVmYXVsdCddKHBhdGgpO1xuICB2YXIgc2VhcmNoID0gJyc7XG4gIHZhciBoYXNoID0gJyc7XG5cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKHBhdGggPT09IHBhdGhuYW1lLCAnQSBwYXRoIG11c3QgYmUgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoIG9ubHksIG5vdCBhIGZ1bGx5IHF1YWxpZmllZCBVUkwgbGlrZSBcIiVzXCInLCBwYXRoKSA6IHVuZGVmaW5lZDtcblxuICB2YXIgaGFzaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignIycpO1xuICBpZiAoaGFzaEluZGV4ICE9PSAtMSkge1xuICAgIGhhc2ggPSBwYXRobmFtZS5zdWJzdHJpbmcoaGFzaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cmluZygwLCBoYXNoSW5kZXgpO1xuICB9XG5cbiAgdmFyIHNlYXJjaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignPycpO1xuICBpZiAoc2VhcmNoSW5kZXggIT09IC0xKSB7XG4gICAgc2VhcmNoID0gcGF0aG5hbWUuc3Vic3RyaW5nKHNlYXJjaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cmluZygwLCBzZWFyY2hJbmRleCk7XG4gIH1cblxuICBpZiAocGF0aG5hbWUgPT09ICcnKSBwYXRobmFtZSA9ICcvJztcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoXG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHBhcnNlUGF0aDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gcnVuVHJhbnNpdGlvbkhvb2soaG9vaywgbG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gIHZhciByZXN1bHQgPSBob29rKGxvY2F0aW9uLCBjYWxsYmFjayk7XG5cbiAgaWYgKGhvb2subGVuZ3RoIDwgMikge1xuICAgIC8vIEFzc3VtZSB0aGUgaG9vayBydW5zIHN5bmNocm9ub3VzbHkgYW5kIGF1dG9tYXRpY2FsbHlcbiAgICAvLyBjYWxsIHRoZSBjYWxsYmFjayB3aXRoIHRoZSByZXR1cm4gdmFsdWUuXG4gICAgY2FsbGJhY2socmVzdWx0KTtcbiAgfSBlbHNlIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10ocmVzdWx0ID09PSB1bmRlZmluZWQsICdZb3Ugc2hvdWxkIG5vdCBcInJldHVyblwiIGluIGEgdHJhbnNpdGlvbiBob29rIHdpdGggYSBjYWxsYmFjayBhcmd1bWVudDsgY2FsbCB0aGUgY2FsbGJhY2sgaW5zdGVhZCcpIDogdW5kZWZpbmVkO1xuICB9XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJ1blRyYW5zaXRpb25Ib29rO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgKC9eW3NcXFddKiQvKS50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiJdfQ==