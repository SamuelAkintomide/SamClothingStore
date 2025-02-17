import React, { useEffect, useState } from "react";
import { motion} from "framer-motion";

const Model = ({ imageDetails }) => {
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <>
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'>
      <body></body>
    </motion.div>
    </>
  );
};

export default Model;
