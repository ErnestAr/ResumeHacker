
import { Link } from 'react-router-dom';
import {Fab} from "@material-ui/core"

export default function DeleteUser(){
    const Delete = async (event) =>{

    }

    return (
        <div className="card col-4">
          <Fab className= " mt-2 me-5"  type='submit'  style={{width: "245px"}} variant="extended" onClick = {Delete}  >
              Delete Account
          </Fab>
        </div>
    )
}