"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { Card } from "../../component/Card";

function Products() {
  const params = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    return axios.get(`${process.env.NEXT_PUBLIC_PATH}products`).then((res) => {
      let products = res.data.filter(
        (product) => product.cat_prefix == params.slug
      );
      return setProducts(products);
    });
  };
  return (
    <div>
      <header className="text-center my-10">
        <h2 className="text-xl font-bold text-secondary sm:text-3xl capitalize">
          {params.slug} Collection
        </h2>
      </header>
      {products?.length ? (
        <ul className="container layout-container">
          {products.map((product) => (
            <li key={product.id}>
              <Card product={product} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Products;
