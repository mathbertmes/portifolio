"use client"
import { useState } from "react";
import MenuDesktop from "./menuDesktop";
import AboutMe from "./pages/aboutMe";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import ContactMe from "./pages/contactMe";

const MainContainer = () => {
  const [page, setPage] = useState("aboutMe")

  const handleChangePages = (page: string) => {
    setPage(page)
  }
  return (
    <div className=' w-full rounded-2xl flex flex-col bg-main py-10 px-5 relative'>
       <MenuDesktop activePage={page}  handleChangePage={handleChangePages}/>
        {page === "aboutMe" && (
          <AboutMe />
        )}
        {page === "resume" && (
          <Resume />
        )}
        {page === "projects" && (
          <Projects />
        )}
        {page === "contactMe" && (
          <ContactMe />
        )}
     
    </div>
  );
};

export default MainContainer;
