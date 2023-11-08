import React from 'react'
import {BiDownArrowAlt} from "react-icons/bi"
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
    return (
        <div className="flex items-center justify-between w-full md:flex md:items-center md:justify-between">

            <div className=" flex px-0 gap-2 mt-2 md:flex  md:px-10 md:mt-9 md:flex-col md:gap-4">
                <NavLink to="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-titleto to-titlestart ">
                    User Analytics
                </NavLink>
<span className="font-inter font-normal text-sm text-lorem">Lorem impus dolar sit consectetur.</span>
            </div>
            <div className=" text-h3 px-0 mt-2 md:text-h3  md:px-10 md:mt-9">
            <NavLink to="/user" className=" rounded-lg p-2 border bg-background text-subscribetext border-opacity-40 border-buttonsborder flex items-center justify-between gap-1 w-44 text-xl font-inter font-medium">User <BiDownArrowAlt className="text-xl"></BiDownArrowAlt></NavLink>
            </div>
        </div>
    )
}
