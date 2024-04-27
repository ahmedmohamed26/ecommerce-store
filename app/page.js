"use client";
import { useEffect, useState } from "react";
import { Hero } from "./component/Hero";
import axios from "axios";
import { Card } from "./component/Card";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_PATH}products`)
      .then((res) => setProducts(res.data.slice(0, 4)));
  };
  return (
    <div>
      <Hero />
      <div className="most-seller container mt-10">
        <h2 className="text-secondary font-bold text-2xl mb-5">Most Seller</h2>
        {products.length ? (
          <ul className="layout-container">
            {products.map((product) => (
              <li key={product.id} className=" ">
                <Card product={product} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
