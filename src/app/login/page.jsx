"use client"
import Image from "next/image";
import Heading from "../hooks/Heading";
import SocialLogin from "../hooks/SocialLogin";
import Link from "next/link";

const page = () => {
    const handleLogin = async()=>{}
  return (
    <div>
      <div className="my-6">
        <Heading title={"Login"}></Heading>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Image
            width={500}
            height={500}
            src={"/assets/images/login/login.svg"}
            alt="img"
          ></Image>
        </div>
        <div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div>
                <p className="text-center my-3">Or login with</p>
                <SocialLogin></SocialLogin>
            </div>
            <p className="text-center my-3">Not have account? <Link href={'/signup'} className="text-blue-500 font-semibold">Sign up</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
