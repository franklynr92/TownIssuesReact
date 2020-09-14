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
        
        this.setState({
            type_of_issue: event.target.value
        })
        console.log('handleChange', this.state)
        
    }

    handleSubmit = event => {
        
        event.preventDefault()
        event.persist()
        let category = {...this.state}
        this.props.addFetchCategories(category)
        
    }
    render ()
    
    {
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
    // console.log("mSP", state)
    // debugger;
    return {
        categoryData: state.categories
        
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        addFetchCategories: (category) => dispatch(addFetchCategories(category))
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Category)
//remember to push to heroku master []