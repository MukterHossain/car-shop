"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = () => {
  const session = useSession();
  const [bookings, setBookings] = useState([]);
  const loadData = async () => {
    const res = await fetch(
      `http://localhost:3000/my-bookings/api/${session?.data?.user?.email}`
    );
    const data = await res.json();
    setBookings(data?.myBookings);
  };
  useEffect(() => {
    loadData();
  }, [session]);
  console.log(session);
  return (
    <div className="my-10">
      <div className="relative h-72">
        <Image
          className="absolute h-72 w-full left-0 top-0 object-cover"
          src={"/assets/images/about_us/parts.jpg"}
          alt="service"
          width={1280}
          height={1000}
          style={{ widows: "90vw" }}
        ></Image>
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r  from-black/80 to-white/30 w-full">
          <h2 className="text-white text-3xl font-bold flex justify-center items-center">
            My Bookings
          </h2>
        </div>
      </div>
      <div className="my-6">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookings?.map(({ serviceTitle, _id, date, price }) => (
                <tr key={_id}>
                  <td>1</td>
                  <td>{serviceTitle}</td>
                  <td>{price}</td>
                  <td>{date}</td>
                  <td >
                    <div className="flex items-center gap-x-2">
                    <button
                      type="button"
                      className="  text-[16px] font-semibold bg-blue-600  hover:bg-green-600  py-1 px-2 rounded-md duration-300  flex items-center gap-x-1  text-white"
                    >
                      <span>Edit</span>
                    </button>
                    <button
                      type="button"
                      className="  text-[16px] font-semibold bg-red-600  hover:bg-green-600  py-1 px-2 rounded-md duration-300  flex items-center gap-x-1  text-white"
                    >
                      <span>Delete</span>
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
