import React from 'react';
import DisplayCategories from '../Stateless/DisplayCategories'

class Category extends React.Component {

    render(){
        return(    
        <div>
            <h1>This is my Category Component</h1>
            <DisplayCategories />
        </div>)
    }
}

export default Category