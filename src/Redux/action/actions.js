import C from '../constants'

export const fetchCategories = () => {
    return (dispatch) =>{

    dispatch({type: C.FETCH_CATEGORIES})
    fetch("http://localhost:3000/categories")
    .then(res => res.json())
    .then(categories => console.log(categories))
}


}