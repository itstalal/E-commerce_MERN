import React from 'react'
import './CSS/Login.css';

const Login = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <form>
          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="E-mail"/>
          <input type="password" name="password" placeholder="Password"/>
        </form>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
      </div>
    </div>
  )
}

export default Login