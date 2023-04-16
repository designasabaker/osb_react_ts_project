import ocean from "../assets/images/ocean.jpg";
import ScrollToTop from "../utils/ScrollToTop";

export const TransparentImageBox = () => {
    return (
        <div className="w-full h-[30vh] overflow-hidden relative">
            <div className="absolute w-full h-full bg-gradient-to-b from-white"></div>
            <img className={"z-[-10] w-full h-full object-cover"} src={ocean} alt="transparent-image-box"/>
            <div className={"z-10 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center opacity-70"}>
                <ScrollToTop />
            </div>
        </div>
    )
}

export default TransparentImageBox;