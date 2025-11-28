import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Dropdown from "../Dropdown";
import {
  Earn_With_Pathao,
  Help,
  More,
  Services,
} from "../../constants/nav-data.jsx";
import "./MobileNav.css";

function MobileNav() {
  const [isOpenIndex, setIsOpenIndex] = useState("");

  return (
    <div className="container--mobile-nav">
      <nav className="mobile__nav" aria-label="Primary navigation">
        <ul className="mobile__nav-list" role="list">
          {/* Earn with Pathao */}
          <li className="mobile__nav-list-item">
            <button
              onClick={() =>
                isOpenIndex === "Earn with Pathao"
                  ? setIsOpenIndex("")
                  : setIsOpenIndex("Earn with Pathao")
              }
              className="nav__item nav__item--btn"
            >
              Earn with Pathao
              <ChevronDown />
            </button>
            {isOpenIndex === "Earn with Pathao" && (
              <Dropdown className={`p-3`}>
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
                    <a className="p-4 text-[var(--clr-neutral-900)]">
                      Download Pathao Drive App
                    </a>
                  </Dropdown.FooterItem>
                </Dropdown.Footer>
              </Dropdown>
            )}
          </li>
          {/* ==== *** ==== */}

          {/* Services */}
          <li className="mobile__nav-list-item">
            <button
              onClick={() =>
                isOpenIndex === "Services"
                  ? setIsOpenIndex("")
                  : setIsOpenIndex("Services")
              }
              className="nav__item nav__item--btn"
            >
              Services
              <ChevronDown />
            </button>
            {isOpenIndex === "Services" && (
              <Dropdown className={`p-3 h-60 overflow-y-auto`}>
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
                    <div className="flex flex-col items-start gap-y-5">
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
          <li className="mobile__nav-list-item">
            <button
              onClick={() =>
                isOpenIndex === "Help"
                  ? setIsOpenIndex("")
                  : setIsOpenIndex("Help")
              }
              className="nav__item nav__item--btn"
            >
              Help
              <ChevronDown />
            </button>
            {isOpenIndex === "Help" && (
              <Dropdown className={`p-3 h-60 overflow-y-auto`}>
                <Dropdown.List>
                  {Help.map((item, i) => (
                    <Dropdown.Item key={i} className="p-3">
                      <a href="#" className="">
                        <div>{item.icon}</div>
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
          <li className="mobile__nav-list-item">
            <a href="#" className="nav__item nav__item--link">
              Blog
            </a>
          </li>
          {/* ==== *** ==== */}

          {/* More */}
          <li className="mobile__nav-list-item">
            <button
              onClick={() =>
                isOpenIndex === "More"
                  ? setIsOpenIndex("")
                  : setIsOpenIndex("More")
              }
              className="nav__item nav__item--btn"
            >
              More
              <ChevronDown />
            </button>
            {isOpenIndex === "More" && (
              <Dropdown className={`p-3 h-60 overflow-y-auto`}>
                <Dropdown.List>
                  {More.map((item, i) => (
                    <Dropdown.Item className="p-3">
                      <a href="#" className="">
                        <p>{item.text}</p>
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
  );
}

export default MobileNav;
