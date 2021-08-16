import React from 'react'
import "./dashboard.css"
import {Fab} from "@material-ui/core"
import {useHistory} from 'react-router-dom'


export default function UserInterface() {
    const history = useHistory();
    function handleClick() {
        history.push("/dashboard/updatedelete");
    };
    return (
        <aside className="col-3 bd-highlight ">
            <div  className="col-10 mt-3">
                <h3 className="text-center  rounded ">Acoount Settings</h3> 
                <Fab className= " mt-2 me-5"  style={{width: "295px"}} variant="extended" onClick={handleClick} >
                    Update/Delete Account
                </Fab>
            </div>
        </aside>
    )
}
