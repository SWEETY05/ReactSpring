import axios from 'axios'

const url= "http://localhost:8080/api/v1/employees"
//const url ="https://jsonplaceholder.typicode.com/comments"
class EmployeeService{

 getEmployee(){

  return axios.get(url);

  }
  createEmployee(employee){
    return axios.post(url,employee)
  }
}
export default new EmployeeService