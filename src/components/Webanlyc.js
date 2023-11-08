import React from 'react'
import { BsCheck } from "react-icons/bs"
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Area, ResponsiveContainer } from 'recharts'
export const Webanlyc = () => {


  const data = [
    {
      
      "session": 4000,
      "visits": 2400,
      
    },
    {
      "name": "Page B",
      "session": 3000,
      "visits": 1398,
      
    },
    {
      
      "session": 2000,
      "visits": 9800,
      
    },
    {
      
      "session": 2780,
      "visits": 3908,
      
    },
    {
      
      "session": 1890,
      "visits": 4800,
      
    },
    {
      
      "session": 2390,
      "visits": 3800,
      
    },
    {
      
      "session": 3490,
      "visits": 4300,
      
    }
  ]
  return (
    <div className="w-full h-full p-5 bg-cardborder/50 border-2 border-white/5 drop-shadow-dropshadows shadow-boxshad  rounded-2xl">
      <div className="w-full  flex flex-col gap-2">
        <div>
          <h2 className="font-spacegrotesk font-bold text-2xl text-white">Website Analytics</h2>
        </div>
        <div>
          <span className="text-lorem text-sm font-inter font-normal opacity-80">Based on your performance</span>
        </div>
        <div className="flex gap-2 rounded-lg bg-radiogrupbg w-48 items-center justify-center">
          <button className="text-websiteanalyradiotext font-poppin font-normal text-xs p-1 hover:bg-webradiohover rounded-lg">Weekly</button>
          <button className="text-websiteanalyradiotext font-poppin font-normal text-xs p-1 hover:bg-webradiohover rounded-lg">Monthly</button>
          <button className="text-websiteanalyradiotext font-poppin font-normal text-xs p-1 hover:bg-webradiohover rounded-lg">Yearly</button>
        </div>
      </div>

      <div >

        <div className="flex items-center w-full h-48">
          <ResponsiveContainer >
            <AreaChart data={data}>
              <XAxis dataKey="name" />
              <Tooltip></Tooltip>
              <Area type="monotone" fill='green' dataKey="session"  />
              <Area type="monotone" dataKey="visits"  />

            </AreaChart>
          </ResponsiveContainer>

        </div>
        <div className="flex gap-3">
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 h-6 opacity-50 rounded-sm bg-webvisitsblue flex items-center justify-center hover:opacity-100">
              <BsCheck className="text-white opacity-100 text-lg"></BsCheck>
            </div>
            <span className=" text-white font-poppin font-light text-base">Visits</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 h-6 opacity-50 rounded-sm bg-websessiongreen flex items-center justify-center hover:opacity-100">
              <BsCheck className="text-white opacity-100 text-lg"></BsCheck>
            </div>
            <span className=" text-white font-poppin font-light text-base">Sessions</span>
          </div>
        </div>
      </div>

    </div>
  )
}
