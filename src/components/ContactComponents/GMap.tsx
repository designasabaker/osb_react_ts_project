import React from 'react'

export const GMap = () => {
    return(
        <div className={"px-0 py-3"}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47571.58947149459!2d-71.44255294309878!3d41.823467110595914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e444e0437e735d%3A0x69df7c4d48b3b627!2sProvidence%2C%20RI!5e0!3m2!1sen!2sus!4v1682916922318!5m2!1sen!2sus"
                className={"w-full h-36 lg:h-96"}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" />
        </div>

    )
}

export default GMap;