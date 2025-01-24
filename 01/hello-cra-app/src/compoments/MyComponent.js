import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MyComponent.css';

class MyComponent extends Component {
    // 상태 변수 선언
    state = {
        value: 0,
        message: '',
        username: '',
        isValid: false,
        messageArr: ['Angular', 'React', 'Vue', 'Ember'],
    };

    // 이벤트 핸들러
    handleDec = () => {
        this.setState((prevState) => ({
            value: prevState.value - 1,
        }));
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleEnter = (e) => {
        const {message, messageArr} = this.state;
        if (e.keyCode === 13) {
            this.setState({ 
                isValid: true,
                messageArr:[...messageArr, message],
                message:'',

            });

            // ref DOM 접근
            if (this.myUsername) {
                this.myUsername.focus();
            }
        }
    };

    handleDbClick = (index) => {
        const {messageArr} = this.state;
        this.setState({
            messageArr: messageArr.filter( (msg, idx) => idx !== index)
        });
    };

    render() {
        const { name, age } = this.props;
        const { value, username, message, isValid, messageArr } = this.state;
        const {handleDec, handleChange, handleEnter, handleDbClick} = this;

        const messageList = messageArr.map(
            (msg, idx) => (<li key={idx} onDoubleClick={ () => handleDbClick(idx)}> {msg}</li>));

        return (
            <div>
                <h4>안녕하세요! <b>{name} / {age}</b></h4>

                <p>상태 변수 value = {value}</p>

                <button onClick={() => this.setState({ value: value + 1 })}>
                    증가
                </button>
                <button onClick={handleDec}>
                    감소
                </button>

                <div>
                    <p>Message = {message}</p>
                    <input
                        name="message"
                        value={message}
                        onChange={handleChange}
                        onKeyDown={handleEnter}
                    />
                    <ul>
                        {messageList}
                    </ul>
                </div>

                <div>
                    <p>Username = {username}</p>
                    <input
                        name="username"
                        value={username}
                        onChange={handleChange}
                        className={isValid ? 'success' : 'failure'}
                        ref={(ref) => (this.myUsername = ref)}
                    />
                </div>
            </div>
        );
    }
}

// 기본 props 설정
MyComponent.defaultProps = {
    name: 'Default 이름',
};

// propTypes 설정
MyComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
};

export default MyComponent;
