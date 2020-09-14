import React from 'react';
import MapCategoryData from '../Stateless/MapCategoryData'

const DisplayCategories = (props) => {
    
    return (
        <div>
        <h1>Categories</h1>
            <ul>
            {props.categoryData && props.categoryData.map(category => <li key={category.id}>{category.type_of_issue}</li>) }
            </ul>
        <button onClick={props.getCategories}>Click to get the categories</button>
        </div> 
    );
}
export default DisplayCategories;