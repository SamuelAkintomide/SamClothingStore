import React from "react";
import { useState} from "react";
import bagCSS from "../styles/bag.module.scss";

const Basket = () => {
    const [isTempVisible, setIsTempVisible] = useState(false);
    const handleCartClick = () => {
        setIsTempVisible(!isTempVisible);
        // Additional logic for handling cart click
      };

  return (
    <>
        <button className={bagCSS.cart} onClick={handleCartClick}>
            <img className={bagCSS.icon} 
                src={require("../images/bag.png")} 
                alt="Temp-Basket"/>
        </button>
        <div className={`${bagCSS.container} ${isTempVisible ? bagCSS.show : ""}`}>{/*Contains 4*/}
            <div className={bagCSS.top}>{/*contains 2*/}
                
                    <img className={bagCSS.logo} 
                    src={require("../images/Logo.png")} 
                    alt="Logo"/>
                <button className={bagCSS.close} onClick={handleCartClick}>
                    <img className={bagCSS.icon} 
                        src={require("../images/close.png")} 
                        alt="Close"/>
                </button>
            </div>
            <div className={bagCSS.title}>
                <h1 className={bagCSS.h1}>Bag</h1>
            </div>
            <div className={bagCSS.items}>

            </div>
            <div className={bagCSS.purchase}>{/*Contains 3*/}
                <div className={bagCSS.title}>
                    <h1 className={bagCSS.h1}>Summary</h1>
                </div>
                <div className={bagCSS.info}>{/*Contains 3*/}
                    <div className={bagCSS.promoButton}> {/*Drop down button to bring up promo code submission container*/}
                    </div>
                    <div className={bagCSS.details}>
                     {/*Need 2x2 container displaying "Subtotal" -> "total" and "Delivery & Handling" Fee -> "price"*/}
                    </div>
                    <div className={bagCSS.total}> {/*subtotal + delivery charges*/}

                    </div>
                </div>
                <div className={bagCSS.checkout}>

                </div>
            </div>
        </div>
    </>
  );
};

export default Basket;
