import {
     Line, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer,
    Bar,ComposedChart
} from 'recharts';
import { BiDownArrowAlt } from "react-icons/bi"

export const Dashboard = () => {



    const data = [
        {
            name: 'Jan',
            line:-600,
            sub: -500,
            
        },
        {
            name: 'Feb',
           line:-300,
            sub: 200,
            
        },
        {
            name: 'Mar',
            line:1100,
            signup:1200
        },
        {
            name: 'Apr',
           line:200,
            sub: -300,
            amt: 1228,
        },
        {
            name: 'May',
           line:1150,
            signup:1100
        },
        {
            name: 'Jun',
            line:800,
            signup:700
        },
        {
            name: 'Jul',
            line:-950,
            sub: -700,
            amt: 1700,
        },
        {
            name: 'Aug',
            line:1200,
            signup:1200
        },
        {
            name: 'Sep',
            line:1000,
            signup:850
        },
        {
            name: 'Oct',
           line:850,
            signup:650
        },
        {
            name: 'Nov',
           line:-1000,
            sub: -900,
            amt: 1700,
        },
        {
            name: 'Dec',
           line:1100,
            signup:1000
        },
    ];
    return (
        <div className="w-full h-full bg-cardborder/50 border-2 border-white/5 drop-shadow-dropshadows shadow-boxshad rounded-2xl">
            <div className="w-full h-28 flex items-center justify-between">

                <div >
                    <h2 className="text-2xl text-white font-spacegrotesk font-bold flex  pl-6">User Traffic</h2>
                </div>
                <div className="flex items-center justify-center gap-5 pr-5">
                    <div className="h-4 w-4 bg-signup rounded">

                    </div>
                    <span className="text-subscribetext text-xs font-inter font-normal">User Sign up</span>
                    <div className="h-4 w-4 bg-subscribe rounded">

                    </div>
                    <span className="text-subscribetext text-xs font-inter font-normal">User Subscibed</span>
                    <button className=" rounded-md p-2 border bg-background text-subscribetext border-opacity-40 border-buttonsborder flex items-center justify-center gap-1">Current Year <BiDownArrowAlt className="text-xl"></BiDownArrowAlt></button>
                </div>


            </div>
            <div className="flex w-auto h-80">
                <ResponsiveContainer width="100%" height="100%">
                <ComposedChart  data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
 
  <CartesianGrid strokeDasharray="5 6"  fillOpacity={0.6} /> 
  <Bar dataKey="sub"   barSize={48}  fill="#FB4540" radius={8} />
  <Bar dataKey="signup"  barSize={48} fill="#0082CC" radius={8}/>
  <Line strokeDasharray="5 5"  dot={{ stroke: '#00F2DE', strokeWidth: 2 }} dataKey="line" stroke="#00F2DE"  />
</ComposedChart>
                </ResponsiveContainer>
            </div>


        </div>
    )
}
