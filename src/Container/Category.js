import React from 'react';
import DisplayCategories from '../Stateless/DisplayCategories'
import CategoryForm from '../Stateless/CategoryForm'



class Category extends React.Component {
    
    state = {
        title: [""]
    }
    
    handleChange = event => {
        event.preventDefault()
        console.log(event)
        debugger;
        this.setState({
            [event.target.name]: event.target.value
        })
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
            />
        </div>)
        
    }
}

export default Category