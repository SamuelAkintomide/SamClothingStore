import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform} from "framer-motion";
import modelCSS from "../styles/model.module.scss";
import Test from "../pages/test";
import { useLocation } from 'react-router-dom';
import { images, titles, descriptions, prices} from '../data/data';

const transitionInitial = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] };
const transition = { duration: 1, ease: [0.6, 0.01, 0.05, 0.9] };

const Model = ({}) => {
  const location = useLocation();
  const [isDescription, setDescription] = useState(false);
  const [isDelivery, setDelivery] = useState(false);
  const [isOutfits, setOutfits] = useState(false);
  const [isFindSize, setFindSize] = useState(false);
  const [canScroll, setCanScroll] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollbarHeight = 500; // Adjust the scrollbar height as needed
  const initialX = 1000;
  const initialY = 0;
  //----------------------------------------------------------
  const { pathname } = location;
  const index = decodeURIComponent(pathname.substring(pathname.lastIndexOf('/') + 1));
  const image = images[index];
  const title  = titles[index];
  const description = descriptions[index];
  const price  = prices[index];
//----------------------------------------------------------
  const toggleDescription = () => {
    setDescription(!isDescription);
    setDelivery(false);
    setFindSize(false);
  };

  const toggleDelivery = () => {
    setDelivery(!isDelivery);
    setFindSize(false);
    setDescription(false);
  };

  const toggleFindSize = () => {
    setFindSize(!isFindSize);
    setDelivery(false);
    setDescription(false);
  };

  const imageFocus = () => {
    setClicked(!isClicked)
  }

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

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
    <>
      <motion.div
        className={modelCSS.container}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div
          className={modelCSS.imageContainer}
          animate={{
            height: "750px",
            overflowY: "scroll",
            transition: { delay: 1.4, ...transitionInitial },
          }}
          onScrollStart={handleScrollStart}
          onScrollEnd={handleScrollEnd}
        >
          <motion.div className={modelCSS.scrollContents}>
            <motion.div
              className={modelCSS.scrollbar}
              style={{
                height: scrollbarHeight,
                y: scrollbarY,
                opacity: isScrolling ? 1 : 0,
              }}
            />
            <div className={modelCSS.top}>
            <div className={modelCSS.left}>
            <motion.img onAnimationComplete={() => setCanScroll(true)} 
              src={image[0]} alt="an image" className={modelCSS.imageLeft} onClick={imageFocus}
              initial={{ scale: 1, x: initialX, y: initialY, overflow: "hidden" }}
              animate={{
                scale: [1, 6, 1],
                x: [initialX, window.innerWidth * 0.5, 0],
                y: [initialY, 0],
                transition: { delay: 0.2, ...transitionInitial },
                overflow: "visible",
              }}
              style={{ scale: 1, overflow: "hidden" }}
            />
            </div>
            <div className={modelCSS.right}>
              <motion.img src={image[1]} alt="an image" className={modelCSS.imageRight}
                initial={{ scale: 1, x: -403, y: 0, opacity: 0 }}
                  animate={{ x: [-403, 0], y: [0, 0], opacity: [0, 1], transition: { delay: 1.4, ...transition } }}
                  style={{ scale: 1 }}
              />
                <motion.img src={image[2]} alt="an image" className={modelCSS.imageRight}
                  initial={{ scale: 1, x: initialX, y: initialY, opacity: 0 }}
                    animate={{ x: [-403, 0],y: [0], opacity: [0, 1], transition: { delay: 1.4, ...transition }}}
                    style={{ scale: 1 }}
                />
            </div>
          </div>
          <div className={modelCSS.down}>
            <motion.img src={image[3]} alt="an image" className={modelCSS.imageDown} 
              initial={{ scale: 1, x: 0, y: -252, opacity: 0 }}
                animate={{ x: [0, 0], y: [-252, 0], opacity: [0, 1], transition: { delay: 1.8, ...transition } }}
                style={{ scale: 1,}}
              />
              <motion.img src={image[4]} alt="an image" className={modelCSS.imageList} 
                initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1], transition: { delay: 2.6, ...transition } }}
                />
              <motion.img src={image[5]} alt="an image" className={modelCSS.imageList} 
                initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1], transition: { delay: 2.6, ...transition } }}
                />
              <motion.img src={image[6]} alt="an image" className={modelCSS.imageList} 
                  initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1], transition: { delay: 2.6, ...transition } }}
              />
              <motion.img src={image[7]} alt="an image" className={modelCSS.imageList} 
                initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1], transition: { delay: 2.6, ...transition } }}
              />
          </div>
        </motion.div>
      </motion.div>
      <motion.div className={modelCSS.informationContainer}
        animate={{ x: [-900, 0], y: [0], opacity: [0, 1], transition: { delay: 1.8, ...transition } }} >
            
        <h1 className={modelCSS.h1}>{title} - White</h1>
        <h1 className={modelCSS.h1}>£{price}</h1>
        <div className={modelCSS.options}>
          <h3 className={modelCSS.h3}>Colour:</h3>
            <div className={modelCSS.colourContainer}>
              <button className={modelCSS.cbutton} style={{backgroundColor:'red'}} onClick={(<></>)}></button>
              <button className={modelCSS.cbutton} style={{backgroundColor:'blue'}} onClick={(<></>)}></button>
              <button className={modelCSS.cbutton} style={{backgroundColor:'black'}} onClick={(<></>)}></button>
              <button className={modelCSS.cbutton} style={{backgroundColor:'white'}} onClick={(<></>)}></button>
              <button className={modelCSS.cbutton} style={{backgroundColor:'orange'}} onClick={(<></>)}></button>
            </div>
            <h3 className={modelCSS.h3}>Size:</h3>
            <div className={modelCSS.sizeContainer}>
            <button className={modelCSS.sbutton} onClick={(<></>)}>XS</button>
            <button className={modelCSS.sbutton} onClick={(<></>)}>S</button>
            <button className={modelCSS.sbutton} onClick={(<></>)}>M</button>
            <button className={modelCSS.sbutton} onClick={(<></>)}>L</button>
            <button className={modelCSS.sbutton} onClick={(<></>)}>XL</button>
            </div>            
          </div>
          <div className={modelCSS.buttonContainer}>
          <button className={modelCSS.button} onClick={(<></>)}>Add to Cart</button>
          <button className={modelCSS.button} onClick={(<></>)}>Add to Wishlist</button>
          </div>
          <div className={modelCSS.information}>
            <button className={modelCSS.links} onClick={toggleDescription}>Description</button>
            <button className={modelCSS.links} onClick={toggleDelivery}>Delivery & Returns</button>
            <button className={modelCSS.links} >Outfits</button>
            <button className={modelCSS.links} onClick={toggleFindSize}>Find My Size</button>
          </div>
          <ul className={`${modelCSS.p} ${isDescription ? modelCSS.show : ""}`}>
            {description}
          </ul>
          <ul className={`${modelCSS.p} ${isDelivery ? modelCSS.show : ""}`}>
          Free standard delivery with your Saym Membership. You can return your order for any reason, free of charge, within 30 days. Some exclusions apply.
          </ul>
          <ul className={`${modelCSS.p} ${isFindSize ? modelCSS.show : ""}`}>
            
          </ul>
        </motion.div>

      </motion.div> 
      <div className={`${modelCSS.test} ${isClicked ? modelCSS.show : ""}`}>
          <Test />
      </div>
      


    </>
  );
};

export default Model;

//Grab inital click image x and y location so tranistion is nice
//Potentially add Title