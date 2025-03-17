import './directory.scss'
import CategoryItem from '../category-item/category-item'

const Directory = ({data}) => {
    return (
        <div className='directory-container'>
            {data.map((category) => {
           return   <CategoryItem  key={category.id} category={category}/>
    })}
        </div>
      )
}
 
export default Directory;