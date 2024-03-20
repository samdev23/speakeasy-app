import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logo = (props) => {
    const {
        isConnected,
        onDisconnect,
      } = props;

      const navigate = useNavigate();

      const handleDisconnect = () => {
        onDisconnect();
        navigate('/');
    };
    return (
        <div className='logocontainer'>
            <span className='logo'>SpeakEasy</span>
            <button 
                className={`con-btn ${isConnected ? 'connected' : 'disconnected'}`}
                onClick={isConnected ? handleDisconnect : null}
            ></button>
        </div>
    )
}

export default Logo;