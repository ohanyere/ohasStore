import { useContext, useEffect } from "react";
import { doc, getDocs, query, collection } from "firebase/firestore";
import { db } from "../../Firebase.config";
import { ProductContext } from "../../context/productContext/ProductContext";
import Product from "../../components/product/Product";
import CategoryPreview from "../../components/categorypreview/Category-Preview";
import { useSelector, useDispatch } from "react-redux";
import { product } from "../../features/products/productSlice";
import "./shop.scss"
const Shop = () => {
  const {Products, loading} = useSelector(state => state.product)
  const dispatch = useDispatch()
  console.log(Products);
  useEffect(() => {
    dispatch(product())
    
  },[])
    


    if(loading){
      return <h1>Loading ...</h1>
    }
    
    return (
        <div className="shop-container">
          {
            Object.keys(Products).map((title) => {
              const product = Products[title]
              console.log(product);
              
             return <CategoryPreview key={product.id} title={title} product={product} />
            })
              
          }
            
        </div>
      );
}
 
export default Shop;