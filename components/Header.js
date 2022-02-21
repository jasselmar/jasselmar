import React from 'react'
import { Scrollchor } from 'react-scrollchor'
import { useRouter } from 'next/router'

function Header() {
  const router = useRouter()
  return (
    <div className=" fixed  z-20 flex h-20 w-full flex-wrap items-center rounded-md py-1   px-5 backdrop-blur-sm md:h-16 md:place-content-between md:py-12 lg:px-24 ">
      <div className="  w-full text-center md:w-fit md:text-left ">
        <a href="/">
          <h1 className="mb-[-15px] text-2xl font-bold text-brownjm md:mb-0 ">
            Jorge
          </h1>
        </a>
      </div>
      <div className="mt-3 flex w-full flex-row justify-center space-x-5 text-center md:mt-0 md:w-fit md:space-x-10">
        {router.pathname === '/' ? (
          <Scrollchor to="#about" className="text-lg font-medium text-brownjm ">
            about
          </Scrollchor>
        ) : (
          <a href="/#about" className="text-lg font-medium text-brownjm ">
            about
          </a>
        )}

        <a href="/websites" className="text-lg font-medium text-brownjm ">
          websites
        </a>

        <a
          href="/JM.CV.M.pdf"
          className="text-lg font-medium text-brownjm"
          target="_blank"
        >
          resume
        </a>

        <a
          href="mailto:contact@jorgemar.me"
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
