"use client"
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SocialLogin = () => {
    const router = useRouter()
    const session = useSession()
    const { status } = useSession();  // Destructure status

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/");
        }
    }, [status, router]);
    const handleSocialLogin = async (provider) =>{
        const res= await signIn(provider, {redirect:false})
        console.log(res)
    }
    // if(session.status === 'authenticated'){
    //     router.push('/')
    // }
    return (
        <div>
            <div className="flex justify-center items-center gap-x-2 my-3 sm:my-5">
                <button> <FaFacebookF size={25} /> </button>
                <button onClick={()=> handleSocialLogin('google')}> <FcGoogle size={25}></FcGoogle> </button>
                <button onClick={()=> handleSocialLogin('github')}> <BsGithub size={25}></BsGithub> </button>

            </div>
        </div>
    );
};

export default SocialLogin;