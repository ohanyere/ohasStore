import { useEffect } from "react";
import { useParams} from "react-router-dom";
import { getDocs, doc, collection, query, where } from "firebase/firestore";
import { db } from "../../Firebase.config";
const Categorytype = () => {
    const param = useParams()
    useEffect(() => {

    },[param.categorytype])

    const categorytype = async() => {
        const collectionRef = collection(db, "categories")
        const q = query(where(tpe === param.categorytype))
        const snapshot = await getDocs(q)
        const listing = []
        snapshot.forEach((item) => {
            return listing.push({

            })
        })
    }
    return ( 
        <>

        </>
     );
}
 
export default Categorytype;
