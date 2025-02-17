import React from "react";
import { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import headerCSS from "../styles/header.module.scss";
import { isMotionValue } from "framer-motion";

const Header = () => {
  const [displayedList, setDisplayedList] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isBlackout, setBlackout] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const isMobile = windowWidth <= 1080;
  const isSmaller = windowWidth <= 1110;

  const handleCartClick = () => {
    if(isMenuOpen===true){
      setIsMenuOpen(false);
      setIsCartOpen(true);
    } else{
      setBlackout(!isBlackout);
      setIsCartOpen(!isCartOpen);
    }
  };

  const ToggleBackFocus = () =>{
    setIsMenuOpen(false);
    setBlackout(false);
    setIsCartOpen(false);
  }

  const handleLinkClick = (newList) => {
    setDisplayedList(newList);
    setIsSelected(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setBlackout(!isBlackout);
  };

  const toggleSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };
  const toggleDropDown = () => {
    setIsDropOpen(!isDropOpen);
  };

  const handleSearch = (event) => {
    event.preventDefault();
  }; 

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    const Data = [ "AAPL", "GOOGL", "AMZN", "MSFT", "TSLA" ];
    const filteredResults = Data.filter(
      (result) => result.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
    setSearchResults(filteredResults);
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      toggleMenu();
    }
  }, [isMobile, isMenuOpen]);

  return (
    <header className={headerCSS.header}>{/*Contains 2 vertical row*/}
    <Link to='/'><img className={headerCSS.logo} src={require("../images/Logo.png")} alt="Saym" /></Link>
      <div className={headerCSS.menuButtonContainer}>
        {isMobile && ( <button className={headerCSS.navbar} onClick={toggleMenu}>MENU</button>)}
      </div>


      <ul className={`${headerCSS.menuShow} ${isMenuOpen ? headerCSS.show : ""}`}>
        <div className={headerCSS.innerContainer}>
        
        {isMobile && (<div className={headerCSS.top}>{/*contains 2*/}
          <h5 className={headerCSS.h5}>Menu</h5>
          <button className={headerCSS.close} onClick={toggleMenu}>
            <img className={headerCSS.closeIcon} 
              src={require("../images/close.png")} 
              alt="Close"/>
          </button>
        </div>)}

          <div className={headerCSS.mainNavs}>
            <li>
              <button className={headerCSS.button} 
                onMouseEnter={() => { setIsDropOpen(true);
                  handleLinkClick(['Fill', 'In', 'The', 'Element', 'Gaps'])
                }} onMouseLeave={() => setIsDropOpen(false)} ><h6>
                  New & Featured</h6>
              </button>
            </li>
            <li>
            <button className={headerCSS.button}
              onMouseEnter={() => { setIsDropOpen(true);
                handleLinkClick(['All Clothing', 'Tops | T-Shirts', 'Jumpers | Hoodies', 'Trousers', 'Tracksuits', 'Jackets', 'Activewear', 'Swimwear']);
              }} onMouseLeave={() => setIsDropOpen(false)} >
              <h6>Men</h6>
            </button>
            </li>
            <li>
              <button className={headerCSS.button} 
                onMouseEnter={() => { setIsDropOpen(true);
                  handleLinkClick(['All Clothing', 'Tops | T-Shirts', 'Jumpers | Hoodies', 'Trousers | Leggings', 'Skirts | Dresses', 'Tracksuits', 'Jackets', 'Activewear', 'Swimwear'])
                }} onMouseLeave={() => setIsDropOpen(false)} >
                  <h6>Women</h6>
              </button>
            </li>
            <li>
              <button className={headerCSS.button} 
                onMouseEnter={() => { setIsDropOpen(true);
                  handleLinkClick(['All Clothing', 'Tops | T-Shirts', 'Jumpers | Hoodies', 'Trousers | Leggings', 'Skirts | Dresses', 'Tracksuits', 'Jackets', 'Activewear', 'Swimwear'])
                  }} onMouseLeave={() => setIsDropOpen(false)}>
                  <h6>Kids</h6>
              </button>
            </li>
            <li>
              <button className={headerCSS.button} 
                onMouseEnter={() => { setIsDropOpen(true);
                  handleLinkClick(['Bags', 'Jewlery', 'More', 'More', 'More'])
                }} onMouseLeave={() => setIsDropOpen(false)}>
                  <h6>Accesories</h6>
              </button>
            </li>
        </div>
            <input className={`${headerCSS.searchBar} ${isSearchBarOpen ? headerCSS.show : ""}`} type="text" 
              placeholder="Search..."
              value={searchTerm} onChange={handleInputChange} list="search-results"
            />
            <datalist id="search-results">
              {searchResults.map((result, index) => (
                <option key={index} value={result} />
              ))}
            </datalist>
        <div className={headerCSS.personal}>{/*Personal section Contains 3*/}
              <button className={headerCSS.button} onClick={toggleSearchBar}>
                  <img className={headerCSS.icons} 
                      src={require("../images/search.png")} 
                      alt="Temp-Search"/>
                </button>
                <Link to='/account'>{/*Saves*/}
                  <img className={headerCSS.icons} 
                    src={require("../images/heart.png")} 
                    alt="Temp-Save"/>
                </Link>
                <button className={headerCSS.button} onClick={handleCartClick}>
                  <img className={headerCSS.icons} 
                      src={require("../images/bag.png")} 
                      alt="Temp-Basket"/>
                </button>
                {/*<Bag />*/}
                {!isLoggedIn && (<Link to='/Signup'>
                  <img className={headerCSS.icons} 
                    src={require("../images/user.png")} 
                    alt="Temp-Account"/>
                </Link>)}
                {isLoggedIn && (<Link to='/profile'>
                  <img className={headerCSS.icons} 
                    src={require("../images/user.png")} 
                    alt="Temp-Account"/>
                </Link>)}
            </div>
          </div>
          {isMobile && (
        <ul className={headerCSS.ul}> 
            {displayedList.map((item, index) => (
              <li key={index}>
                <Link to={`/page/${index}`} 
                className={headerCSS.h6}>{item}
                </Link>
              </li>
            ))}
        </ul>
          )}
      </ul>



      <div className={`${headerCSS.bagContainer} ${isCartOpen ? headerCSS.show : ""}`} >
        <div className={headerCSS.top}>{/*contains 2*/}
            <h5 className={headerCSS.h7}>Your Bag</h5>
            <button className={headerCSS.close} onClick={handleCartClick}>
              <img className={headerCSS.closeIcon} 
                  src={require("../images/close.png")} 
                  alt="Close"/>
            </button>
        </div>
        <div className={headerCSS.contents}>
          <h6 className={headerCSS.h7}>Bag Empty</h6>
        </div>
      </div>

{!isMobile && (
<div className={`${headerCSS.hide} ${isDropOpen ? headerCSS.show : ""}`}> 
      <ul className={`${headerCSS.dropDown} ${isDropOpen ? headerCSS.show : ""}`} onMouseEnter={() => setIsDropOpen(true)} onMouseLeave={() => setIsDropOpen(false)}>
        <ul className={headerCSS.ul}> 
            {displayedList.map((item, index) => (
              <li key={index}>
                <Link to={`/page/${index}`} 
                className={headerCSS.h6}>{item}
                </Link>
              </li>
            ))}
        </ul>
  
        <div className={headerCSS.outerImageContainers}>
          <div className={headerCSS.imageContainers}>
          <Link to='/Hoodies'> {/*Image 1 Hoodies*/}
            <img className={headerCSS.img} 
              src={require("../images/try.jpg")} 
              alt="Hoodies"/>
          </Link>
          <h4 className={headerCSS.h4}>Hoodies</h4>
          </div>
          
          {!isSmaller && (
          <div className={headerCSS.imageContainers}>
          <Link to='/Shirts'> {/*Image 2 Shirts*/}
            <img className={headerCSS.img} 
              src={require("../images/try.jpg")} 
              alt="Shirts"/>
          </Link>
          <h4 className={headerCSS.h4}>Shirts</h4>
          </div>
          )}

          <div className={headerCSS.imageContainers}>
          <Link to='/Signup'> {/*Image 3 Trousers*/}
            <img className={headerCSS.img} 
              src={require("../images/try.jpg")} 
              alt="Trousers"/>
          </Link>
          <h4 className={headerCSS.h4}>Trousers</h4>
          </div>
        </div>
  
      </ul>
</div>)}





      <ul className={`${headerCSS.hideBlur} ${isBlackout ? headerCSS.show : ""}`}>
        <ul className={`${headerCSS.backBlur} ${isBlackout ? headerCSS.show : ""}`} onClick={ToggleBackFocus}/>
      </ul>
          </header>
  );
};

export default Header;
