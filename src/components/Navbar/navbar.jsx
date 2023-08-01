import React from "react";
import "./navbar.scss";
import home from "./home.png";
import team from "./team.png";
import contacts from "./contacts.png";
import money from "./money.png";
import person from "./icons8-person-24.png";
import calendar from "./icons8-calendar-24.png";
import question from "./icons8-question-50.png";
import bar from "./icons8-bar-chart-50.png";
import pie from "./icons8-pie-chart-24.png";
import line from "./icons8-line-chart-24.png";
import geo from "./icons8-geography-50.png";



const NavBar = () => {
    return (
        <div className="navbar">

            <h1 className="sissoko">Sissoko</h1>

            <div className="user">
                <img className="userimg" src="https://advance-dash.netlify.app/assets/user.png" alt="foto user"/>
                <h2 className="username">Bruno Cafaro</h2>
                <h3 className="userlevel">Admin</h3>
            </div>

            <div className="navbarelements">
                <div className="elementsflex">
                    <img width="20" height="20" src={home} alt="foto home"/>
                    <span>
                        <p>Dashboard</p>
                        <a href="/"></a>
                    </span>
                </div>

                <p className="gruponame">Data</p>
                <div className="elementsflex">
                    <img width="20" height="20" src={team} alt="foto team"/>
                    <span>
                        <p>Manage Team</p>
                        <a href=""></a>
                    </span>
                </div>
                <div className="elementsflex">
                    <img width="20" height="20" src={contacts} alt="foto contacts"/>
                    <span>
                        <p>Contacts Information</p>
                        <a href=""></a>
                    </span>
                </div>
                <div className="elementsflex">
                    <img width="20" height="20" src={money} alt="foto money"/>
                    <span>
                        <p>Invoices Balances</p>
                        <a href=""></a>
                    </span>
                </div>


                <p className="gruponame">Pages</p>
                
                <div className="elementsflex">
                    <img width="20" height="20" src={person} alt="foto person"/>
                    <span>
                        <p>Manage Team</p>
                        <a href=""></a>
                    </span>
                </div>
                <div className="elementsflex">
                    <img width="20" height="20" src={calendar} alt="foto calendar"/>
                    <span>
                        <p>Contacts Information</p>
                        <a href=""></a>
                    </span>
                </div>
                <div className="elementsflex">
                    <img width="20" height="20" src={question} alt="foto question"/>
                    <span>
                        <p>Invoices Balances</p>
                        <a href=""></a>
                    </span>
                </div>


                <p className="gruponame">Charts</p>
                
                <div className="elementsflex">
                    <img width="20" height="20" src={bar} alt="foto bar"/>
                    <span>
                        <p>Bar Chart</p>
                        <a href=""></a>
                    </span>
                </div>
                <div className="elementsflex">
                    <img width="20" height="20" src={pie} alt="foto pie"/>
                    <span>
                        <p>Pie Chart</p>
                        <a href=""></a>
                    </span>
                </div>
                <div className="elementsflex">
                    <img width="20" height="20" src={line} alt="foto line"/>
                    <span>
                        <p>Line Chart</p>
                        <a href=""></a>
                    </span>
                </div>
                <div className="elementsflex">
                    <img width="20" height="20" src={geo} alt="foto geo"/>
                    <span>
                        <p>Geography Chart</p>
                        <a href=""></a>
                    </span>
                </div>


            </div>
        </div>
    )
    }
export default NavBar;
