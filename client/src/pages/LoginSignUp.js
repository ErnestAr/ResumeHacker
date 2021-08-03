import React , { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../utils/mutations';
import { Link, Redirect } from 'react-router-dom';
import {Fab} from "@material-ui/core"


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
      <section className='container mt-5'>
        <br></br>
        <br></br>
        <br></br>
        <div style={{position:'absolute', left:'16vw', height:'100vh', width:'200vw', opacity:'0.3', backgroundImage:`url('https://www.greatsampleresume.com/wp-content/themes/resumebaking/img/ats.svg')`, backgroundRepeat:'no-repeat'}}></div>
        <div className='row justify-content-around'>
          <div className='col-3'>
          <p style={{color:'#3A7CA5', fontWeight:'bold', fontSize:'4em'}}> Sign<span style={{fontStyle:'italic', color:'#16425B'}}>In</span> </p>
            {logindata ? (
              <Redirect to="/Dashboard"/>
            ) : (
              <div className='card ' >
                  <label style={{color:'white'}}>Username</label>
                  <input onChange={LoginChange} name="userName" type="text" value={loginState.userName}></input>
                  <br></br>
                  <label style={{color:'white'}}>Password</label>
                  <input onChange={LoginChange} name="password" type="password" value={loginState.password}></input>       
                  <Fab className= " mt-2 me-5"  style={{width: "225px" }} variant="extended"  type="submit" onClick = {LoginUser}  >
                      Sign up
                  </Fab>
              </div>
            )}
          </div>

            <div className='col-3'>
            <p style={{color:'#3A7CA5', fontWeight:'bold', fontSize:'4em'}}>Sign<span style={{fontStyle:'italic', color:'#16425B'}}>Up</span> </p>
                {signUpdata ? (
                    
                    <Redirect to="/Dashboard"/>
                    
                ) :(
                    <div className='card' >
                        <label style={{color:'white'}}>Username</label>
                        <input onChange={SignUpChange} name="userName" type="text" value={formState.name}></input>
                        <br></br>
                        <label style={{color:'white'}}>Email</label>
                        <input onChange={SignUpChange} name="email" type="email" value={formState.email}></input>
                        <br></br>
                        <label style={{color:'white'}}>Password</label>
                        <input onChange={SignUpChange} name="password" type="password" value={formState.password}></input>       
                        <Fab className= " mt-2 me-5"  style={{width: "225px"}} variant="extended" type="submit" onClick={SignUp}  >
                            Sign up
                        </Fab>
                    </div>
                )}
            </div> 
        </div>
      </section>
    )
}


export default LoginSignUp;