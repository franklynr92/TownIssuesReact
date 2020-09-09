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
        this.props.submitIssue(issue)
        
    }

    render(){
        return(
            <div>
              <h1>This is my Issue Component</h1>
              <DisplayIssues
              issuesData={this.props.issuesData} 
              getIssues={this.props.fetchIssues}
              />
              <IssuesForm 
              issueData={this.state}
              getIssueCategories={this.props.fetchCategories}
              categoriesData={this.props.categoriesData}
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
        issuesData: state.issues,
        categoriesData: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchIssues: () => dispatch(fetchIssues()),
        fetchCategories: () => dispatch(fetchCategories()),
        submitIssue: (issue) => dispatch(submitIssueFetch(issue))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Issue);