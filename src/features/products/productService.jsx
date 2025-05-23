import {collection, getDocs, query} from "firebase/firestore"
import { db } from "../../Firebase.config"

const fetchProductData = async () => {
    const collectionRef = collection(db, "categories")
    const q = query(collectionRef)
    const snapshot = await getDocs(q)
      // console.log(snapshot);
      
    const productSnapshot = snapshot.docs.reduce((accumulator, currentData) => {
      const {title, items} = currentData.data()
      const sen = currentData.data()
      console.log(sen.items);
      accumulator[title.toLowerCase()] =  sen.items
      console.log(accumulator);
      
      return accumulator
      
    }, {})
      
      console.log(productSnapshot);
      
    return productSnapshot
  }

 const productService= {
    fetchProductData
}

export default productService