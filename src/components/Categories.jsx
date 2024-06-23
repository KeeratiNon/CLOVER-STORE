import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [CategoriesData, setCategoriesData] = useState([]);
  const getCategories = async () => {
    try {
      const result = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategoriesData(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="dropdown">
      <div tabIndex={1} role="button" className="btn btn-ghost">
        Categories
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li className="">
          {CategoriesData.map((category, index) => (
            <Link
              className="p-3 "
              key={index}
              to={`/products/category/${category}`}
            >
              {category}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Categories;
