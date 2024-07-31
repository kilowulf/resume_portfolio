import { motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse  index for staggered animation
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/*render 6 motion divs, each representing a step in the stair 
  each div will have the same animation defined by the stairsAnimation object the delay for each div is calculated dynamically based on its reversed index. creating a staggering effect with decreasing delay for each subsequent step*/}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: 0.1 * reverseIndex(index),
          }}
          className="w-full h-full bg-white relative"
          style={{ top: `${(index + 1) * 16.66}%` }}
        ></motion.div>
      ))}
    </>
  );
};

export default Stairs;
