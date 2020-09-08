import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class ListEmployeeComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      employees : []

    };
    this.addEmployee=this.addEmployee.bind(this)

  }

  addEmployee(){
    this.state.props.history.push("/add-emeployee")
  }

  componentDidMount() {
    EmployeeService.getEmployee().then((res) => {
      this.setState({
        employees: res.data
      })
    })
  }


  render() {
    return (
      <div className="container md-auto  col-6 mt-4" >

        <h2 className="text-center">EmployeeTable</h2>
        <button className="btn btn-primary my-2" onClick={this.addEmployee}>Add Employee</button>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee_FirstName</th>
                <th>Employee_lastName</th>
                <th>Email_id</th>

              </tr>
            </thead>
            <tbody> 
              {
               this.state.employees.map(employee =>
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    
                  </tr>

                )
              }
            </tbody>

          </table>
        </div>
      </div>

    );
  }
}






export default ListEmployeeComponent;