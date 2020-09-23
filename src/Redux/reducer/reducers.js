const reducer = (state = { categories: [], issues: []}, action) => {
    
    switch(action.type){
        case 'ADD_CATEGORIES':
            console.log("hitting the reducer",action.categories)    
            
            return{ categories: action.categories}

        case 'ADD_CATEGORY':


            return { categories: [...state.categories, action.category]
            }
        case 'ADD_ISSUES':


            return{ issues: action.issues }
        case 'ADD_ISSUE':

            if (state.issues){
            return { issues: [...state.issues, action.issue]
            }} else {
                return { issues: [action.issue]}
            }
            
        default: 
          return state;
    }
}

//objects and arrays are passed by reference not by value
export default reducer;