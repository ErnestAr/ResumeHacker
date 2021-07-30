import React from 'react'
import "../pages/Dashboard/dashboard.css"
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'

export default function Templates() {
  const history = useHistory();

  function handleClick() {
    history.push("/dashboard/resume");
  }
    return (
            <main className=" col-9 wm">
              <section className="  row bd-highlight p-2 bg-color rounded">
                <h2 className="p-1">Create a Template</h2>
                <div className="col-3 p-2">
                  <img src="/images/template.png" alt="template" className="img-fluid btn-acc" onClick={handleClick}  />
                </div>
                <div className="col-3 p-2">
                  <img src="/images/template.png" alt="template" className="img-fluid btn-acc" />
                </div>
                <div className="col-3 p-2">
                  <img src="/images/template.png" alt="template" className="img-fluid btn-acc" />
                </div>
                <div className="col-3 p-2">
                  <img src="/images/template.png" alt="template" className="img-fluid btn-acc" />
                </div>
              </section>
              <section className=" mt-5 row bd-highlight p-2 bg-color rounded">
                <h2 className="p-1">Your Resume Templates</h2>
                <div className="col-3 p-2">
                  <img src="/images/template.png" alt="template" className="img-fluid btn-acc" />
                </div>
                <div className="col-3 p-2">
                  <img src="/images/template.png" alt="template" className="img-fluid btn-acc" />
                </div>
                <div className="col-3 p-2">
                  <img src="/images/template.png" alt="template" className="img-fluid btn-acc" />
                </div>
                <div className="col-3 p-2">
                  <img src="/images/template.png" alt="template" className="img-fluid btn-acc" />
                </div>
              </section>
          </main>
    )
}
