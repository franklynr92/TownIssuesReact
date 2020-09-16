import React from 'react';
import MapCategoryData from '../Stateless/MapCategoryData'

const DisplayCategories = (props) => {
    console.log(props)
    return (
        <div>
        <h1>Categories</h1>
            <ul>
            <MapCategoryData props={props} />
            </ul>
        {/* <button onClick={props.getCategories}>Click to get the categories</button> */}
        </div> 
    );
}
export default DisplayCategories;
//remember to push to heroku master []