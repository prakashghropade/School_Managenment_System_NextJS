"use client"
import Image from 'next/image';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: 'Mon',
      present: 80,
      absent: 20,
    },
    {
      name: 'Tue',
      present: 50,
      absent: 50,
    },
    {
      name: 'Wed',
      present: 75,
      absent: 25,
    },
    {
      name: 'Thu',
      present: 60,
      absent: 40,
    },
    {
      name: 'Fri',
      present: 70,
      absent: 30,
    },
    {
      name: 'Sat',
      present: 90,
      absent: 10,
    }
  ];

  
const AttendenceCharts = () => {
    return (
        <div className="bg-white rounded-lg p-4 h-full">

         <div className="flex justify-between">
            <h1 className="text-lg font-semibold">Attendance</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20}/>
         </div>

           <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name"  axisLine={false} tick={{fill: "#d1d5db"}} tickLine= {false}/>
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" axisLine={false} tick={{fill: "#d1d5db"}} tickLine= {false}/>
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" axisLine={false} tick={{fill: "#fff"}} tickLine= {false}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"gray"}}/>
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
          <Bar yAxisId="left" dataKey="present" fill="#FAE27C" legendType='circle' radius={[10, 10, 0, 0]}/>
          <Bar yAxisId="right" dataKey="absent" fill="#C3EBFA" legendType='circle' radius={[10, 10, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
        </div>
    )
}

export default AttendenceCharts;