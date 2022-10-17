import "../../styles/carouselContent/Projects.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Projects extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      className: "center",
      centerMode: true,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className="project-content">
        <div className="main-div">
          <h2 id="page-title">
            <u> Projects </u>
          </h2>
          <Slider {...settings}>
            <div>
                <div id = "card-item"> 
                    <h3>FlySafe_Bot</h3>
                    <p>A Javascript based chat bot that uses public API to inform users with different flight data, destination’s covid dangerousness, and flight status.</p>
                    <div className="img-container">
                        <a href="https://github.com/smg6135/FlySafeBot" target="_blank"><button><img src = "./github.png"></img></button></a>
                    </div>
                </div>
            </div>
            <div>
                <div id = "card-item"> 
                    <h3>WebScrap_League</h3>
                    <p>Using python based library BeautifulSoup, created a web scrapper to collect specific League of Legend user data using the username as a key</p>
                    <div className="img-container">
                        <a href="https://github.com/smg6135/webscrapproj" target="_blank"><button><img src = "./github.png"></img></button></a>
                    </div>
                </div>
            </div>
            <div>
                <div id = "card-item"> 
                    <h3>SendFoodz</h3>
                    <p>A multi-platform (web app & mobile) service that helps grocery retailers donate to-be-discarded but edible produce to nearby food banks</p>
                    <div className="img-container">
                        <a href="https://docs.google.com/document/d/1vCozs_vf-glepxLsrWWN1JUqvuK-LNOVOwKRo-yAecY/edit" target="_blank"><button><img src = "./google-drive.png"></img></button></a>
                    </div>
                </div>
            </div>
            <div>
                <div id = "card-item"> 
                    <h3>Everyday Leetcode</h3>
                    <p>A promise to myself to do one leetcode (algorithm project) everyday at least one per day.</p>
                    <div className="img-container">
                        <a href="https://github.com/smg6135/algoRepo" target="_blank"><button><img src = "./github.png"></img></button></a>
                    </div>
                </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
