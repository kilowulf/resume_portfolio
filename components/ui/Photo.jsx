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
          className="w-[260px] h-[250px] my-5 mx-3 xl:w-[440px] xl:h-[415px] xl:my-9 xl:mx-5 mix-blend-hard-light rounded-full overflow-hidden absolute"
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
