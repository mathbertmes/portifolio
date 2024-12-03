import Image from "next/image";
import profilePic from "@/public/profilePicGithub.jpg"

const MainContainer = () => {
  return(
    
      <div className=" w-full rounded-2xl flex flex-col bg-main py-10 px-5 relative">
      <Image src={profilePic} alt="Matheus Bertemes Picture"/>
    </div>
    
  )
}

export default MainContainer;