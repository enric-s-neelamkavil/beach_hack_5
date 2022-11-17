import React from "react";
import logo from "../../assets/images/logowhite.png";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineYoutube,
} from "react-icons/ai";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_wrapper">
      <div className="footer_inner_wrapper">
        <div className="footer_inner_wrapper_part_one">
          <img src={logo} alt="" />
          <ul>
            <li>
              <a href="https://www.facebook.com/beachhackathon/" target="_blank_">
                <AiOutlineFacebook />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/beachhack?igshid=YmMyMTA2M2Y=" target="_blank_">
                <AiOutlineInstagram />
              </a>
            </li>
            {/* <li>
              <a href="">
                <AiOutlineLinkedin />
              </a>
            </li> */}
            <li>
              <a href="https://twitter.com/beachhackathon?t=xr0TgB7Dxv-_UFS8BtVikA&s=09" target="_blank_">
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a href="https://youtube.com/channel/UCJLkLiot0E7ya78gjcRr4nw" target="_blank_">
                <AiOutlineYoutube />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_inner_wrapper_part_two">
          <small>© 2022 Beach Hack 5, Inc. All Rights Reserved.</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
