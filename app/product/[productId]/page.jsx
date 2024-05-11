"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { SkeltonProduct } from "./skelton";
import { CollectionProducts } from "../../component/collectionProducts";
import { addToCart } from "../../store/featuers/cartSlice";
function ProductDetails() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [loadingSpinner, setLoadingSpinner] = useState(true);

  useEffect(() => {
    getProduct();
    getProducts();
  }, [productId]);

  const getProduct = () => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_PATH}products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoadingSpinner(false);
      });
  };

  const getProducts = () => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_PATH}products`)
      .then((res) => setProducts(res.data));
  };

  return (
    <div className="container">
      {loadingSpinner ? (
        <SkeltonProduct />
      ) : (
        <div className="py-8 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8 !items-start">
          <div className="rounded-lg relative">
            {product?.discount && (
              <span className="absolute z-20  top-5 rounded-r-full bg-primary text-white px-3 py-1">
                {product?.discount}%
              </span>
            )}

            <img
              className="h-[350px] w-full object-cover"
              src={product?.img}
              alt={product?.name}
            />
          </div>
          <div>
            <ul>
              <li>
                <h3 className="text-3xl font-bold text-secondary">
                  {product?.title}
                </h3>
              </li>
              <li>
                <div className="mt-3 space-y-px text-[10px]">
                  <dt className="inline font-bold text-lg text-secondary">
                    Category: {""}
                  </dt>
                  <dd className="inline text-lg font-medium text-gray capitalize">
                    {product?.cat_prefix}
                  </dd>
                </div>
              </li>
              <li>
                <div className="mt-3 space-y-px text-[10px]">
                  <dt className="inline font-bold text-lg text-secondary">
                    Price: {""}
                  </dt>
                  <dd className="inline text-lg font-medium text-gray">
                    EGP {product?.price}
                  </dd>
                </div>
              </li>
            </ul>
            <button
              className="inline-flex items-center mt-5 rounded border border-primary px-8 py-3 text-primary hover:bg-primary hover:text-white focus:outline-none  active:bg-primary"
              onClick={() => dispatch(addToCart(product))}
            >
              <span className="text-sm font-medium"> Add To Cart </span>
              <ShoppingCart className="ms-[10px]" />
            </button>
          </div>
        </div>
      )}

      {product?.description && (
        <div className="description">
          <h3 className="text-secondary font-bold text-xl mb-3">Description</h3>
          <p className="text-gray font-medium text-md ">
            {product?.description}
          </p>
        </div>
      )}

      <div className="most-seller mt-10">
        <CollectionProducts
          products={products.slice(0, 4)}
          title={"Related Products"}
        />
      </div>
    </div>
  );
}

export default ProductDetails;
