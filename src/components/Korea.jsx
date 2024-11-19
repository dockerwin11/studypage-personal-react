import React from 'react'

import koreaMap from "../images/korea/korea_map.jpg";
import koreaFlag from "../images/korea/korea_flag.jpg";

import koreaImg4 from "../images/korea/korea_img4.jpg";
import koreaImg5 from "../images/korea/korea_img5.webp";
import koreaImg6 from "../images/korea/korea_img6.png";

import NavCountry from './NavCountry';
import FooterCountry from './FooterCountry';

function Korea() {
  return (
    <>
    <NavCountry />
    {/* <!-- Main Content -->             */}
        <section class="section-korea" id="tours">
            <div class="section-title">
                <div class="section-korea-title-1">
                    <h3>Korea</h3>
                    <img src={koreaMap} alt="Korea_map" />
                </div>
                <div class="section-korea-title-2">
                    <img src={koreaFlag} alt="Korea_country" />
                </div>
            </div>
        
            <div class="section-info">
                <div class="section-content">
                    <img src={koreaImg6} alt="Korea_img6" class="korea-img6" />
    
                    <article class="tour-card">
                        <div class="tour-info tour-info-korea">
                            <h4>Seoul Han River Premier Yacht in Yeouido</h4>
                            <ol>
                                <li>Experience luxury yachting at Yeouido Park, central waterfront destination</li>
                                <li>Sail past Seoul's iconic bridges for breathtaking cityscape views at Han river</li>
                                <li>Capture Han River's landmarks with a Polaroid photo service and fireworks</li>
                            </ol>
                        </div>                
                        <div class="tour-footer">
                            <ul class="tour-footer-info">
                                <li><i class="fa-solid fa-map"></i> Korea</li>
                                <li>Daily trip</li>
                                <li>₩35,100</li>
                            </ul>
                        </div>
                    </article>
                </div>

                <div class="section-content">
                    <img src={koreaImg5} alt="Korea_img5" class="korea-img5" />
                    <article class="tour-card">
                        <div class="tour-info">
                            <h4>Coex Aquarium 코엑스 아쿠아리움</h4>
                            <p>You can explore 14 unique marine habitats in the largest aquarium in Korea! A great opportunity to meet and learn about  hundreds of different fish species. Located in Samseong Station, you can visit COEX Shopping Mall, and other shops nearby after the visit.</p>
                        </div>                
                        <div class="tour-footer">
                            <ul class="tour-footer-info">
                                <li><i class="fa-solid fa-map"></i> Korea</li>
                                <li>Daily Admission Pass</li>
                                <li>General Ticket - Adult (age 13+):  ₩28,000</li>
                                <li>General Ticket - Child (age 3-13): ₩25,000</li>
                            </ul>
                        </div>
                    </article>
                </div>

                <div class="section-content">
                    <img src={koreaImg4} alt="Korea_img4" class="korea-img4" />
                    <article class="tour-card">
                        <div class="tour-info">
                            <h4>Seoul Sky @ Lotte World Tower 서울스카이</h4>
                            <p>Seoul Sky is Korea's highest observatory located on 117-123F of Korea's Tallest Building (& World's 5th), Lotte World Tower.</p>
                        </div>                
                        <div class="tour-footer">
                            <ul class="tour-footer-info">
                                <li><i class="fa-solid fa-map"></i> Korea</li>
                                <li>Daily Admission Pass</li>
                                <li>General Ticket - Adult (age 13+):  ₩31,000</li>
                                <li>General Ticket - Child (age 3-13): ₩27,000</li>
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

export default Korea