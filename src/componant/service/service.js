import React from "react";
import "./service.css"
import { motion } from "framer-motion";
import service from "../img/services.jpg"
import definition from "../img/definition.png"
import elearning from "../img/elearning.png"
import save from "../img/save.png"
import question from "../img/question-and-answer.png"
const Service = ()=>{
    return(
        <div className="service">
            <div className="shapedividers_com-749"></div>
            <div className="sercContent" id ="service">
            <div className="title">
            <motion.h2
            initial={{x:"-2rem" ,opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            className="word"
            >
                خدماتنا
            </motion.h2>
            <motion.img
            initial={{x:"2rem" ,opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            src={service}
            className="bookImg"
            />
        </div>
            </div>
            <div className="serviceCont container">
                <motion.div
                initial={{y:"-5rem" ,opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                className="branch"
                >
                    <img src= {elearning} alt=""/>
                    <h3>الدورات والبرامج</h3>
                </motion.div>
                <motion.div
                initial={{y:"-5rem" ,opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                className="branch"
                >
                    <img src= {question} alt=""/>
                    <h3>سؤال و جواب</h3>
                </motion.div>
                <motion.div
                initial={{y:"-5rem" ,opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                className="branch"
                >
                    <img src= {save} alt=""/>
                    <h3>خطط الحفظ والتلاوة</h3>
                </motion.div>
                <motion.div
                initial={{y:"-5rem" ,opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                className="branch"
                >
                    <img src= {definition} alt=""/>
                    <h3>التعريف بالاكادميه</h3>
                </motion.div>
            </div>
        </div>
    )
}

export default Service;
