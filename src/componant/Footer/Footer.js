import React from "react";
import "./Footer.css"
import logo from "../img/logoNotBG.png"
import youtube from "../img/youtube.png"
import facebook from "../img/facebook.png"
import linkedin from "../img/linkedin.png"
import instagram from "../img/instagram.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAnglesLeft} from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons'

const Footer = ()=>{
    return(
        <div class="footer" id="footer">
        <div class="container">
            <div class="content">
            <div className="colum_one">
                    <div>
                        <FontAwesomeIcon icon={faLocationDot} className="iconFooter"/>
                        <p>مصر، الجيزة، داخل أبو الهول - غرفة رقم 220</p>
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faClock} className="iconFooter"/>
                        <p>Business Hour:From 10:00 To 18:00</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhoneVolume} className="iconFooter"/>            
                        <div>
                            <p>+20123456789</p>
                            <p>+20198765432</p>
                        </div>
                    </div>
                    <div class="social">
                        <a href="https://www.facebook.com"><img src={facebook} alt=""/></a>
                        <a href="https://youtube.com"><img src={youtube} alt=""/></a>
                        <a href="https://instagram.com"><img src={instagram} alt=""/></a>
                        <a href="https://linkedin.com"><img src={linkedin} alt=""/></a>

                    </div>
                </div>
                <div className="class">
                    <ul>
                        <li><a href="/"><span>الصفحه الرئيسيه</span> <FontAwesomeIcon icon={faAnglesLeft} className="arrow"/></a></li>
                        <li><a href="/"><span>نبذه عن الاكادميه </span> <FontAwesomeIcon icon={faAnglesLeft} className="arrow"/></a></li>
                        <li><a href="/"><span>خدماتنا</span><FontAwesomeIcon icon={faAnglesLeft} className="arrow"/> </a></li>
                        <li><a href="/"><span>التسجيل في الاكادميه </span> <FontAwesomeIcon icon={faAnglesLeft} className="arrow"/> </a></li>
                        <li><a href="/"><span>قيمنا</span> <FontAwesomeIcon icon={faAnglesLeft} className="arrow"/></a></li>
                    </ul>
                </div>
                <div class="class">
                    <img className="logo" src={logo} alt=""/>
                    <p>انضم إلى مجتمعنا المتحمس من المحفظين والمتعلمين الملتزمين بتحفيظ القرآن في أكاديمية ترص للقرآن، ستجد الدعم والتشجيع اللازمين لتحقيق تقدم ملحوظ في حفظك للقرآن</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;
