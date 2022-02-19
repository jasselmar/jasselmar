import React from 'react'

function Header() {
  return (
    <div className=" fixed  z-20 flex h-20 w-full flex-wrap items-center rounded-md py-1   px-5 backdrop-blur-sm md:h-16 md:place-content-between md:py-12 lg:px-24 ">
      <div className="  w-full text-center md:w-fit md:text-left ">
        <h1 className="mb-[-15px] text-2xl font-bold text-brownjm md:mb-0 ">
          Jorge
        </h1>
      </div>
      <div className="mt-3 flex w-full flex-row justify-center space-x-5 text-center md:mt-0 md:w-fit md:space-x-10">
        <a href="#about" className="text-lg font-medium text-brownjm ">
          about
        </a>
        <a href="#projects" className="text-lg font-medium text-brownjm ">
          projects
        </a>
        <a
          href="/JM.CV.M.pdf"
          target="_blank"
          className="text-lg font-medium text-brownjm "
        >
          resume
        </a>
        <a
          href="mailto:jjasselmartinez@gmail.com"
          target="_blank"
          className="text-lg font-medium text-brownjm "
        >
          contact
        </a>
      </div>
    </div>
  )
}

export default Header
