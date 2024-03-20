import React from 'react';
import TopBar from '../sidebar_components/TopBar';
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