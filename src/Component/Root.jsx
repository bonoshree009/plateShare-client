import React from 'react';
import Navbar from './LayOut/Navbar';
import { Outlet } from 'react-router';
import Footer from './LayOut/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;