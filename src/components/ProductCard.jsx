import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <Link
      to="/product/1"
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <img src="/phone2.jpg" alt="Product" />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Model - T</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377; 52000</p>

         
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
