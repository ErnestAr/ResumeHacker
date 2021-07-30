import React from 'react'
import {VscAccount} from "react-icons/vsc"
import "../pages/Dashboard/dashboard.css"

export default function UserInterface() {
    return (
        <aside className="col-3 bd-highlight ">
            <div className="col-10  rounded p-1 acc">
                <VscAccount className="p-2 mb-3 color-sc"  size="275px"/>
                <h5 className=" m-0.5 p-1 rounded" >Username: <span className="solid ">TestUsername</span></h5>
                <h5  className=" m-0.5 p-1 rounded">Email: <span className="solid ">TestUsername</span></h5>
            </div>
            <div  className="col-10 mt-3">
                <h3 className="text-center  rounded ">Acoount Settings</h3> 
                <h3 className="text-center bg-color rounded btn-acc acc">Update Information</h3>
                <h3 className="text-center bg-color rounded btn-acc acc">Delete Sccount</h3>
            </div>
        </aside>
    )
}
