import React from 'react';
import DisplayCategories from '../Stateless/DisplayCategories'
import CategoryForm from '../Stateless/CategoryForm'

class Category extends React.Component {

    render(){
        return(    
        <div>
            <h1>This is my Category Component</h1>
            <DisplayCategories />
            <CategoryForm />
        </div>)
    }
}

export default Category