// NOTE: This scroll to top is the default react scroll to top behavior when visiting a new route.
// For the scroll to top behavior on a click event I have created a custom hook with the name of useScrollToTop under the hooks folder that scrolls use to the top of the page when they scroll down on the page.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {Button} from "react-daisyui";

const ScrollToTop = () => {
    // const { pathname } = useLocation();
    //
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [pathname]);

    return (
        <button
            className={"text-sm font-button color-osbDeepBlue bg-[#e4eff2] text-sm pb-1 px-24 rounded-full border-none text-center"}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
            <p className={"hidden sm:block"}>Back to the Top</p>
            <p className={"sm:hidden"}>TOP</p>
        </button>
    );
};

export default ScrollToTop;
