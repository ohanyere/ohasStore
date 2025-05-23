import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "../product/Product";
import "./category.scss"
const Category = () => {
    const param = useParams()
    const {Products} = useSelector(state => state.product)
    const {categoryProduct, setCategoryProduct} = useState(Products[param.category])
    useEffect(() => {
        // setCategoryProduct(Products[param.Category])
    }, [param.Category])
    return ( 
        <div className="category-container">
            {categoryProduct && categoryProduct.map(item => <Product productData={item} />)}
        </div>
     );
}
 
export default Category;