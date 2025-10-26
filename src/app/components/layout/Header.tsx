'use client'
import React from "react";
import { IoMailUnreadOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
        <nav className={styles.topnav}>
            <div className={styles.topnav_container}>
                <div className={styles.topnav_contact_list}>
                    <div className={styles.topnav_contact_item}><span><BiPhoneCall/></span>+971 50123 4567</div>
                    <div className={styles.topnav_contact_item}><span><IoMailUnreadOutline/></span>hello@staysimple.ae</div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header