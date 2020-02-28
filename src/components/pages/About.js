import React from "react";
import '../../style.css';



function About() {


    return (

        <div className="container">
            <div id="about-me-text">
                <h2>About Me</h2>
                <p>Hi, I'm Kayla Kuhlman! I am a full-stack web developer new to the field and a Native Minnesotan who has a lot of passion and curiosity for technology. </p>
                <p>
                    After graduating with a BS in Chemistry from Winona State University in 2014 and holding successful roles as an analytical chemist and quality manager, I found a lot of passion in making changes to the laboratory databases and updating documentation.  I have self-taught skills in building access databases and have been able to work with the IT departments in my previous positions. When I started looking into coding languages such as JavaScript, I was blown away by the possibilities.
    </p>
                <p>
                    In 2019, I decided to turn this passion into my career and enrolled in the U of M coding bootcamp and have been learning full-stack web development.  I had a great experience doing weekly assignments (Average grade of "A") as well as three group projects where I took on various roles.  I have a lot of drive to continue learning and to grow in the tech field and I'm excited to see what 2020 has in store for me.
                <p>
                        When I am not coding, I enjoy traveling, rock climbing, playing board games, and hanging out with my Siberian cat, Kronk.
    </p>
                    <img src={"/portfolio/images/me.jpg"} className="rounded aboutmepicture" style={{ height: 200 + "px" }} />
                    <img src={"/portfolio/images/travel-headshot.jpg"} className="rounded aboutmepicture" style={{ height: 200 + "px" }} />
                    <img src={"/portfolio/images/headshot.jpg"} className="rounded aboutmepicture" style={{ height: 200 + "px" }} />
                    <img src={"/portfolio/images/travel.jpg"} className="rounded aboutmepicture" style={{ height: 200 + "px" }} />
                    <img src={"/portfolio/images/kronk.jpg"} className="rounded aboutmepicture" style={{ height: 200 + "px" }} />
                </p>
            </div>

        </div>
    );
}

export default About;
