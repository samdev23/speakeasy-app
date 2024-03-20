import React from 'react'
import User from './User';
import Logo from './Logo';

const Sidebar = (props) => {
    const {
        users,
      } = props;

    return (
        <div className='sidebar'>
            <Logo/>
            {users.map((user, index) => <User key = {index} name={user} />)}
        </div>
    )
}

export default Sidebar;