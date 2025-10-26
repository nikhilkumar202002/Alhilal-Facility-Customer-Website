"use client";

import Image from "next/image";
import Logo from "../../../assets/Logo/main-logo.png";
import Styles from "../styles/Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className={Styles.footer}>
        <div className={`container ${Styles.footer_container}`}>
          <div className={Styles.footer_logo_social}>
            <div className={Styles.footer_logo}>
              <Image src={Logo} alt="Alhilal Logo" width={150} height={0} />
            </div>
            <div className={Styles.footer_headline}>
              <h2>
                Empowering property owners with technology-driven management.
              </h2>
            </div>
            <div className={Styles.footer_social_items}>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Instagram">
                <FaXTwitter />
              </a>
            </div>
          </div>

          <div className={Styles.footer_links_items}>
            <div className={Styles.footer_links_item}>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Rooms & Apartments</a>
                </li>
                <li>
                  <a href="#">Tenant Login</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className={Styles.footer_links_item}>
              <h3>Popular Locations</h3>
              <ul>
                <li>
                  <a href="#">Dubai Marina</a>
                </li>
                <li>
                  <a href="#">Business Bay</a>
                </li>
                <li>
                  <a href="#">Bur Dubai</a>
                </li>
                <li>
                  <a href="#">Palm Jumeirah</a>
                </li>
                <li>
                  <a href="#">Abu Dhabi Corniche</a>
                </li>
                <li>
                  <a href="#">Sharjah Al Nahda</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={Styles.footer_contact_items}>
            <div className={Styles.footer_links_item}>
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <a href="">
                    <span>
                      <GrMapLocation />
                    </span>
                    Business Bay, Dubai, UAE
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>
                      <FiPhoneCall />
                    </span>
                    +971-50-123-4567
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>
                      <MdOutlineMarkEmailUnread />
                    </span>
                    hello@staysimple.ae
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>
                      <IoMdTimer />
                    </span>
                    Sun–Fri 9:00 AM – 8:00 PM (Support 24/7)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Styles.footer_bottom}>
          <div className={`container ${Styles.footer_bottom_container}`}>
            <p>© 2024 Alhilal Facility Management. All rights reserved.</p>
          </div>
          {/* <div className={Styles.footer_bottom_divider}>
            <div className={Styles.footer_divider_line}>
              <ul>
                <li>
                  <a href=""></a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
