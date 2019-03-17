import React from 'react';
import './CreateEmployee.css'

const createEmployee = (props) => {
  return (
      <div className="CreateEmployee">
        <form>
          <div className="row">
            <div className='col-6'>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input onChange={props.changeFirstName} type="text" className="form-control" id="firstName" placeholder="First Name" />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={props.changeLastName} type="text" className="form-control" id="lastName" placeholder="Last Name" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className='col-6'>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input onChange={props.changeEmail} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input onChange={props.changePhone} type="number" className="form-control" id="phone" placeholder="Phone Number" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="salary">Salary</label>
                <input onChange={props.changeSalary} type="number" className="form-control" id="salary" placeholder="Salary" />
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-success" onClick={props.submitClick}>Submit</button>
        </form>
      </div>
    )
}

export default createEmployee;