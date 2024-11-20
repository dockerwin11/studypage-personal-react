import React from 'react'

import thailandMap from "../images/thailand/thailand_map.jpg";
import thailandFlag from "../images/thailand/thailand_flag.jpg";

import thailandImg1 from "../images/thailand/thailand_img1.jpg";
import thailandImg2 from "../images/thailand/thailand_img2.jpg";
import thailandImg3 from "../images/thailand/thailand_img3.jpg";

import NavCountry from './NavCountry';
import FooterCountry from './FooterCountry';

function Thailand() {
  return (
    <>
    <NavCountry />
    {/* <!-- Main Content -->             */}
        <section class="section-thailand" id="tours">
            <div class="section-title">
                <div class="section-thailand-title-1">
                    <h3>Thailand</h3>
                    <img src={thailandMap} alt="thailand_map" />
                </div>
                <div class="section-thailand-title-2">
                    <img src={thailandFlag} alt="thailand_country" />
                </div>
            </div>

            <div class="section-info">
                <div class="section-content">
                    <img src={thailandImg1} alt="thailand_img1" class="thailand-img1" />
    
                    <article class="tour-card">
                        <div class="tour-info">
                            <h4>Pǔ jídǎo (Phuket)</h4>
                            <p>Phuket is located in the south of Thailand. It is the largest island in Thailand and a very popular affordable island travel option in Southeast Asia. Phuket is famous for its charming beaches, unique stalactite caves, small islands and other natural landscapes, both for water sports and nightlife. It is very suitable for either a trip or a family trip.</p>
                        </div>                
                        <div class="tour-footer">
                            <ul class="tour-footer-info">
                                <li><i class="fa-solid fa-map"></i> Thailand</li>
                                <li>3 day 2 night</li>
                                <li>from HKD $3540</li>
                            </ul>
                        </div>
                    </article>
                </div>
                <div class="section-content">
                    <img src={thailandImg2} alt="thailand_img2" class="thailand-img2" />
                    <article class="tour-card">
                        <div class="tour-info">
                            <h4>Chiang Mai</h4>
                            <p>There are many interesting attractions in Chiang Mai, including Doi Sui Temple, Chiang Mai University, Chiang Mai Ancient Town, Nimman Road, etc. are all must-see attractions in Chiang Mai. In addition, Chiang Mai is surrounded by mountains, including Doi Inthanon in the mountainous suburbs. The national park is also a beautiful place that cannot be missed. If you like outdoor activities, Chiang Mai also has jungle zip lines, off-road vehicles, rafting and other activities, which can help you understand the natural landscapes such as northern Thailand's rainforests, terraces, and jungles from different angles.</p>
                        </div>                
                        <div class="tour-footer">
                            <ul class="tour-footer-info">
                                <li><i class="fa-solid fa-map"></i> Thailand</li>
                                <li>3 day 2 night</li>
                                <li>from HKD $3540</li>
                            </ul>
                        </div>
                    </article>
                </div>
                <div class="section-content">
                    <img src={thailandImg3} alt="thailand_img3" class="thailand-img3" />
                    <article class="tour-card">
                        <div class="tour-info">
                            <h4>Thailand Spa</h4>
                            <p>Bangkok is really a city suitable for independent travel. Prices are cheap, and the design-style hotels are affordable and beautiful. There are Thai food, as well as many Japanese, Italian, and French food. The highlight is that even Michelin-starred restaurants are cheap and delicious. Also, activity like visit Buddhist temples, floating markets, experience spa massages, shopping in Taobao markets and enjoying Bangkok food are recommended to include on the trip.</p>
                        </div>                
                        <div class="tour-footer">
                            <ul class="tour-footer-info">
                                <li><i class="fa-solid fa-map"></i> Thailand</li>
                                <li>6 days</li>
                                <li>from HKD $3000</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
            
        </section>
    <FooterCountry />
    </> 
  );
}

export default Thailand