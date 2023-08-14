import React from "react";
import "./HomeP.css"
import heroImg from "../img/Mosque Illustration.png"
import {motion} from "framer-motion"


const  Home = () =>{
    return(
        <div className="home" id="home">
            <div className="container">
            <div className="content">
                <motion.h1
                initial={{y:"2rem" ,opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                >اهلا بك في<br/>اكادميه ترص القران
                <p class="prag">يهدف الموقع إلى توفير وسيلة مريحة وفعالة للمساعدة في تحفيظ القرآن وتلاوته بطريقة صحيحة ومتقنة يوفر موقع ترص القران مجموعة من الميزات والأدوات التي تساعد المستخدمين على تحقيق تحفيظهم الشخصي للقرآن</p>
                </motion.h1>
            </div>
            <motion.div
                initial={{x:"8rem" ,opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}} 
                className="mainImg">
                    <img src={heroImg} alt=""/>
            </motion.div>
            </div>
        </div>
    )

}

export default Home;