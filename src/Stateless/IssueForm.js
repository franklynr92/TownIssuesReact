import React from 'react';

const IssuesForm = (props) => {
    return (
        <div>
        <form>
            <label for="title">Issue Title</label>
            <input type="text" name="title"/>
            <label for="description">
            <textarea name="description" value="description" onChange={props.handleChange}>Issue Description</textarea>
            </label>
            <label for="date">Issue Date</label>
            <input type="date" name="date"/>
            <label for="issue_cross_street_1">Issue_Cross_Street_1</label>
            <input type="text" name="issue_cross_street_1"/>
            <label for="issue_cross_street_2">Issue_Cross_Street_2</label>
            <input type="text" name="issue_cross_street_2"/>
            <button type="submit">Submit</button>
        </form>
        </div>
      );
}
 
export default IssuesForm;