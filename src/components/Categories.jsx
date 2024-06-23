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
    <section className="flex justify-center items-center py-8 w-full ">
      <div className="max-w-[800px] flex flex-col justify-center items-center gap-5">
        <div className="flex flex-wrap gap-5">
          {CategoriesData.map(
            (category,index) =>
               (
                  <Link to={`/products/category/${category}`} ><a className="p-3 btn shadow-xl" key={index}>{category}</a></Link>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Categories;
