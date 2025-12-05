

import { Link } from 'react-router';
import logo from '../../assets/food-sharing-nutrition-charity-logo-260nw-2335087999.webp'
const Footer = () => {
    return (
        <footer className=" text-white py-10 mt-16 border-y-4 border-orange-500">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Logo + About */}
                <div>
                   <Link to="/" className="flex items-center gap-2">
                             <img src={logo} alt="logo"className="w-10 h-10"/>
                             <h1 className="text-2xl font-bold text-orange-600">PlateShare</h1>
                           </Link>
                    <p className="text-black">
                        Share surplus food & help the community reduce waste.  
                        Join us and make a positive impact!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-black">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a className="text-black hover:text-orange-500" href="/">Home</a></li>
                        <li><a className="text-black hover:text-orange-500" href="/available-foods">Available Foods</a></li>
                        <li><a className="text-black hover:text-orange-500" href="/register">Register</a></li>
                        <li><a className="text-black hover:text-orange-500" href="/login">Login</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-black">Contact Us</h3>
                    <p className="text-black">Email: support@plateshare.com</p>
                    <p className="text-black">Phone: +880 1234-567890</p>
                    <p className="text-black">Address: Dhaka, Bangladesh</p>
                </div>
            </div>

            {/* Bottom */}
            <div className="text-center text-gray-500 mt-8  border-gray-700 p-4">
                © {new Date().getFullYear()} PlateShare. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
