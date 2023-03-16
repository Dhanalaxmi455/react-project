import React from "react";
import {TiLeaf} from "react-icons/ti";
import {TiTick} from "react-icons/ti";
import {SiProbot} from "react-icons/si";
import {ImPower} from "react-icons/im";
import "../styles/price.scss";

function Price(){
    return(
      <article className="price">
          <div className="one">
          <h5 className="icon">  <TiLeaf/>  Lite</h5>
          <p>Perfect to get started</p>
          <p className="one-p">$11<span className="one-span">Per seat/month</span></p>
          <button className="button">Try 7 days for free</button>

          <h5>Lite includes :</h5>
          <p><TiTick/>CMS integration</p>
          <p><TiTick/>EMAIL & SMS remainders</p>
          <p><TiTick/>Customer support 24/7</p>
          <button className="search">Search All Features</button>
            </div>
          
            <div className="two">
           
            <h5 className="icon">  <SiProbot/>  Lite</h5>
          <p>Best for Proffesionals</p>
          <p className="one-p">$19<span className="one-span">Per seat/month</span></p>
          <button className="button">Get Started</button>

          <h5>Everything in lite , Plus :</h5>
          <p><TiTick/>Advanced Analytics</p>
          <p><TiTick/>100+ integrations</p>
          <p><TiTick/>Chat widget</p>
          <p><TiTick/>Templates library</p>
          <button className="search">Search All Features</button>
            </div>
            <div className="three">
            <h5 className="icon">  <ImPower/>  Lite</h5>
          <p>Toolset for hard players</p>
          <p className="one-p">$35<span className="one-span">Per seat/month</span></p>
          <button className="button">Get Started</button>

          <h5>Everything in pro , Plus :</h5>
          <p><TiTick/> Daily performance Report</p>
          <p><TiTick/>Dedicated assistant</p>
          <p><TiTick/>Artificial Intelligence</p>
          <p><TiTick/>Marketing tools and Automations</p>
          <button className="search-1">Search All Features</button>
            </div>
      </article>
    )
}
export default Price;