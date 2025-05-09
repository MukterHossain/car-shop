"use client"
export const dynamic = "force-dynamic";
import { Suspense } from "react";
import Image from "next/image";
import Heading from "../hooks/Heading";
import SocialLogin from "../hooks/SocialLogin";
import Link from "next/link";

const page = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SignPage />
    </Suspense>
  );
};
const SignPage = () => {
  const handleSignup = async(event)=>{
    event.preventDefault();
  const form = event.target;
  const newUser = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signup/api`, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "content-type" : "application/json"
    }
  })
  alert('Sign up successfully')
  if(res.status === 200){
    event.target.reset()
  }
  console.log(res)
  }
  
    return (
        <div className="my-10">
            <div className="mb-6">
            <Heading title={'Sign up'}></Heading>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Image
            width={400}
            height={500}
            src={"/assets/images/login/login.svg"}
            alt="img"
          ></Image>
        </div>
        <div>
          <div className="card bg-gray-100 hover:bg-green-100 transition duration-500 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign up</button>
              </div>
            </form>
            <div>
                <p className="text-center my-3">Or login with</p>
                <SocialLogin></SocialLogin>
            </div>
            <p className="text-center my-3">Already have account? <Link href={'/login'} className="text-blue-500 font-semibold">Login</Link> </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default page;