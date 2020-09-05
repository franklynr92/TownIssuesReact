import React from 'react';
import { connect } from 'react-redux';
import DisplayIssues from '../Stateless/DisplayIssues'
import IssuesForm from '../Stateless/IssueForm'

class Issue extends React.Component {
   state ={
          title: '',
          description: '',
          date: '',
          cross_street_1: '',
          cross_street_2: '',
       
   }

    handleChange = event =>{
        event.preventDefault()
        
        this.setState({[event.target.name]: event.target.value});
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
        // this.props.addFetchCategories(category)
        
    }

    render(){
        return(
            <div>
              <h1>This is my Issue Component</h1>
              <DisplayIssues />
              <IssuesForm 
              issueData={this.state}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              />
            </div>
          )
    }
}

export default Issue;