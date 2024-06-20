import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="flex-1 basis-[20%] flex justify-center">
      <div className="card w-60 bg-base-100 shadow-xl">
        <figure className="h-[150px]">
          <img
            src={product.image}
            alt={product.title}
            width="100px"
          />
        </figure>
        <div className="card-body h-[140px]">
          <h2 className="card-title text-sm">
            {product.title}
          </h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
