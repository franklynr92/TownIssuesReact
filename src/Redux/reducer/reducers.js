const reducer = (state = { categories: []}, action) => {
    switch(action.type){
        case 'FETCH_CATEGORIES':
            return{
                ...state,
                categories: [...state.categories]
            }
        default: 
          return state;
    }
}

export default reducer;