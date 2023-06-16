import {Link} from "react-router-dom";
import {Button} from "react-daisyui";
import React from "react";

const ViewPublicationBtn = (props: any) => {
    const {name, url} = props;
    return(
        <button className="mt-3 w-72 text-sm bg-buttonBlue hover:bg-buttonHoverBlue hover:text-white text-buttonHoverBlue font-button font-bold py-2 px-4 ">
            <Link to={url}>{name}</Link>
        </button>
    )
}

export default ViewPublicationBtn;