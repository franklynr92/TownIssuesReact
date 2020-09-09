import C from '../constants'

const BASE = process.env.NODE_ENV === 'production' ? "https://chatapp-back-end.herokuapp.com" : "http://localhost:3000";

export const fetchCategories = () => {
    return (dispatch) => {
        console.log("hitting action for fetchCategories")
    fetch(`${BASE}/categories`)
    .then(res => res.json())
    .then(categories => dispatch({type: C.ADD_CATEGORIES, categories: categories})
    )
    .catch(() => alert('Error retrieving data'))
}


}

export const addFetchCategories = (category) => {
    return (dispatch) => {
        console.log("addfetchCategories", category)
        debugger;
        fetch(`${BASE}/categories`, {
            method: 'POST',    
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },           
            body: JSON.stringify(category)
        }).then(res => res.json())
        .then(category => dispatch({type: C.ADD_CATEGORY, category: category}))
        .catch(() => alert('Error retrieving data'))
    }
}

export const fetchIssues = () => {
    return (dispatch) => {
        console.log("hitting action for fetchIssues")
    fetch(`${BASE}/issues`)
    .then(res => res.json())
    .then(issues => dispatch({type: C.ADD_ISSUES, issues: issues})
    )
    .catch(() => alert('Error retrieving data'))
}
}

export const submitIssueFetch = (issue) => {
    return (dispatch) => {
        console.log("hitting action for addFetchIssues", issue)
        fetch(`${BASE}/issues`, {
            method: 'POST',    
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              }, 
              body: JSON.stringify(issue)
            })
        .then(res => res.json())
        .then(issue => dispatch({type: C.ADD_ISSUE, issue: issue}))
        .catch(() => alert('Error retrieving data'))
    }
}

//console.log(issues)