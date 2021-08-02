import {DELETE_USER} from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';


export default function DeleteUser(){

    let id;
    let { loading, error, data } = useQuery(QUERY_ME);
    if(data!=null){
        id = data.me._id;
    }
    

    const [deleteUser, { signUpError, signUpdata }] = useMutation(DELETE_USER);

    const Delete = async (event) =>{
        
        event.preventDefault();
        try {
            const { data } = await deleteUser({
              variables: {userId:id },
            });
            Auth.logout();
            <Link to="/"/>
            
          } catch (e) {
            console.error(e);
          }
    }

    return (
        <div><button 
        style={{ cursor: 'pointer' }}
        type="submit"
        onClick = {Delete}
        >
        DeleteUser
    </button> </div>
    )
}