import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import SidebarBtn from "./SidebarBtn";

export const Sidebar = (props:any) => {
    const {appearThreshold,vanishThreshold} = props;
    const [isShow, setIsShow] = useState(false);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const overallHeight = document.documentElement.offsetHeight;
        // console.log(window.scrollY, windowHeight, overallHeight)
        if (window.scrollY > windowHeight * appearThreshold && window.scrollY < overallHeight - windowHeight - windowHeight * vanishThreshold ){
            setIsShow(true);
        } else {
            setIsShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
    },[]);

    return(
        <div className={"fixed right-10 bottom-10 z-10"}>
            <div
                // style={{display: isShow ? 'block' : 'none'}}
                className={`flex flex-col items-center shadow-lg p-0 m-0 justify-center transition ease-in-out duration-300 ${isShow ? 'opacity-1' : 'opacity-0'}`}
            >
                <SidebarBtn name={"Home"} url={"/"} />
                <SidebarBtn name={"Ingredients"} url={"/ingredients"} />
                <SidebarBtn name={"Contact Us"} url={"/contact"} />
            </div>
        </div>
    )
}

export default Sidebar;