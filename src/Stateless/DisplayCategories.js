import React, { useState } from 'react';

const DisplayCategories = () => {
    const [title, SetTitle] = useState("Electrical");
    return ( <div>
        <ul>
            <li>Category Name</li>
            <li>Title: {title}</li>
        </ul>
    </div> );
}
 
export default DisplayCategories;