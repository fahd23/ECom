import React from "react";
import { Link } from "react-router-dom";

const ProductCard1 = () => {
  return (
    <Link
      to="/product/1"
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <img src="/phone1.jpg" alt="Product" />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Smartphone</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377; 72000</p>

          <>
            <p className="text-base  font-medium line-through">&#8377; 5000</p>
            <p className="ml-auto text-base font-medium text-green-500">
              25% off
            </p>
          </>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard1;
