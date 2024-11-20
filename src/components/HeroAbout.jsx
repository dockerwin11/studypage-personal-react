import React from 'react'

import personalFlag from "../images/personal.jpeg";


function HeroAbout() {


  return (
    <>
        {/* <!-- Main Content -->             */}
        <section className="section-about" id="tours">
        
            {/* <!-- Water Ripple effect --> */}
            {/* <div className="water">
                <div id="waterHolder"></div>
            </div> */}

            <div className="section-info">
                <div className="section-content">
                    <img src={personalFlag} alt="personal_img" className="personal-img" />
    
                    <article className="tour-card">
                        <div className="tour-info">
                            <h3>Design By ERB student</h3>
                            <p>The web site provides an elementary information to travel to different country.</p>
                            <hr /><br />
                            <p>Below tech is implemented</p>
                            <ol>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>                                
                            </ol>
                            <br />
                            <p>All the photo is researched from internet</p>
                        </div>                
                    </article>
                </div>
            </div>
            
        </section>
    </>
  )
}

export default HeroAbout