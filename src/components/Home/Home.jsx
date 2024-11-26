import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shares/Navbar/Navbar';
import Banner from '../Banner/Banner';
import AllProperties from '../AllProperties/AllProperties';
import Footer2 from '../Shares/Footer/Footer2';
import Footer1 from '../Shares/Footer/Footer1';
import AdvertisementSection from '../AdvertisementSection/AdvertisementSection';

const Home = () => {
    return (
        <div>
             <Navbar></Navbar>
            <Banner></Banner>
            <AllProperties></AllProperties>
            <AdvertisementSection></AdvertisementSection>
            <Outlet></Outlet>
            <Footer1></Footer1>
            <Footer2></Footer2>
        </div>
    );
};

export default Home;