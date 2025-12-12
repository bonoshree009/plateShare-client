import { Link, NavLink } from "react-router";
import { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../Context/AuthProvider";
import logo from '../../assets/food-sharing-nutrition-charity-logo-260nw-2335087999.webp'


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navLinks = (
    <>
      <li><NavLink to="/" className="hover:text-orange-500"> Home </NavLink></li>
      <li> <NavLink to="/available-foods" className="hover:text-orange-500"> Available Foods </NavLink></li>

      {user && (
        <> 
          
        </>
      )}
    </>
  );

  return (
    <div className="w-full shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo"className="w-10 h-10"/>
          <h1 className="text-2xl font-bold text-orange-600">PlateShare</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-semibold">
          {navLinks}
        </ul>

        {/* User section */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <Link to="/login" className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700" > Login
            </Link>
          ) : (
            <div className="relative">
              <img src={user.photoURL} alt="user" className="w-10 h-10 rounded-full cursor-pointer"
               onClick={() => setDropdown(!dropdown)}
              />

              {dropdown && (
                <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-lg p-3 w-40">
                  <p className="font-semibold text-center border-b pb-2">
                    {user.displayName}
                  </p>
                  <ul className="list-none">
                   <li className="decoration"><NavLink to="/add-food" className="hover:text-orange-500">Add Food </NavLink> </li>
           <li> <NavLink to="/manage-my-foods" className="hover:text-orange-500"> Manage My Foods </NavLink></li>
          <li><NavLink to="/my-requests" className="hover:text-orange-500"> My Food Requests</NavLink> </li>
                   </ul>
                  <button onClick={logOut} className="mt-3 px-3 py-2 bg-red-500 text-white w-full rounded-lg hover:bg-red-600" >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white p-5 space-y-4 font-semibold shadow-lg">
          {navLinks}

          {!user ? (
            <Link
              to="/login"
              className="block px-4 py-2 bg-orange-600 text-white rounded-lg text-center hover:bg-orange-700"
            >
              Login
            </Link>
          ) : (<>

           <li><NavLink to="/add-food" className="hover:text-orange-500">Add Food </NavLink> </li>
           <li> <NavLink to="/manage-my-foods" className="hover:text-orange-500"> Manage My Foods </NavLink></li>
          <li><NavLink to="/my-requests" className="hover:text-orange-500"> My Food Requests</NavLink> </li>
            <button onClick={logOut} className="block w-full px-4 py-2 bg-red-500 text-white rounded-lg mt-4 hover:bg-red-600">
              Logout
            </button>

            </>

            
          )}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
