import React from 'react'

import switzerlandMap from "../images/switzerland/switzerland_map.jpg";
import switzerlandFlag from "../images/switzerland/switzerland_flag.jpg";

import switzerlandImg1 from "../images/switzerland/switzerland_img1.jpg";
import switzerlandImg2 from "../images/switzerland/switzerland_img2.jpg";
import switzerlandImg4 from "../images/switzerland/switzerland_img4.jpg";

import NavCountry from './NavCountry';
import FooterCountry from './FooterCountry';

function Switzerland() {
  return (
    <>
    <NavCountry />
    {/* <!-- Main Content -->             */}
        <section class="section-switzerland" id="tours">
            <div class="section-title">
                <div class="section-switzerland-title-1">
                    <h3>Switzerland</h3>
                    <img src={switzerlandMap} alt="Switzerland_map" />
                </div>
                <div class="section-switzerland-title-2">
                    <img src={switzerlandFlag} alt="Switzerland_country" />
                </div>
            </div>

            <div class="section-info">
                <div class="section-content">
                    <img src={switzerlandImg1} alt="switzerland_img1" class="switzerland-img1" />
    
                    <article class="tour-card">
                        <div class="tour-info">
                            <h4>Chapel Bridge</h4>
                            <p>Along the way, snap top attractions including the medieval Chapel Bridge and the 14th century Museggmauer city walls.</p>
                        </div>                
                        <div class="tour-footer">
                            <ul class="tour-footer-info">
                                <li><i class="fa-solid fa-map"></i> Switzerland</li>
                                <li>1 hour 30 mins</li>
                                <li>CHF $100</li>
                            </ul>
                        </div>
                    </article>
                </div>

                <div class="section-content">
                    <img src={switzerlandImg2} alt="switzerland_img2" class="switzerland-img2"/>

                    <article class="tour-card">
                        <div class="tour-info">
                            <h4>Jungfraujoch: The Top of Europe</h4>
                            <p>Enjoy an unforgettable journey through the Alps at the foot of the majestic Jungfrau. Ascend 3454-meters on board a train and behold panoramic views from the top of the highest glacier in Europe.</p>
                        </div>                
                        <div class="tour-footer">
                            <ul class="tour-footer-info">
                                <li><i class="fa-solid fa-map"></i> Switzerland</li>
                                <li>11 hours</li>
                                <li>CHF 250</li>
                            </ul>
                        </div>
                    </article>
                </div>

                <div class="section-content">
                    <img src={switzerlandImg4} alt="switzerland_img4" class="switzerland-img4" />

                    <article class="tour-card">
                        <div class="tour-info">
                            <h4>Switzerland – from north to south, between Rhine and Adda</h4>
                            <ol>
                                <li>Panoramic train ride on the Bernina Express</li>
                                <li>The steepest funicular railway in Europe</li>
                                <li>The largest waterfall in Europe</li>
                                <li>The highest suspension bridge in Europe</li>
                                <li>The most beautiful mountain in Switzerland – Matterhorn</li>
                                <li>Alpine cheese factory visit</li>
                                <li>Ride along Alpine serpentines</li>
                                <li>Small and friendly groups</li>
                            </ol>
                        </div>                
                        <div class="tour-footer">
                            <ul class="tour-footer-info">
                                <li><i class="fa-solid fa-map"></i> Switzerland</li>
                                <li>8 days / 7 nights</li>
                                <li>CHF 2350</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    <FooterCountry />
    </> 
  )
}

export default Switzerland