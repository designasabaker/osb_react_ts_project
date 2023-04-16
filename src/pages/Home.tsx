import {HomeProvider} from "../Context/HomeContext";
import React from "react";
import {Hero} from "../components/Hero";
import {HomeStories} from "../components/HomeComponents/HomeStories";
import {HomeProjects} from "../components/HomeComponents/HomeProjects";
import {TransparentImageBox} from "../components/TransparentImageBox";
import {NewsGallery} from "../components/HomeComponents/NewsGallery";
import {Footer} from "../components/Footer";

export const Home = () => {
    return (
        <HomeProvider>
            <Hero />
            <HomeStories />
            <HomeProjects />
            <NewsGallery />
            <TransparentImageBox />
            <Footer />
        </HomeProvider>
    )
}