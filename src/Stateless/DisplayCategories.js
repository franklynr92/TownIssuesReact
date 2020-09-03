import React from 'react';

const DisplayCategories = (props) => {
    
    return (
        
    <div>
        <h1>Category Name</h1>
        {console.log("displayCateogries props.categoryData has this:", props.categoryData.map(category => category.id))}
         {props.categoryData.length !== 0
         ? props.categoryData.map(category => <li key={category.id}>{category.type_of_issue}</li>)
        :  <button onClick={props.getCategories}>Click to get the categories</button>
        }


      
        
    </div> );
}
 
export default DisplayCategories;