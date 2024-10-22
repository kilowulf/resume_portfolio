"use client";

// imports
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

import { BsFillFolderSymlinkFill, BsDisplay, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

// projects array of objects
const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Asset Recovery Firm",
    description:
      "An E-Service platform for finding and processing overage assessments for residential properties and foreclosures",
    stack: [
      { name: "Html5" },
      { name: "Css3" },
      { name: "React" },
      { name: "Javascript" },
      { name: "NodeJs" },
      { name: "ExpressJs" },
      { name: "MongoDb" }
    ],
    image: "/assets/work/assetrecoverfirm_proj.png",
    live: "https://assetrecoveryfirm.netlify.app/",
    github: "https://github.com/kilowulf/asset-recovery-firm"
  },
  {
    num: "02",
    category: "full-stack",
    title: "OPENLiNK",
    description:
      "A community platform intended to connect open source project teams and potential contributors together. A feature rich social media system with customizable profiles, authentication (Lucia authentication/ Google Oauth) and live chat capabilities (Stream API). We have trending topics, likes and contemporaneous comment sections with uploads (Uploadthing API).",
    stack: [
      { name: "Html5" },
      { name: "TailwindCSS" },
      { name: "NextJS" },
      { name: "Typescript" },
      { name: "NodeJs" },
      { name: "PostGres" }
    ],
    image: "/assets/work/openlink.png",
    live: "https://openlink-social-media-app.vercel.app",
    github: "https://github.com/kilowulf/openlink-social-media-app"
  },
  {
    num: "03",
    category: "full-stack",
    title: "LivDoc",
    description:
      "A Full SaaS PDF Chatbot using A.I. (openAI API) with user profiles, authentication (Kinde API / Google Oauth) and document uploads (Uploadthing API). Tier Free / Pro membership paid plans are available with document size limitations on each (Stripe API). We leverage Pinecone vector databases with openAI embeddings to generate context specific chat experiences.",
    stack: [
      { name: "Html5" },
      { name: "TailwindCSS" },
      { name: "NextJS" },
      { name: "Typescript" },
      { name: "NodeJs" },
      { name: "tRPC" },
      { name: "PostGres" },
      { name: "Pinecone" }
    ],
    image: "/assets/work/livdoc.png",
    live: "https://livdoc.vercel.app",
    github: "https://github.com/kilowulf/livdoc"
  }
];

const Work = () => {
  // state
  const [project, setProject] = useState(projects[0]);

  // handle slider project change
  const handleSlideChange = (swipe) => {
    // get current slide index
    const currentIndex = swipe.activeIndex;
    // update project state
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/*project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/*project category */}
              <div className="flex items-center gap-2">
                <span className="text-accent text-2xl">{"//"} </span>
                <h4 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.title}
                </h4>
                <span className="text-accent text-2xl">{"//"} </span>
              </div>
              {/*project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/*remove last comma in array */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/*border */}
              <div className="border border-white/20"></div>
              {/*buttons */}
              <div className="flex items-center gap-4">
                {/*live project button */}
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider duration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsDisplay className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*github code button*/}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider duration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/*image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          alt={project.title}
                          className="object-cover rounded-sm"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/*slide button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 h-[44px] bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
