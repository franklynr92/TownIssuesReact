import React from 'react';
import DisplayCategories from '../Stateless/DisplayCategories'
import CategoryForm from '../Stateless/CategoryForm'



class Category extends React.Component {
    
    state = {
        category: []
    }
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        debugger;
        console.log(this.state)
        event.prevenDefault()
    }
    render ()
    
    {
        
        return(    
            
        <div>
            <h1>This is my Category Component</h1>
            <DisplayCategories  categoryData={this.state}/>
            <CategoryForm 
            categoryData={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />
        </div>)
        
    }
}

export default Category