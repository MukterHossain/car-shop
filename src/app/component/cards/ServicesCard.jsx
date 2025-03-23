import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const ServicesCard = ({ item }) => {
  const { title, description, price, img , _id} = item || {};
  return (
    <div className="flex flex-col max-w-lg p-6 space-y-2 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div>
        <Image className="rounded-lg" height={500} width={500} src={img} alt={title}></Image>
        <h2 className=" text-2xl font-bold pt-5">
          {title}
        </h2>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xl text-red-600 font-semibold">Price: ${price}</p>
        <Link href={`/services/${_id}`}>
        <button  type="button" className="  text-[16px] font-semibold bg-red-600  hover:bg-green-600  py-2 px-3 rounded-md duration-300  flex items-center gap-x-1  text-white">
       <span>View Details</span> <FiArrowRight size={20}></FiArrowRight>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
