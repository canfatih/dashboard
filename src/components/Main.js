import { useEffect, useState } from 'react'
import { Carts } from './Carts'
import { Dashboard } from './Dashboard'
import  { useContext } from 'react'
import { MainContext } from '../context'

import { BsArrowDownLeft, BsArrowUpRight,BsGraphUpArrow} from 'react-icons/bs'
import {BiStats} from "react-icons/bi"
export const Main = () => {
  const arrowdownleft=<BsArrowDownLeft className="text-white text-lg"></BsArrowDownLeft>
  const arrowupright=<BsArrowUpRight className="text-white text-lg"></BsArrowUpRight>
  const graphup=<BsGraphUpArrow className="text-white text-lg" ></BsGraphUpArrow>
  const activeuser=<BiStats className="text-white text-lg" ></BiStats>

  return (
    <div className="flex flex-wrap px-0 w-full mt-9 md:flex  md:flex-nowrap md:px-10 md:mt-9 md:gap-7">
        <div className="flex w-full flex-col gap-5 md:flex md:basis-1/4 md:flex-col md:gap-4 justify-end">
          
        <Carts title="Total Visits" numbers="6300" icons={arrowdownleft} badge="+1.29" badges={1}></Carts>
        <Carts title="Total Subscribers" numbers="32"icons={arrowupright} badges={2} badge="+1.29"></Carts>
        <Carts title="Active Users" numbers="20"icons={activeuser} ></Carts>
        <Carts title="Total Clicks" numbers="199"icons={graphup} ></Carts>
        </div>
      
        <div className=" flex w-full mt-9 md:flex md:basis-3/4">
<Dashboard></Dashboard>
        </div>
      
       
    </div>
  )
}
