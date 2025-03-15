import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { SiInstagram, SiX } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/yasisurupathumviduruwa"
            target="blank"
          >
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://x.com/Viduruw0an_X55" target="blank">
            <span className="bannerIcon">
              <SiX />
            </span>
          </a>
          <a href="https://linkedin.com/in/y-p-viduruwan" target="blank">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://www.instagram.com/yasisurupathum?igsh=MTZxdTV6OTUxc2xrYQ=="
            target="blank"
          >
            <span className="bannerIcon">
              <SiInstagram />
            </span>
          </a>
        </div>
      </div>
      <div className="w-full h-full ml-20">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <h4></h4>
        {/* */}
      </div>
      {/* */}
    </div>
  );
};

export default Footer;
