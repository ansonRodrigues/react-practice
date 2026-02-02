import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosDemo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Axios Demo</h1>
      {data.map((elem) => {
        return <p>{elem.name}</p>;
      })}
    </div>
  );
};

export default AxiosDemo;
