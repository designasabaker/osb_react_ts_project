import React, {useState} from "react";
import {Form} from "react-router-dom";

const inputStyle={
    backgroundColor: "#e4eff2",
    border: "none",
    borderBottom: "1px solid #000",
    width: "100%",
    margin: "1rem 0",
    padding: "0",
}
const labelStyle={
    margin: "0",
    padding: "0",
}

const initialInfo = {
    name: "",
    email: "",
    message: "",
}
const FORM_ENDPOINT = "https://public.herotofu.com/v1/442a2ac0-e7e3-11ed-b2e2-c10354b56774";

export const MessageForm = () => {
    const [info, setInfo] = useState(initialInfo);
    const handleChange = (e: any) => {
        e.preventDefault();
        setInfo({...info, [e.target.name]: e.target.value});
    }

    return(
        <form
            action="https://public.herotofu.com/v1/442a2ac0-e7e3-11ed-b2e2-c10354b56774" method="post" accept-charset="UTF-8"
            onChange={handleChange}
            className={"grid grid-cols-1 gap-0 max-w-lg bg-[#e4eff2] px-3 py-6 content-start"}
        >
            <label htmlFor="name" style={labelStyle}>Name</label>
            <input type="text" name="name" id="name" style={inputStyle}/>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input type="email" name="email" id="email" style={inputStyle}/>
            <label htmlFor="message" style={labelStyle}>Message</label>
            <textarea name="message" id="message" style={inputStyle} className="h-16"></textarea>
            <div className="relative h-16">
                <button type="submit" className="absolute right-0 bottom-0 btn">Submit</button>
            </div>
        </form>
    )
}

export default MessageForm;