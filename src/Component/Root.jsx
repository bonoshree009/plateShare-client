import React from 'react';
import Navbar from './LayOut/Navbar';
import { Outlet } from 'react-router';
import Footer from './LayOut/Footer';
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div>
               <Toaster position="top-right" reverseOrder={false} />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;