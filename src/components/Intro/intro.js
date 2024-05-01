import React from "react";
import './intro.css';
import { Link } from "react-scroll";
import btnImg from '../../assets/hireMe.png';
import bg from '../../assets/bg.jpg';
import resume from '../../assets/satya_sai_resume.pdf';


const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = "satya_sai_resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm<span className="introName"> Satya Sai</span><br />Full Stack Developer</span>
                <p className="introPara"> I am skilled full stack developer with experinece in creating <br />visually  appealing and user friendly web applications</p>
                <Link><button className="btn" onClick={downloadResume} ><img src={ btnImg } alt="Hire Me" className="btnImg" /> Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;