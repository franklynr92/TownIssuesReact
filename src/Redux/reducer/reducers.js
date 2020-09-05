const reducer = (state = { categories: []}, action) => {
    
    switch(action.type){
        case 'ADD_CATEGORIES':
            console.log("hitting the reducer",action.categories)    
        debugger;
            
            return{ categories: action.categories}

        case 'ADD_CATEGORY':
            // debugger;
            console.log(action.categories)
            return{
                ...state,
                categories: action.categories
            }
        default: 
          return state;
    }
}

export default reducer;