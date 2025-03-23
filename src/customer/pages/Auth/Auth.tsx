import React, { useState } from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { Button } from '@mui/material';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      <h1 className='flex justify-center h-[90vh] items-center'>
        <div className='max-w-md h-[85vh] rounded-md border shadow-lg'>
          <img className='w-full rounded-t-md' src="https://thumbs.dreamstime.com/b/user-login-form-mobile-phone-screen-isometric-smartphone-blue-screen-authentication-sign-up-form-user-login-form-179891122.jpg" alt="" />

          <div className='mt-8 px-10'>
            {isLogin ? <LoginForm /> : <RegisterForm />}
            <div className='flex items-center gap-1 justify-center mt-5'>
              <p>{isLogin && "Don't "} have Account</p>
              <Button size='small' onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Create Account" : "Login"}
              </Button>
            </div>
          </div>
        </div>
      </h1>
    </div>
  )
}

export default Auth