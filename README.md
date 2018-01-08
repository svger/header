# Header

页头导航组件

## Example

```react
function handleBack() {
    history.back();
}
function handleClickHome() {
    // 推出子页面，回到主页
}
function handleClickRefresh() {
    // 刷新 Header 下面模块的数据
}

<Header>
	<Header.Title>证券交易</Header.Title>
  	<Header.Left><Icon type="header-back" /></Header.Left>
  	<Header.Right>
  		<Icon type="home" onClick={handleClickHome} />
      	<Icon type="refresh" onClick={handleClickRefresh} />
  	</Header.Right>
</Header>
```

## API

### Header

| 属性        | 说明                            | 类型            | 默认值           |
| --------- | ----------------------------- | ------------- | ------------- |
| prefixCls | 样式前缀，如：`cefc-header`，可用于自定义样式 | String        | `cefc-header` |
| children  | 标题、左右栏                        | React.Element | 无             |

### Header.Title

| 属性        | 说明                            | 类型            | 默认值           |
| --------- | ----------------------------- | ------------- | ------------- |
| prefixCls | 样式前缀，如：`cefc-header`，可用于自定义样式 | String        | `cefc-header` |
| children  | 标题栏自定义                        | React.Element | 无             |

### Header.Left

| 属性        | 说明                            | 类型            | 默认值           |
| --------- | ----------------------------- | ------------- | ------------- |
| prefixCls | 样式前缀，如：`cefc-header`，可用于自定义样式 | String        | `cefc-header` |
| children  | 左栏自定义                         | React.Element | 无             |
| onBack    | 返回上一页面回调，返回值为 `true` 则返回      | Function      | 空函数           |

### Header.Right

| 属性        | 说明                            | 类型            | 默认值           |
| --------- | ----------------------------- | ------------- | ------------- |
| prefixCls | 样式前缀，如：`cefc-header`，可用于自定义样式 | String        | `cefc-header` |
| children  | 右栏自定义                         | React.Element | 无             |

