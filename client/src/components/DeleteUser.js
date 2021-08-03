import {DELETE_USER} from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import {Fab} from "@material-ui/core"

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
        <div className="card col-4">
          <Fab className= " mt-2 me-5"  type='submit'  style={{width: "245px"}} variant="extended" onClick = {Delete}  >
              Delete Account
          </Fab>
        </div>
    )
}