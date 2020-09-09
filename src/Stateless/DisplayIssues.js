import React from 'react';

const DisplayIssues = (props) => {
    return ( 
    <div>
      <h1>Display Issues Information here</h1>
        <table>
            <thead>
              <tr>
                <th>Issue #</th>
                <th>Issue title</th>
                <th>Issue date</th>
                <th>Issue description</th>
                <th>Issue cross_street_1</th>
                <th>Issue cross_street_2</th>
                <th>Resolved?</th>
              </tr>
            </thead>
            <tbody>
              {props.issuesData && props.issuesData.map(issue =>
              <tr key={issue.id}>
                <td>{issue.id}</td>
                <td>{issue.title}</td>
                <td>{issue.date}</td>
                <td>{issue.description}</td>
                <td>{issue.cross_street_1}</td>
                <td>{issue.cross_street_2}</td>
                <td>{issue.resolved}</td>
              </tr> 
              )}
            </tbody>
        </table>
        <button onClick={props.getIssues}>Click here for the Issues</button>
    </div> );
}
export default DisplayIssues;