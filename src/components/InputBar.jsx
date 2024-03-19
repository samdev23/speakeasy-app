import React, { useState } from 'react';

const InputBar = (props) => {
    const {
        isConnected,
        onPublicMessage,
    } = props;

    const [message, setMessage] = useState('');

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (isConnected && message.trim() !== '') {
            onPublicMessage(message);
            setMessage(''); // Clear the input field after sending the message
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className='inputbar'>
            <input
                type='text'
                placeholder='Type message...'
                value={message}
                onChange={handleMessageChange}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default InputBar;
