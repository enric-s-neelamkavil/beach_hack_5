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
              <a href="">
                <AiOutlineFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <AiOutlineInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <AiOutlineLinkedin />
              </a>
            </li>
            <li>
              <a href="">
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a href="">
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
