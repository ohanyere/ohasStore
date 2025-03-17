import { useContext, useEffect } from "react";
import { doc, getDocs, query, collection } from "firebase/firestore";
import { db } from "../../Firebase.config";
import { ProductContext } from "../../context/productContext/ProductContext";
import Product from "../../components/product/Product";
import CategoryPreview from "../../components/categorypreview/Category-Preview";
import "./shop.scss"
const Shop = () => {
  const {dispatch, Products, loading} = useContext(ProductContext)
  // useEffect(() => {
  //   if (products) {
  //     console.log(products);
  //   }
  // }, [products])
  useEffect(() => {
  const fub = async () => {
    const fun = await fetchProductData()
    // console.log(fun);
    dispatch({
      type : "ADD_PRODUCTS",
      payload : fun
    })
    // console.log(fun);
  
  }

  fub()
     
  },[])

  const fetchProductData = async () => {
    const collectionRef = collection(db, "categories")
    const q = query(collectionRef)
    const snapshot = await getDocs(q)
      // console.log(snapshot);
      
    const productSnapshot = snapshot.docs.reduce((accumulator, currentData) => {
      const {title, items} = currentData.data()
      const sen = currentData.data()
      // console.log(sen.items);
      accumulator[title.toLowerCase()] =  sen.items
      // console.log(accumulator);
      
      return accumulator
      
    }, {})
      
      
    return productSnapshot
  }

    if(loading){
      return <h1>Loading ...</h1>
    }
    
    return (
        <div className="shop-container">
          {
            Object.keys(Products).map((title) => {
              const product = Products[title]
             return <CategoryPreview key={product.id} title={title} product={product} />
            })
              
          }
            
        </div>
      );
}
 
export default Shop;