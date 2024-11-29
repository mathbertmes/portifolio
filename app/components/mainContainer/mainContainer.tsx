import Image from "next/image";
import profilePic from "@/public/profilePicGithub.jpg"

const MainContainer = () => {
  return(
    
      <div className=" w-full rounded-2xl flex flex-col bg-gray-700 py-10 px-5">
      <Image src={profilePic} alt="Matheus Bertemes Picture"/>
    </div>
    
  )
}

export default MainContainer;