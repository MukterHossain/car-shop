import Image from "next/image";

const HomeContact = () => {
  return (
    <div className="bg-[#151515] rounded-lg px-10 md:px-12 py-16 md:py-24 my-16 md:my-20">
      <div className="grid grid-cols-1 justify-items-center items-center gap-5 md:grid-cols-2 lg:grid-cols-3  ">
        <div className="flex items-center space-x-5">
          <Image
            className=""
            src={"/assets/images/contact/dateTime.png"}
            width={40}
            height={40}
            alt="pic"
          ></Image>
          <div className="text-white">
            <p className="text-[16px] lg:text-lg">We are open monday-friday</p>
            <p className="lg:text-2xl text-[21px] font-semibold ">7:00 am - 9:00 pm</p>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <Image
            className=""
            src={"/assets/images/contact/phone.png"}
            width={40}
            height={40}
            alt="pic"
          ></Image>
          <div className="text-white">
            <p className="text-[16px] lg:text-lg">Have a question?</p>
            <p className="lg:text-2xl text-[21px] font-semibold ">+2546 251 2658</p>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <Image
            className=""
            src={"/assets/images/contact/location.png"}
            width={40}
            height={40}
            alt="pic"
          ></Image>
          <div className="text-white">
            <p className="text-[16px] lg:text-lg">Need a repair? our address</p>
            <p className="lg:text-2xl text-[21px] font-semibold ">Liza Street, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
