"use client";
import { getServicesDetails } from "@/services/getServices";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Checkout = ({ params }) => {
  const [service, setService] = useState({});
  const { data } = useSession();
  const loadService = async () => {
    const details = await getServicesDetails(params.id);
    setService(details.service);
  };

  const { title, description, img, price, facility, _id } = service || {};
  const handleBooking = async (event) => {
    event.preventDefault();
    const newBooking = {
      email: data?.user?.email,
      name: data?.user?.name,
      address: event.target.address.value,
      phone: event.target.phone.value,
      date: event.target.date.value,
      serviceTitle: title,
      serviceId: _id,
      price: price,
    };
    const res = await fetch("http://localhost:3000/checkout/api/new-booking", {
      method: "POST",
      body: JSON.stringify(newBooking),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);
  };
  useEffect(() => {
    loadService();
  }, [params]);
  return (
    <div className="my-10">
      <div className="relative h-72">
        {img ? (
          <Image
            className="absolute h-72 w-full left-0 top-0 object-cover"
            src={img}
            alt="service"
            width={1280}
            height={1000}
          />
        ) : (
          <p>Loading image...</p>
        )}
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r  from-black/80 to-white/30 w-full">
          <h2 className="text-white text-3xl font-bold flex justify-center items-center">
            Checkout {title}
          </h2>
        </div>
      </div>
      <div className="mt-12 bg-slate-300 p-12">
        <form onSubmit={handleBooking}>
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
                <span className="label-text">Date {new Date().getDate()}</span>
              </label>
              <input
                defaultValue={new Date().toISOString().split("T")[0]}
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
                defaultValue={price}
                readOnly
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

export default Checkout;
