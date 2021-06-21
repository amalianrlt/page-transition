import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ItemsPage = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((res) => {
        // console.log(res.data);
        setData(res.data.slice(0, 10));
      })
      .catch((err) => {
        console.log(err, "ERROR");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);

  return (
    <div style={{backgroundColor:"wheat"}}>
      <h1>Customer's Data</h1>
      {data?.length >= 1 &&
        data?.map((user) => (
          <div key={user.id} className="userCard">
            <Link to={{pathname:`/detail/${user.id}`, state:{user}}}>
              <h5>{`Title: ${user.title}`}</h5>
              <h5>{`Desc: ${user.body}`}</h5>
              <h5>{`Telephone Number : ${user.id}`}</h5>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ItemsPage;
