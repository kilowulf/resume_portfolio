// note: rafce -> react arrow function component export
"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Button } from "./button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <Link href="/">
            <h1 className="text-4xl font-semibold flex items-center">
              <span className="text-accent mr-2">[</span> {/* Left bracket */}
              <span>Aaron</span> {/* Your name */}
              <span className="text-accent ml-2 mr-4">~]</span>{" "}
              {/* Right bracket */}
              <span className="text-accent flex items-center">
                #
                <TypeAnimation
                  sequence={[
                    "Hi and Welcome",
                    3000, // Wait 3 seconds
                    "I Love all things tech!",
                    2000, // Wait 2 seconds
                    "Please explore..",
                    3000, // Wait 3 seconds
                  ]}
                  speed={150} // Typing speed (characters per second)
                  wrapper="span"
                  repeat={Infinity} // Infinite loop
                  style={{
                    fontSize: ".75em",
                    display: "inline-block",
                  }}
                />
              </span>
            </h1>
          </Link>
        </div>
        <div className="flex justify-end items-center gap-8">
          <div className="hidden lg:flex">
            <Nav />
            <Link href="/contact">
              <Button>Hire Me</Button>
            </Link>
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div className="lg:hidden absolute top-8 right-8">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
