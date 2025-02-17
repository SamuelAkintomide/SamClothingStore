import React, { useEffect, useState } from "react";
import { motion} from "framer-motion";
import accountCSS from '../styles/account.module.scss';

const Account = () => {
    const [isAccount, setAccount] = useState(true);
    const [isOrders, setOrders] = useState(false);
    const [isPreferences, setPreferences] = useState(false);
    const [isAddresses, setAddresses] = useState(false);

    const toggleAccount = () => {
        setAccount(true);
        setOrders(false);
        setPreferences(false);
        setAddresses(false);
        
    };

    const toggleOrders = () => {
        setAccount(false);
        setOrders(true);
        setPreferences(false);
        setAddresses(false);
    };

    const togglePreferences = () => {
        setAccount(false);
        setOrders(false);
        setPreferences(true);
        setAddresses(false);
    };

    const toggleAddresses = () => {
        setAccount(false);
        setOrders(false);
        setPreferences(false);
        setAddresses(true);
    };

  return (
    <main className={accountCSS.main}>
        <h1>Account</h1>
        <div className={accountCSS.options}>
            <div className={accountCSS.left}>
                <button className={accountCSS.button} onClick={toggleAccount}>Account Details</button>
                <button className={accountCSS.button} onClick={toggleOrders}>Orders</button>
                <button className={accountCSS.button} onClick={togglePreferences}>Preferences</button>
                <button className={accountCSS.button} onClick={toggleAddresses}>Delivery Addresses</button>
            </div>
            <div className={accountCSS.right}>
                <div className={`${accountCSS.account} ${isAccount ? accountCSS.show : ""}`}>
                    <h3 className={accountCSS.h3}>Details</h3>
                    <input className={accountCSS.input} type="firstname" placeholder="first name" />
                    <input className={accountCSS.input} type="lastname" placeholder="last name" />
                    <input className={accountCSS.input} type="email" placeholder="email" />
                    <input className={accountCSS.input} type="phone" placeholder="phone number" />
                    <input className={accountCSS.input} type="password" placeholder="Password" />
                    {/*DOB selctor and gender option button*/}
                    <h4>Location</h4>
                    <input className={accountCSS.input} type="province" placeholder="province" />
                    <input className={accountCSS.input} type="city" placeholder="town/city" />
                    <input className={accountCSS.input} type="postcode" placeholder="postcode" />

                <button className={accountCSS.button}>Save</button>
                <button className={accountCSS.button}>Delete Account</button>

                </div>
                <div className={`${accountCSS.orders} ${isOrders ? accountCSS.show : ""}`}>
                <h3 className={accountCSS.h3}>Previous Orders</h3>
                </div>
                <div className={`${accountCSS.preferences} ${isPreferences ? accountCSS.show : ""}`}>
                <h3 className={accountCSS.h3}>Account Preferences</h3>
                {/*Add clothing size drop down (maybe for each type of clothing) and gender selection(THERE ARE ONLY 2 GENDERS)*/}
                <h5 className={accountCSS.h5}>Sign up for news letters</h5>
                <input className={accountCSS.input} type="email" placeholder="email" />
                {/*Button to hear about EITHER mensware of womenswear - button below asking if 
                they would like to recieve updates via text and updates via email*/}
                <button className={accountCSS.button}>Save</button>
                </div>
                <div className={`${accountCSS.addresses} ${isAddresses ? accountCSS.show : ""}`}>
                <h3 className={accountCSS.h3}>Delivery Addresses</h3>
                </div>
            </div>
        </div>
    </main>
  );
};

export default Account;
