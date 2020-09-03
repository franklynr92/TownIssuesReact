import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../Redux/action/actions'
import DisplayCategories from '../Stateless/DisplayCategories'
import CategoryForm from '../Stateless/CategoryForm'




class Category extends React.Component {
    
    

    // getCategories = () =>{
    // return fetch("http://localhost:3000/categories", 
    //     {accept:'application/json',
    //     }).then(res => res.json)
    //     .then(data => console.log(data))
    //data.map
    // }
//bring this to reducer?/action?..will use thunk
    // getCategories = () =>{
    //     return fetch("http://localhost:3000/categories")
    //         .then(res => res.json())
    //         .then(categories =>  this.setState({categories: categories}) )
    //     }
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
        console.log("hitting the Category Container", this.props)
        console.log("hitting the Category Container this is what is inside the categoryData", this.props.categoryData)

        return(    
            
        <div>
            <h1>This is my Category Component</h1>
            <DisplayCategories
            getCategories={this.props.fetchCategories}  
            categoryData={this.props.categoryData}
            />
            <CategoryForm 
            categoryData={this.props.categoryData}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />
        </div>)
        
    }
}

const mapStateToProps = (state) => {
    console.log("mSP", state)
    // debugger;
    return {
        categoryData: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: () => dispatch(fetchCategories())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Category)