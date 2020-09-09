import C from '../constants'

export const fetchCategories = () => {
    return (dispatch) => {
        console.log("hitting action for fetchCategories")
    fetch("http://localhost:3000/categories")
    .then(res => res.json())
    .then(categories => dispatch({type: C.ADD_CATEGORIES, categories: categories})
    )
    .catch(alert('Error retrieving data'))
}


}

export const addFetchCategories = (category) => {
    return (dispatch) => {
        console.log("addfetchCategories", category)
        debugger;
        fetch("http://localhost:3000/categories", {
            method: 'POST',    
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },           
            body: JSON.stringify(category)
        }).then(res => res.json())
        .then(category => dispatch({type: C.ADD_CATEGORY, category: category}))
        .catch(alert('Error retrieving data'))
    }
}

export const fetchIssues = () => {
    return (dispatch) => {
        console.log("hitting action for fetchIssues")
    fetch("http://localhost:3000/issues")
    .then(res => res.json())
    .then(issues => dispatch({type: C.ADD_ISSUES, issues: issues})
    )
    .catch(alert('Error retrieving data'))
}
}

export const submitIssueFetch = (issue) => {
    return (dispatch) => {
        console.log("hitting action for addFetchIssues", issue)
        fetch("http://localhost:3000/issues", {
            method: 'POST',    
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              }, 
              body: JSON.stringify(issue)
            })
        .then(res => res.json())
        .then(issue => dispatch({type: C.ADD_ISSUE, issue: issue}))
        .catch(alert('Error retrieving data'))
    }
}

//console.log(issues)