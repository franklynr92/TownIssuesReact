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
        {console.log(props.categoryData.categories.map(category => category.id))}
         {props.categoryData.categories.length !== 0
         ? props.categoryData.categories.map(category => <h1 key={category.id}>{category.type_of_issue}</h1>)
        : <h1>Clcik the button to see the categories</h1>
        }
        <button onClick={props.getCategories}>Click to get the categories</button>
        <ul>
            <li>Category Name</li>
            <li>Title: {title}</li>
        </ul>
    </div> );
}
 
export default DisplayCategories;