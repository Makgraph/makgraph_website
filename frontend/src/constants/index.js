export const navLinks = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Gallerie",
  },
  {
    id: 3,
    title: "Shop",
  },
  {
    id: 4,
    title: "About",
  },
  {
    id: 5,
    title: "Contact",
  },
];

{
  /* <div id="header">
<div className="shadow-md z-10 fixed top-0 lef-0 w-full">
  <div className="md:flex items-center justify-between bg-surfaceContainer py-2 md:px-6 lg:px-[156px] xl:px-[200px] sm:px-8 px-7">
    <div>
      <img
        className=" flex w-20 h-16 md:w-28 md:h-20"
        src={logoMakgraph}
      />
    </div>
    <div
      onClick={() => setOpen(!open)}
      className="md:hidden text-3xl absolute right-8 top-6 cursor-pointer"
    >
      <ion-icon name={open ? "close" : "menu"}></ion-icon>
    </div>
    <ul>
      {users.map((navLinks) => (
        <li key={navLinks.id}>
          <Link
            to={navLinks.id}
            className={({ isActive }) => {
              return isActive ? " text-primary" : "";
            }}
          >
            {navLinks.name}
          </Link>
        </li>
      ))}
    </ul>
    <ul
      className={`md:flex md:items-center md:pb-0 pb-12 absolute bg-surfaceContainer  md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-6 transition-all md:transition-none duration-500 ease-in ${
        open ? "top-[81px] opacity-100" : "top-[-490px]"
      } md:opacity-100 opacity-0`}
    >
      <li className="w-full md:w-[70px] text-[14px] h-5 justify-center items-center flex md:my-0 my-7 md:bg-surfaceContainer hover:bg-primary/10 duration-300">
        <NavLink
          to={`/home/1`}
          // onClick={() => setActiveNav("#home")}
          className={({ isActive }) => {
            return isActive ? " text-primary" : "";
          }}
          // className={activeNav === "#home" ? " text-primary" : ""}
        >
          {/* <div className="flex flex-col items-center">
        <ion-icon size="small" name="home"></ion-icon>
      </div> */
}
//     Home
//   </NavLink>
// </li>
// <li className="w-full md:w-[70px] text-[14px] h-5 justify-center items-center flex md:my-0 my-7 md:bg-surfaceContainer hover:bg-primary/10 duration-300">
//   <NavLink
//     to={`/gallery/1`}
//     className={({ isActive }) => {
//       return isActive ? " text-primary" : "";
//     }}
// onClick={() => setActiveNav("#gallerie")}
// className={activeNav === "#gallerie" ? "text-primary" : ""}
//   >
//     Gallery
//   </NavLink>
// </li>
// <li className="w-full md:w-[70px] text-[14px] h-5 justify-center items-center flex md:my-0 my-7 md:bg-surfaceContainer hover:bg-primary/10 duration-300">
//   <NavLink
//     to={`/shop/2`}
//     className={({ isActive }) => {
//       return isActive ? " text-primary" : "";
//     }}
//     // onClick={() => setActiveNav("#shop")}
// className={activeNav === "#shop" ? "text-primary" : ""}
//   >
//     Shop
//   </NavLink>
// </li>
// <li className="w-full md:w-[70px] text-[14px] h-5 justify-center items-center flex md:my-0 my-7 md:bg-surfaceContainer hover:bg-primary/10 duration-300">
//   <NavLink
//     to={`/about/1`}
//     className={({ isActive }) => {
//       return isActive ? " text-primary" : "";
//     }}
// onClick={() => setActiveNav("#à propos")}
// className={activeNav === "#à propos" ? "text-primary" : ""}
//   >
//     À propos
//   </NavLink>
// </li>
// <li className="w-full md:w-[70px] text-[14px] h-5 justify-center items-center flex md:my-0 my-7 md:bg-surfaceContainer hover:bg-primary/10 duration-300 ">
//   <NavLink
//     to={`/contact/1`}
//     className={({ isActive }) => {
//       return isActive ? " text-primary" : "";
//     }}
// onClick={() => setActiveNav("#contact")}
// className={activeNav === "#contact" ? "text-primary" : ""}
// className="grow shrink basis-0 text-center text-onSurface  md:bg-surfaceContainer hover:bg-primary/10 duration-300 text-sm font-medium font-['Roboto'] leading-tight tracking-tight "
//   >
//     Contact
//   </NavLink>
// </li>

{
  /* <li key={} className="w-full md:w-24 h-5 justify-between items-center flex md:my-0 my-7">
<a href="" className="">Home</a>
</li> */
}
{
  /* {navLinks.map((nav) => (
    <li
      key={nav.id}
      className="w-full md:w-24 h-5 justify-between items-center flex md:my-0 my-7"
    >
      <a
        href={`#${navLinks.id}`}
        onClick={() => setActiveNav(`#${navLinks.id}`)}
        className="grow shrink basis-0 text-center text-onSurface  md:bg-surfaceContainer hover:bg-primary/10 duration-300 text-sm font-medium font-['Roboto'] leading-tight tracking-tight"
      >
        {nav.title}
      </a>
    </li>
  ))} */
}
{
  /* {navLinks.map((nav) => (
    <li
      key={nav.id}
      className="w-full md:w-24 h-5 justify-between items-center flex md:my-0 my-7"
    >
      <a
        href={`#${navLinks.id}`}
        className="grow shrink basis-0 text-center text-onSurface  md:bg-surfaceContainer hover:bg-primary/10 duration-300 text-sm font-medium font-['Roboto'] leading-tight tracking-tight"
      >
        {nav.title}
      </a>
    </li>
  ))} */
}
// <div className="w-full h-6 justify-center items-center  flex md:hidden pl-3 mt-16 gap-10 ">
//   <ion-icon name="logo-facebook"></ion-icon>
//   <ion-icon name="logo-instagram"></ion-icon>
{
  /* <ion-icon name="logo-pinterest"></ion-icon> */
}
//   </div>
// </ul>
// <div className="h-6 items-center md:flex hidden gap-2 ">
//   <a href="#home">
//     <b>
//       <span className="text-[14px] hover:bg-primary/10 duration-300">
//         S'inscrire
//       </span>
//     </b>
//   </a>
//   ou
//   <NavLink
//     to={`/home/1`}
// onClick={() => setActiveNav("#home")}
// className={({ isActive }) => {
//   return isActive ? " text-primary" : "";
// }}
// href="#contact"
// onClick={() => setActiveNav("#contact")}
// className={activeNav === "#contact" ? "text-primary" : ""}
//       >
//         <b>
//           <span className="text-[14px] hover:bg-primary/10 duration-300">
//             Se Connecter
//           </span>
//         </b>
//       </NavLink>
//       <ShoppingCart size={24} />
//     </div>
//   </div>
// </div>
{
  /* <div>
  <Home />
</div> */
}
// </div>
// <div className="mt-20 md:mt-24 h-[100%]" id="detail">
// <Outlet />
// </div> */}
