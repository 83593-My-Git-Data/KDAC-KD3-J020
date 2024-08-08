import React from 'react'
import Icon from "../images/icon.jpg";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";


function Footer() {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-center align-items-center py-1 my-2 border-top">
                <a href='#' className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <img src={Icon} alt="Icon" width="80" height="80" />
                </a>
                <div className="col-md-4 d-flex align-items-center">
                    <p className="copyright">© 2024 &nbsp; Football, &nbsp; All rights reserved.</p>
                </div>

                <div  className="icons" >
                    <a href="https://twitter.com/" target="_blank"><FaTwitter /></a>                    
                    <a href="https://www.facebook.com/" target="_blank"><FaFacebook /></a>
                    <a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a>
                </div>
            </footer>
        </>
    )
}
export default Footer;