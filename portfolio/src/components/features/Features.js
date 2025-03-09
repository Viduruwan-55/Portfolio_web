import React from "react";
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaJava,
  FaLinux,
  FaPython,
  FaRedhat,
  FaUbuntu,
} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiBurpsuite,
  SiC,
  SiFlutter,
  SiKalilinux,
  SiKotlin,
  SiKubernetes,
  SiMetasploit,
  SiMysql,
  SiNginx,
  SiPostgresql,
  SiReact,
  SiWireshark,
} from "react-icons/si";
import { DiWindows } from "react-icons/di";
import Title from "../layouts/Title";
import Card from "./Card";
import { VscAzure } from "react-icons/vsc";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="wrapper mb-14">
        <Title title="About" des="About me" />
        <div className="text-base font-bodyFont leading-6 tracking-wide ">
          <p>
            I am a professional web developer with long time experience in this
          </p>
        </div>
      </div>
      <div className="gap-6"></div>
      <div className="wrapper"></div>
      <Title title="Professional" des="Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        <Card title="Linux" icon={<FaLinux />} />
        <Card title="Red Hat" icon={<FaRedhat />} />
        <Card title="Docker" icon={<FaDocker />} />
        <Card title="Kubernetes" icon={<SiKubernetes />} />
        <Card title="Azure" icon={<VscAzure />} />
        <Card title="Wireshark" icon={<SiWireshark />} />
        <Card title="Kali Linux" icon={<SiKalilinux />} />
        <Card title="WindowsAdmin" icon={<DiWindows />} />
        <Card title="Flutter" icon={<SiFlutter />} />
        <Card title="Kotlin" icon={<SiKotlin />} />
        <Card title="GitHub" icon={<FaGithub />} />
        <Card title="Python" icon={<FaPython />} />
        <Card title="Java" icon={<FaJava />} />
        <Card title="C#" icon={<TbBrandCSharp />} />
        <Card title="C" icon={<SiC />} />
        <Card title="PostgresSQL" icon={<SiPostgresql />} />
        <Card title="MySQL" icon={<SiMysql />} />
        <Card title="Burpsuite" icon={<SiBurpsuite />} />
        <Card title="Metasploit" icon={<SiMetasploit />} />
        <Card title="Firebase" icon={<IoLogoFirebase />} />
        <Card title="React" icon={<SiReact />} />
        <Card title="Ubuntu" icon={<FaUbuntu />} />
        <Card title="AWS" icon={<FaAws />} />
        <Card title="Nginx" icon={<SiNginx />} />
      </div>
    </section>
  );
};

export default Features;
