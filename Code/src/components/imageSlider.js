import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import ProgressiveImage from "react-progressive-image";
import { Link } from "react-router-dom";
import sliderCSS from "../styles/imageSlider.module.scss";
import { images, titles, locations} from "../data/data";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Slider = ({}) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [visibleImages, setVisibleImages] = useState(3);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  const imageRange = Array.from(
    { length: visibleImages },
    (_, index) => wrap(0, images.length, page + index)
  );

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const updateVisibleImages = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1091.82) {
      setVisibleImages(1);
    } else if (screenWidth < 1620) {
      setVisibleImages(2);
    } else {
      setVisibleImages(3);
    }
  };

  useEffect(() => {
    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);
    return () => {
      window.removeEventListener("resize", updateVisibleImages);
    };
  }, []);

  const handleClick = (event, index) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;
    setInitialX(offsetX);
    setInitialY(offsetY);
    setClickedIndex(index);
    
  };

  return (
    <div className={sliderCSS.container}>
      <AnimatePresence initial={false} custom={direction}>
        <div className={sliderCSS.outer}>
          {imageRange.map((index) => (
            <Link
            to={{ pathname: `/model/${titles[index].toLowerCase().replace(/ /g, "-")}/${index}` }}
            key={index}
          >
              <div className={sliderCSS.imgWrapper} onClick={(event) => handleClick(event, index)}>
                <ProgressiveImage
                  src={images[index][0]}
                  placeholder={images[index]}
                >
                  {(src) => (
                    <div className={sliderCSS.imageContainer}>
                    <motion.img
                      src={src}
                      alt="image"
                      whileHover={{ scale: 1.1 }}
                      transition={transition}
                      className={sliderCSS.img}
                      animate={
                        clickedIndex === index && {
                          scale: [1, 6, 1],
                          x: [0, 650, 0],
                          transition: { delay: 1.2, ...transition },
                        }
                      }
                    />
                  </div>
                  )}
                </ProgressiveImage>
                <motion.div
                  exit={{ opacity: 0 }}
                  transition={transition}
                  className={sliderCSS.information}
                >
                  <div className={sliderCSS.title}>{titles[index]}</div>
                  <div className={sliderCSS.location}>
                    <span className={sliderCSS.span}>{locations[index][0]}</span>
                    <span className={sliderCSS.span}>{locations[index][1]}</span>
                  </div>
                </motion.div>
              </div>
            </Link>
          ))}
        </div>
      </AnimatePresence>
      <img src={require("../images/arrow.png")} className={sliderCSS.next} alt="Arrow" onClick={() => paginate(1)}/>
      <img src={require("../images/arrow.png")} className={sliderCSS.prev} alt="Arrow" onClick={() => paginate(-1)}/>
    </div>
  );
};

export default Slider;
