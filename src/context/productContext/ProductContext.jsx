import { createContext, useReducer, useEffect } from "react";
import ProductReducer from "./ProductReducers";
import Shopdata from "../../components/ShopData"
import Shop from "../../components/product/ShopData.json"
export const ProductContext = createContext()
import { doc, setDoc, collection, writeBatch } from "firebase/firestore";
import { db } from "../../Firebase.config";


const ProductProvider = ({children}) => {
    const initialState = {
        Products : {} ,
        loading : true
    }

    // useEffect(() => {
    //     writeDataToFirestore("categories", Shopdata)
    // })

    // const writeDataToFirestore = async (cagetegories, ShopData) => {
    //     const collectionref = collection(db, cagetegories)
    //     const batch = writeBatch(db)
    //     ShopData.forEach((item) => {
    //         const docref = doc(collectionref, item.title.toLowerCase())
    //         batch.set(docref, item)
    //     } )

    //     await batch.commit()

        
    // }

    const[state, dispatch] = useReducer(ProductReducer, initialState)

    
    return <ProductContext.Provider value={{...state, dispatch}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider

