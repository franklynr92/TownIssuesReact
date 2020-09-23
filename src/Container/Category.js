import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories, addFetchCategories } from '../Redux/action/actions'
import DisplayCategories from '../Stateless/DisplayCategories'
import CategoryForm from '../Stateless/CategoryForm'

class Category extends React.Component {
    

state = {
    type_of_issue: ''
}

    
    handleChange = event => {
        console.log("handlechange", this)
        this.setState({
            type_of_issue: event.target.value
        })
    }

    handleSubmit = event => {
        
        event.preventDefault()
        event.persist()
        let category = {...this.state}
        this.props.boundAddFetchCategories(category)
        
    }

    componentDidMount(){
       console.log("component did mount category", this.props)
       this.props.boundFetchCategories()
    }

    render ()
    
    {
        return(           
        <div>
            <h1>This is my Category Component</h1>
            <DisplayCategories
            // getCategories={this.props.boundFetchCategories}
            
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
    return {
        categoryData: state.categories
        
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        boundFetchCategories: () => dispatch(fetchCategories()),
        boundAddFetchCategories: (category) => dispatch(addFetchCategories(category))
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Category)
//remember to push to heroku master []
//setState is async use prevState to make the change you want
