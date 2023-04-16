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
        <Button
            className={"btn-accent btn-outline"}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >Scroll To Top</Button>
    );
};

export default ScrollToTop;
