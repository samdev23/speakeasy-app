import React from 'react'
import ChatBubble from './ChatBubble';

const ChatBubbles = ({chatRows}) => {
    return (
        <div className='chatbubbles'>
            {chatRows.map((chatRow, index) => <ChatBubble key = {index} message={chatRow} />)}
        </div>
    )
}

export default ChatBubbles;