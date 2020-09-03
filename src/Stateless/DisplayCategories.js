import React from 'react';

const DisplayCategories = (props) => {
    
    return (
        
    <div>
        <h1>Category Name</h1>
        {console.log(props.categoryData.categories.map(category => category.id))}
         {props.categoryData.categories.length !== 0
         ? props.categoryData.categories.map(category => <li key={category.id}>{category.type_of_issue}</li>)
        :  <button onClick={props.getCategories}>Click to get the categories</button>
        }
      
        <ul>
            <li>Category Name</li>
        </ul>
    </div> );
}
 
export default DisplayCategories;