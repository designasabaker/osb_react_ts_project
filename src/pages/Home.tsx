import {HomeProvider} from "../Context/HomeContext";
import React from "react";
import {Banner} from "../components/Banner";
import {HomeStories} from "../components/HomeComponents/HomeStories";
import {HomeProjects} from "../components/HomeComponents/HomeProjects";
import {NewsGallery} from "../components/HomeComponents/NewsGallery";
import OceanImg from '../assets/images/ocean.jpg'
import Sidebar from "../components/Sidebar";

export const Home = () => {
    return (
        <HomeProvider>
            <Banner
                imgUrl={OceanImg}
                isFullHeight={true}
                title={"Ocean State Bioactives"}
                caption={"Strive for sustainable bioactive skincare ingredients"}
                hasBtn={true}
            />
            <HomeStories />
            <HomeProjects />
            <NewsGallery />
            <Sidebar appearThreshold={0.5} vanishThreshold={0.5}/>
        </HomeProvider>
    )
}