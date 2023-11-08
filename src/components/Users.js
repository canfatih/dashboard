import React, { useContext } from 'react'
import { MainContext } from '../context'

export const Users = () => {
   
    const {fetcheddata}=useContext(MainContext)
  return (
    <div className="w-full flex flex-wrap gap-8 items-center justify-evenly mt-6 p-6">
{fetcheddata.map((item,i)=>(
    <div className="text-white border p-6">
<ul key={i}>
    <li>{item.name}</li>
</ul>
    </div>
))}
    </div>
  )
}
