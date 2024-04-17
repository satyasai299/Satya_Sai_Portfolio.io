import React from "react";
import './skills.css';
import UIDesign from '../../assets/uiDesign.png'
import WebDesign from '../../assets/webDesign.png'
import AppDesign from '../../assets/appDesign.png'

const Skills = () => {
    return (
     <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with experinece</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI UX Design</h2>
                    <p>This is a demp taxt, you can write your won content</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This is a demp taxt, you can write your won content</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is a demp taxt, you can write your won content</p>
                </div>
            </div>
        </div>
     </section>
    )
}

export default Skills;