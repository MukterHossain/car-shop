

const Button = ({title}) => {
    return (
        <div>
            <button className="text-[16px] transition duration-500  font-semibold bg-red-600 text-white hover:bg-green-600 py-2 sm:py-3 px-6 rounded-md sm:px-8">{title}</button>
        </div>
    );
};

export default Button;