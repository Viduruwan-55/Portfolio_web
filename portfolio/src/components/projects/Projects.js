import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFive,
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
          git_link="https://medium.com/@viduruwan20006/next-cloud-aio-with-docker-on-the-ubuntu-server-82bfdc908518"
          link="https://medium.com/@viduruwan20006/next-cloud-aio-with-docker-on-the-ubuntu-server-82bfdc908518"
        />
        <ProjectsCard
          title="Movie App"
          des="Flutter application that allows users to fetch movie data from The Movie Database (TMDb) API. The app displays a list of movies, their details"
          src={projectTwo}
          git_link="https://github.com/Viduruwan-55/Flutter_Movie_app.git"
        />
        <ProjectsCard
          title="Student Attendance System"
          des="An automated solution for real-time attendance tracking, improving accuracy and efficiency in the Faculty of Computing and Technology. (Group Project)"
          src={projectThree}
          git_link="https://github.com/Viduruwan-55/Student_Attendance_System.git"
          link="https://github.com/PinsaraPerera/Student_Attendace_System.git"
        />
        {/* <ProjectsCard title="E-commerce Website" src={projectFour} /> */}
        <ProjectsCard
          title="mental_health_chatbot"
          des="Our group project, Smart Mental Health Chatbot, uses AI, NLP, and emotion recognition to provide personalized, empathetic support, offering real-time mental health assistance via a user-friendly mobile app."
          src={projectFive}
        />
      </div>
    </section>
  );
};

export default Projects;
