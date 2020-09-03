import React, { useState } from 'react';

const DisplayCategories = (props) => {
    const [title, SetTitle] = useState("Electrical");

    
    
    // const renderCategories = props.categoryData.map(
    //     category => 
    //     <h1 id={category.id}>
    //         {category.type_of_issue}
    //     </h1>
    //     )
        
        
    return (
        
    <div>
        {console.log(props)}
         {/* {props.categoriesData.category.length !== 0
         ? console.log(props.categoryData.map(category => category))
        : 
        } */}
        <button onClick={props.getCategories}>Click to get the categories</button>
        <ul>
            <li>Category Name</li>
            <li>Title: {title}</li>
        </ul>
    </div> );
}
 
export default DisplayCategories;