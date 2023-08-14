import * as React from "react";
import "./About.css";
import { motion } from "framer-motion";
import book from "../img/Gif Studies.gif";
import aboutImg from "../img/ReadingQuran.jfif"

const About = () => {
return (
    <div class="about" id="about">
        <div className="title">
            <motion.h2
            initial={{x:"-2rem" ,opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            className="word"
            >
                نبذة عن الاكاديميه
            </motion.h2>
            <motion.img
            initial={{x:"2rem" ,opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            src={book}
            className="bookImg"
            />
        </div>
        <div className = "container">
            <motion.img className="aboutImg" 
            initial={{y:"-5rem" ,opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            src={aboutImg} alt=""/>
            <div class="read">
            <motion.h4
            initial={{y:"5rem" ,opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:2, type:"spring"}}
            > عد تحفيظ القرآن من أهم الأهداف التي يسعى إليها الكثيرون في جميع أنحاء العالم المسلم. تعتبر اكادميه ترص القران واجهة إلكترونية متميزة لدعم وتسهيل عملية تحفيظ القرآن الكريم
                    . يقدم الموقع العديد من الميزات والخدمات التي تساعد الأفراد على تحقيق أهدافهم في تحفيظ القرآن وتعلمه بطريقة سهلة وميسرة
                    . كما يتيح الموقع للمستخدمين الفرصة للتفاعل المباشر مع محفظ متخصص والاستفادة من خبرته ومهاراته في تحفيظ القرآن
                    . نشجعك بشدة على الاستفادة من موقعنا لتحفيظ القرآن الكريم والتواصل مع المحفظ المتخصص.
            </motion.h4>
            </div>
        </div>
    </div>
);
};

export default About;