import React from 'react'

const InputBar = () => {
    return (
        <div className='inputbar'>
            <input type = 'text' placeholder='Type message...'/>
            <button>Send</button>
        </div>
    )
}

export default InputBar;