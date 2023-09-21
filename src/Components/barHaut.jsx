import React from "react";
import { Link } from "react-router-dom";
function barHaut() {
  return (
    <>
      <div className="topbar">
        <div className="topbarwrapper">
          <div className="topleft">
            <span className="logo">OpenReplay</span>
          </div>
          <div className="topright">
            <div className="topbariconcontainer">
              <i class="fa-regular fa-bell"></i>
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbariconcontainer">
              <i class="fa-solid fa-gear"></i>
              <span className="topiconbadge">2</span>
            </div>
            <div className="topbariconcontainer">
              <i class="fa-solid fa-gear"></i>
            </div>
            <img
              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="topAvatar"
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default barHaut;
