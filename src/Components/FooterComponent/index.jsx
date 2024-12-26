import React from "react";
import "./Footer.css";
import Logo2 from "../../Assets/Images/logo.png";
import Mail from "../../Assets/Images/mail.png";
import Phone from "../../Assets/Images/phone.png";
 
export const FooterComponent = () => {
    return(
        <div className="footer" id="kontakt_scroll">
       <div className="footer_box">
             <div className="footer-container">
            <div className="logo2">
                <img src={Logo2} alt="logo" width={120} height={82}/>
            </div>
            <div className="kontakt">
                <ul>
                    <li><img src={Mail} alt="mail" width={35}/>amoianidiana@gmail.com</li>
                    <li><img src={Phone} alt="phone" width={35}/>+4915217130294</li>
                </ul>
            </div>
        </div>
       </div>
         <div className="copy_right">© 2024 Roma Saani. All rights reserved.</div>
    </div>
    
    )
}