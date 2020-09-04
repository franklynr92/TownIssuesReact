import React from 'react';
import '../StatelessCss/IssuesForm.css'

const IssuesForm = (props) => {
    return (
        <div>
            <br></br>
        <form>
            <label for="title">Issue Title</label>
            <input type="text" name="title"/><br></br>
            <label for="description">Issue Description</label>
            <textarea name="description" value="description" onChange={props.handleChange}></textarea><br></br>
            <label for="date">Issue Date</label>
            <input type="date" name="date"/><br></br>
            <label for="issue_cross_street_1">Issue_Cross_Street_1</label>
            <input type="text" name="issue_cross_street_1"/><br></br>
            <label for="issue_cross_street_2">Issue_Cross_Street_2</label>
            <input type="text" name="issue_cross_street_2"/><br></br>
            <button type="submit">Submit</button>
        </form>
        </div>
      );
}
 
export default IssuesForm;