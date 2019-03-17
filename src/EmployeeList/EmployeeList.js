import React from 'react';
import './EmployeeList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const employeeList = (props) => {
  return (
    <div className="card">
      <div className="row justify-content-center">
        <div className="col-1">{props.id}</div>
        <div className="col-2">{props.firstName}</div>
        <div className="col-2">{props.lastName}</div>
        <div className="col-3">{props.email}</div>
        <div className="col-2">{props.phone}</div>
        <div className="col-2">{props.salary}
        <FontAwesomeIcon onClick={props.clickDelete} className="ml-4 clickable" icon="trash-alt" />
        <FontAwesomeIcon className="ml-2 clickable" icon="edit" /></div>
      </div>
    </div>
    )
}

export default employeeList;