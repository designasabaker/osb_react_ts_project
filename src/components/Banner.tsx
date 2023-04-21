
import React, {useCallback} from "react";
import {Button} from "react-daisyui";

export const Banner = (props: { imgUrl:string,isFullHeight:boolean, title:string,caption:string,hasBtn:boolean }) => {
    const {imgUrl, isFullHeight, title, caption, hasBtn} = props;
    const executeScroll = useCallback(() => {
        const element = document.getElementById("homeStories");
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        }
    }, []);

    return (
        <div>
            <div className={`relative w-full ${isFullHeight? 'h-screen':'h-48'}`}>
                <div className={`absolute z-0 w-full h-full`} >
                    <img
                        className={"w-full h-full object-cover"}
                        src={imgUrl} alt="Ocean"
                    />
                </div>
                <div className={`absolute z-20 bottom-0 ${isFullHeight? 'pb-32 px-32' : 'pb-3 px-32'}`}>
                    <h1 className={`${isFullHeight? 'text-3xl lg:text-6xl' : 'text-xl lg:text-2xl'} font-bold text-white`}>{title}</h1>
                    <p className={"hidden md:block text-md lg:text-lg text-white px-2 mb-6"}>{caption}</p>
                    {hasBtn && <button
                        className={"text-sm font-body font-bold color-osbDeepBlue bg-[#e4eff2] text-sm py-3 px-6 rounded-full border-none text-center"}
                        onClick={executeScroll}>Learn More</button>}
                </div>
            </div>

        </div>
    )
}