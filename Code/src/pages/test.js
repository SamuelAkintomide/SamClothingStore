import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform} from "framer-motion";
import modelCSS from "../styles/test.module.scss";
import { images} from '../data/data';
import { wrap } from "popmotion";
import ProgressiveImage from "react-progressive-image";
import { Link } from "react-router-dom";

const Model = () => {
  const index = 1;
  const image = images[index];
  const [visibleImages, setVisibleImages] = useState(1);
  const [[page, direction], setPage] = useState([0, 0]);
  const { scrollYProgress } = useViewportScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollbarHeight = "auto"; // Adjust the scrollbar height as needed

  const imageRange = Array.from(
    { length: visibleImages },
    (_, index) => wrap(0, images.length, page + index)
  );
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleScrollStart = () => {
    setIsScrolling(true);
  };

  const handleScrollEnd = () => {
    setIsScrolling(false);
  };

  const scrollbarY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, scrollbarHeight],
    { clamp: false }
  );

  return (

    <motion.div className={modelCSS.zoomContainer}>

        <motion.div className={modelCSS.imageContainer}
            animate={{ height: "700px", y: 120, overflowY: "scroll", overflowX: "hidden" }}
            onScrollStart={handleScrollStart}
            onScrollEnd={handleScrollEnd}
            >
            <motion.div className={modelCSS.left}>
                {image.map((imageUrl, index) => (
                <ProgressiveImage
                    key={index}
                    src={imageUrl}
                    className={modelCSS.imagewrapper}
                >
                    {(src) => (
                    <motion.img
                        src={src}
                        alt="image"
                        className={modelCSS.imgSmaller}
                    />
                    )}
                </ProgressiveImage>
                ))}
                <motion.div
                className={modelCSS.scrollbar}
                style={{
                    height: scrollbarHeight,
                    y: scrollbarY,
                    opacity: isScrolling ? 1 : 0,
                }}
                />
            </motion.div>
        </motion.div>

        <div className={modelCSS.right}>
        {imageRange.map((index) => (
                <ProgressiveImage
                  src={image[index]}
                  className={modelCSS.wrapper}
                >
                  {(src) => (
                    <motion.img
                      src={src}
                      alt="image"
                      className={modelCSS.img}
                      
                    />
                  )}
                </ProgressiveImage>
          ))}
            <div className={modelCSS.next} onClick={() => paginate(1)}>
            {"‣"}
        </div>
        <div className={modelCSS.prev} onClick={() => paginate(-1)}>
            {"‣"}
        </div>
        <Link to={"/"} ><button className={modelCSS.close}> <img className={modelCSS.closeIcon} src={require("../images/close.png")} alt="Close"/> </button></Link> 
        </div>
    </motion.div>  
  );
};

export default Model;
