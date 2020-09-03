import React from 'react';
import DisplayCategories from '../Stateless/DisplayCategories'
import CategoryForm from '../Stateless/CategoryForm'



class Category extends React.Component {
    
    state = {
        category: []
    }

    // getCategories = () =>{
    // return fetch("http://localhost:3000/categories", 
    //     {accept:'application/json',
    //     }).then(res => res.json)
    //     .then(data => console.log(data))
    //data.map
    // }
//bring this to reducer?/action?..will use thunk
    getCategories = () =>{
        return fetch("http://localhost:3000/categories")
            .then(res => res.json())
            .then(categories => this.showCategories(categories))
        }
showCategories = (categories) =>{
    console.log(categories)
    categories.map(category => 
    <h1 id="{category.id}">
        Category: {category.type_of_issue}
    </h1>
)
    debugger;

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
            <DisplayCategories
            getCategories={this.getCategories}  
            categoryData={this.state}
            showCategories={this.showCategories}
            />
            <CategoryForm 
            categoryData={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />
        </div>)
        
    }
}

export default Category