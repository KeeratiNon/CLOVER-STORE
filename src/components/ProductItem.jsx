import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="flex-1 basis-[20%] flex justify-center">
      <div className="card w-60 bg-base-100 shadow-xl">
        <figure data-theme="light" className="relative p-4">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain h-[150px]"
          />
          <div className="absolute top-0 h-full w-full bg-black/5" />
        </figure>
        <div className="card-body p-3 h-[140px] justify-between">
          <div className="flex flex-col gap-1">
            <p className="font-[200] text-[12px] badge badge-outline bg-gray-500 text-white">{product.category}</p>
            <h2 className="card-title w-[90%] text-sm line-clamp-2">
              {product.title}
            </h2>
          </div>
          <h3 className="font-semibold">{product.price}$</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
