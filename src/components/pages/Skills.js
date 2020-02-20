import React from "react";
import '../../style.css';
import htmlicon from "../../images/html-icon.png"
import cssicon from "../../images/css-icon.png"
import jsicon from "../../images/js-icon.png"
import reacticon from "../../images/react-icon.png"
import desktopicon from "../../images/desktop-icon.png"
import phoneicon from "../../images/responsive-icon.png"

function Skills() {


    return (

        <div className="container">
            <div id="about-me-text">

                <h2>Skills</h2>
                        HTML <br />
                        JavaScript <br />
                        CSS <br />
                        jQuery <br />
                        API/AJAX Calls <br />
                        Responsive Design <br />
                        MongoDB <br />
                        MySQL <br />
                        Express <br />
                        Node.js <br />
                        React <br />
                        Git <br />
                        Heroku <br />

                    <img src={htmlicon} style={{width: 100 + "px"}}></img>
                    <img src={cssicon} style={{width: 100 + "px"}}></img>
                    <img src={jsicon} style={{width: 100 + "px"}}></img>
                    <img src={reacticon} style={{width: 100 + "px"}}></img>
                    <img src={desktopicon} style={{width: 100 + "px"}}></img>
                    <img src={phoneicon} style={{width: 100 + "px"}}></img>
            </div>

        </div>
    );
}

export default Skills;
