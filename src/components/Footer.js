
import React, {Component} from "react";

import '../styles/Footer.css';
{/* Not used anymore */}

export default class Footer extends Component{
    render(){
        return(
            <div className = "row footer">
                <div className="col-sm-12 text-right">
                    <button><img src = "./instagram.png"></img></button>
                    <button><img src = "./linkedin.png"></img></button>
                    <button><img src = "./github.png"></img></button>
                </div>
                <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by riajulislam - Flaticon</a>
            </div>
            
        );
    }
}