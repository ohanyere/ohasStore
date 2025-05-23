import { useParams } from "react-router-dom"
import {doc, collection, getDocs, query, where, limit, orderBy} from "firebase/firestore"
import { db } from "../../Firebase.config"

const get = async () => {
    const param = useParams()
    const collectionRef = collection(db, "categories")
    const q = query(collectionRef, where("title", "==", param.cat), limit(4), orderBy("desc"))
    const ProductSnapshot = await getDocs(q)  
}

export default productActions= {
    get
}