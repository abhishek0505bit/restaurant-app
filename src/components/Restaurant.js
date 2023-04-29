import React, { useState } from 'react';
import "./style.css"
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList=[...new Set(Menu.map((curEle) => {
    return curEle.category
} )) , "All" ]
//here ...operator is used to convert set iterable to array
// set is used to remove repeating categories from the menu

const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState(uniqueList)
    //the menuList will store the unique categories  of the menu

    const filterItem = (category) => {
        if(category==="All"){
            setMenuData(Menu)
            return;
        }
        
        const updatedList=Menu.filter((curEle)=>{
            return curEle.category===category
        })//this filter will return those items which of whose category = category clicked by the user
        //and filter will store that objects in updated list 
        setMenuData(updatedList)
    }


  return (
  <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData={menuData} />
  </>
  )
}

export default Restaurant
