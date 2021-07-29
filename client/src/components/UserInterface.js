import React from 'react'
import {VscAccount} from "react-icons/vsc"
import "../pages/Dashboard/dashboard.css"

export default function UserInterface() {
    return (
        <aside className="col-3 bd-highlight">
            <div className="col-10 bg-color rounded p-1 border-sc">
                <VscAccount className="p-2 mb-3 color-sc"  size="275px"/>
                <h5 className="border-sc m-0.5 p-1 rounded" >Username: <solid className="solid ">TestUsername</solid></h5>
                <h5  className="border-sc m-0.5 p-1 rounded">Email: <solid className="solid ">TestUsername</solid></h5>
            </div>
            <div  className="col-10 mt-3">
                <h3 className="text-center bg-color-secondary rounded ">Acoount Settings</h3> 
                <h3 className="text-center bg-color rounded btn-acc border-sc">Update Information</h3>
                <h3 className="text-center bg-color rounded btn-acc border-sc">Delete Sccount</h3>
            </div>
        </aside>
    )
}
