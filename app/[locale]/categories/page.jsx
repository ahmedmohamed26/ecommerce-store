"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_PATH}categories`)
      .then((res) => setCategories(res.data));
  };
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-secondary sm:text-3xl">
            Categories Collection
          </h2>
        </header>

        {categories.length ? (
          <ul className="mt-8 layout-container">
            {categories.map((category) => (
              <li key={category?.id}>
                <Link
                  href={`/products/${category.prefix}`}
                  className="group block overflow-hidden no-underline"
                >
                  <img
                    src={category?.img}
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                  <div className="relative bg-white pt-3">
                    <h3 className="text-lg font-semibold capitalize text-gray-700">
                      {category?.title}
                    </h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

export default Categories;
