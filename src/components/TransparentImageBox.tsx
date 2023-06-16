import ocean from "../assets/images/ocean.jpg";
import ScrollToTop from "../utils/ScrollToTop";

export const TransparentImageBox = () => {
    return (
        <div className="w-full h-[40vh] overflow-hidden relative">
            <div className="absolute w-full h-full bg-gradient-to-b from-white"></div>
            <img className={"z-[-10] w-full h-full object-cover"} src={ocean} alt="transparent-image-box"/>
            <div className={"z-10 absolute top-0 left-1/2 transform translate-x-[-50%]"}>
            </div>
        </div>
    )
}

export default TransparentImageBox;