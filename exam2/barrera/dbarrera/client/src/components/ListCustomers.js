import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
const url="http://localhost:3001/computerstore/allcustomers"
const ListCustomers = () => {
  const [customer, setCustomer] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();

    setCustomer(responseJSON);



  };
  useEffect(() => {
    fetchApi();
  });

  

  return (
    <div>
      <div class="card-body">
        <br />
        <br />
        <h3 className="text-center">CPU Store </h3>

        <div className="col-auto text-center">
          <a href="#control"><button type="button" class="btn btn-success">Customers</button></a>
        </div>
        <br />
        <p>This shows customers information from API: {url} </p>

      </div>

      <table className="table table-hover">
        <thead>
          <tr className="text-center">
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">MoneySpent</th>
          </tr>
        </thead>
        <tbody>
          {!customer
            ? "Loading"
            : customer.map((customer, index) => {
              return (
                <tr className="table-info">
                  <td className="text-center">{customer.id}</td>
                  <td className="text-center">{customer.name}</td>
                  <td className="text-center">{customer.age}</td>
                  <td className="text-center">{customer.moneySpent}</td>

                
                </tr>

              );
            })}
        </tbody>
      </table>
      <br /><br /><br /><br /><br />
      <div id="control">

      </div>
    </div>
  );
}

export default ListCustomers;