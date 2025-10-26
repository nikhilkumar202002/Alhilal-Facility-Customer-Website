"use client";

import { useState, useRef, useEffect } from "react";
import { IoMailUnreadOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowDroprightCircle } from "react-icons/io";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Arabic from "../../../assets/Icons/arabic.png";
import English from "../../../assets/Icons/english.png";
import Logo from "../../../assets/Logo/main-logo.png";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [isLangDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({
    code: "en",
    name: "EN",
    icon: English,
  });
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", name: "EN", icon: English },
    { code: "ar", name: "AR", icon: Arabic },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="container">
      {/* Top Nav */}
      <nav className={styles.topnav}>
        <div className={styles.topnav_container}>
          <div className={styles.topnav_contact_list}>
            <div className={styles.topnav_contact_item}>
              <span>
                <BiPhoneCall />
              </span>{" "}
              <p>+971 50123 4567</p>
            </div>
            <div className={styles.topnav_contact_item}>
              <span>
                <IoMailUnreadOutline />
              </span>{" "}
              <p>hello@staysimple.ae</p>
            </div>
          </div>

          <div className={styles.topnav_buttons}>
            <div className={styles.topnav_button}>
              <a href="">Login</a>
              <a href="">Register ?</a>
            </div>
            <div className={styles.topnav_lang_dropdown} ref={dropdownRef}>
              <button
                className={styles.lang_dropdown_button}
                onClick={() => setLangDropdownOpen(!isLangDropdownOpen)}
                aria-haspopup="true"
                aria-expanded={isLangDropdownOpen}
              >
                <Image
                  width={18}
                  height={18}
                  src={selectedLang.icon}
                  alt={selectedLang.name}
                />
                {selectedLang.name}
                <IoIosArrowDown
                  className={`${styles.chevron} ${
                    isLangDropdownOpen ? styles.chevron_open : ""
                  }`}
                />
              </button>
              {isLangDropdownOpen && (
                <ul className={styles.lang_dropdown_menu}>
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => {
                          setSelectedLang(lang);
                          setLangDropdownOpen(false);
                        }}
                      >
                        <Image
                          width={18}
                          height={18}
                          src={lang.icon}
                          alt={lang.name}
                        />{" "}
                        {lang.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <div className={styles.navbar_logo}>
            <a href="#">
              <Image src={Logo} width={100} height={0} alt="Logo" />
            </a>
          </div>

          {/* Desktop Links */}
          <div className={styles.navbar_links}>
            <a href="#">Home</a>
            <a href="#">Rooms & Apartments</a>
            <a href="#">About</a>
            <a href="#">Offers</a>
            <a href="#">Contact</a>
          </div>

          {/* Book Now */}
          <div className={styles.navbar_buttons}>
            <div className={styles.navbar_button}>
              <a href="#">
                <span>
                  <IoIosArrowDroprightCircle />
                </span>
                Book Now
              </a>
            </div>
          </div>

          {/* Hamburger */}
          <div
            className={styles.navbar_menu_icon}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <RxCross2 size={26} />
            ) : (
              <RxHamburgerMenu size={26} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${styles.mobile_menu} ${
            isMobileMenuOpen ? styles.mobile_menu_open : ""
          }`}
        >
          <div className={styles.navbar_logo}>
            <a href="#">
              <Image src={Logo} width={100} height={0} alt="Logo" />
            </a>
          </div>
          {/* Close button inside menu */}
          <button
            className={styles.mobile_close_btn}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <RxCross2 size={28} />
          </button>

          <a href="#">Home</a>
          <a href="#">Rooms & Apartments</a>
          <a href="#">About</a>
          <a href="#">Offers</a>
          <a href="#">Contact</a>

          <div className={styles.mobile_cta}>
            <a href="#">
              <IoIosArrowDroprightCircle /> Book Now
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
