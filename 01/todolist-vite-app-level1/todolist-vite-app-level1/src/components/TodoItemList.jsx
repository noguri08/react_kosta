import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoItemList extends Component {

    /*
    true: 렌더링을 다시하고,
    false: 렌더링 생략
    */
    shouldComponentUpdate(nextProps, nextState){
        return this.props.myTodos !== nextProps.myTodos;
    }
    render() {
        const { myTodos, myToggle, myRemove } = this.props;

        const todoList = myTodos.map(
            ({ id, text, checked }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={myToggle}
                    onRemove={myRemove}
                    key={id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

TodoItemList.propTypes = {
    myTodos: PropTypes.array,
    myToggle: PropTypes.func,
    myRemove: PropTypes.func,
};

// TodoItemList.defaultProps = {
//     myTodos: [],
//     myToggle: () => {},
//     myRemove: () => {},
// };

export default TodoItemList;
