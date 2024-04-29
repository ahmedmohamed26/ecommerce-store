import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import Link from "next/link";

export const CartHeader = () => {
  const cartList = useSelector((state) => state.cart.cart);
  const [showCartList, setShowCartList] = useState(false);
  return (
    <div className="relative">
      <span className="badge  absolute bottom-3 -right-3 rounded-full bg-primary text-white px-2 py-0.5 text-sm">
        {cartList.length}
      </span>
      <ShoppingCart
        className="hover:cursor-pointer"
        onClick={() => setShowCartList(!showCartList)}
      />
      {showCartList && (
        <div
          className=" w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 absolute top-7 -right-10"
          aria-modal="true"
          role="dialog"
          tabIndex="-1"
        >
          <div className="mt-4 space-y-6">
            {cartList.length ? (
              <div>
                <ul className="space-y-4">
                  {cartList.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/product/${item.id}`}
                        className="flex items-center gap-4"
                      >
                        <img
                          src={item?.img}
                          alt=""
                          className="size-16 rounded object-cover"
                        />

                        <div>
                          <h3 className="text-sm text-gray-900">
                            {item?.title}
                          </h3>

                          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                            <div>
                              <dt className="inline">Price:</dt>
                              <dd className="inline"> ${item?.price}</dd>
                            </div>

                            <div>
                              <dt className="inline">Category: {""}</dt>
                              <dd className="inline capitalize">
                                {item?.cat_prefix}
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="space-y-4 text-center mt-4">
                  <Link
                    href="/cart"
                    className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
                  >
                    View my cart ({cartList.length})
                  </Link>

                  <a
                    href="#"
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </a>

                  <button
                    onClick={() => setShowCartList(!showCartList)}
                    className="inline-block text-sm text-secondary underline underline-offset-4 transition hover:text-gray-600"
                  >
                    Continue shopping
                  </button>
                </div>
              </div>
            ) : (
              <span className="flex justify-center font-semibold items-center text-secondary">
                Not Found Products In Cart
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
