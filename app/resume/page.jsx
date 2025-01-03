"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiPython,
  SiCsharp,
  SiAmazonaws,
  SiRedux,
  SiPostgresql
} from "react-icons/si";

import { TbBrandKotlin } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import Image from "next/image";

// about data

const about = {
  title: "About me",
  description:
    "I've always have held a deep love for the creative enterprise. My hobbies range from sketching 2d fantasy art to writing amateur speculative fiction.I enjoy long nature hikes with the wife and spending meaningful time with friends and loved ones. I try to employ this creative instinct to my soft-tech projects and enjoy finding interesting ways to challenge myself and build skill sets.",
  info: [
    { fieldName: "Name", fieldValue: "Aaron Brown" },
    { fieldName: "Phone", fieldValue: "801-319-3765" },
    { fieldName: "Experience", fieldValue: "2+ years" },
    { fieldName: "Residence", fieldValue: "U.S.A." },
    { fieldName: "Contract", fieldValue: "Available" },
    { fieldName: "Current Position", fieldValue: "Algify LLC. (Owner)" },
    { fieldName: "Email", fieldValue: "kilonow1275@hotmail.com" }
  ]
};

// experiences
const experience = {
  icon: "",
  title: "Work Experience",
  description:
    "These are but a few of the exciting projects I've had the privilege of working on. Live versions are hosted in development state on third party hosting services and intended for client viewing.",
  items: [
    {
      company: "LivDoc PDF Chatbot",
      position: "Full Stack Developer",
      duration: "May 2024-Aug 2024",
      techStack: "NextJs, Node.js, tRPC, PostGres, Prisma, TailwindCSS",
      desc: "PDF Chatbot powered by Pinecone and OpenAI"
    },
    {
      company: "Asset Recovery Firm LLC",
      position: "Full Stack Developer :contract",
      duration: "Jan 2024-present",
      techStack: "React, Node.js, Express, MongoDB",
      desc: "Foreclosure overage recovery"
    },
    {
      company: "OpenLink Open Source Social Media Platform",
      position: "Full Stack Developer",
      duration: "Aug 2023- Jan 2024",
      techStack: "NextJs, Node.js, Express, PostGres, Prisma, TailwindCSS",
      desc: "Connecting contributors with project leads"
    }
  ]
};

// education
const education = {
  icon: "/assets/resume/uvu_logo_seal.jpg",
  title: "Education",
  description:
    "The following are institutions and platforms that have benefited me greatly in acquiring the skills and practical experience to grow as a Full Stack Engineer.",
  items: [
    {
      institution: "Utah Valley University",
      degree: "Bachelor of Science in Computer Science",
      duration: "2020-2024",
      honors: "Graduated Magna Cum Laude",
      image: ""
    },
    {
      institution: "AWS Academy",
      degree: "Certificate: AWS Cloud Developing",
      duration: "May 2024",
      honors: "",
      image: ""
    }
  ]
};

// skills
const skills = {
  title: "Skills",
  description:
    "These are a collection of the technologies I've employed in my time as a developer. I'm always looking to expand my skill set and love to explore new and innovative soft-tech tools.",
  skillList: [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostGres", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Kotlin", icon: <TbBrandKotlin /> },
    { name: "C#", icon: <SiCsharp /> },
    { name: "AWS", icon: <SiAmazonaws /> },
    { name: "Redux", icon: <SiRedux /> }
  ]
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/*content */}
          <div className="min-h-[70vh] w-full">
            {/*experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex justify-center xl:justify-start gap-2">
                  <span className="text-accent text-3xl">{"//"}</span>
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <span className="text-accent text-3xl">{"//"}</span>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.company}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot */}
                            {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> */}
                            <p className="text-white/50">{item.desc}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex justify-center xl:justify-start gap-2">
                  <span className="text-accent text-3xl">{"//"}</span>
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <span className="text-accent text-3xl">{"//"}</span>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot */}
                            <span className="flex flex-col w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>

                            <div className="">{item.image}</div>
                            {/* <span></span>
                            <p>{item.techStack}</p> */}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] tet-center xl:text-left">
                  <div className="flex justify-center xl:justify-start gap-2">
                    <span className="text-accent text-3xl">{"//"}</span>
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <span className="text-accent text-3xl">{"//"}</span>
                  </div>
                  <p>{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/*about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <div className="flex justify-center xl:justify-start gap-2">
                  <span className="text-accent text-3xl">{"//"}</span>
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <span className="text-accent text-3xl">{"//"}</span>
                </div>
                <p className="max-w-[600px] pb-3 text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 text-accent">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
