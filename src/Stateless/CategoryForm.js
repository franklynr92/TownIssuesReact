import React from 'react';

const CategoryForm = (props) => {
    return ( 
        <div>
            
        <form>
            <input 
            type="text" 
            name="name"
            value={props.categoryData.title}
            placeholder="Enter Category name"
            onChange={event => props.handleChange(event)}
            />
        </form>
        </div>
     );
}
 
export default CategoryForm;