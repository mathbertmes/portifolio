

interface MenuDesktopType {
  handleChangePage: (page: string) => void;
  activePage: string;
}
const MenuDesktop: React.FC<MenuDesktopType> = ({
  handleChangePage,
  activePage
}) => {
  return (
    <div className="absolute top-0 right-0 py-5 px-10 border-l border-b rounded-es-2xl">
      <div className="flex gap-5">
        <p onClick={() => handleChangePage("aboutMe")} className="cursor-pointer hover:text-green-500">About me</p>
        <p onClick={() => handleChangePage("resume")} className="cursor-pointer hover:text-green-500">Resume</p>
        <p onClick={() => handleChangePage("projects")} className="cursor-pointer hover:text-green-500">Projects</p>
        <p onClick={() => handleChangePage("contactMe")} className="cursor-pointer hover:text-green-500">Contact me</p>
      </div>
    </div>
  )
}

export default MenuDesktop;