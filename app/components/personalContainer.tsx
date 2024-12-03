import Image from "next/image";
import profilePic from "@/public/profilePicGithub.jpg";
import { TiSocialLinkedin } from "react-icons/ti";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const PersonalContainer = () => {
  return (
    <div className='flex bg-main py-5 xl:py-10 px-5 max-h-fit rounded-2xl flex-col'>
      <div className='flex items-center gap-5 w-full xl:flex-col'>
        <div className='h-[100px] w-[100px] md:h-[200px] md:w-[200px] xl:h-[300px] xl:w-[300px] rounded-xl overflow-hidden'>
          <Image src={profilePic} alt='Matheus Bertemes Picture' />
        </div>

        <div>
          <h1 className='text-2xl font-bold mb-2'>Matheus Bertemes</h1>
          <div className='flex justify-center py-2 px-8 bg-onyx rounded-lg'>
            <h1 className=''>Software Engineer</h1>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-2 gap-5 w-full xl:border-t xl:mt-8 xl:pt-8'>
        <Link
          href='https://www.linkedin.com/in/matheus-bertemes-96aa97187/'
          className='h-8 w-8 xl:h-10 xl:w-10 flex items-center justify-center rounded-full border border-gray-400'
        >
          <TiSocialLinkedin size={20} />
        </Link>

        <Link
          href='https://github.com/mathbertmes'
          className='h-8 w-8 xl:h-10 xl:w-10 flex items-center justify-center rounded-full border border-gray-400'
        >
          <FiGithub size={20} />
        </Link>
        <Link
          href='https://wa.me/16043689869'
          className='h-8 w-8 xl:h-10 xl:w-10 flex items-center justify-center rounded-full border border-gray-400'
        >
          <FaWhatsapp size={20} />
        </Link>
      </div>
    </div>
  );
};

export default PersonalContainer;
