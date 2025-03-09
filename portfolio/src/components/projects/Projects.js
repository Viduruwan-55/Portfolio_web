import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Projects & Innovations" des="Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Next-cloud AIO"
          des="Next-cloud is a powerful self-hosted cloud storage solution that gives you full control over your data. I used Docker on an Ubuntu Server VM to set up Next-cloud AIO."
          src={projectOne}
        />
        <ProjectsCard title="Movie App" des="" src={projectTwo} />
        <ProjectsCard
          title="Student Attendance System"
          des=""
          src={projectThree}
        />
        <ProjectsCard title="E-commerce Website" des="" src={projectFour} />
        <ProjectsCard title="mental_health_chatbot" des=" " src="" />
      </div>
    </section>
  );
};

export default Projects;
