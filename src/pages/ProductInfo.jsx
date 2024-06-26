import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProductInfo = ({ isDarkMode }) => {
  const params = useParams();
  const [showProducts, setShowProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getProductData = async () => {
    try {
      const results = await axios.get(
        "https://fakestoreapi.com/products/" + params.id
      );
      setShowProduct(results.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const [countItem, setCountItem] = useState(1);
  const handleAddItem = () => {
    setCountItem(countItem + 1);
  };
  const handleSubtractItem = () => {
    if (countItem > 1) {
      setCountItem(countItem - 1);
    }
  };
  const handleChange = (e) => {
    setCountItem(e.target.value);
  };
  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div className="flex justify-center py-20">
      {!isLoading && (
        <div
          className={`flex flex-row justify-center rounded-3xl gap-5 w-[80%] ${
            isDarkMode ? "border-2 border-white" : null
          }`}
        >
          <figure className="flex flex-1 justify-center bg-white rounded-l-2xl overflow-hidden">
            <img src={showProducts.image} alt="" className="h-[450px]" />
          </figure>
          <figcaption className="flex flex-col flex-1 justify-between p-4 ">
            <div className="flex flex-col gap-3">
              <p className="font-[200] text-[12px] badge badge-outline bg-gray-500 text-white">
                {showProducts.category}
              </p>
              <h1 className="text-2xl font-bold">{showProducts.title}</h1>
              <div className="flex gap-4 items-center">
                <p className="inline text-green-400 bg-gray-500 p-1 px-2 rounded-md">
                  Raiting : {showProducts.rating.rate}
                </p>
                <span className="text-sm ">
                  {showProducts.rating.count} Votes
                </span>
              </div>
              <div>
                <h2 className="text-xl">Desciption</h2>
                <p className="text-sm">{showProducts.description}</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-2xl font-semibold">{showProducts.price}$</h2>
              <div className="flex gap-2">
                <button
                  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                  onClick={handleSubtractItem}
                >
                  -
                </button>
                <input
                  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                  value={countItem}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                  onClick={handleAddItem}
                >
                  +
                </button>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  Add to cart
                </button>
              </div>
            </div>
          </figcaption>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
