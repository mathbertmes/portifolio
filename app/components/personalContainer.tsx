import Image from "next/image";
import profilePic from "@/public/profilePicGithub.jpg"


const PersonalContainer = () => {
  return(
    <div className="flex flex-col bg-gray-700 py-10 px-5 max-h-fit rounded-2xl">
      <div className="flex flex-col items-center gap-5">
        <Image src={profilePic} alt="Matheus Bertemes Picture" className="rounded-xl" width={300} height={300}/>
        <h1 className="text-2xl font-bold">Matheus Bertemes</h1>
        <div className="flex justify-center py-2 px-10 bg-gray-900 rounded-lg">
          <h1>Software Engineer</h1>
        </div>
      </div>

    </div>
  )
}

export default PersonalContainer;