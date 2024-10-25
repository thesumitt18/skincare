import React, { useState } from 'react';
import './loginForm.css';
// import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('form submitted')

        // try {
        //     const response = await axios.post('http://localhost:3000/register', { email, password });
        //     setEmail('');
        //     setPassword('');
        //     setMessage(response.data.message); // Display success message
        // } catch (error) {
        //     if (error.response) {
        //         setMessage(error.response.data.message); // Display error message
        //     } else {
        //         setMessage('Error connecting to the server.');
        //     }
        // }
    };

    return (
        <div>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <h3>Signup Here</h3>

                <label >Username</label>
                <input
                    type="text"
                    placeholder="Email or Phone"
                    id="username"
                    value={email}
                    onChange={handleEmailChange}
                />

                <label >Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                />

                <button type="submit">Signup</button>
                <button type="button">Login</button>
                <div className="social">
                    <div className="go"><i className="fab fa-google"></i> Google</div>
                    <div className="fb"><i className="fab fa-facebook"></i> Facebook</div>
                </div>
            </form>
            {/* {message && <p>{message}</p>} */}
        </div>
    );
};

export default LoginForm;