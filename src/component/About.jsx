import React from 'react'
import { image } from "../assets/img/img";

function About() {
  return (
 <>
 
 <div className="contentAbout" id="about">
            <div className="aboutImg">
              <img src={image.about} alt="About" />
            </div>
            <div className="aboutText">
              <p className="aboutTextTag">We are expert team</p>
              <h2 className="aboutTextHeading">Who are we?</h2>
              <p className="aboutTextTitle">We build custom software that drives innovation and social impact</p>
              <p className="aboutTextDescription">
                OBS Technologia is one of the fastest-growing IT companies providing various solutions and services
                across industries. We provide complete solutions that include the development of mobile apps, web apps,
                and fin-tech solutions. Our Clientage has grown exponentially within years as we have had the privilege
                of working with clients from America, Australia, the United Kingdom, Saudi Arabia, Germany, India,
                Russia, and the Central Republic of Africa. Our current target is to provide cost-effective &
                user-friendly solutions using the latest technological trends.{" "}
              </p>
            </div>
          </div>
 
 
 
 </>
  )
}

export default About