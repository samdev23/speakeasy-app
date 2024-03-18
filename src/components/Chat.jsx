import React from 'react'
import TopBar from './TopBar';
import ChatBubbles from './ChatBubbles';
import InputBar from './InputBar';

const Chat = () => {
    return (
        
        <div className='chat'>
            <TopBar/>
            <ChatBubbles/>
            <InputBar/>
        </div>
    )
}

export default Chat;