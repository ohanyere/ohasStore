import { Link } from "react-router-dom";
import "./category.scss"
import Product from "../product/Product";
const CategoryPreview = ({title, product}) => {
    return ( 
        <div className="category-preview-container">
           <h1> <Link to={`products/${title}`} className="title">{title.toUpperCase()}</Link></h1>
            <div className="preview">
                {
                    product.filter((_, index) => (
                        index < 4
                    )).map(item => (
                        <Product productData={item}/>
                    ))
                }
            </div>
        </div>
     );
}
 
export default CategoryPreview;