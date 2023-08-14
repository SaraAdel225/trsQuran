import React from "react";
import "./Goal.css"
import loader from "../img/Loader Animation.gif"
import goal from "../img/goal.gif"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPeopleRobbery} from '@fortawesome/free-solid-svg-icons'
import {faHandshake } from '@fortawesome/free-solid-svg-icons'
import {faPeopleGroup} from '@fortawesome/free-solid-svg-icons'
import {faPersonPraying} from '@fortawesome/free-solid-svg-icons'
import {faHandHoldingDollar} from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import {motion} from "framer-motion"

const contAccordion =[
    {
        icon: <FontAwesomeIcon icon={faHandshake} />,
        heading:"العمل",
        detail:  "العمل بالقرآن غايتنا لنكون على عقيدة نقية على خطى خير البرية ﷺ نعمر بالقرآن أوطاننا ونسعد به مجتمعاتنا",
    },
    {
        icon: <FontAwesomeIcon icon= {faPersonPraying} />,
        heading: "الدعاء",
        detail:
            "سر نجاح وتميز المؤمن",
    },
    {
        icon: <FontAwesomeIcon icon={faPeopleRobbery} />,
        heading: "التحفيز",
        detail:
            ". نؤمن بأن التحفيز وقود الإنجاز فكلما زاد التحفيز؛ زاد الإنجاز بإذن الله تعالى ",
    },
    {
        icon: <FontAwesomeIcon icon={faPeopleGroup} />,
        heading: "التعاون",
        detail:
            "به تحقق النجاحات وتكون الإنجازات",
    },
    {
        icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
        heading: "العطاء والاحسان",
        detail:
            "ثمرة من ثمرات صحبة القرآن وأجمله وأسهله الكلمة الطيبة",
    },
]

const Goal = ()=> {
    return(
        <div className = "goal">
            <div className="shapedividers_com-749"></div>
            <div className="title" id="goal">
                <motion.h2
                initial={{x:"-2rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                className="word"
                >
                    قيمنا
                </motion.h2>
                <motion.img
                initial={{x:"2rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}}
                src={loader}
                className="bookImg"
            />
            </div>
            <div className="container flexBetween">
                <motion.img 
                initial={{x:"-8rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}} 
                className="goalImg"
                src={goal} alt=""/>
                <motion.div 
                initial={{x:"8rem" ,opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:2, type:"spring"}} 
                className="Content">
                    <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
                        {
                            contAccordion.map((data,i)=>{
                                return(
                                    <AccordionItem key={i} uuid={i} className= {`accordionItem`}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="accordionButton">
                                                <div className="icon">{data.icon}</div>
                                                    <h4>{data.heading}</h4>
                                                    <div className="icon">
                                                    <FontAwesomeIcon  icon={faCaretDown} />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="accordionItemPanel">
                                            <p className="parg">{data.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                    <div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Goal