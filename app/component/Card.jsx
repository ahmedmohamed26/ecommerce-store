import React from "react";
import { ShoppingBag } from "lucide-react";

export const Card = ({ product }) => {
  return (
    <a href="#" className="group block">
      <img
        src={product?.img}
        alt=""
        className="h-[350px] w-full object-cover sm:h-[450px]"
      />

      <div className="mt-3 ">
        <div className="flex justify-between">
          <p className="text-md text-secondary font-semibold">
            {product?.title}
          </p>
          <h3 className=" text-gray-600 font-semibold capitalize">
            {product?.cat_prefix}
          </h3>
        </div>
        {/* <div className="mt-1.5 flex gap-1">
          <form>
            <fieldset>
              <legend className="sr-only">Color</legend>
            </fieldset>

            <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
              <div>
                <input type="checkbox" id="ColorSg" className="sr-only" />

                <label
                  htmlFor="ColorSg"
                  className="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                >
                  <span className="sr-only"> Space Gray </span>
                </label>
              </div>

              <div>
                <input type="checkbox" id="ColorS" className="sr-only" />

                <label
                  htmlFor="ColorS"
                  className="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                >
                  <span className="sr-only"> Silver </span>
                </label>
              </div>

              <div>
                <input type="checkbox" id="ColorP" className="sr-only" />

                <label
                  htmlFor="ColorP"
                  className="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                >
                  <span className="sr-only"> Pink </span>
                </label>
              </div>

              <div>
                <input type="checkbox" id="ColorG" className="sr-only" />

                <label
                  htmlFor="ColorG"
                  className="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                >
                  <span className="sr-only"> Pink </span>
                </label>
              </div>

              <div>
                <input type="checkbox" id="ColorSb" className="sr-only" />

                <label
                  htmlFor="ColorSb"
                  className="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                >
                  <span className="sr-only"> Pink </span>
                </label>
              </div>
            </div>
          </form>
        </div> */}

        <div className="mt-5 flex justify-between items-center text-sm">
          <p className="text-secondary font-semibold">${product?.price}</p>
          <a className=" p-2   focus:outline-none " href="#">
            <ShoppingBag />
          </a>
        </div>
      </div>
    </a>
  );
};
