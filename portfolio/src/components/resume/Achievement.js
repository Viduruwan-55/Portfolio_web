import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import Title from "../layouts/Title";

const Achievement = () => {
  return (
    <section
      id="achievement"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Education & Achievements" des="My Resume" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      >
        {/* Educational Qualifications Section */}
        <div className="w-full lgl:w-1/2">
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">
              2022 - 2026
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Educational Qualifications
            </h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[230px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="BSc (honors) in Computer Science."
              subTitle="University of Kelaniya Sri Lnaka.    [ 2022 - 2026 ]"
              result="Undergraduate"
              des="BSc (Honors) in Computer Science at the University of Kelaniya, specialized in Cybersecurity."
            />
          </div>
        </div>
        {/* Achievements Section */}
        <div className="w-full lgl:w-1/2">
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">
              2022 - 2025
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Finalist Genesiz'24 Hackathon."
              subTitle="The Electronics, Robotics and Innovation Club of KDU"
              result="Finalist"
              des="Genesiz'24 is a hackathon organized by the Electronics, Robotics and Innovation Club of Sir John Kothalawala Defence University."
            />
            <ResumeCard
              title="Finalists of the 2022 JuniorHack Hackathon."
              subTitle="Software Engineering Society of University of Kelaniya."
              result="Finalist"
              des="JuniorHack is a hackathon for 1st year undergraduates in University of Kelaniya organized by the Software Engineering Society of University of Kelaniya."
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Achievement;
