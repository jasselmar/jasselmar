import React from 'react'

function Header() {
  return (
    <div className=" fixed z-20 mt-5 flex h-16 w-full place-content-between items-center  rounded-md px-24">
      <div>
        <h1 className="text-2xl font-bold text-brownjm">Hi, I'm Jassel</h1>
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
