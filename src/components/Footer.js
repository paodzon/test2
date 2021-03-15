import React from 'react';
import './Footer.scss';
import { FaFacebookF,FaLinkedinIn,FaTwitter} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__details">
                    <span>Call us at 111-222-3333</span><br/>
                    <span>for more information</span>
                </div>
                <div className="footer__icons">
                <div className="footer__social"><span>Social Share</span></div>
                <FaTwitter className="footer__icon icon" />
                <FaFacebookF className="footer__icon icon" />
                <FaLinkedinIn className="footer__icon icon" />
                <IoIosMail className="footer__icon icon" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
