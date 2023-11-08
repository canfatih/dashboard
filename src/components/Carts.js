import React, { useContext } from 'react'
import './Carts.css'
import { BsArrowDownLeft } from "react-icons/bs"
import { MainContext } from '../context'
export const Carts = ({icons,title,numbers,badge,badges}) => {

    if(badges===1){
        return (
        <div  className="bg-cardborder/50 border-2 border-white/5 drop-shadow-dropshadows shadow-boxshad h-24 flex p-6 justify-between items-center rounded-2xl">
        <div className="flex gap-4 items-center">
            <div className="w-12 h-12 flex bg-cartblue items-center justify-center rounded-2xl">
               {icons}
            </div>
            <div className="flex flex-col">
                <span className="text-h3 leading-lineheight text-sm font-spacegrotesk font-normal">{title}</span>
                <span className="text-white font-spacegrotesk font-medium text-2xl">{numbers}</span>
            </div>
        </div>
        
        <div className="flex w-16 h-6 rounded-2xl items-center justify-center bg-badgegreen bg-opacity-20">
                <span className="text-badgetext ">{badge}</span>
                </div>
        
        </div>
        )
    }
    else if(badges===2){
return (<div  className=" bg-cardborder/50 border-2 border-white/5 drop-shadow-dropshadows shadow-boxshad  h-24 flex p-6 justify-between items-center rounded-2xl">
<div className="flex gap-4 items-center">
    <div className="w-12 h-12 flex bg-cartblue items-center justify-center rounded-2xl">
       {icons}
    </div>
    <div className="flex flex-col">
        <span className="text-h3 leading-lineheight text-sm font-spacegrotesk font-normal">{title}</span>
        <span className="text-white font-spacegrotesk font-medium text-2xl">{numbers}</span>
    </div>
</div>

<div className="flex w-16 h-6 rounded-2xl items-center justify-center bg-badgered bg-opacity-20">
<span className="text-badgeredtext">{badge}</span>
</div>

</div>)
    }
    else{
       return (
        <div  className="  bg-cardborder/50 border-2 border-white/5 drop-shadow-dropshadows shadow-boxshad   h-24 flex p-6 justify-between items-center rounded-2xl">
        <div className="flex gap-4 items-center">
            <div className="w-12 h-12 flex bg-cartblue items-center justify-center rounded-2xl">
               {icons}
            </div>
            <div className="flex flex-col">
                <span className="text-h3 leading-lineheight text-sm font-spacegrotesk font-normal">{title}</span>
                <span className="text-white font-spacegrotesk font-medium text-2xl">{numbers}</span>
            </div>
        </div>
        
      

    </div>
       ) 
    }
   
}
