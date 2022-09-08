import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";



const URI="http://localhost:3015/computerstore/customer/all";// Uri consume

class Customer extends Component {
state={
  data:[],
  modalInsert: false,
  modalDelete: false,
  form:{
    id: '',
    name: '',
    age: '',
    moneySpent: ''
  }
}

callGet=()=>{
axios.get(URI).then(response=>{
  this.setState({data: response.data});
}).catch(error=>{
  console.log(error.message);
})
}

modalInsert=()=>{
  this.setState({modalInsert: !this.state.modalInsert});
}

selectCustomer=(customer)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      id: customer.id,
      name: customer.name,
      age:customer.age,
      moneySpent: customer.moneySpent
    }
  })
}

captureData=async data=>{
data.persist();
await this.setState({
  form:{
    ...this.state.form,
    [data.target.name]: data.target.value
  }
});
console.log(this.state.form);
}

  componentDidMount() {
    this.callGet();
  }
  

  render(){
  return (
    <div className="App">
    <div class="table-responsive-md">
    <table className="table ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Money Spent</th>
        </tr>
      </thead>
      
      <tbody>
        {this.state.data.map(customer=>{
          return(
            <tr>
          <td>{customer.id}</td>
          <td>{customer.name}</td>
          <td>{customer.age}</td>
          <td>{customer.moneySpent}</td>
          </tr>
          )
        })}
      </tbody>
    </table>
    </div>
    
  </div>
  


  );
}
}
export default Customer;
