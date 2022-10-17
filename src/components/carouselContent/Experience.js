import React from "react";
import "../../styles/carouselContent/Experience.css";

export default function Experience(){
    return(
        <div className = "row experience">
            <div className = "col work">
                <div className = "row work-list">
                    <div className = "row section-title">
                        <h2><u>Work Experience</u></h2>
                    </div>
                    <div className = "row text-start">
                        <div className = "col work-item">
                            <div className = "row work-title">
                                <div className = "col-8"><strong>UofTHacks</strong></div>
                                <div className = "col"><em>2022/08 ~ Present</em></div>
                            </div>
                            <div className = "row work-content">
                                <div className = "col">
                                    <ul>
                                        <li>Working as a backend developer</li>
                                        <li>Currently working with <strong>Nodes.js, Express.js, Typescript</strong> and <strong>MariaDB</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "row text-start">
                        <div className = "col work-item">
                            <div className = "row work-title">
                                <div className = "col-8"><strong>KTHD Inc.</strong></div>
                                <div className = "col"><em>2022/05 ~ 2022/08</em></div>
                            </div>
                            <div className = "row work-content">
                                <div className = "col">
                                    <ul>
                                        <li>Worked as a Software Engineer Intern</li>
                                        <li>Worked in web application with <strong>MariaDB, Java, JSP</strong> and <strong>Jquery</strong></li>
                                        <li>Worked in a IOS Machine Learning based app with C, Tensorflow and Swift
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "col education">
                <div className = "row education-list">
                    <div className = "row section-title">
                        <h2><u>Education</u></h2>
                    </div>
                    <div className = "row text-start">
                        <div className = "col work-item">
                            <div className = "row work-title">
                                <div className = "col-8"><strong>University Of Toronto</strong></div>
                                <div className = "col"><em>2019 ~ Present</em></div>
                            </div>
                            <div className = "row work-content">
                                <div className = "col">
                                    <ul>
                                        <li>Studying Statistics, Computer Science and Mathematics</li>
                                        <li>Major Courses: <strong>Algorithm Design and Analysis, Software Design, Data Structures and analysis, Software Tools and Systems Programming</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "row text-start">
                        <div className = "col work-item">
                            <div className = "row work-title">
                                <div className = "col-8"><strong>North London Collegiate School Jeju</strong></div>
                                <div className = "col"><em>2011 ~ 2019</em></div>
                            </div>
                            <div className = "row work-content">
                                <div className = "col">
                                    <ul>
                                        <li>Pursued IB Diploma program
                                        </li>
                                        <li>Studied <strong>Mathematics, Computer Science and Physics as High Level</strong></li>
                                        <li><strong>Head of CS society</strong> during IB Diploma program</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}