import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/ui/Socials";
import Photo from "@/components/ui/Photo";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-accent text-xl">{"//"} </span>
            <span className="text-xl">Full Stack Engineer</span>
            <span className="text-accent text-xl"> {"//"} </span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Aaron Brown</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I love designing and building innovative digital solutions that
              inspire and challenge!
            </p>
            {/*btn adn social links */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
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
    </section>
  );
};

export default Home;
