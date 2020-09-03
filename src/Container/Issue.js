import React from 'react';
import DisplayIssues from '../Stateless/DisplayIssues'
import IssuesForm from '../Stateless/IssueForm'

class Issue extends React.Component {

    render(){
        return(
            <div>
              <h1>This is my Issue Component</h1>
              <DisplayIssues />
              <IssuesForm />
            </div>
          )
    }
}

export default Issue;