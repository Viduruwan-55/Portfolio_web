import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import Title from "../layouts/Title";

const Achievement = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Education & Achievements" des="My Resume" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      >
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">
              2007 - 2010
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Educational Qualifications
            </h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[230px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Lorem ipsum dolor sit amet."
              subTitle="Lorem ipsum dolor sit amet alternative."
              result="Success"
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
            />
          </div>
        </div>
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">
              2007 - 2010
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Lorem ipsum dolor sit amet."
              subTitle="Lorem ipsum dolor sit amet alternative."
              result="Success"
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
            />
            <ResumeCard
              title="Lorem ipsum dolor sit amet."
              subTitle="Lorem ipsum dolor sit amet alternative."
              result="Success"
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Achievement;
