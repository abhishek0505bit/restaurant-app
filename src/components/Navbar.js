import React from 'react'

//here inn navbar we are writing code only once and buttons are automatically inserted which are coming from the set(categories of menu API)
const Navbar = ({filterItem, menuList}) => {
  
  return (
    <>
        <div className="btn-group">
        <nav className="navbar">
            {menuList.map((curEle) => {
                return(
                    <>
                    <button className="btn-group__item" onClick={()=>filterItem(curEle)}> {curEle} </button>
                    </>
                )
            })}
        </nav>
      </div>
      
    </>
  )
}

export default Navbar
