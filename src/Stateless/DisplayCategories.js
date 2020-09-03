import React, { useState } from 'react';

const DisplayCategories = (props) => {
    const [title, SetTitle] = useState("Electrical");
    return ( 
    <div>
        <button onClick={props.getCategories}>Click to get the categories</button>
        <ul>
            <li>Category Name</li>
            <li>Title: {title}</li>
        </ul>
    </div> );
}
 
export default DisplayCategories;