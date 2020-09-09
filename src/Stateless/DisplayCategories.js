import React from 'react';

const DisplayCategories = (props) => {
    
    return (
        
        <div>
        <h1>Category Name</h1>
        {console.log("displayCateogries props.categoryData has the id mapped out:", props)}
         {props.categoryData && props.categoryData.map(category => <li key={category.id}>{category.type_of_issue}</li>) }
    <button onClick={props.getCategories}>Click to get the categories</button>

      
        
    </div> );
}
/*
props.issuesData.map(issue => <tr><td>{issue.id}</td>, <td>{issue.title}</td></tr>)

)
*/


export default DisplayCategories;