import React from 'react';
import DisplayCategories from '../Stateless/DisplayCategories'
import CategoryForm from '../Stateless/CategoryForm'



class Category extends React.Component {
    
    state = {
        title: [""]
    }
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.prevenDefault()
        event.persist()
        console.log(this.state)
        debugger;
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