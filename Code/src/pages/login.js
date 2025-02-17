import React, { useEffect, useState } from "react";
import { motion} from "framer-motion";
import { Link } from "react-router-dom";
import SignCSS from '../styles/sign.module.scss';


function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [isSignUpPanelActive, setIsSignUpPanelActive] = useState(false);
  const togglePanel = () => {
    setIsSignUpPanelActive(prevState => !prevState);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle login logic here
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
            <h2 className={SignCSS.h2} >Sign in to your Account</h2>

            <div className={SignCSS.infield}>
              <input className={SignCSS.input} type="email" placeholder="Email" name="email"/>
            </div>

            <div className={SignCSS.infield}>
              <input className={SignCSS.input} type="password" placeholder="Password" />
            </div>
            
            <div className={SignCSS.margindud}>
              <li><Link className={SignCSS.forgot} to='/'>Forgot your password?</Link></li>
            </div>
            
            <div className={SignCSS.infield}>
              <button className={SignCSS.button}>Sign In</button>
            </div> 

          </div>
          
          <div className={SignCSS.bottom}>
            <h2 className={SignCSS.h2}>Create an account</h2>
            <h3 className={SignCSS.h3}>Create a wishlist and view your oder history</h3>
            <button className={SignCSS.button} onClick={() => {
              togglePanel(); setTimeout(() => {window.location.href = "/Signup";},600);
              }}
              >Sign Up For A New Account</button>
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

export default Login;
