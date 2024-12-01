import Image from "next/image";

const UserCard = ({type}:{type:String}) => {
    return (
        <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px] md:flex-wrap">
            <div className="flex justify-between items-center">
                <span className="text-[10px] px-2 py-1 bg-white rounded-full text-green-600">2024/2025</span>
                <Image src="/more.png" alt="" width={20} height={20}/>
            </div>
            <h1 className="text-2xl font-semibold my-4">1,234</h1>
            <h2 className="text-sm capitalize font-medium text-gray-green">{type}</h2>
        </div>
    )
}

export default UserCard;