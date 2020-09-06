import React from 'react';
import { connect } from 'react-redux';
import {fetchIssues} from '../Redux/action/actions'
import DisplayIssues from '../Stateless/DisplayIssues'
import IssuesForm from '../Stateless/IssueForm'

class Issue extends React.Component {
   state ={
          title: '',
          description: '',
          date: '',
          cross_street_1: '',
          cross_street_2: '',
       
   }

    handleChange = event =>{
        event.preventDefault()
        
        this.setState({[event.target.name]: event.target.value});
        console.log("handleChange what is in the state",this.state)
        
    }

    handleSubmit = event => {
        
        event.preventDefault()
        event.persist()
        console.log('handlesubmit', this.state)
        let issue = {...this.state}
        console.log('handlesubmit after issue created', issue)
        console.log(this.props)
        debugger;
        // this.props.addFetchCategories(category)
        
    }

    render(){
        return(
            <div>
              <h1>This is my Issue Component</h1>
              <DisplayIssues
              issuesData={this.props.issueData} 
              getIssues={this.props.fetchIssues}
              />
              <IssuesForm 
              issueData={this.state}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              />
            </div>
          )
    }
}

const mapStateToProps = (state) => {
    return {
        issuesData: state.issues
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchIssues: () => dispatch(fetchIssues())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Issue);