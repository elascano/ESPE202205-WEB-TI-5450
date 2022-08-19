import React, { useEffect, useState } from "react";
import { ApiUrl } from "../services/apiServices";
import {Link, useNavigate} from 'react-router-dom'

const CustomerSearch = () => {
  const [client, setClient] = useState();
  const url = ApiUrl + "customers";
  const fetchApi = async () => {
  const response = await fetch(url);
  const responseJSON = await response.json();
  

    setClient(responseJSON);



  };
  useEffect(() => {
    fetchApi();
  });

  return (
    <div>
      <div class="card-body">
        <br />
        <br />
        <h3 className="text-center">Costumer list </h3> 

       </div>

      <table className="table table-hover">
        <thead>
          <tr className="text-center">
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">age</th>
            
          </tr>
        </thead>
        <tbody>
          {!client
            ? "Loading"
            : client.map((client, index) => {
                return (
                  <tr className="table-info">
                    <td className="text-center">{client.id}</td>
                    <td className="text-center">{client.name}</td>
                    <td className="text-center">{client.age}</td>
                    <td className="text-center">{client.moneySpent}</td>
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
};

export default CustomerSearch;
