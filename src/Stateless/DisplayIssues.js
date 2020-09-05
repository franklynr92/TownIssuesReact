import React from 'react';

const DisplayIssues = (props) => {
    console.log(props)
    return ( 
    <div>
        <h1>Display Issues Information here</h1>
        <table>
            <thead>
              <tr>
                <th>Issue #here</th>
                <th>Issue title</th>
                <th>Issue description</th>
                <th>Issue date</th>
                <th>Issue cross_street_1</th>
                <th>Issue cross_street_2</th>
                <th>Resolved?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Place title of issue here</td>
                <td>Place description of issue here</td>
                <td>Place date of issue here mm/yy</td>
                <td>Place cross_street_1 here</td>
                <td>Place cross_street_2 here</td>
                <td>Place resolved true or false here</td>
              </tr>
            </tbody>
        </table>
    </div> );
}
 
export default DisplayIssues;