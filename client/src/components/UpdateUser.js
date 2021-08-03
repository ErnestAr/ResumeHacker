import React , { useState } from 'react';
import { QUERY_ME } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import {UPDATE_USER} from '../utils/mutations';
import {Fab} from "@material-ui/core"

export default function UpdateUser() {

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

    return (
        <div div className="card col-4">
            {loading ? (
            <div>Loading...</div>
          ):(
                <div>
                    <p>Username</p>
                    <input onChange = {SignUpChange}
                    name="userName"
                    type="text"
                    value={formState.userName}
                    >
                    </input>
                        <br></br>
                        <br></br>
                        <p>Email</p>
                    <input   onChange = {SignUpChange}
                    name="email"
                    type="email"
                    value={formState.email}
                    >
                                        
                    </input>
                    <br></br>
                    <br></br>
                    <p>Password</p>
                    <input   onChange = {SignUpChange}
                        name="password"
                        type="password"
                        
                    > 
                    </input> 
                </div>
                
             )}
                <Fab className= "mt-4 me-5"  type='submit' style={{width: "245px"}} variant="extended" onClick = {Update}  >
                    Update Account
                </Fab>
        </div>       
    )
}