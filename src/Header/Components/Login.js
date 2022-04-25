import React from 'react';
import {FaGoogle} from 'react-icons/fa';
import {ImFacebook2} from 'react-icons/im';
import './Login.css';

const Login = (props) => {
    return (
        <div>
            <div className='backdrop ' onClick={props.onClick}></div>
            <div className='LoginContainer'>
            <form className='LoginFormContainer'>
                <h1>Login</h1>
                <input className='formchildren' type="email" placeholder='Email'/>
                <input className='formchildren' type="password" placeholder='Password'/>
                <p>Forgot Password? <span className='resetpwd'>Reset Password</span></p>
                <button className='formchildren buttonlogincontainer' type='submit'>Log in</button>
                <div className='Loginseperatorscontainer'>
                    <hr className='Loginseperators'></hr>
                    <div className='ortext'><span>or</span></div>
                    <hr className='Loginseperators'></hr>
                </div>
                <button className='formchildren google flx' type='submit'>
                    <FaGoogle size="18px" color="white"/>
                    <span className='fbgtxt'>Continue with Google</span>
                </button>
                <button className='formchildren facebook flx' type='submit'>
                    <ImFacebook2 size="18px" color="white"/>
                    <span className='fbgtxt'>Continue with Facebook</span>
                </button>
                
            </form>
            <hr className='Loginseperators'></hr>
            <div className='Footerlogin'><span>Don't have an account ? </span></div>
            <div className='Footerlogin'><span className='Footersignuptext'>Sign up</span></div>
        </div>
        </div>
    );
};

export default Login;