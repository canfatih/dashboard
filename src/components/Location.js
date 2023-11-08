import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const Location = () => {
    const data = [
        {
            name: 'Mo',
            Country: 4000,
            City: 2400,
           
        },
        {
            name: 'Tu',
            Country: 3000,
            City: 1398,
           
        },
        {
            name: 'We',
            Country: 2000,
            City: 9800,
           
        },
        {
            name: 'Th',
            Country: 2780,
            City: 3908,
           
        },
        {
            name: 'Fr',
            Country: 1890,
            City: 4800,
            
        },
        {
            name: 'Sa',
            Country: 2390,
            City: 3800,
           
        },
        {
            name: 'Su',
            Country: 3490,
            City: 4300,
            
        },
    ];
    return (
        <div className="w-full h-full p-5 bg-cardborder/50 border-2 border-white/5 drop-shadow-dropshadows shadow-boxshad  rounded-2xl">
            <div className="w-full  flex justify-between">
                <div>
                    <h2 className="font-spacegrotesk font-bold text-2xl text-white">Location</h2>
                </div>
                <div className="flex justify-center gap-5 items-center">
                    <div className="flex justify-center gap-1 items-center">
                        <div className="h-3 w-3 bg-vectorcolor rounded-full">

                        </div>
                        <span className="text-sm font-spacegrotesk font-light text-white">Country</span>
                    </div>
                    <div className="flex justify-center gap-1 items-center">
                        <div className="h-3 w-3  bg-red-500 rounded-full">

                        </div>
                        <span className="text-sm font-spacegrotesk font-light text-white">City</span>
                    </div>
                </div>

            </div>
            { /* Recarts */}
            
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    
                    <Bar dataKey="City"  stackId="a" fill="#FB4540" />
                    <Bar dataKey="Country"  stackId="a" fill="#00F2DE" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
