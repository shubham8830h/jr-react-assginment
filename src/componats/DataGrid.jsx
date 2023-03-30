import React, { useEffect, useState } from "react";
import axios from "axios";
import './datagrid.css'

const DataGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://gorest.co.in/public/v1/todos")
      .then((response) => setData(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  const gridItem = () => {
    return data.map((item) => (
      <div className="grid-item" key={item.id}>
        <p>{item.title}</p>
        <h3>{item.status}</h3>
      </div>
    ));
  };

  return (
    <div className="grid-container">

      {gridItem()}
    </div>
  );
};

export default DataGrid;
