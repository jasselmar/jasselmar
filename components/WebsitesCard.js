import React from 'react'
import Image from 'next/image'

const WebsitesCard = ({ url, name, description, image }) => {
  return (
    <div>
      <a
        href={url}
        target="_blank"
        className=" mb-5 flex flex-col space-y-5 rounded-md bg-whiteb pb-5 drop-shadow-sm transition-all duration-300 hover:drop-shadow-2xl"
      >
        <Image src={image} width={800} height={600} className="rounded-t-md" />
        <div className="px-5 md:flex md:min-h-[155px] md:flex-col md:justify-between 2xl:min-h-[200px] ">
          <h3 className="text-2xl font-medium text-darkbrown 2xl:text-3xl ">
            {name}
          </h3>
          <p className="py-5 text-sm text-darkbrown 2xl:text-xl">
            {description}
          </p>
          <a
            href={url}
            target="_blank"
            className=" w-fit rounded-full border-2 border-deepg bg-deepg px-4 py-2 tracking-wider text-white transition-all duration-300 hover:bg-transparent hover:text-deepg 2xl:text-lg"
          >
            Visit
          </a>
        </div>
      </a>
    </div>
  )
}

export default WebsitesCard
