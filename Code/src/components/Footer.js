import React from "react";
import { Link } from "react-router-dom";
import footerCSS from "../styles/footer.module.scss";

const Header = () => {
  return (
    <footer className={footerCSS.footer}>
      <ul className={footerCSS.ul}>
        <li><Link className={footerCSS.links} to='/About'><h5>About Us</h5></Link></li>
        <li><Link className={footerCSS.links} to='/'><h5>Contact Us</h5></Link></li>
        <li><Link className={footerCSS.links} to='/About'><h5>Help</h5></Link></li>
        <li><Link className={footerCSS.links} to='/'><h5>Size Guide</h5></Link></li>
      </ul>
      <ul className={footerCSS.ul}>
      <li><Link className={footerCSS.links} to='/'><h5>Delivery & Returns</h5></Link></li>
      <li><Link className={footerCSS.links} to='/'><h5>Click & Collect</h5></Link></li>
      <li><Link className={footerCSS.links} to='/'><h5>Payments</h5></Link></li>
      </ul>
      <ul className={footerCSS.ulHide}>
      <li><Link className={footerCSS.links} to='/'><h5>Saym Rewards</h5></Link></li>
      <li><Link className={footerCSS.links} to='/'><h5>Terms & Conditions</h5></Link></li>
      <li><Link className={footerCSS.links} to='/'><h5>Privacy Policy</h5></Link></li>        
      </ul>
      <div className={footerCSS.ulRight}>
        <ul className={footerCSS.ulR}>
          <li className={footerCSS.title}>Shipping To</li>
          <li><Link className={footerCSS.links} to='/'><h5>United Kingdom</h5></Link></li>
          <li><Link className={footerCSS.links} to='/'><h5>United States</h5></Link></li>
          <li><Link className={footerCSS.links} to='/'><h5>European Union</h5></Link></li>
          <li><Link className={footerCSS.links} to='/'><h5>Canada</h5></Link></li>
          <li><Link className={footerCSS.links} to='/'><h5>Australia</h5></Link></li>
          <li><Link className={footerCSS.links} to='/'><h5>Rest Of the World</h5></Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Header;
