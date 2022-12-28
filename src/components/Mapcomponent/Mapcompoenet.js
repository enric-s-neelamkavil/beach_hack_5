import React from "react";
import Sectiontitle from "../Sectiontitle/Sectiontitle";
import {CiLocationOn} from 'react-icons/ci'

function Mapcompoenet() {
  console.log();
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
        padding: "10px",
        gap:"20px"
      }}
    >
      <Sectiontitle title="Location" />
      <span style={{color:"var(--secondary"}}>
        <CiLocationOn />
        ABIDEEPS PARADISE,Pockanchery, Vadanappally, Kerala ,680619
      </span>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.194700156975!2d76.04987381522997!3d10.485312492519432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba78d71de3d7723%3A0xbf4baa06150148ae!2sABIDEEPS%20PARADISE!5e0!3m2!1sen!2sin!4v1672191141128!5m2!1sen!2sin"
        height="450"
        style={{border:"0",width:"100%",maxWidth:"1300px"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Mapcompoenet;
