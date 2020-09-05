import C from '../constants'

export const fetchCategories = () => {
    return (dispatch) => {
        console.log("hitting action for fetchCategories")
    fetch("http://localhost:3000/categories")
    .then(res => res.json())
    .then(categories => dispatch({type: C.ADD_CATEGORIES, categories: categories})
    )
}


}