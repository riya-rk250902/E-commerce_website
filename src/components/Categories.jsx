import React from 'react';
import {ApiCategories} from '../apifolder/CategoryApi'
function Categories() {
  return <div classname="flex justify-between items-center p-5">
    {
      ApiCategories.map((category,index)=>{
        return<Category item={category} key={index}/>
      })
    }
  </div>;
}

export default Categories;