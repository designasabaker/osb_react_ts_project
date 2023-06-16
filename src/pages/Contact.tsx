import { motion } from 'framer-motion';
import {Banner} from "../components/Banner";
import OceanImg from '../assets/images/ocean.jpg';
import {ContactDetails, MessageForm} from "../components/ContactComponents";
import Sidebar from "../components/Sidebar";
import React from "react";

export const Contact = () => {
    return (
        <>
            <Banner
                imgUrl={OceanImg}
                isFullHeight={false}
                title={"Contact Us"}
                caption={""}
                hasBtn={false}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 0.5,
                    delay: 0.1,
                }}
                className="container mx-auto flex flex-col-reverse lg:flex-row py-5 px-12 lg:py-10 lg:mt-10"
            >
                <div className={"w-full grid grid-cols-1 px-12 gap-0 content-center lg:grid-cols-2"}>
                    <ContactDetails/>
                    <MessageForm />
                </div>
            </motion.div>
            <Sidebar appearThreshold={0} vanishThreshold={0.1}/>
        </>
    );
};

export default Contact;
