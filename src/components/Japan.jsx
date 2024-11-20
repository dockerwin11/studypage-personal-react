import React from 'react'

import japanMap from "../images/japan/japan_map.jpg";
import japanFlag from "../images/japan/japan_flag1.jpg";

import japanImg1 from "../images/japan/japan_img1.jpg";
import japanImg2 from "../images/japan/japan_img2.jpg";
import japanImg3 from "../images/japan/japan_img3.jpg";

import NavCountry from './NavCountry';
import FooterCountry from './FooterCountry';

function Japan() {
  return (
    <>
    <NavCountry />
      {/* <!-- Main Content -->             */}
        <section className="section-japan" id="tours">
            <div className="section-title">
                <div className="section-japan-title-1">
                    <h2>Japan</h2>
                    <img src={japanMap} alt="Japan_map" />
                </div>
                <div className="section-japan-title-2">
                    <img src={japanFlag} alt="Japan_country" />
                </div>
            </div>
        
            {/* <!-- <img src="../images/japan/japan_banner.jpg" alt="Japan_banner" className="japan_banner"> --> */}
        
            <div className="section-info">
                <div className="section-content">
                    <img src={japanImg1} alt="Japan_img1" className="japan-img1" />
    
                    <article className="tour-card">
                        <div className="tour-info">
                            <h4>Dotombori 道頓堀</h4>
                            <p>Located at the southern end of Shinsaibashi, Dotonbori is a well-known and bustling business district, famous for its neighboring theaters, commercial and entertainment venues, and as the birthplace of Osaka cuisine. Japanese people often say "eat in Osaka", which shows that there are many restaurants here.</p>
                        </div>                
                        <div className="tour-footer">
                            <ul className="tour-footer-info">
                                <li><i className="fa-solid fa-map"></i> Japan</li>
                                <li>2 days</li>
                                <li>from HKD $2500</li>
                            </ul>
                        </div>
                    </article>
                </div>
                <div className="section-content">
                    <img src={japanImg2} alt="Japan_img2" className="japan-img2" />
                    <article className="tour-card">
                        <div className="tour-info">
                            <h4>Shinsaibashisuji 心斎橋</h4>
                            <p>Shinsaibashi is a famous downtown area in Osaka. It refers to the area around Shinsaibashisuji. There are boutiques, specialty shops, department stores, and more. There are also famous brands, so it's perfect for shopping. You can also find international cuisine here, as well as Osaka specialties such as okonomiyaki, kushiage, and takoyaki.</p>
                        </div>                
                        <div className="tour-footer">
                            <ul className="tour-footer-info">
                                <li><i className="fa-solid fa-map"></i> Japan</li>
                                <li>2 days</li>
                                <li>from HKD $2500</li>
                            </ul>
                        </div>
                    </article>
                </div>
                <div className="section-content">
                    <img src={japanImg3} alt="Japan_img3" className="japan-img3" />
                    <article className="tour-card">                       
                        <div className="tour-info">
                            <h4>Mount Fuji 富士山</h4>
                            <p>Standing at 3,776 meters, Mt. Fuji  is the tallest peak in Japan, the result of volcanic activity that began approximately 100,000 years ago. Today, Mt. Fuji and the surrounding area are a popular recreational destination for hiking, camping and relaxation.</p>
                        </div>                
                        <div className="tour-footer">
                            <ul className="tour-footer-info">
                                <li><i className="fa-solid fa-map"></i> Japan</li>
                                <li>2.5 hours bus trip</li>
                                <li>HKD $200</li>
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

export default Japan