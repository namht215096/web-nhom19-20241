import React from "react";
import { formatCash } from "../utils/formatCash";

export const ProductsCard = ({ product }) => {
  return (
    <div>
      <img
        src={product.img}
        alt={`Image of ${product.product_name}`}
        className="w-full h-auto"
      />
      <h2 style={{height: 80}} className="mt-2 text-lg font-bold">{product.product_name}</h2>
      <div className="mt-10">
        <span className="price text-red-500 font-bold">
          {formatCash(product.price)}
        </span>
      </div>
      <div className="mt-6">
        {product.stock > 0 ? (
          <span className="text-green-500">Còn hàng</span>
        ) : (
          <span className="text-red-500">HẾT HÀNG</span>
        )}
      </div>
    </div>
  );
};
