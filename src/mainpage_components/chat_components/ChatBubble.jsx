import React from 'react'

const ChatBubble = ({message}) => {
    return (
        <div className='chatbubble'>
            <div className='msgcontent'>{message}</div>
        </div>
    )
}

export default ChatBubble;