import React, { useState } from "react"
import logo from "../img/logo.png"
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import OutsideclickHandler from "react-outside-click-handler"

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const getMenuStyle = (menuOpened) =>{
        if(document.documentElement.clientWidth <= 980){
            return {right: !menuOpened && "-100%"}
        }
    }
    return(
        <div className="header flexBetween">
            <div className = "container">
                <img src={logo} alt="" />
                <OutsideclickHandler
                onOutsideClick={()=>{
                    setMenuOpened(false)
                }}>
                <ul className="HeaderList flexBetween"  style={getMenuStyle(menuOpened)} dir="rtl">
                    <li><a href="#home">الصفحه الرئيسيه</a></li>
                    <li><a href="#about">نبذه عن الاكادميه</a></li>
                    <li><a href="#service">خدماتنا</a></li>
                    <li><a href="#loginPage">التسجيل في الاكادميه</a></li>
                    <li><a href="#goal">قيمنا</a></li>
                    <li><a href="#footer">تواصل معنا</a></li>
                </ul>
                </OutsideclickHandler>
                <div className="list" onClick = {()=> setMenuOpened((prev) => !prev)}>
                <FontAwesomeIcon icon={faListCheck} />
                </div>
            </div> 
        </div>
    )
}
export default Header;