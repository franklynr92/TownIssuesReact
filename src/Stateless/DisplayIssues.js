import React from 'react';

const DisplayIssues = (props) => {
  const displayTheIssues = props.issuesData.map(issue =>
    <tr key={issue.id}>
  <td>{issue.id}</td>
  <td>{issue.title}</td>
  <td>{issue.date}</td>
  <td>{issue.description}</td>
  <td>{issue.cross_street_1}</td>
  <td>{issue.cross_street_2}</td>
  <td>{issue.resolved}</td>
  </tr> 
  )

    console.log(props.issuesData.map(issue => issue.id))
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
              {/* <tr> */}
              {props.issuesData.length !== 0
        ? displayTheIssues
        : <button onClick={props.getIssues}>Click here</button>
        }
                {/* <td>1</td>
                <td>Place title of issue here</td>
                <td>Place description of issue here</td>
                <td>Place date of issue here mm/yy</td>
                <td>Place cross_street_1 here</td>
                <td>Place cross_street_2 here</td>
                <td>Place resolved true or false here</td> */}
              {/* </tr> */}
            </tbody>
        </table>
    </div> );
}
 
export default DisplayIssues;