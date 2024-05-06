"use client";
import { useEffect, useState } from "react";
import { Hero } from "./component/Hero";
import axios from "axios";
import { CollectionProducts } from "./component/collectionProducts";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_PATH}products`)
      .then((res) => setProducts(res.data));
  };
  return (
    <div>
      <Hero />
      <div className="most-seller container mt-10">
        <CollectionProducts
          products={products.slice(0, 4)}
          title={"Most Seller"}
        />
      </div>
      <div className="most-seller container mt-10">
        <CollectionProducts
          products={products.slice(4, 8)}
          title={"Best Seller"}
        />
      </div>
    </div>
  );
}
