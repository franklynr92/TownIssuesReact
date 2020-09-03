import React from 'react';

const DisplayCategories = (props) => {
    
    return (
        
    <div>
        {console.log(props.categoryData.categories.map(category => category.id))}
         {props.categoryData.categories.length !== 0
         ? props.categoryData.categories.map(category => <h1 key={category.id}>{category.type_of_issue}</h1>)
        :  <button onClick={props.getCategories}>Click to get the categories</button>
        }
      
        <ul>
            <li>Category Name</li>
        </ul>
    </div> );
}
 
export default DisplayCategories;