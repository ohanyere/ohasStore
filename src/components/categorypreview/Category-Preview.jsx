import { Link } from "react-router-dom";
import "./categoryPreview.scss"
import Product from "../product/Product";
import { useParams } from "react-router-dom";
const CategoryPreview = ({title, product}) => {
    const params = useParams()
    return ( 
        <div className="category-preview-container">
           <h1> <Link to={`/products/${title}`} className="title">{title.toUpperCase()}</Link></h1>
            <div className="preview">
                {
                    product.filter((_, index) => (
                        index < 4
                    )).map(item => (
                        <Product productData={item} key={item.id}/>
                    ))
                }
            </div>
        </div>
     );
}
 
export default CategoryPreview;