import React from "react";
import "./topbar.scss";
import luna from "./icons8-moon-30.png";
import notificacion from "./icons8-notification-24.png";
import config from "./icons8-setting-50.png";
import perfil from "./icons8-person-24.png";



const TopBar = () => {

    return (
        <div className="topbar">
            <div className="topbarpadre">
                <button><img width="20" height="20" src={luna} alt="foto luna"/></button>
                <button><img width="20" height="20" src={notificacion} alt="foto notificacion"/></button>
                <button><img width="20" height="20" src={config} alt="foto config"/></button>
                <button><img width="20" height="20" src={perfil} alt="foto perfil"/></button>
            </div>
            

        </div>
    )
    }
export default TopBar;
