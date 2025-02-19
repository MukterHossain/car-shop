import { FiArrowRight } from "react-icons/fi";

const ServicesCard = ({ item }) => {
  const { title, description, price } = item;
  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div>
        <img
          src="https://source.unsplash.com/random/100x100/?5"
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">
          {title}
        </h2>
      </div>
      <div className="flex flex-wrap justify-between">
        <p>Price: ${price}</p>
        <button aria-label="Bookmark this post" type="button" className="p-2">
       <FiArrowRight></FiArrowRight>
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;
