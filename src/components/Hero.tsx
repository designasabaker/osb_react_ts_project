import Ocean from '../assets/images/ocean.jpg'
import {useCallback} from "react";

export const Hero = () => {
    const executeScroll = useCallback(() => {
        const element = document.getElementById("homeStories");
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        }
    }, []);

    return (
        <div>
            <div className={"relative w-full h-screen"}>
                <div className={" absolute z-0 w-full h-full"} >
                    <img
                        className={"w-full h-full object-cover"}
                        src={Ocean} alt="Ocean"
                    />
                </div>
                <div className={"absolute z-20 bottom-0 pb-32 px-32"}>
                    <h1 className={"text-3xl lg:text-6xl font-bold text-white"}>Ocean State Bioactives</h1>
                    <p className={"hidden md:block text-md lg:text-lg text-white px-2"}>Strive for sustainable bioactive skincare ingredients</p>
                    <button className={"btn my-2"} onClick={executeScroll}>Learn More</button>
                </div>
            </div>

        </div>
    )
}