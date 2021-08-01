import React , { useState } from 'react';
import { useParams } from 'react-router-dom';

import { QUERY_ME } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import {UPDATE_USER} from '../utils/mutations';


export default function UpdateUser() {

    console.log("herrrrr")
    let { loading, error, data } = useQuery(QUERY_ME, {
        onCompleted: (data) => {
            setFormState({
                userName: data.me.userName,
                email: data.me.email,
                password: data.me.password,
            })
        }
    });
    let newData = data?.me || {}
    let id = newData._id;
    
   
    

    const [formState, setFormState] = useState({});

    const [updateUser, { signUpError, signUpdata }] = useMutation(UPDATE_USER);

    const Update = async (event) =>{
        console.log({ ...formState, userId:id });
        event.preventDefault();
        try {
                const { data } = await updateUser({
                    variables: { ...formState, userId:id },
                  });
        
          } catch (e) {
            console.error(e);
          }
    }

    const SignUpChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
        
        console.log("in here");
    };

   
    // const data = useParams();
    // console.log("-------------------------------------")
    // console.log(data);
    return (
        <div>
            {loading ? (
            <div>Loading...</div>
          ):(
                <div>
                    <p>username</p>
                    <input onChange = {SignUpChange}
                    name="userName"
                    type="text"
                    value={formState.userName}
                    >
                    </input>
                        <br></br>
                        <br></br>
                        <p>email</p>
                    <input   onChange = {SignUpChange}
                    name="email"
                    type="email"
                    value={formState.email}
                    >
                                        
                    </input>
                    <br></br>
                    <br></br>
                    <p>password</p>
                    <input   onChange = {SignUpChange}
                        name="password"
                        type="password"
                        value={formState.password}
                    > 
                    </input> 

                    <button 
                        style={{ cursor: 'pointer' }}
                        type="submit"
                        onClick = {Update}
                        >
                        Update
                    </button> 
                </div>
             )};  

        </div>       
    )
}