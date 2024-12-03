

const MenuDesktop = () => {
  return (
    <div className="absolute top-0 right-0 py-5 px-10 border-l border-b rounded-es-2xl">
      <div className="flex gap-5">
        <p className="cursor-pointer hover:text-green-500">About me</p>
        <p className="cursor-pointer hover:text-green-500">Resume</p>
        <p className="cursor-pointer hover:text-green-500">Projects</p>
        <p className="cursor-pointer hover:text-green-500">Contact me</p>
      </div>
    </div>
  )
}

export default MenuDesktop;