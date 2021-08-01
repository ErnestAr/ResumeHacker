import React , { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../utils/mutations';
import { Link, Redirect } from 'react-router-dom';


import Auth from '../utils/auth';

function LoginSignUp() {
    const [formState, setFormState] = useState({
        userName: '',
        email: '',
        password: '',
    });
    const [loginState, setloginState] = useState({ userName: '', password: '' });
    const [login, { loginError, logindata }] = useMutation(LOGIN_USER);
      
    
    const [addUser, { signUpError, signUpdata }] = useMutation(ADD_USER);

    const LoginChange = (event) => {
      const { name, value } = event.target;
  
      setloginState({
        ...loginState,
        [name]: value,
      });
    };

    const LoginUser = async (event) => {
      try {
        const { data } = await login({
          variables: { ...loginState },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setloginState({
        email: '',
        password: '',
      });
    };
    

    const SignUpChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
        
        console.log("in here");
    };

    const SignUp = async (event) => {
        
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };



    return (
        
        <div>
          
            <div>
            {logindata ? (
              <Redirect to="/Dashboard"/>
            ) : (
              <div>
                  <p>login page</p>
                  <input onChange={LoginChange}     
                  name="userName"
                  type="text"
                  value={loginState.userName}>
                                      
                  </input>
                  <br></br>
                  <br></br>
                  <input onChange={LoginChange}     
                      name="password"
                      type="password"
                      value={loginState.password}
                  > 
                  </input>       
                  <button
                      style={{ cursor: 'pointer' }}
                      type="submit"
                      onClick = {LoginUser}
                      >
                      Login Button
                  </button>
              </div>
            )}
            </div>

            <div>
                {signUpdata ? (
                    
                    <Redirect to="/Dashboard"/>
                    
                ) :(
                    <div>
                        <p>Sign up page</p>
                        <input onChange={SignUpChange}
                        name="userName"
                        type="text"
                        value={formState.name}>
                        </input>
                        <br></br>
                        <br></br>
                        <input onChange={SignUpChange}     
                        name="email"
                        type="email"
                        value={formState.email}>
                                            
                        </input>
                        <br></br>
                        <br></br>
                        <input onChange={SignUpChange}     
                            name="password"
                            type="password"
                            value={formState.password}
                        > 
                        </input>       
                        <button
                            style={{ cursor: 'pointer' }}
                            type="submit"
                            onClick = {SignUp}
                            >
                            Sign Up
                        </button>
                    </div>
                )}
            </div>
            

        </div>
    )
}


export default LoginSignUp;