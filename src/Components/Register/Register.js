import React, { useState } from 'react';
import "./Register.css";

const Register = (props) => {
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
            <div className='login-container register'>
                <div className='login-header'>
                    <i class="fa-solid fa-xmark" onClick={()=>{props.register(false)}}></i>
                    <h2>Register New Account</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='register-form-input-pair'>
                        <div className="form-group register odd">
                            <label htmlFor="f_name">First Name</label>
                            <input
                                type="text"
                                id="f_name"
                                name="f_name"
                                required
                            />
                        </div>
                        <div className="form-group register even">
                            <label htmlFor="l_name">Last Name</label>
                            <input
                                type="text"
                                id="l_name"
                                name="l_name"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className='register-form-input-pair'>
                        <div className="form-group register odd">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-group register even">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input
                                type="number"
                                id="mobile"
                                name="mobile"
                                required
                            />
                        </div>
                    </div>

                    <div className='register-form-input-pair'>
                        <div className="form-group register odd">
                            <label htmlFor="password">Set Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                            />
                        </div>
                        <div className="form-group register even">
                            <label htmlFor="l_name">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm_password"
                                name="confirm_password"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit">Register Now</button>
                    <p className='dont-have-acc'>Already have an account? <span onClick={()=>{props.login(true); props.register(false)}}>Login Now</span></p>

                </form>

            </div>
        </div>
    );
};

export default Register;
