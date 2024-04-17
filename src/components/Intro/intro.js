import React from "react";
import './intro.css';
import { Link } from "react-scroll";
import btnImg from '../../assets/hireMe.png';
import bg from '../../assets/bg.jpg';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm<span className="introName"> Satya Sai</span><br />Full Stact Developer</span>
                <p className="introPara"> I am skilled full stack developer with experinece in cerating <br />visually  appealing and user friendly web applications</p>
                <Link><button className="btn"><img src={ btnImg } alt="Hire Me" className="btnImg" /> Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;