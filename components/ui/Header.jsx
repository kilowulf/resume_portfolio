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
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Aaron{" "}
            <span className="text-accent">
              <div
                className="flex items-center overflow-hidden"
                style={{ height: "1.5em" }}
              >
                $
                <span className="inline-block">
                  <TypeAnimation
                    sequence={[
                      "Hi and Welcome",
                      3000, // Wait 1 second
                      "I Love all things tech!",
                      2000, // Wait 1 second
                      "Please explore..",
                      3000, // Wait 1 second
                    ]}
                    speed={150} // Typing speed (characters per second)
                    wrapper="span"
                    repeat={Infinity} // Infinite loop
                    style={{
                      fontSize: "1em",
                      display: "inline-block",
                    }}
                  />
                </span>
              </div>
            </span>
          </h1>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>
      </div>
      {/*mobile nav */}
      <div className="lg:hidden absolute top-8 right-8">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
