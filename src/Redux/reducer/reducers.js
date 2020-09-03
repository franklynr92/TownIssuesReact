const reducer = (state = { categories: []}, action) => {
    
    switch(action.type){
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