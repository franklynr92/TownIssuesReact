import React from 'react';
import DisplayIssues from '../Stateless/DisplayIssues'
import IssuesForm from '../Stateless/IssueForm'

class Issue extends React.Component {
    state= {
        issue: []
    }

    handleChange = event =>{
        event.preventDefault()
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state)

    }

    render(){
        return(
            <div>
              <h1>This is my Issue Component</h1>
              <DisplayIssues />
              <IssuesForm 
              issueData={this.state}
              handleChange={this.handleChange}
              />
            </div>
          )
    }
}

export default Issue;