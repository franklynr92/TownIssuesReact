import React from 'react';

const CategoryForm = (props) => {

    return ( 
        <div>
            {console.log("categoryForm", props)}
        <form onSubmit={event => props.handleSubmit(event)}>
            <input 
            type="text" 
            name="name"
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
//arrow defines
//write another blog about this keyword, arrow functions, classic functions
//employ component lifecycles methods, componentDidMount , when application loads the categories and issues are fetched immediately 