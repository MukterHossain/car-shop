import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const SocialLogin = () => {
    return (
        <div>
            <div className="flex justify-center items-center gap-x-2 my-3 sm:my-5">
                <button> <FaFacebookF size={25} /> </button>
                <button> <FcGoogle size={25}></FcGoogle> </button>
                <button> <BsGithub size={25}></BsGithub> </button>

            </div>
        </div>
    );
};

export default SocialLogin;