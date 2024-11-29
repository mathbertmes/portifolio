import Image from "next/image";
import PersonalContainer from "./components/personalContainer";
import MainContainer from "./components/mainContainer/mainContainer";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto my-[60px] flex  flex-col xl:flex-row justify-center gap-5">
      <PersonalContainer />
      <MainContainer />
    </div>
  );
}
