"use client";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/featuers/cartSlice";
function Cart() {
  let vat = 30;
  const cartList = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            {cartList?.cart?.length ? (
              <div>
                {cartList?.cart?.map((product) => (
                  <ul className="space-y-4">
                    <li
                      key={product.id}
                      className="flex items-center gap-4 mb-8"
                    >
                      <Link
                        href={`/product/${product.id}`}
                        className="flex items-center gap-4"
                      >
                        <Image
                          src={product?.img}
                          alt={product?.title}
                          className="size-16 rounded-md "
                          width={100}
                          height={100}
                          objectFit="cover"
                        />
                      </Link>
                      <div>
                        <h3 className="text-sm text-gray-900">
                          {product?.title}
                        </h3>

                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                          <div>
                            <dt className="inline">Price: {""}</dt>
                            <dd className="inline">EGP{product?.price}</dd>
                          </div>

                          <div>
                            <dt className="inline">Category: {""}</dt>
                            <dd className="inline capitalize">
                              {product?.cat_prefix}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div className="flex flex-1 items-center justify-end gap-2">
                        <Plus
                          size={15}
                          onClick={() => dispatch(addToCart(product))}
                          className="text-secondary cursor-pointer"
                        />
                        <span className="bg-gray-200 px-2 mx-2 rounded-md flex justify-center items-center">
                          {product.cartQuantity ? product.cartQuantity : 1}
                        </span>
                        <Minus
                          size={15}
                          className="text-secondary cursor-pointer"
                          onClick={() => dispatch(removeFromCart(product))}
                        />
                      </div>
                    </li>
                  </ul>
                ))}
                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div className="w-screen max-w-lg space-y-4">
                    <dl className="space-y-0.5 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <dt>Subtotal</dt>
                        <dd>
                          EGP {cartList?.totalPrice ? cartList?.totalPrice : 0}
                        </dd>
                      </div>

                      <div className="flex justify-between">
                        <dt>VAT</dt>
                        <dd>£{vat}</dd>
                      </div>

                      <div className="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>EGP {cartList?.totalPrice + vat}</dd>
                      </div>
                    </dl>

                    <div className="flex justify-end">
                      <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="-ms-1 me-1.5 h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                          />
                        </svg>

                        <p className="whitespace-nowrap text-xs">
                          2 Discounts Applied
                        </p>
                      </span>
                    </div>

                    <div className="flex justify-end">
                      <button className="block rounded bg-gray text-white px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <span className="flex justify-center font-semibold items-center text-secondary text-2xl h-[30vh]">
                Not Found Products In Cart
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
