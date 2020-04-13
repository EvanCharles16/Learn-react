import React, { Component } from 'react'
import './Content.css';
import logo from '../img/1.png';
import logo1 from '../img/2.png';

import portfolio1 from '../img/html.png';
import portfolio2 from '../img/css.png';
import portfolio3 from '../img/js.png';
import portfolio4 from '../img/bootstrap.png';
import portfolio5 from '../img/nodejs.png';
import portfolio6 from '../img/react.svg';

class Content extends Component {
    render() {
        return (
            <div className="container main" id="about">
                <div id="content">
                    <div className="bg-content"></div>
                    <div className="diff-content">
                        <div className="diff-content-item">
                            <h2>Hello --------------------</h2>
                            <h1>I am Evan Charles</h1>
                            <p>Impact Byte</p>

                            <button><a className="active" href="#">Hire Me</a></button>
                            <button><a href="#">Get CV</a></button>
                        </div>

                        <div className="diff-content-item">
                            <img src={logo} alt="foto" />
                        </div>
                    
                    </div>
                    <hr></hr>
                </div>

                <div>
                <div className="bg-content2">
                    <h1 className="title"></h1>
                </div>

                <div className="diff-content2">
                    <div className="diff-content-item2">
                        <img src={logo1} alt="foto" />
                    </div>

                    <div className="diff-content-item2" >
                        <h2>Let's <br/> Introduce About <br/> Myself</h2>
                        <hr></hr>
                        
                        <p>I am Evan Charles,</p>
                        <p>I'm graduated from Maitreyawira High School, Now I'm studying at University International Batam.</p>
                        <p className="color">Readmore..</p>
                    </div>
                </div>
                <hr></hr>
            </div>
           
                <div id="portfolio">
                    <h1 className="portfolio">Portfolio</h1>
                    <div className="portfolio-wrapper">
                        <div className="team team-1">
                            <div className="team-member">
                                <img src={portfolio1} alt="foto" /> 
                            </div>
                            <div className="team-member">
                                <img src={portfolio2} alt="foto" /> 
                            </div>
                            <div className="team-member">
                                <img src={portfolio3} alt="foto" /> 
                            </div>
                        </div>

                        <div className="team team-2">
                            <div className="team-member">
                                <img src={portfolio4} alt="foto" /> 
                            </div>
                            <div className="team-member">
                                <img src={portfolio5} alt="foto" /> 
                            </div>
                            <div className="team-member">
                                <img src={portfolio6} alt="foto" /> 
                            </div>
                        </div>
                    </div>
                </div>
           
            </div>

            
        )
    }
}

export default Content;
