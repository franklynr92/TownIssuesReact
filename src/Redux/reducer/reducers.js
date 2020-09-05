const reducer = (state = { categories: []}, action) => {
    
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
        default: 
          return state;
    }
}

export default reducer;