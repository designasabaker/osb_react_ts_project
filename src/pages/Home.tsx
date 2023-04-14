import {HomeProvider} from "../Context/HomeContext";
import React from "react";
import {Hero} from "../components/Hero";
import {Footer} from "../components/Footer";

export const Home = () => {
    return (
        <HomeProvider>
            <Hero />
            {/*<HomeStories />*/}
            {/*<Projects />*/}
            {/*<News />*/}
            <Footer />
        </HomeProvider>
    )
}