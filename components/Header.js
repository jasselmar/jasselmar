import React from 'react'

function Header() {
  return (
    <div className=" fixed z-20 mx-10 mt-5 flex h-16 w-11/12 place-content-between items-center  rounded-md px-20">
      <div>
        <h1 className="text-2xl font-bold text-brownjm">Jassel</h1>
      </div>
      <div className="flex-row space-x-10">
        <a href="#" className="text-lg font-medium text-brownjm ">
          top
        </a>
        <a href="#" className="text-lg font-medium text-brownjm ">
          about
        </a>
        <a href="#" className="text-lg font-medium text-brownjm ">
          projects
        </a>
        <a href="#" className="text-lg font-medium text-brownjm ">
          contact
        </a>
      </div>
    </div>
  )
}

export default Header
