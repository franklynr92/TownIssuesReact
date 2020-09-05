import React from 'react';

const CategoryForm = (props) => {

   
 
    return ( 
        <div>
            {console.log("categoryForm", props)}
        <form onSubmit={event => props.handleSubmit(event)}>
            <input 
            type="text" 
            name="name"
            // value={props.categoryData.title}
            placeholder="Enter Category name"
            onChange={event => props.handleChange(event)}
            />
            <input 
            type="submit"
            
            />
        </form>
        </div>
     );
}
 
export default CategoryForm;