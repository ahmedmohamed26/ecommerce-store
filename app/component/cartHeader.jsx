import { Minus, Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/featuers/cartSlice";

export const CartHeader = () => {
  const cartList = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [showCartList, setShowCartList] = useState(false);
  return (
    <div className="relative">
      <span className="badge  absolute bottom-3 -right-3 rounded-full bg-primary text-white px-2 py-0.5 text-sm">
        {cartList.totalQuantity}
      </span>
      <ShoppingCart
        className="hover:cursor-pointer"
        onClick={() => setShowCartList(!showCartList)}
      />
      {showCartList && (
        <div
          className=" w-screen max-w-md border bg-white border-gray-300 bg-gray-100 px-4 py-4 sm:px-6 lg:px-8 absolute top-7 -right-10"
          aria-modal="true"
          role="dialog"
          tabIndex="-1"
        >
          <div className="space-y-6 ">
            {cartList.cart.length ? (
              <div>
                <h2 className="flex justify-center text-2xl font-semibold text-secondary mb-4">
                  Your Cart
                </h2>
                <ul className="space-y-4 overflow-auto scrollbar max-h-[300px]">
                  {cartList?.cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center"
                    >
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
                              <dd className="inline"> EGP {item?.price}</dd>
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
                      <div className="justify-end flex items-center">
                        <Plus
                          size={15}
                          onClick={() => dispatch(addToCart(item))}
                          className="text-secondary cursor-pointer"
                        />
                        <span className="bg-white px-2 mx-2 rounded-md flex justify-center items-center">
                          {item.cartQuantity}
                        </span>
                        <Minus
                          size={15}
                          className="text-secondary cursor-pointer"
                          onClick={() => dispatch(removeFromCart(item))}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="space-y-4 text-center mt-4">
                  <Link
                    onClick={() => setShowCartList(false)}
                    href="/cart"
                    className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
                  >
                    View my cart ({cartList.totalQuantity})
                  </Link>

                  <a
                    href="#"
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </a>

                  <button
                    onClick={() => setShowCartList(false)}
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
