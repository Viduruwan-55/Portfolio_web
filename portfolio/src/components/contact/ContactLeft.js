import React from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiGmail, SiX } from "react-icons/si";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Y.P. Viduruwan</h3>
        <p className="text-lg font-normal text-gray-400">
          Cyber Security Enthusiastist || Mobile App Developer || Penetration
          tester || Linux System Administrator
        </p>
        <p className="text-base text-gray-400 tracking-wide"></p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:
          <a href="https://wa.me/94717220818" target="_blank">
            <span className="text-lightText">+94717220818</span>
          </a>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ypviduruwan55@gmail.com"
              target="_blank"
            >
              ypviduruwan55@gmail.com
            </a>
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4 text-designColor">
          Get in Touch via
        </h2>
        <div className="flex gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ypviduruwan55@gmail.com" //https://www.facebook.com/yasisurupathumviduruwa
            target="blank"
          >
            <span className="bannerIcon">
              <SiGmail />
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
          <a href="https://wa.me/94717220818" target="_blank">
            <span className="bannerIcon">
              <FaWhatsapp></FaWhatsapp>{" "}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
