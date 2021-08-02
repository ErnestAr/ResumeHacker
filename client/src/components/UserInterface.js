import React from 'react'
import {VscAccount} from "react-icons/vsc"
import "../pages/Dashboard/dashboard.css"
import Fab from '@material-ui/core/Fab';

export default function UserInterface() {
    return (
        <aside className="col-3 bd-highlight ">
            {/* <div className="col-10  rounded p-1 acc">
                <VscAccount className="p-2 mb-3 color-sc"  size="275px"/>
                <h5 className=" m-0.5 p-1 rounded" >Username: <span className="solid ">TestUsername</span></h5>
                <h5  className=" m-0.5 p-1 rounded">Email: <span className="solid ">TestUsername</span></h5>
            </div> */}
            <div  className="col-10 mt-3">
                <h3 className="text-center  rounded ">Acoount Settings</h3> 
                
                <Fab className= " mt-2 me-5"  style={{width: "295px"}} variant="extended" onClick={() => this.nextPath('/updatedelete')} >
                    Update/Delete Account
                </Fab>
            </div>
        </aside>
    )
}
