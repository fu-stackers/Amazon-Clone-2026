import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
const GroupProuduct = () => {
  const { categoryurl } = useParams();
  console.log(categoryurl);
  const [singleproduct, setsingleproduct] = useState([]);
  useEffect(() => {
    api
      .get(`/products/category/${categoryurl}`)
      .then((res) => {
        console.log(res.data);
        setsingleproduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>RESULTS</h1>
      <h1> category {categoryurl}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-40 mr-20 ml-20">
        {singleproduct.map((item, index) => {
          return <ProductCard data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default GroupProuduct;
