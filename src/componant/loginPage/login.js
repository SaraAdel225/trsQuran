import React from "react";
import "./login.css"
import { motion } from "framer-motion";
import loader from "../img/join.gif"
import man from  "../img/man.jfif"
import woman from  "../img/woman.jfif"

const Login = ()=>{
    return(
        <div className="login" id="loginPage">
            <div className="title">
                <motion.h2
                initial={{x:"-2rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                className="word"
                >
                    التسجيل في الاكادميه
                </motion.h2>
                <motion.img
                initial={{x:"2rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                src={loader}
                className="bookImg"
            />
            </div>
            <div className="loginCont container">
                <motion.div
                initial={{y:"5rem" ,opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                className="branch woman"
                >
                    <a href="/">
                        <img src= {woman} alt=""/>
                        <h3>للنساء</h3>
                    </a>
                </motion.div>
                <motion.div
                initial={{y:"5rem" ,opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                className="branch man"
                >
                    <a href="/">
                        <img src= {man} alt=""/>
                        <h3>للرجال</h3>
                    </a>
                </motion.div>
            </div>
        </div>
    )
}
export default Login