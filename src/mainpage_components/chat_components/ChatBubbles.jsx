import React, { useRef, useEffect } from 'react';
import ChatBubble from './ChatBubble';

const ChatBubbles = ({chatRows}) => {

    const chatbubblesRef = useRef(null);

    useEffect(() => {
        chatbubblesRef.current.scrollTop = chatbubblesRef.current.scrollHeight;
    }, [chatRows]);

    return (
        <div className='chatbubbles' ref={chatbubblesRef}>
            {chatRows.map((chatRow, index) => <ChatBubble key = {index} message={chatRow} />)}
        </div>
    )
}

export default ChatBubbles;