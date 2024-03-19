import React from 'react'

const Logo = (props) => {
    const {
        isConnected,
        onConnect,
        onDisconnect,
      } = props;

    return (
        <div className='logocontainer'>
            <span className='logo'>SpeakEasy</span>
            <button 
                className={`con-btn ${isConnected ? 'connected' : 'disconnected'}`}
                onClick={isConnected ? onDisconnect : onConnect}
            ></button>
        </div>
    )
}

export default Logo;