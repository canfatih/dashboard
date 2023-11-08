import React from 'react'
import { Conversion } from './Conversion'
import { Location } from './Location'
import { Webanlyc } from './Webanlyc'
export const Footer = () => {
  return (
    <div className=" mt-9 gap-7 flex w-full flex-wrap md:flex md:flex-nowrap md:text-white  md:px-10 md:mt-7 md:gap-7 md:pb-6">
         <div className=" w-full h-96 md:basis-2/6 md:h-96">
<Location></Location>
        </div>
        <div  className="w-full h-96 md:flex md:basis-2/6 md:h-96">
<Conversion></Conversion>
        </div>
        <div  className=" w-full h-96 md:flex md:basis-2/6 md:h-96">
<Webanlyc></Webanlyc>
        </div>
    </div>
  )
}
