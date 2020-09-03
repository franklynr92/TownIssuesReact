import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../Redux/action/actions'
import DisplayCategories from '../Stateless/DisplayCategories'
import CategoryForm from '../Stateless/CategoryForm'




class Category extends React.Component {
    
    state = {
        categories: []
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
            .then(categories =>  this.setState({categories: categories}) )
        }
// showCategories = (categories) =>{
//     // console.log(categories)
//     <DisplayCategories categoryData={categories} />


// }

    
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
            getCategories={this.props.fetchCategories}  
            categoryData={this.state}
            />
            <CategoryForm 
            categoryData={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />
        </div>)
        
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: () => dispatch(fetchCategories())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Category)