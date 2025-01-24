import React, { useRef, useState } from 'react';
import './MyComponent.css';

const MyComponentFunc = ({ name, children }) => {
    const [value, setValue] = useState(0);
    const [inputs, setInputs] = useState({
        message: '',
        username: '',
    });
    const { message, username } = inputs;

    const [valid, setValid] = useState(false);

    // ref 변수 선언
    const myUsername = useRef(null);

    const [messageArr, setMessageArr] = useState( ['Angular', 'React', 'Vue', 'Ember']);

    const messageList = messageArr.map(
        (msg, idx) => (<li key={idx} onDoubleClick={ () => handleDbClick(idx)}> {msg}</li>));

    // event handler
    const handleChange = (e) => {
        setInputs({
            ...inputs, // 기존 상태 유지
            [e.target.name]: e.target.value, // 변경된 값 반영
        });
    };

    const handleEnter = (e) => {
        if (e.keyCode === 13) { // Enter key 확인
            setValid(true);
            setMessageArr([...messageArr, message]);
            setInputs({...inputs, message:''});
            if (myUsername.current) {
                myUsername.current.focus(); // ref를 사용해 DOM 접근
            }
        }
    };

    const handleDbClick = (index) => {
        setMessageArr(messageArr.filter((msg, idx) => idx !== index));
    };

    return (
        <div>
            <h4>{name}</h4>
            {children}

            <p>상태변수 value = {value}</p>
            <button onClick={() => setValue(value + 1)}>증가</button>
            <button onClick={() => setValue(value - 1)}>감소</button>

            <div>
                <p>Message = {message}</p>
                <input
                    name="message"
                    value={message}
                    onChange={handleChange}
                    onKeyDown={handleEnter}
                />


            </div>
            <ul>
                {messageList}
            </ul>
            <div>
                <p>Username = {username}</p>
                <input
                    name="username"
                    value={username}
                    onChange={handleChange}
                    className={valid ? 'success' : 'failure'}
                    ref={myUsername}
                />
            </div>
        </div>
    );
};

// 기본 props 설정
MyComponentFunc.defaultProps = {
    name: 'Default Name',
    children: 'Default Children',
};

export default MyComponentFunc;
