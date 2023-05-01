import React from 'react';
import {GMap} from "./GMap";

export const ContactDetails = () => {

    return (
        <div className="max-w-lg">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            <div>
                <GMap />
            </div>
        </div>)
}

export default ContactDetails;