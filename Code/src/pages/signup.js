import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion} from "framer-motion";
import SignCSS from '../styles/sign.module.scss';

function Signup() {
  const [isSignUpPanelActive, setIsSignUpPanelActive] = useState(true);
  const togglePanel = () => {
    setIsSignUpPanelActive(prevState => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // for the form submission
  };

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'>
        <body className={SignCSS.body} onSubmit={handleSubmit}>
        <Link to='/'><img className={SignCSS.logo} src={require("../images/Logo.png")} alt="Saym" /></Link>
          <div className={SignCSS.top}>
            <h2 className={SignCSS.h2} >Create Your Account</h2>

            <div className={SignCSS.infield}>
              <input className={SignCSS.input} type="firstname" placeholder="First Name" name="firstname"/>
            </div>

            <div className={SignCSS.infield}>
              <input className={SignCSS.input} type="lastname" placeholder="Last Name" name="lastname"/>
            </div>

            <div className={SignCSS.infield}>
              <input className={SignCSS.input} type="email" placeholder="Email" name="email"/>
            </div>

            <div className={SignCSS.infield}>
              <input className={SignCSS.input} type="password" placeholder="Password" />
            </div>
            
            <div className={SignCSS.infield}>
              <button className={SignCSS.button} onClick={(handleSubmit)}>Sign Up</button>
            </div> 
          </div>
          
          <div className={SignCSS.bottom}>
            <h2 className={SignCSS.h2}>Log in to existing Account</h2>
            <h3 className={SignCSS.h3}>View your wishlist and oder history</h3>
            <button className={SignCSS.button} onClick={() => {
              togglePanel();
              setTimeout(() => {
                  window.location.href = "/Login";
              },600);
              }}>Sign In To existing Account</button>
            <div className={`${isSignUpPanelActive ? SignCSS.rightPanelActive : ''}`}>  
              <div className={SignCSS.overlayContainer} id="transitionContainer">
                <div className={SignCSS.overlay}/>
              </div>
            </div>
          </div>
         
        </body>
    </motion.div>
  );
}
  
  export default Signup;