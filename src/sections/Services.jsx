import React from "react";
import { services } from "../constants";
import {
  shieldTick,
  support,
  truckFast,
} from "../assets/icons"
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9 ">
     {
      services.map((service) => {
        return (
          <div key={service.label} >
<ServiceCard key={service.label}
imgURL = {service.imgURL}
label = {service.label}
subtext = {service.subtext}

/>
          </div>
        )
      })
     }
    </section>
  )
};

export default Services;
