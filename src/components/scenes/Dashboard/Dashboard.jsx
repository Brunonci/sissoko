import React from "react";
import VisibilitySensor from "react-visibility-sensor";

import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


import "./Dashboard.scss";


import email from "./icons8-email-48.png";
import salesicon from "./icons8-sales-50.png";
import clientesicon from "./icons8-add-male-user-64.png";
import trafficicon from "./icons8-traffic-48.png";



const Dashboard = () => {

    const percentageEmails = 50;
    const percentageSales = 25;
    const percentageClients = 75;
    const percentageTraffic = 10;

    return (
        <div className="dashboard">
            <div className="dashboardtitulo">
                <h1 className="titulo">Dashboard</h1>
                <p className="frase">Welcome to your dashboard</p>
            </div>
            <div className="dashboardmenu">
                <div className="box emails">
                    <div className="parent1">
                        <div className="parentizq">
                            <img src={email} alt="icon email" width="28" height="28" />
                            <h4>12,361</h4>
                            <h5>Emails Sent</h5>
                        </div>
                        <div className="parentdec" style={{ width: 100, height: 100 }}>

                                <VisibilitySensor>
                                    {({  }) => {
                                    return (
                                        <CircularProgressbar
                                        value={percentageEmails}
                                        text={`${percentageEmails}%`}
                                        styles={buildStyles({
                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'round',
                                        textSize: '18px',
                                        // How long animation takes to go from one percentage to another, in seconds
                                        pathTransitionDuration: 1,
                                        // Colors
                                        pathColor: `rgba(76, 206, 172)`,
                                        textColor: 'rgb(224, 224, 224)',
                                        trailColor: '#d6d6d6',
                                        })}
                                        />
                                    );
                                    }}
                                </VisibilitySensor>

                        </div>
                    </div>
                    
                </div>

                <div className="box sales ">
                    <div className="parent1">
                        <div className="parentizq">
                            <img src={salesicon} alt="icon salesicon" width="28" height="28"/>
                            <h4>431,225</h4>
                            <h5>Sales Obtained</h5>
                        </div>
                        <div className="parentdec" style={{ width: 100, height: 100 }} >

                        <VisibilitySensor>
                                    {({  }) => {
                                    return (
                                        <CircularProgressbar
                                        value={percentageSales}
                                        text={`${percentageSales}%`}
                                        styles={buildStyles({
                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'round',
                                        textSize: '18px',
                                        // How long animation takes to go from one percentage to another, in seconds
                                        pathTransitionDuration: 1,
                                        // Colors
                                        pathColor: `rgba(76, 206, 172)`,
                                        textColor: 'rgb(224, 224, 224)',
                                        trailColor: '#d6d6d6',
                                        })}
                                        />
                                );
                            }}
                        </VisibilitySensor>
                        </div>
                    </div>
                    
                </div>

                <div className="box clients">
                    <div className="parent1">
                        <div className="parentizq">
                            <img src={clientesicon} alt="icon clientesicon" width="28" height="28"/>
                            <h4>32,441</h4>
                            <h5>New Clients</h5>
                        </div>
                        <div className="parentdec" style={{ width: 100, height: 100 }}>
                            <VisibilitySensor>
                                {({  }) => {
                                    return (
                                        <CircularProgressbar
                                        value={percentageClients}
                                        text={`${percentageClients}%`}
                                        styles={buildStyles({
                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'round',
                                        textSize: '18px',
                                        // How long animation takes to go from one percentage to another, in seconds
                                        pathTransitionDuration: 1,
                                        // Colors
                                        pathColor: `rgba(76, 206, 172)`,
                                        textColor: 'rgb(224, 224, 224)',
                                        trailColor: '#d6d6d6',
                                        })}
                                        />
                                    );
                                }}
                            </VisibilitySensor>
                        </div>
                    </div>
                    
                </div>

                <div className="box traffic">
                    <div className="parent1">
                        <div className="parentizq">
                            <img src={trafficicon} alt="icon trafficicon" width="28" height="28"/>
                            <h4>1,325,134</h4>
                            <h5>Traffic Received</h5>
                        </div>
                        <div className="parentdec" style={{ width: 100, height: 100 }}>
                            <VisibilitySensor>
                                {({  }) => {
                                    return (
                                        <CircularProgressbar
                                        value={percentageTraffic}
                                        text={`${percentageTraffic}%`}
                                        styles={buildStyles({
                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'round',
                                        textSize: '18px',
                                        // How long animation takes to go from one percentage to another, in seconds
                                        pathTransitionDuration: 1,
                                        // Colors
                                        pathColor: `rgba(76, 206, 172)`,
                                        textColor: 'rgb(224, 224, 224)',
                                        trailColor: '#d6d6d6',
                                        })}
                                        />
                                    );
                                }}
                            </VisibilitySensor>
                        </div>
                    </div>
                    
                </div>

                <div className="box revenue ">1</div>
                <div className="box transactions">1</div>

                <div className="box campaign">1</div>
                <div className="box salescant">1</div>
                <div className="box geo">1</div>


            </div>
        </div>
    )
}
export default Dashboard;
