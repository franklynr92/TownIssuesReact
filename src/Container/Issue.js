import React from 'react';
import { connect } from 'react-redux';
import {fetchCategories, fetchIssues, submitIssueFetch} from '../Redux/action/actions'
import DisplayIssues from '../Stateless/DisplayIssues'
import IssuesForm from '../Stateless/IssueForm'

class Issue extends React.Component {
   state ={
          title: '',
          description: '',
          date: '',
          cross_street_1: '',
          cross_street_2: '',
          category_id: 0,
       
   }

    handleChange = event =>{
        event.preventDefault()
        if (isNaN(event.target.value * 1)) {
            this.setState({[event.target.name]: event.target.value});}
        else {this.setState({[event.target.name]: event.target.value * 1});}
        console.log("handleChange what is in the state",this.state)
    }

    handleSubmit = event => {
        
        event.preventDefault()
        event.persist()
        console.log('handlesubmit', this.state)
        let issue = {...this.state}
        console.log('handlesubmit after issue created', issue)
        console.log(this.props)
        debugger;
        this.props.boundSubmitIssue(issue)
        this.setState({  
        title: '',
        description: '',
        date: '',
        cross_street_1: '',
        cross_street_2: '',
        category_id: 0,
     })
        
    }

    componentDidMount(){
        console.log("component did mount", this.props)
        this.props.boundFetchIssues()
        this.props.boundFetchCategories()
    }

    render(){
        return(
            <div>
              <h1>This is my Issue Component</h1>
              <DisplayIssues
              boundIssuesData={this.props.issuesData} 
            //   getIssues={this.props.boundFetchIssues}
              />
              <IssuesForm 
              boundissueData={this.state}
            //   getIssueCategories={this.props.boundFetchCategories}
              categoriesData={this.props.boundCategoriesData}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              />
            </div>
          )
    }
}

const mapStateToProps = (state) => {
    console.log(" issue msp", state.issues)
    return {
        boundIssuesData: state.issues,
        boundCategoriesData: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        boundFetchIssues: () => dispatch(fetchIssues()),
        boundFetchCategories: () => dispatch(fetchCategories()),
        boundSubmitIssue: (issue) => dispatch(submitIssueFetch(issue))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Issue);