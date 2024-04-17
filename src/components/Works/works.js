import React from "react";
import './works.css';
import collaboration from '../../assets/portfolio-1.png';
import creativity from '../../assets/portfolio-2.png';
import criticalThinking from '../../assets/portfolio-3.png';
import problemSolving from '../../assets/portfolio-4.png';
import programming from '../../assets/portfolio-5.png';
import timeManagement from '../../assets/portfolio-6.png';

const Works = () => {
    return (
      <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">I take pride in paying attention to make the samllest details and making sure that my work is pixel perfect.I am excited to bring my skills and experinece to help business acheive their goals and create a strong online presenece</span>
        <div className="worksImgs">
            <img src={collaboration} alt="" className="worksImg" />
            <img src={creativity} alt="" className="worksImg" />
            <img src={criticalThinking} alt="" className="worksImg" />
            <img src={problemSolving} alt="" className="worksImg" />
            <img src={programming} alt="" className="worksImg" />
            <img src={timeManagement} alt="" className="worksImg" />
        </div>
        <button className="worksBtn">See More</button>
      </section>
    )
}

export default Works;