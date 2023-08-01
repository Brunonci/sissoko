import React from "react";

import "./adminPanel.scss";
import NavBar from "../../components/Navbar/navbar";
import Dashboard from "../../components/Dashboard/Dashboard"; 

const adminPanel = () => {

    return (
        <div className="adminpanel">
            <NavBar></NavBar>
            <Dashboard></Dashboard>
        </div>

    )
    }
export default adminPanel;
