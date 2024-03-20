import React from 'react';
import { useNavigate } from "react-router-dom";


const Form = (props) => {
    const {
        isConnected,
        setName, 
        onConnect,
    } = props;

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isConnected) {
            onConnect();
            navigate("/chat");
        }
    }

    return (
        <div className='landing-form'>
            <h1 className="landing-title">Speakeasy</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setName(e.target.value)} className="landing-input" placeholder="Username" required />

                <div align="center">
                <button type="submit" className="landing-submit">
                    <span>Connect</span>
                </button>
            </div>
            </form>
        </div>
    )
}

export default Form;