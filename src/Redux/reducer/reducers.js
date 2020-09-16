const reducer = (state = { categories: [], issues: []}, action) => {
    
    switch(action.type){
        case 'ADD_CATEGORIES':
            console.log("hitting the reducer",action.categories)    
        debugger;
            
            return{ categories: action.categories}

        case 'ADD_CATEGORY':
            console.log("hitting the reducer",action.category)
            debugger;

            return { categories: [...state.categories, action.category]
            }
        case 'ADD_ISSUES':
            console.log("hitting ADDissues case", action)
            debugger;

            return{ issues: action.issues }
        case 'ADD_ISSUE':
            console.log('hitting ADDISSUE CASE', action)
            debugger;
            if (state.issues){
            return { issues: [...state.issues, action.issue]
            }} else {
                return { issues: [action.issue]}
            }
            
        default: 
          return state;
    }
}


export default reducer;