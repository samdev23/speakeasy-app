import React from 'react'
import User from './User';
import Logo from './Logo';

const Sidebar = (props) => {
    const {
        isConnected,
        users,
        onDisconnect,
      } = props;

    return (
        <div className='sidebar'>
            <Logo 
                isConnected={isConnected}
                onDisconnect = {onDisconnect}/>
            {users.map((user, index) => <User key = {index} name={user} />)}
        </div>
    )
}

export default Sidebar;