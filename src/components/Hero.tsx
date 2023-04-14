import Ocean from '../assets/images/ocean.jpg'

export const Hero = () => {
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
                    <h1 className={"text-6xl font-bold text-white"}>Ocean State Bioactives</h1>
                    <p className={"text-white px-2"}>Strive for sustainable bioactive skincare ingredients</p>
                    <button className={"btn my-2"}>Learn More</button>
                </div>
            </div>

        </div>
    )
}