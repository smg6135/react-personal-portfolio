import React from "react";
import "../../styles/carouselContent/Addinfo.css";

export default function Addinfo(){
    return(
        <div className = "addinfo">
            <div className = "row addinfo-main">
                <div className = "row contact-info">
                    <div className = "col">
                        <h3>Contacts</h3>
                    </div>
                    <div className = "col-10 text-start contacts">
                        <div>E-mail ::: smg6135@gmail.com</div>

                        <div>Location ::: Toronto, ON && South Korea, Seoul</div>

                        <div>IG ::: @mgsong19</div>

                        <div>LinkedIn ::: Mingon(MG) Song</div>
                    </div>
                </div>
                <div className = "row resources-info">
                    <div className = "col">
                        <h3>Resources</h3>
                    </div>
                    <div className = "col-10 text-start resource-links">
                        <div><a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Freepik</a></div>
                        <div><a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam</a></div>
                        <div><a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by riajulislam</a></div>
                        <div><a href="https://www.flaticon.com/free-icons/google-drive" title="google drive icons">Google drive icons created by Freepik</a></div>
                    </div>
                </div>
                <div className = "row resume-download">
                    <a href='/mingonsong_cv.pdf' download><button>Download My Resume</button></a>
                </div>
            </div>
        </div>
    )
}