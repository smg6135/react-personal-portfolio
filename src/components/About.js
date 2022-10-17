import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/About.css";
import Addinfo from "./carouselContent/Addinfo";
import Experience from "./carouselContent/Experience";
import Intro from "./carouselContent/Intro";
import Projects from "./carouselContent/Projects";
import { Button } from "bootstrap";
import {
    useSpring,
    config,
    useSprings,
    animated,
    useTransition,
    condition
  } from "react-spring";
import { useHeight } from "../util/useHeight.tsx";
import StarBackground from './StarBackground';

export default function About(){
  
    const [showIntro, setIntro] = useState(false);
    const [showExp, setExp] = useState(false);
    const [showPrj, setPrj] = useState(false);
    const [showAddinfo, setAddinfo] = useState(false);
    const [percentage, setPercentage] = useState(100);
    const [heightRef, height] = useHeight();
    const [introDisable, setIntroDisable] = React.useState(false);
    const [expDisable, setExpDisable] = React.useState(false);
    const [prjDisable, setPrjDisable] = React.useState(false);
    const [addDisable, setAddDisable] = React.useState(false);

    const fadeIntro = useSpring({
        config: { ...config.slow },
        from: { opacity: 0, height : `${percentage}%`},
        to: {
          opacity: showIntro ? 1 : 0,
          height: showIntro ? `${percentage}%`:'0%'
        }
    });

    const fadeExp = useSpring({
        config: { ...config.slow },
        from: { opacity: 0 },
        to: {
          opacity: showExp ? 1 : 0,
          height: showExp ? `${percentage}%` : '0%'
        }
    });

    const fadePrj = useSpring({
        config: { ...config.slow },
        from: { opacity: 0 },
        to: {
          opacity: showPrj ? 1 : 0,
          height: showPrj ? `${percentage}%` : '0%'
        }
    });

    const fadeAddinfo = useSpring({
        config: { ...config.slow },
        from: { opacity: 0 },
        to: {
          opacity: showAddinfo ? 1 : 0,
          height: showAddinfo ? `${percentage}%` : '0%'
        }
    });

    return (
        <div className = "row middle">
            <div className = "content">
                <animated.div style = {{ ...fadeIntro, overflow: "scroll" }}>
                    <div className = "intro-block" ref = {heightRef}>
                        <Intro />
                    </div>
                </animated.div>
                <animated.div style = {{ ...fadeExp, overflow: "scroll" }}>
                    <div className = "experience-block" ref = {heightRef}>
                        <Experience/>
                    </div>
                </animated.div>
                <animated.div style = {{ ...fadePrj, overflow: "hidden" }}>
                    <div className = "project-block" ref = {heightRef}>
                        <Projects/>
                    </div>
                </animated.div>
                <animated.div style = {{ ...fadeAddinfo, overflow: "hidden" }}>
                    <div className = "addinfo-block" ref = {heightRef}>
                        <Addinfo/>
                    </div>
                </animated.div>
            </div>
            <div className="col indicator">
                <button disabled={introDisable} type="button" className="btn" onClick={() => {setIntro(val => !val); setExp(0); setPrj(0); setAddinfo(0);}}>Intro</button>
                <button disabled={expDisable}  type="button" className="btn" onClick={() => {setExp(val => !val); setIntro(0); setPrj(0); setAddinfo(0);}}>Experience</button>
                <button disabled={prjDisable}  type="button" className="btn" onClick={() => {setPrj(val => !val); setIntro(0); setExp(0); setAddinfo(0);}}>Projects</button>
                <button disabled={addDisable}  type="button" className="btn" onClick={() => {setAddinfo(val => !val); setIntro(0); setExp(0); setPrj(0);}}>More</button>
            </div>
            {/* footer here for screen size issue */}
            <div className="col-sm-12 text-right">
                <a href="https://www.instagram.com/mgsong19/?hl=en" target="_blank"><button><img src = "./instagram.png"></img></button></a>
                <a href="https://www.linkedin.com/in/mingon-song-8b0154224/" target="_blank"><button><img src = "./linkedin.png"></img></button></a>
                <a href="https://github.com/smg6135" target="_blank"><button><img src = "./github.png"></img></button></a>
            </div>
        </div>
    );
}
