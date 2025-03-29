"use client";
import { getServicesDetails } from "@/services/getServices";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = ({ params }) => {
  const [booking, setBooking] = useState({});
  const { data } = useSession();
  const loadBooking = async () => {
    const res = await fetch(
      `http://localhost:3000/my-bookings/api/booking/${params.id}`
    );
    const data = await res.json();
    console.log(data);
    setBooking(data.data);
  };
  const handleUpdate = async (event) => {
    event.preventDefault();
    const updateBooking = {
      date: event.target.date.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
    };
    const res = await fetch(`http://localhost:3000/my-bookings/api/booking/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(updateBooking),
      headers: {
        "content-type": "application/json",
      },
    });
    if(res.status === 200){
      toast.success('Bookig data updated successfully')
    } 
    event.target.reset()
  };
  useEffect(() => {
    loadBooking();
  }, []);
  return (
    <div className="my-10">
      <div className="relative h-72">
        <Image
          className="absolute h-72 w-full left-0 top-0 object-cover"
          src={""}
          alt="update"
          width={1280}
          height={500}
        />
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r  from-black/80 to-white/30 w-full">
          <h2 className="text-white text-3xl font-bold flex justify-center items-center">
            Update {booking?.title}
          </h2>
        </div>
      </div>
      <div className="mt-12 bg-slate-300 p-12">
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={data?.user?.name}
                type="text"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date </span>
              </label>
              <input
                defaultValue={booking?.date}
                type="date"
                name="date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={data?.user?.email}
                type="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                defaultValue={booking?.price}
                type="text"
                name="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                defaultValue={booking?.phone}
                type="text"
                name="phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Present Address</span>
              </label>
              <input
                defaultValue={booking?.address}
                type="text"
                name="address"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Order Confirm"
              className="btn btn-primary btn-block"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
