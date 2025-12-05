import React from 'react';
import Navbar from '../LayOut/Navbar';
import Footer from '../LayOut/Footer';
import { Outlet } from 'react-router';
import Banner from '../LayOut/Banner';
import HowItWorks from '../LayOut/HowItWorks';
import OurMission from '../LayOut/OurMission';
import LatestFood from '../LayOut/LatestFood';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <LatestFood></LatestFood>
            <HowItWorks></HowItWorks>
            <OurMission></OurMission>

           
        </div>
    );
};

export default Home;