import React from 'react'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

export const Conversion = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    
    return (
        <div className="w-full h-full p-5 bg-cardborder/50 border-2 border-white/5 drop-shadow-dropshadows shadow-boxshad  rounded-2xl">
            <div className="w-full  flex justify-between">
                <div>
                    <h2 className="font-spacegrotesk font-bold text-2xl text-white">Conversion Rate</h2>
                </div>


            </div>

            <div className="flex w-full items-center justify-between h-full gap-5">
                <div className=" h-full w-40 items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie


                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"

                            />

                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex flex-col items-center w-40">
                    <div className="flex gap-2 items-center justify-center">
                        <div className="h-1 w-8 bg-conversionblue hover:bg-conversionbluehover rounded-3xl">
                        </div>
                        <div>
                            <span className="text-sm font-normal font-poppin opacity-30">Total User Visit</span>
                            <br></br>
                            <span className="text-sm font-poppin font-semibold text-white">3,124,213 users</span>
                        </div>
                    </div>
<br></br>
                    <div className="flex gap-2 items-center justify-center">
                        <div className="h-1 w-8 bg-conversionblue hover:bg-conversionbluehover rounded-3xl">
                        </div>
                        <div>
                            <span className="text-sm font-normal font-poppin opacity-30">User Sign up</span>
                            <br></br>
                            <span className="text-sm font-poppin font-semibold text-white">1,523,151 users</span>
                        </div>
                    </div>
                    <br></br>
                    <div className="flex gap-2 items-center justify-center">
                        <div className="h-1 w-8 bg-conversionblue  hover:bg-conversionbluehover rounded-3xl">
                        </div>
                        <div>
                            <span className="text-sm font-normal font-poppin opacity-30">User Subscribed</span>
                            <br></br>
                            <span className="text-sm font-poppin font-semibold text-white">948,213 users</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
