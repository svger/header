'use strict';

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModule from 'react-css-modules';
import styles from './style/index.less';
import cx from 'classnames';
import Icon from '@cefc-ui/icon';
//import PageRouters from '../utils/PageRouters';
import { isEmpty } from '@cefc-utils/core';

class UI extends Component {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]), //头部标题名称
    onBack: PropTypes.func, //重定义回退按钮
    hideBack: PropTypes.bool, //是否隐藏默认的回退按钮
    hideHome: PropTypes.bool, //是否隐藏持仓按钮
    hideReload: PropTypes.bool, //是否隐藏刷新按钮
    reload: PropTypes.func, //重新定义reload点击事件
    leftComponent: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string,
          link: PropTypes.string
        })
    ),
    rightComponent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.shape({
            icon: PropTypes.string,
            link: PropTypes.string,
            alt: PropTypes.string
          })
      )]),
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};

    const fn = isEmpty;
  }

  reload = () => {
    if (this.props.reload) {
      this.props.reload();
    } else {
      window.location.reload();
    }
  }

  renderLeftComponent = () => {
    let leftDOM = null;
    let { hideBack, leftComponent, onBack } = this.props;

    //重置头部组件左边的元素
    if (leftComponent) {

      return;
    }

    if (!hideBack) {
      //let backFunc = onBack || PageRouters.goBack;
      let backFunc = onBack;

      leftDOM = (
          <div styleName="left-wrapper iconContainer" onClick={backFunc}>
            <Icon type="header-back" />
          </div>
      );
    }

    return leftDOM;
  }

  renderRightComponent = () => {
    let rightDOM = [];
    let { rightComponent, hideReload, hideHome } = this.props;

    //重置头部组件右边的元素
    if (rightComponent) {
      let content = {};
      if (React.isValidElement(rightComponent)) {
        content = React.cloneElement(rightComponent);
        rightDOM.push(content);
      } else {
        rightDOM = rightComponent.map((item) => {
          item = (
              <Link to={{ pathname: item.link, state: item.state }} key={item.type} >
                <Icon type={item.type}/>
              </Link>
          );

          return item;
        });
      }

    }

    if (!hideHome) {
      rightDOM.push(
          <Link to="/openInterest" key="home" styleName="iconContainer">
            <Icon type="openInterest" />
          </Link>
      );
    }

    if (!hideReload) {
      rightDOM.push(
          <Link key="reload" styleName="iconContainer">
            <Icon type="reload" onClick={this.reload} />
          </Link>);
    }

    return (
        <div styleName="right-wrapper">
          {rightDOM}
        </div>
    );
  }

  renderTitle = (title) => {
    if (React.isValidElement(title)) {

      return title;
    }

    return <div styleName="title">{title}</div>
  }


  render() {

    return (
        <header styleName="header-wrapper" id="header">
          <div>
            {this.renderLeftComponent()}
            {this.renderTitle(this.props.title)}
            {this.renderRightComponent()}
          </div>
        </header>
    );
  }
}

export default CSSModule(UI, styles, {
  allowMultiple: true
});
