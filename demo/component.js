import React from 'react';
import Header from '../src/Header';
import Icon from 'cefc-ui-icon';

function handleBack() {
  alert('返回');
  history.back();
}
function handleClickHome() {
  // 推出子页面，回到主页
  alert('回到主页');
}
function handleClickRefresh() {
  // 刷新 Header 下面模块的数据
  alert('刷新页面');
}

class App extends React.Component {
  render() {
    return (
      <Header>
        <Header.Left><Icon type="return" color="white" /></Header.Left>
        <Header.Title>证券交易</Header.Title>
        <Header.Right>
          <Icon type="homepage" color="white" size="lg" onClick={handleClickHome} />
          <Icon type="refresh" color="white" size="lg" onClick={handleClickRefresh} />
        </Header.Right>
      </Header>
    );
  }
}

export default App;
