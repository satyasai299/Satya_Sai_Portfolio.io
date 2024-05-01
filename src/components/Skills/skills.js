import React from "react";
import './skills.css';
import SAP from '../../assets/SAP.png';
import UIDesign from '../../assets/uiDesign.png';
import WebDesign from '../../assets/webDesign.png';
import AppDesign from '../../assets/appDesign.png';
import programming from '../../assets/programming.png'

const Skills = () => {
    return (
     <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate full stack developer with experinece</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={programming} alt="Programming" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Full Stack Developer</h2>
                    <p>Experienced Full Stack Developer proficient in C, Java, Python, C++, SAP ABAP, JavaScript, TypeScript, HTML, CSS, Node.js, JSON, XML, React.js, AngularJS, AJAX, jQuery, SAP UI5, SAP Fiori, Servlets, JDBC, Spring Boot, SQL, PL/SQL, and adept at integrating SAP modules for enterprise-level solutions.</p>
                </div>
            </div>

            {/* <div className="skillBar">
                <img src={SAP} alt="SAP" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>SAP Full Stack Developer</h2>
                    <p>As an SAP full stack developer, I adeptly leverage my expertise in both front-end and back-end technologies to design, develop, and implement robust solutions that streamline business processes, enhance user experience, and drive operational efficiency within the SAP ecosystem.</p>
                </div>
            </div> */}

            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI UX Design</h2>
                    <p>As a UI/UX designer, I specialize in crafting intuitive and visually compelling user interfaces that prioritize user experience and drive engagement. I leverage my expertise in user research, wireframing, prototyping, and usability testing to create designs that seamlessly blend aesthetics with functionality, resulting in highly effective digital experiences.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>As a website designer, I combine creativity with technical proficiency to deliver visually stunning and user-friendly websites. With a keen understanding of design principles, user experience, and the latest industry trends, I create bespoke solutions that captivate audiences, enhance brand presence, and drive conversions.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>As an app designer, I specialize in crafting innovative and user-centric mobile applications that elevate user experiences and drive engagement. Drawing upon my expertise in UI/UX design principles, platform guidelines, and usability standards, I create visually appealing interfaces that seamlessly integrate with the app's functionality, ensuring intuitive navigation and high user satisfaction.</p>
                </div>
            </div>
        </div>
     </section>
    )
}

export default Skills;