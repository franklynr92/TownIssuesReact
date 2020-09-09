import React from 'react';
import '../StatelessCss/IssuesForm.css'

const IssuesForm = (props) => {
  console.log("IssuesForm",props)
  // const displayCategories = props.categoriesData.map(category => console.log(category))
  //data must be conditionally rendered as it is undefined when it is first retrieved from data base and then it gets defined
    return (
        <div>
          
          <button onClick={props.getIssueCategories}>Click here to get Categories</button>
            <br></br>
          <form onSubmit={props.handleSubmit}>
          <select name="category_id" onChange={props.handleOptions}>
          {props.categoriesData && props.categoriesData.map(category => 
              <option name="category_id" value={category.id} key={category.id}>{category.type_of_issue}</option>)
            }
            </select>
            <br></br>
          <form onSubmit={props.handleSubmit}>
            <label htmlFor="title">Issue Title</label>
            <input type="text" name="title" 
            onChange={props.handleChange}
            />
            <br></br>
            <label htmlFor="description">Issue Description</label>
            <textarea name="description" 
            onChange={props.handleChange}
            ></textarea>
            <br></br>
            <label htmlFor="date">Issue Date</label>
            <input type="date" 
            name="date" 
            onChange={props.handleChange}
            /><br></br>
            <label htmlFor="cross_street_1">Issue_Cross_Street_1</label>
            <input 
            type="text" 
            name="cross_street_1"
            onChange={props.handleChange}
            />
            <br></br>
            <label htmlFor="cross_street_2">Issue_Cross_Street_2</label>
            <input type="text" name="cross_street_2"
            onChange={props.handleChange}
            />
            <br></br>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}
 
export default IssuesForm;