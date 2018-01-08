import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'cefc-ui-icon';

import './style/index.less';

const defaultPrefixCls = 'cefc-header';

function HolderBuilder(name, id) {
  function Holder({ prefixCls, children }) {
    return (
      <div className={name ? `${prefixCls}-${name}` : prefixCls} id={id}>{children}</div>
    );
  }

  Holder.defaultProps = {
    prefixCls: defaultPrefixCls
  };
  
  Holder.propTypes = {
    children: PropTypes.node.isRequired,
    prefixCls: PropTypes.string.isRequired
  }

  return Holder;
}

const Header = HolderBuilder(null, 'header');
const Title = HolderBuilder('title');
const Right = HolderBuilder('right');

function Left({ prefixCls, children, onBack }) {
  return (
    <div className={`${prefixCls}-left`} onClick={onBack}>{children}</div>
  );
}

Left.defaultProps = {
  prefixCls: defaultPrefixCls,
  children: <Icon type="return" />,
  onBack() {
    history.back();
  }
};

Left.propTypes = {
  prefixCls: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onBack: PropTypes.func
};

Header.Title = Title;
Header.Left = Left;
Header.Right = Right;

export default Header;