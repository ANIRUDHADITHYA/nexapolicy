import React, { useState } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-section">
            <div className='login-container'>
                <div className='login-header'>
                    <i class="fa-solid fa-xmark" onClick={()=>{props.login(false)}}></i>
                    <h2>Login Account</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <Link to="/forgot-password" className='forgot-password'>Forgot password?</Link>
                    <button type="submit">Login</button>
                    <p className='dont-have-acc'>Don't have an account? <span onClick={()=>{props.login(false); props.register(true)}}>Register Now</span></p>
       
                </form>
                
            </div>
             </div>
    );
};

export default Login;
