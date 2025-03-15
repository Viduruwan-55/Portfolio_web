import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaLinkedinIn,
  FaGithub,
  FaLinux,
  FaMedium,
  FaDownload,
} from "react-icons/fa6";
import { SiDocker, SiKalilinux, SiWireshark, SiX } from "react-icons/si";
import Button from "./button";
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Penetration tester.",
      "Mobile App Developer.",
      "Sytem Administrator",
    ], /// add my profetions here
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10 mt-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Securing the Digital World</h4>
        <h1 className="text-6xl font-bold text-white">
          <span className="text-5xl">Hi, I'm </span>
          <span className="text-designColor capitalize">Y.P. Viduruwan</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#00FF9C"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          A Computer Science undergraduate passionate about Cybersecurity,
          DevOps, and cloud technologies. Focused on building secure and
          reliable systems while exploring new ways to enhance digital security.
          🚀
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between mt-10">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/Viduruwan-55" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://medium.com/@viduruwan20006" target="blank">
              <span className="bannerIcon">
                <FaMedium />
              </span>
            </a>
            <a href="https://x.com/Viduruwan_X55" target="blank">
              <span className="bannerIcon">
                <SiX />
              </span>
            </a>
            <a href="https://linkedin.com/in/y-p-viduruwan" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaLinux />
            </span>
            <span className="bannerIcon">
              <SiKalilinux />
            </span>
            <span className="bannerIcon">
              <SiWireshark />
            </span>
            <span className="bannerIcon">
              <SiDocker />
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Button title="Download cv" icon={<FaDownload />} />
      </div>
    </div>
  );
};

export default LeftBanner;
