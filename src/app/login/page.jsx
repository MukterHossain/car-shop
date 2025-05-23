"use client"
import { Suspense } from "react";
import Image from "next/image";
import Heading from "../hooks/Heading";
import SocialLogin from "../hooks/SocialLogin";
import Link from "next/link";
import {signIn, useSession} from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const page = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Loginpage />
    </Suspense>
  );
};
const Loginpage = () => {
  const router = useRouter()
  const session = useSession()
  const searchParams = useSearchParams()
  const path=searchParams.get('redirect')
    const handleLogin = async(event)=>{
      event.preventDefault();
  const form = event.target;
  const email= form.email.value
  const password = form.password.value
  const res =await signIn('credentials', {
    email, 
    password, 
    redirect: true,
    callbackUrl: path ? path : '/'
  })
  console.log(res)
  if(res.status === 200){
    router.push('/')
  }
    }
  return (
    <div className="my-10">
      <div className="mb-6">
        <Heading title={"Login"}></Heading>
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
          <div className="card bg-green-50 group hover:bg-green-100 transition duration-500 w-full max-w-sm shrink-0 shadow-2xl ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered group-hover:bg-green-100"
                  required
                />
              </div>
              <div className="form-control  ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered group-hover:bg-green-100"
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
