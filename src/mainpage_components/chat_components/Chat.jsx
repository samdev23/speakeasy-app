import React from 'react';
import TopBar from './TopBar';
import ChatBubbles from './ChatBubbles';
import InputBar from './InputBar';

const Chat = (props) => {
    const {
        isConnected,
        chatRows,
        onPublicMessage,
      } = props;

    return (
        
        <div className='chat'>
            <TopBar/>
            <ChatBubbles chatRows = {chatRows}/>
            <InputBar 
            onPublicMessage = {onPublicMessage}
            isConnected = {isConnected}/>
        </div>
    )
}

export default Chat;