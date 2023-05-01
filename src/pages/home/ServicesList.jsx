import React from "react";
import ServiveCard from "../components/service_card/ServiceCard";
import './services-list.css'

function ServivesList () {
    return (
        <>
            <div className="services_list">
                <ServiveCard className="service_card"/>
                <ServiveCard className="service_card"/>
            </div>
        </>
    );
}

export default ServivesList;