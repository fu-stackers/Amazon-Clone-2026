import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

const Productdetail = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setproduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {Product.map((item, index) => {
        return <ProductCard data={item} key={index} />;
      })}
    </div>
  );
};

export default Productdetail;
