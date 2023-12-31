import React from "react";

import "./adminPanel.scss";
import NavBar from "../../components/Navbar/navbar";
import Dashboard from "../../components/scenes/Dashboard/Dashboard"; 
import TopBar from "../../components/TopBar/topbar"; 

const adminPanel = () => {

    return (
        <div className="adminpanel">
            <NavBar className="navbar"></NavBar>
            <div className="parent">
                <TopBar className="topbar"></TopBar>
                <Dashboard className="dashboard"></Dashboard>
            </div>
        </div>

    )
    }
export default adminPanel;
