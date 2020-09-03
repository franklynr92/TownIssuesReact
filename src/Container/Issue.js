import React from 'react';
import DisplayIssues from '../Stateless/DisplayIssues'

class Issue extends React.Component {

    render(){
        return(
            <div>
              <h1>This is my Issue Component</h1>
              <DisplayIssues />
            </div>
          )
    }
}

export default Issue;