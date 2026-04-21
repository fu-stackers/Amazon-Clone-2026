import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
const GroupProuduct = () => {
  const url = useParams();
  const [singleproduct, setsingleproduct] = useState([]);
  useEffect(() => {
    api
      .get(url)
      .then((res) => {
        console.log(res.data);
        setsingleproduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {singleproduct.map((item, index) => {
        return <ProductCard data={item} key={index} />;
      })}
    </div>
  );
};

export default GroupProuduct;
