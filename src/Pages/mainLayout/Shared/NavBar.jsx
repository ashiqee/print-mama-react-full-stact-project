import { NavLink } from "react-router-dom";
import LogoText from "../../../Components/sharedComponents/LogoText";
import LoginBtn from "../../../Components/sharedComponents/Button/LoginBtn";
import SignUpBtn from "../../../Components/sharedComponents/Button/SignUpBtn";


const NavBar = () => {

    const navMenu = 
        <>
      
       <li > <NavLink to='/'>Home</NavLink>   </li>
        <li> <NavLink to='/services'>Services</NavLink>   </li>
        <li> <NavLink to='/AddService'>Add Service</NavLink>   </li>
       
   
        </>
    

    return (
        
        
 <header className="p-4 bg-gradient-to-r from-slate-900 to-cyan-600 bg-opacity-80 ">
	<div className="container flex justify-between h-10 mx-auto">

    <div className="navbar-start lg:hidden">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navMenu}
      </ul>
    </div>
  </div>
  <div className="flex items-center"><h2 className="font-bold mr-5"><LogoText/></h2></div>
		<div className="flex items-center">

	<ul className="items-stretch justify-center hidden space-x-10 lg:flex">
			{navMenu}
			</ul>
		</div>
		<div className="items-center flex-shrink-0 hidden gap-5 lg:flex">
			<NavLink className="px-3 py-1 text-sm font-semibold hover:bg-primary text-white transition-colors duration-300 transform border-2 rounded-md hover:bg-gray-700" to='/login' >
             Sign In</NavLink>
			<NavLink className="" to='/signup' ><SignUpBtn/></NavLink>
		</div>

	</div>
</header>
       
    );
};

export default NavBar;