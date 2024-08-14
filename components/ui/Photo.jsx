"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 60,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" }
        }}
      >
        {/*image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }
          }}
          className="w-[270px] h-[298px] my-5 xl:w-[460px] xl:h-[480px] xl:my-10 mix-blend-hard-light rounded-full overflow-hidden absolute"
        >
          <Image
            src="/assets/photo7.png"
            priority
            quality={100}
            fill
            alt="my image"
            className="object-contain"
          />
        </motion.div>
        {/*circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 503 503"
          xmlns="http://www.w3.org/s2000/svg"
        >
          <motion.g
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.circle
              cx="253"
              cy="253"
              r="230"
              stroke="#00ffff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            {/* Text along the circle */}
            {/* <motion.text
              fill="#00ffff"
              fontSize="20"
              fontFamily="Arial, sans-serif"
            >
              <textPath
                href="#path"
                startOffset="70%"
                method="align"
                spacing="auto"
              > */}
            {/* Your text string goes here */}
            {/* Full Stack &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; UI/UX Design
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C#/C++
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Python
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Javascript
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; HTML5
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CSS3
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TailwindCSS */}
            {/* </textPath>
            </motion.text> */}
          </motion.g>
          {/* Defining the path for text */}
          <defs>
            <path
              id="path"
              d="M 253, 253 m -250, 0 a 120,120 0 1,1 500,0 a 160,160 0 1,1 -500,0"
            />
          </defs>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
