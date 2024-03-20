import React from 'react'
import { useNavigate } from 'react-router-dom';

const TopBar = (props) => {
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
        <div className='topbar'>
            <button 
                className={`con-btn ${isConnected ? 'connected' : 'disconnected'}`}
                onClick={isConnected ? handleDisconnect : null}
            ></button>
        </div>
    )
}

export default TopBar;