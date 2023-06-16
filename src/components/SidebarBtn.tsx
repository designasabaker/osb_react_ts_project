import {NavLink} from "react-router-dom";

const SidebarBtn = (props:any)=>{
    const {name, url} = props;

    const handleOnClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return(
        <NavLink
            to={url}
            className={({ isActive, isPending }) =>
            {return `block w-24 m-0 p-3 text-sm  text-black text-center cursor-pointer hover:bg-gray-100 hover:text-gray-500 mr-4 ${isActive ? 'text-gray-500' : ''} `}
            }
            onClick={handleOnClick}
        >
            {name}
        </NavLink>
    )
}

export default SidebarBtn;