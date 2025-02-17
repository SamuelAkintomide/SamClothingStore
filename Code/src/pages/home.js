import * as React from "react";
import homeCSS from "../styles/home.module.scss";
import Slider from "../components/imageSlider.js";

const Home = () => {
  
  return (
      <main>
        <h1 className={homeCSS.h1}>We Are The Saym</h1>     
        <div className={homeCSS.imageWrap}>
          <img className={homeCSS.image} src={require("../images/killua.gif")} />
          <img className={homeCSS.image} src={require("../images/goku.gif")} />
        </div>       
      <h1 className={homeCSS.h1}>Welcome To</h1>
      <h1 className={homeCSS.h1}>The Future</h1>
      <h1 className={homeCSS.h1}>POPULAR COLLECTIONS</h1>
      <Slider/> 
      <h1 className={homeCSS.h1}>Monkey</h1>
    </main>   
  );
};

export default Home;
