"use client"
import Image from "next/image";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expence: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expence: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    income: 2000,
    expence: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    income: 2780,
    expence: 3908,
    amt: 2000,
  },
  {
    name: "May",
    income: 1890,
    expence: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    income: 2390,
    expence: 3800,
    amt: 2500,
  },
  {
    name: "July",
    income: 3490,
    expence: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    income: 3490,
    expence: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    income: 3490,
    expence: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    income: 3490,
    expence: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    income: 3490,
    expence: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    income: 3490,
    expence: 4300,
    amt: 2100,
  },
];

const FinanceCharts = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* Title */}
      <div className=" flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <div className="w-full h-[75%] relative">
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{fill: "#fff"}} tickLine= {false} tickMargin={10}/>
          <YAxis axisLine={false} tick={{fill: "#fff"}} tickLine= {false} tickMargin={10}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="expence" stroke="#CFCEFF" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanceCharts;
