import React from 'react';

const MapCategoryData = (props) => {
    console.log("mapCategoryData SFC", props, "this other thing", {props})
   const categoryDatas = props.categoryData && props.categoryData.map(category => <li key={category.id}>{category.type_of_issue}</li>) 
    return (
        <>
        {categoryDatas}
        </>
        );
}
 
export default MapCategoryData;
//remember to push to heroku master