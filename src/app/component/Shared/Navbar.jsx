"use client";
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  const navLink = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "My Bookings", path: "/my-bookings" },
    { title: "Blog", path: "/blog" },
    { title: "Contacts", path: "/contacts" },
  ];

  return (
    <div className="bg-gray-200 shadow-xl sticky top-0 left-0 z-50">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink.map((item) => (
                <Link
                  href={item.path}
                  key={item.path}
                  className="font-semibold hover:text-primary duration-300"
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
          <Link href="/">
            <Image height={60} width={100} alt="logo" src="/assets/logo.svg" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-x-5">
            {navLink.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className="font-semibold hover:text-primary duration-300"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex items-center space-x-3">
            <IoCartOutline size={20} />
            <IoSearchOutline size={20} />
            <a className="btn hover:bg-green-600 transition duration-500 bg-green-50 hover:text-white px-6">
              Appointment
            </a>

            <div >
              {status === "authenticated" && session?.user?.image ? (
                <Image
                  alt={session?.user?.name || "User"}
                  src={session?.user?.image}
                  height={50}
                  width={50}
                  className="rounded-full"
                />
              ) : (
                <Image
                  alt="Default User"
                  src="/assets/images/team/1.jpg"
                  height={50}
                  width={50}
                  className="rounded-full"
                />
              )}
            </div>

            {!session ? (
              <Link
                href="/login"
                className="btn hover:bg-green-600 transition duration-500 bg-green-50 hover:text-white px-4 mr-2"
              >
                Login
              </Link>
            ) : (
              <button
                className="btn hover:bg-green-600 transition duration-500 bg-green-50 hover:text-white px-4 mr-2"
                onClick={() => signOut()}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
