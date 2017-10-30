'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _index = require('./style/index.less');

var _index2 = _interopRequireDefault(_index);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('@cefc-ui/icon');

var _icon2 = _interopRequireDefault(_icon);

var _core = require('@cefc-utils/core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import PageRouters from '../utils/PageRouters';


var UI = function (_Component) {
  _inherits(UI, _Component);

  function UI(props, context) {
    _classCallCheck(this, UI);

    var _this = _possibleConstructorReturn(this, (UI.__proto__ || Object.getPrototypeOf(UI)).call(this, props, context));

    _this.reload = function () {
      if (_this.props.reload) {
        _this.props.reload();
      } else {
        window.location.reload();
      }
    };

    _this.renderLeftComponent = function () {
      var leftDOM = null;
      var _this$props = _this.props,
          hideBack = _this$props.hideBack,
          leftComponent = _this$props.leftComponent,
          onBack = _this$props.onBack;

      //重置头部组件左边的元素

      if (leftComponent) {

        return;
      }

      if (!hideBack) {
        //let backFunc = onBack || PageRouters.goBack;
        var backFunc = onBack;

        leftDOM = _react2.default.createElement(
          'div',
          { styleName: 'left-wrapper iconContainer', onClick: backFunc },
          _react2.default.createElement(_icon2.default, { type: 'header-back' })
        );
      }

      return leftDOM;
    };

    _this.renderRightComponent = function () {
      var rightDOM = [];
      var _this$props2 = _this.props,
          rightComponent = _this$props2.rightComponent,
          hideReload = _this$props2.hideReload,
          hideHome = _this$props2.hideHome;

      //重置头部组件右边的元素

      if (rightComponent) {
        var content = {};
        if (_react2.default.isValidElement(rightComponent)) {
          content = _react2.default.cloneElement(rightComponent);
          rightDOM.push(content);
        } else {
          rightDOM = rightComponent.map(function (item) {
            item = _react2.default.createElement(
              _reactRouter.Link,
              { to: { pathname: item.link, state: item.state }, key: item.type },
              _react2.default.createElement(_icon2.default, { type: item.type })
            );

            return item;
          });
        }
      }

      if (!hideHome) {
        rightDOM.push(_react2.default.createElement(
          _reactRouter.Link,
          { to: '/openInterest', key: 'home', styleName: 'iconContainer' },
          _react2.default.createElement(_icon2.default, { type: 'openInterest' })
        ));
      }

      if (!hideReload) {
        rightDOM.push(_react2.default.createElement(
          _reactRouter.Link,
          { key: 'reload', styleName: 'iconContainer' },
          _react2.default.createElement(_icon2.default, { type: 'reload', onClick: _this.reload })
        ));
      }

      return _react2.default.createElement(
        'div',
        { styleName: 'right-wrapper' },
        rightDOM
      );
    };

    _this.renderTitle = function (title) {
      if (_react2.default.isValidElement(title)) {

        return title;
      }

      return _react2.default.createElement(
        'div',
        { styleName: 'title' },
        title
      );
    };

    _this.state = {};

    var fn = _core.isEmpty;
    return _this;
  }

  _createClass(UI, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'header',
        { styleName: 'header-wrapper', id: 'header' },
        _react2.default.createElement(
          'div',
          null,
          this.renderLeftComponent(),
          this.renderTitle(this.props.title),
          this.renderRightComponent()
        )
      );
    }
  }]);

  return UI;
}(_react.Component);

UI.propTypes = {
  title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]), //头部标题名称
  onBack: _react.PropTypes.func, //重定义回退按钮
  hideBack: _react.PropTypes.bool, //是否隐藏默认的回退按钮
  hideHome: _react.PropTypes.bool, //是否隐藏持仓按钮
  hideReload: _react.PropTypes.bool, //是否隐藏刷新按钮
  reload: _react.PropTypes.func, //重新定义reload点击事件
  leftComponent: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    icon: _react.PropTypes.string,
    link: _react.PropTypes.string
  })),
  rightComponent: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.arrayOf(_react.PropTypes.shape({
    icon: _react.PropTypes.string,
    link: _react.PropTypes.string,
    alt: _react.PropTypes.string
  }))])
};
exports.default = (0, _reactCssModules2.default)(UI, _index2.default, {
  allowMultiple: true
});