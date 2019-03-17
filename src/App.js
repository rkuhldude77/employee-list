import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import EmployeeList from './EmployeeList/EmployeeList';
// import EditEmployee from './EditEmployee/EditEmployee';
import CreateEmployee from './CreateEmployee/CreateEmployee';

//adding font awesome items to use in app
library.add(faCheck)
library.add(faTrashAlt)
library.add(faTimes)
library.add(faEdit)
library.add(faPlus)

//format numbers to currency
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

class App extends Component {
  state = {
    fname: '',
    lname: '',
    email: '',
    phone: Number,
    salary: Number,
    employees: [
      {
        id: 1,
        firstName: 'Fred',
        lastName: 'Jones',
        email: 'fred.jones@employee.com',
        phone: 8011234567,
        salary: formatter.format(70000)
      },
      {
        id: 2,
        firstName: 'Scooby',
        lastName: 'Doo',
        email: 'scooby.doo@employee.com',
        phone: 8011234568,
        salary: formatter.format(100000)
      },
      {
        id: 3,
        firstName: 'Daphne',
        lastName: 'Blake',
        email: 'daphne.blake@employee.com',
        phone: 8011234569,
        salary: formatter.format(75000)
      }
    ],
    showCreateEmployees: false
  }

//shows or hides the create employee code
  toggleCreateHandler = () => {
    const doesShow = this.state.showCreateEmployees
    this.setState({showCreateEmployees: !doesShow})
  }

//gets the value for first name from input field in CreateEmployee component
  changeFirstNameHandler = (event) => {
    this.setState({fname: event.target.value})
  }

//gets the value for last name from input field in CreateEmployee component
  changeLastNamehandler = (event) => {
    this.setState({lname: event.target.value})
  }

//gets the value for email from input field in CreateEmployee component
  changeEmailHandler = (event) => {
    this.setState({email: event.target.value})
  }

//gets the value for phone from input field in CreateEmployee component
  changePhoneHandler = (event) => {
    this.setState({phone: event.target.value})
  }

//gets the value for salary from input field in CreateEmployee component
  changeSalaryHandler = (event) => {
    this.setState({salary: event.target.value})
  }

//Submit button in CreateEmployee component creates new employee object and adds to state.
  submitClickedhandler = () => {
    this.toggleCreateHandler()
    const ids = this.state.employees.filter(emp => emp.id)
    const {fname, lname, email, phone, salary} = this.state
    const employee = {
      id: ids.length + 1,
      firstName: fname,
      lastName: lname,
      email: email,
      phone: phone,
      salary: formatter.format(salary)
    }
    const employees = [...this.state.employees]
    employees.push(employee)
    this.setState({employees: employees})
  }

//removes employee from list
  deleteEmployeeHandler = (employeeIndex) => {
    const employees = [...this.state.employees]
    employees.splice(employeeIndex, 1)
    this.setState({employees: employees})
  }
      
  render() {

    let createEmployees = null

    //shows html for create employee and sends props to get data
    if(this.state.showCreateEmployees) {
      createEmployees = (
          <CreateEmployee 
          changeFirstName={this.changeFirstNameHandler}
          changeLastName={this.changeLastNamehandler}
          changeEmail={this.changeEmailHandler}
          changePhone={this.changePhoneHandler}
          changeSalary={this.changeSalaryHandler}
          submitClick={this.submitClickedhandler}
          cancelCreate={this.toggleCreateHandler} />
        )
    }

    //creates html for the list of employees with props data
    let employeeList = (
      <div>
        {this.state.employees.map((employee, index) => {
          return (
              <EmployeeList 
              key={employee.id}
              id={employee.id} 
              firstName={employee.firstName}
              lastName={employee.lastName}
              email={employee.email}
              phone={employee.phone}
              salary={employee.salary}
              clickDelete={() => this.deleteEmployeeHandler(index)}/>
          )
        })}       
      </div>
    )

    return (
      <div className="container">
      <h1 className="employee-title">Employee List</h1>
      <div className="row justify-content-end">
        <div className="col-12 create-button">
          <button className="btn btn-primary" onClick={this.toggleCreateHandler}><FontAwesomeIcon icon="plus" size="lg" /></button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 create-employee">
          {createEmployees}
        </div>
      </div>

      <div className="card">
          <div className="row justify-content-center employee-labels">
            <div className="col-1">ID</div>
            <div className="col-2">First Name</div>
            <div className="col-2">Last Name</div>
            <div className="col-3">Email</div>
            <div className="col-2">Phone #</div>
            <div className="col-2">Salary</div>
          </div>
        </div>
        {employeeList}
      </div>
    );
  }
}

export default App;


/***Uninished EditEmployee***/

  // editEmployeeHandler = (event, id) => {
  //   const employeeIndex = this.state.employees.findIndex(emp => {
  //     return emp.id === id
  //   })

  //   const employee = {
  //     ...this.state.employees[employeeIndex]
  //   }

  //   employee.firstName = event.target.value
  //   employee.lastName = event.target.value
  //   employee.email = event.target.value
  //   employee.phone = event.target.value
  //   employee.salary = event.target.value

  //   const employees = [...this.state.employees]
  //   employee[employeeIndex] = employee

  //   this.setState({employees: employees})
  // }