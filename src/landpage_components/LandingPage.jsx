import React from 'react';
import '../component_css/LandingPage.scss';
import Form from './Form.jsx'

const LandingPage = (props) => {
    const {
        isConnected,
        setName, 
        onConnect,
    } = props;

    return (
        <div className='landing-main'>
            <div className='landing-container'>
                <Form 
                isConnected={isConnected}
                setName = {setName}
                onConnect={onConnect}
                />
            </div>
        </div>
    )
}

export default LandingPage;