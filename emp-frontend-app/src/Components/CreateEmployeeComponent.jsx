import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class CreateEmployeeComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      firstName: '',
      lastName: '',
      email: ''

    }
    this.chanagefirstNameHandler = this.chanagefirstNameHandler.bind(this)
    this.chanagelastNameHandler = this.chanagelastNameHandler.bind(this)
    this.changEmailAddress = this.changEmailAddress.bind(this);
    this.save = this.save.bind(this);
    //this.cancel = this.cancel.bind(this);

  }

  chanagefirstNameHandler=(e)=>{
    this.setState({firstName :e.target.value});
  }
   

  chanagelastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });

  }
  changEmailAddress = (event) => {
    this.setState({ email: event.target.value });

  }
  save = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName, lastName: this.state.lastName,
      email: this.state.email
    };
    console.log('employee => ' + JSON.stringify(employee));
    EmployeeService.createEmployee(employee).then(res => { this.props.history.push('/employees') });


  }




render() {
  return (
    <div>
      <div className="container md-auto col-6">
        <div className="card">
          <div className="card-header text-center text-danger bg-dark" >
            Add Employee </div>

          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="firstNameLabel">First Name</label>
                <input  className="form-control" id="firstName" placeholder="First Name"
                  value={this.state.firstName} onChange={this.chanagefirstNameHandler} />
              </div>
              <div className="form-group">
                <label htmlFor="lastNameLabel">Last Name</label>
                <input  className="form-control" id="lastName" placeholder="Last Name"
                  value={this.state.lastName} onChange={this.chanagelastNameHandler} />
              </div>
              <div className="form-group">
                <label htmlFor="emailLabel">Email Address</label>
                <input  className="form-control" id="email" placeholder="Email"
                  value={this.state.email} onChange={this.changEmailAddress} />
              </div>
              <div className="text-center mt-4">

                <div className="btn btn-success mx-4" onClick={this.save}>Add</div>
                <div className="btn btn-danger" onClick={this.cancel}>Cancel</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default CreateEmployeeComponent