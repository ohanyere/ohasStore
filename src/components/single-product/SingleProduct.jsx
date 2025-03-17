import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/productContext/ProductContext";
import Product from "../product/Product";
const SingleProduct = () => {
    
    const {Products} =useContext(ProductContext)
    const param =useParams()
    const [product, setProduct] = useState(Products[param.cat])
    useEffect(() => {
        setProduct(Products[param])
    },[Products, param])
    return ( 

        <div className="category-container">
            {
                product && product.map((item) => (
                    <Product productData={item} key={item.id} />
                ))
            }
        </div>
     );
}
 
export default SingleProduct;