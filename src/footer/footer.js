import React from "react";
import Customercare from "./customerCare";
import './footer.css';
import GetinTouch from "./getInTouch";
import Information from "./information";

class Footer extends React.Component{
    render(){
        return(
            <>
            <div className="footer-main">
            <img className="ms-5 mt-4"
                    src="http://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/ella-logo-retina.png"
                    alt=""
                  ></img>
            <ul>
                <li></li>
            </ul>
            
            <Information/>
            <Customercare/>
            <GetinTouch/>
            </div>
            </>
        )
    }
}
export default Footer;