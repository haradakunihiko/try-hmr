import React from 'react';

class Todo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  refCallback(ref) {
    this.inputRef = ref;
  }

  handleOnClick() {
    this.setState({
      list: [...this.state.list, this.inputRef.value]
    })
  }

  render() {
    const { buttonLabel } = this.props;
    return (
      <div>
        <input ref={::this.refCallback} type='text'/>
        <button onClick={::this.handleOnClick}>{buttonLabel}</button>
        <ul>
          {this.state.list.map((value, index) => <li key={index}>{value}</li>)}
        </ul>
      </div>
    ) 
  }
}

window.proxy = window.proxy || {};
window.proxy.Todo = window.proxy.Todo || {};
window.proxy.Todo.proto = window.proxy.Todo.proto || {};

const proto = window.proxy.Todo.proto;

// プロトタイプチェーンで常に最新のTodo.prototypeを参照させる
proto.__proto__ = Todo.prototype;
Todo.prototype = proto;

export default Todo;

if (module.hot) {
  // 最上部からリレンダリング
  window.rootComponent && window.rootComponent._reactInternalInstance._instance.forceUpdate();

  module.hot.accept(function(err) {
    if (err) {
      console.error(err);
    }
  });
}
