import React from "react";
import { Card } from "./Card";
export const CollectionProducts = ({ products, title }) => {
  return (
    <div>
      <h2 className="text-secondary font-bold text-2xl mb-5">{title}</h2>
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
  );
};
