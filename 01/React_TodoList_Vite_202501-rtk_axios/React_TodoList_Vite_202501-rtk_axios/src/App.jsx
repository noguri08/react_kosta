import { Component } from 'react';
import Form from '@components/Form';
import TodoItemList from '@components/TodoItemList';
import TodoListTemplate from '@components/TodoListTemplate';

// const initialTodos = new Array(500).fill(0).map(
//   (item, idx) => ({ id: idx, text: `일정 ${idx}`, checked: true })
// );

class App extends Component {
  // id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정
  // //상태변수를 포함하고 있는 state 객체
  // state = {
  //   //Form 하위 Input 엘리먼트에서 입력한 값을 저장하는 변수
  //   // todos: initialTodos
  //   todos:
  //     [
  //       { id: 0, text: '리액트 소개', checked: false },
  //       { id: 1, text: '리액트 구조', checked: true },
  //       { id: 2, text: '리액트 사용', checked: false }
  //     ]
  // };

  render() {
    const { handleToggle } = this;

    return (
      <TodoListTemplate form={<Form />}>
        <TodoItemList myToggle={handleToggle}/>
      </TodoListTemplate>
    );
  } //render

}
export default App;