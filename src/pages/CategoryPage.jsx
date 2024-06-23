import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CategoryPage = () => {
    const params = useParams()
    const [products,setProducts] = useState([])
    const getProducts = async() => {
        const results = await axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        console.log(results.data)
        setProducts(results.data)
    }
    useEffect(()=>{
        getProducts()
    },[])
  return (
            <div className="flex w-[80%] flex-wrap gap-y-[40px] pb-10">
            {products.map((product) => (
              <div key={product.id}>
                {product.title}
              </div>
            ))}
          </div>
  )
}

export default CategoryPage