import Announcement from "@/components/Announcement";
import AttendenceChart from "@/components/AttendenceCharts";
import CountCharts from "@/components/CountCharts";
import EventCalender from "@/components/EventCalende";
import FinanceCharts from "@/components/FinanceCharts";
import UserCard from "@/components/UserCard";

const Adminpage = () => {
    return (
        <div className="p-4 gap-4 flex flex-col md:flex-row">
            {/* left */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8 ">
          

          {/* User cards */}
            <div className="flex gap-4 justify-between flex-wrap">
             <UserCard type="Student"/>
             <UserCard type="Teacher"/>
             <UserCard type="Parent"/>
             <UserCard type="Staff"/>
             </div>

        {/* MIDDLE CHARTS */}
            <div className="flex gap-4 flex-col lg:flex-row">
                {/* count charts */}
                <div className="w-full lg:w-1/3 h-[450px]">
                <CountCharts/>
                </div>
                {/* Attendence charts */}
                <div className="w-full lg:w-2/3 h-[450px]">
                    <AttendenceChart/>
                </div>
            </div>
        {/* BOTTOM CHARTS */}
            <div className="w-full h-[500px]">
               <FinanceCharts/>
            </div>
            </div>
            {/* right */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">

                <EventCalender/>
                <Announcement/>
            </div>
        </div>
    )
}

export default Adminpage;