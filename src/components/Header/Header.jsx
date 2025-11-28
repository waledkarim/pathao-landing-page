import { useState } from "react";
import MobileNav from "./MobileNav";
import { ChevronDown, Facebook, Globe, Menu } from "lucide-react";
import "./Header.css";
import {
  Earn_With_Pathao,
  Help,
  More,
  Services,
} from "../../constants/nav-data";
import Dropdown from "../Dropdown";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenIndex, setIsOpenIndex] = useState("");

  return (
    <header className="header">
      <div className="header__wrapper | wrapper">
        <div className="header__left">
          {/* Logo */}
          <a href="#">
            <img
              width={110}
              height={40}
              className="header__logo"
              src="images/logo.svg"
              alt="Company logo"
            />
          </a>
          {/* ==== *** ==== */}

          {/* Desktop nav */}
          <div className="container--desktop-nav">
            <nav className="desktop__nav" aria-label="Primary navigation">
              <ul role="list" className="desktop__nav-list">
                {/* Earn with Pathao */}
                <li className="desktop__nav-list-item">
                  <button
                    onClick={() =>
                      isOpenIndex === "Earn with Pathao"
                        ? setIsOpenIndex("")
                        : setIsOpenIndex("Earn with Pathao")
                    }
                    className="desktop__nav-item desktop__nav-item--btn"
                  >
                    Earn with Pathao
                    <ChevronDown width={15} height={15} />
                  </button>
                  {isOpenIndex === "Earn with Pathao" && (
                    <Dropdown className={`p-3 absolute top-full`}>
                      <Dropdown.List>
                        {Earn_With_Pathao.map((item, i) => (
                          <Dropdown.Item key={i} className="p-3">
                            <a href="#" className="dropdown__link">
                              <div>{item.icon}</div>
                              <div>
                                <p>{item.title}</p>
                                <p>{item.text}</p>
                              </div>
                            </a>
                          </Dropdown.Item>
                        ))}
                      </Dropdown.List>
                      <Dropdown.Footer>
                        <Dropdown.FooterItem>
                          <a className="text-[var(--clr-neutral-900)]">
                            Download Pathao Drive App
                          </a>
                        </Dropdown.FooterItem>
                      </Dropdown.Footer>
                    </Dropdown>
                  )}
                </li>
                {/* ==== *** ==== */}

                {/* Services */}
                <li className="desktop__nav-list-item">
                  <button
                    onClick={() =>
                      isOpenIndex === "Services"
                        ? setIsOpenIndex("")
                        : setIsOpenIndex("Services")
                    }
                    className="desktop__nav-item desktop__nav-item--btn"
                  >
                    Services
                    <ChevronDown width={15} height={15} />
                  </button>
                  {isOpenIndex === "Services" && (
                    <Dropdown
                      className={`p-3 absolute top-full inset-x-0 mx-auto`}
                    >
                      <Dropdown.List>
                        {Services.map((item, i) => (
                          <Dropdown.Item key={i} className="p-3">
                            <a href="#" className="dropdown__link">
                              <div>{item.icon}</div>
                              <div>
                                <p>{item.title}</p>
                                <p>{item.text}</p>
                              </div>
                            </a>
                          </Dropdown.Item>
                        ))}
                      </Dropdown.List>
                      <Dropdown.Footer>
                        <Dropdown.FooterItem className="p-3">
                          <p className="text-[var(--clr-neutral-900)]">
                            Download User App
                          </p>
                          <div className="flex items-center gap-x-5">
                            <img src="images/download-on-playstore.png" />
                            <img src="images/download-on-appstore.png" />
                          </div>
                        </Dropdown.FooterItem>
                      </Dropdown.Footer>
                    </Dropdown>
                  )}
                </li>
                {/* ==== *** ==== */}

                {/* Help */}
                <li className="desktop__nav-list-item">
                  <button
                    onClick={() =>
                      isOpenIndex === "Help"
                        ? setIsOpenIndex("")
                        : setIsOpenIndex("Help")
                    }
                    className="desktop__nav-item desktop__nav-item--btn"
                  >
                    Help
                    <ChevronDown width={15} height={15} />
                  </button>
                  {isOpenIndex === "Help" && (
                    <Dropdown
                      className={`p-3 absolute top-full mx-auto inset-x-0`}
                    >
                      <Dropdown.List>
                        {Help.map((item, i) => (
                          <Dropdown.Item key={i} className="p-3">
                            <a href="#" className="text-base font-normal">
                              <p>{item.text}</p>
                            </a>
                          </Dropdown.Item>
                        ))}
                      </Dropdown.List>
                    </Dropdown>
                  )}
                </li>
                {/* ==== *** ==== */}

                {/* Blog */}
                <li className="desktop__nav-list-item">
                  <a
                    href="#"
                    className="desktop__nav-item desktop__nav-item--link"
                  >
                    Blog
                  </a>
                </li>
                {/* ==== *** ==== */}

                {/* More */}
                <li className="desktop__nav-list-item">
                  <button
                    onClick={() =>
                      isOpenIndex === "More"
                        ? setIsOpenIndex("")
                        : setIsOpenIndex("More")
                    }
                    className="desktop__nav-item desktop__nav-item--btn"
                  >
                    More
                    <ChevronDown width={15} height={15} />
                  </button>
                  {isOpenIndex === "More" && (
                    <Dropdown
                      className={`p-3 absolute top-full inset-x-0 mx-auto`}
                    >
                      <Dropdown.List>
                        {More.map((item, i) => (
                          <Dropdown.Item key={i} className="p-3">
                            <a href="#">
                              <p className="text-base font-normal">
                                {item.text}
                              </p>
                            </a>
                          </Dropdown.Item>
                        ))}
                      </Dropdown.List>
                    </Dropdown>
                  )}
                </li>
                {/* ==== *** ==== */}
              </ul>
            </nav>
          </div>
          {/* ==== *** ==== */}
        </div>

        {/* Language button */}
        <button className="lang__btn">
          <Globe width={17} height={17} />
          ENG
        </button>
        {/* ==== *** ==== */}

        {/* Mobile Buttons */}
        <div className="header__mobile-btns">
          <button className="btn" data-type="inverse" type="button">
            Download App
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="header__menu-btn"
            type="button"
          >
            <Menu width={26} height={26} />
          </button>
        </div>
        {/* ==== *** ==== */}

        {/* Mobile Navigation */}
        {isMenuOpen && <MobileNav />}
        {/* ==== *** ==== */}
      </div>
    </header>
  );
}

export default Header;
