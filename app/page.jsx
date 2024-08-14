"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/ui/Socials";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";

import { TypeAnimation } from "react-type-animation";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-accent text-xl">{"//"} </span>
            <span className="text-xl text-outline text-transparent">
              Full Stack Engineer
            </span>
            <span className="text-accent text-xl"> {"//"} </span>
            <h1 className="h1 mb-6">
              {/* Right bracket */}
              <div className="flex items-center justify-center xl:justify-start">
                <span className="text-accent flex xl:flex-row items-center">
                  <span className="pr-1">#</span>
                  <TypeAnimation
                    sequence={[
                      "Hello I'm",
                      3000, // Wait 3 seconds
                      "I'm a Programmer",
                      2000, // Wait 2 seconds
                      "I'm a Developer",
                      3000, // Wait 3 seconds
                      "I'm a Designer",
                      3000 // Wait 3 seconds
                    ]}
                    speed={150} // Typing speed (characters per second)
                    wrapper="span"
                    repeat={Infinity} // Infinite loop
                    style={{
                      fontSize: ".75em",
                      display: "inline-block"
                    }}
                  />
                </span>
              </div>
              <span>Aaron Brown</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I love designing and building innovative digital solutions that
              inspire and challenge!
            </p>
            {/*btn and social links */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/resume/full_stack_developer_Aug_2024.pdf"
                download
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              {/*socials */}
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-account text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/*photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
