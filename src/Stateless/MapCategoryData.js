import React from 'react';

const MapCategoryData = (props, {categoryData}) => {
    console.log("mapCategoryData SFC",categoryData)
   const categoryDatas = props.categoryData && props.categoryData.map(category => <li key={category.id}>{category.type_of_issue}</li>) 
    return (
        <>
        {categoryDatas}
        </>
        );
}
 
export default MapCategoryData;
//remember to push to heroku master