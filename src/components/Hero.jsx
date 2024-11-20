import React from 'react'

import thailandFlag from "../images/country/thailandFlag.png";
import switzerlandFlag from "../images/country/switzerlandFlag.webp";
import japanFlag from "../images/country/japanFlag.png";
import koreaFlag from "../images/country/koreaFlag.webp";

function Hero() {

  return (
        <>
        {/* <!-- container --> */}
        <div className="container">
            {/* <!-- hero slide --> */}
            <div className="slide">
                <div className="item" style={{backgroundImage: 'url(../images/location/thailand.jpg)'}}>
                    <div className="content">
                        <div className="name">Thailand</div>
                        <img src={thailandFlag} alt="logo" className="logo-link" /> 
                        <div className="des">Located wholly within the tropics, Thailand encompasses diverse ecosystems, including the hilly
                                         forested areas of the northern frontier, the fertile rice fields of the central plains, the 
                                         broad plateau of the northeast, and the rugged coasts along the narrow southern peninsula.</div>
                        <button><a href="./content/thailand.html">Explore</a></button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: 'url(../src/component/japan.jpg)' }}>
              
                    <div className="content">
                        <div className="name">Switzerland</div>
                        <img src={switzerlandFlag} alt="logo" className="logo-link" /> 
                        <div className="des">Switzerland lies at the heart of Europe. It has three distinct geographical regions: the Alps,
                                         the Central Plateau and the Jura. The country boasts an extraordinary variety of landscapes and
                                         habitats, which make it a highly attractive place to live in and do business.</div>
                        <button><a href="./content/switzerland.html">Explore</a></button>
                    </div>
                </div>
                {/* <div className="item" style={{'background-image': 'url(./images/location/japan1.jpg)'}}> */}
                <div className="item" >
                    <div className="content">
                        <div className="name">Japan</div>
                        <img src={japanFlag} alt="logo" className="logo-link" /> 
                        <div className="des">Mount Fuji is the tallest mountain in Japan and is known for its graceful conical form</div>
                        <button><a href="./content/japan.html">Explore</a></button>
                    </div>
                </div>
                {/* <div className="item" style={{'background-image': 'url(./images/location/korea1.jpg)'}}> */}
                 <div className="item" >
                    <div className="content">
                        <div className="name">Korea</div>
                        <img src={koreaFlag} alt="logo" className="logo-link" /> 
                        <div className="des">Korea is a 750-mile-long (1,200-kilometer-long) peninsula located in the easternmost part of the
                                         Asian continent. Today, the country is split into South and North Korea, but in the minds of most
                                         of its citizens, it remains a single nation that cannot be divided.</div>
                        <button><a href="./content/korea.html">Explore</a></button>
                    </div>
                </div>

                {/* <!-- <div className="item" style="background-image: url(./images/location/japan2.jpg);">
                    <div className="content">
                        <div className="name">Japan<br /> (night)</div>
                        <br />
                        <img src="./images/country/japanFlag.png" alt="logo" className="logo-link">
                        <div className="des">Japan is a mountainous country, with two-thirds of its territory covered with forests. Most areas have a temperate climate with four distinct seasons, although Okinawa in the south is subtropical, and Hokkaido in the north is subarctic. Therefore Japan has great diversity of plant and animal life.</div>
                        <button><a href="./content/japan.html">Explore</a></button>
                    </div>
                </div> --> */}

                {/* <!-- <div className="item"style="background-image: url(./images/location/korea.jpg);">
                    <div className="content">
                        <div className="name">Korea<br />(night)</div>
                        <br />
                        <img src="./images/country/koreaFlag.webp" alt="logo" className="logo-link">
                        <div className="des">Korea is a 750-mile-long (1,200-kilometer-long) peninsula located in the easternmost part of the
                                         Asian continent. Today, the country is split into South and North Korea, but in the minds of most
                                         of its citizens, it remains a single nation that cannot be divided.</div>
                        <button><a href="./content/korea.html">Explore</a></button>
                    </div>
                </div> --> */}
                
            </div>

            {/* <!-- Control button --> */}
            <div className="button">
                <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>
                <button className="next"><i className="fa-solid fa-arrow-right"></i></button>
            </div>

        </div>
    </>
  );
}

export default Hero