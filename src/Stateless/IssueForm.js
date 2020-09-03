import React from 'react';

const IssuesForm = (props) => {
    return (
        <div>
        <form>
            <input type="text" name="title"/>Issue Title
            <textarea name="description" value="description" onChange={props.handleChange}>Issue Description</textarea>
            <input type="date" name="date"/>Issue Date
            <input type="text" name="issue_cross_street_1"/>Issue_Cross_Street_1
            <input type="text" name="issue_cross_street_2"/>Issue_Cross_Street_2
        </form>
        </div>
      );
}
 
export default IssuesForm;