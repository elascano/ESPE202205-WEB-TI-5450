import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getCustomers } from "../services/axios";

function CustomerTable() {
  const [customers, setCustomers] = useState([]);

  const loadData = async () => {
    const _customers = await getCustomers();
    setCustomers(_customers);
  };

  useEffect(() => {
    loadData();
  }, []);

  const columns = [
    { field: "key", headerName: "ID", width: 100 },
    { field: "name", headerName: "Nombre", width: 300 },
    { field: "age", headerName: "Edad", width: 100 },
    { field: "moneySpent", headerName: "Dinero gastado", width: 150 },
  ];

  return (
    <>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          background: "#fff",
          marginTop: "50px",
        }}
      >
        <h1 id="header">APLICACIÓN WEB</h1>
        <h3>Moreno Elver</h3>
        <Box
          sx={{
            width: "50%",
            height: "700px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingLeft: "20px",
            paddingRight: "20px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "1px 1px 20px #333",
          }}
        >
          <h1>Registro Clientes</h1>

          <div style={{ height: "100%", width: "100%" }}>
            <DataGrid
              rows={customers.map((item) => ({
                key: item.id,
                id: item.id,
                name: item.name,
                age: item.age,
                moneySpent: item.moneySpent,
              }))}
              columns={columns}
              pageSize={20}
              rowsPerPageOptions={[20]}
            />
          </div>
        </Box>
      </Box>
    </>
  );
}

export default CustomerTable;
