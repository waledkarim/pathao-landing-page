import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Platform, Earn, Merchant, Help } from "../../constants/footer-data";
import "./Footer.css";

function Footer() {
  const [isOpenIndex, setIsOpenIndex] = useState("");

  return (
    <footer className="footer">
      <nav className="footer__nav" aria-label="Secondary navigation">
        <ul className="footer__nav-list wrapper" role="list">
          {/* Platform */}
          <li className="footer__nav-list-item">
            <button
              onClick={() =>
                isOpenIndex === "Platform"
                  ? setIsOpenIndex("")
                  : setIsOpenIndex("Platform")
              }
              className="footer__nav-item font-bold text-2xl"
            >
              Platform
              <ChevronDown />
            </button>
            {isOpenIndex === "Platform" && (
              <ul role="list" className="footer__dropdown">
                {Platform.map((item, i) => (
                  <li key={i} className="footer__dropdown-item">
                    <a href="#">{item.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* ==== *** ==== */}

          {/* Earn */}
          <li className="footer__nav-list-item">
            <button
              onClick={() =>
                isOpenIndex === "Earn"
                  ? setIsOpenIndex("")
                  : setIsOpenIndex("Earn")
              }
              className="footer__nav-item font-bold text-2xl"
            >
              Earn
              <ChevronDown />
            </button>
            {isOpenIndex === "Earn" && (
              <ul role="list" className="footer__dropdown">
                {Earn.map((item, i) => (
                  <li key={i} className="footer__dropdown-item">
                    <a href="#">{item.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* ==== *** ==== */}

          {/* Merchant */}
          <li className="footer__nav-list-item">
            <button
              onClick={() =>
                isOpenIndex === "Merchant"
                  ? setIsOpenIndex("")
                  : setIsOpenIndex("Merchant")
              }
              className="footer__nav-item font-bold text-2xl"
            >
              Merchant
              <ChevronDown />
            </button>
            {isOpenIndex === "Merchant" && (
              <ul role="list" className="footer__dropdown">
                {Merchant.map((item, i) => (
                  <li key={i} className="footer__dropdown-item">
                    <a href="#">{item.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* ==== *** ==== */}

          {/* Help */}
          <li className="footer__nav-list-item">
            <button
              onClick={() =>
                isOpenIndex === "Help"
                  ? setIsOpenIndex("")
                  : setIsOpenIndex("Help")
              }
              className="footer__nav-item font-bold text-2xl"
            >
              Help
              <ChevronDown />
            </button>
            {isOpenIndex === "Help" && (
              <ul role="list" className="footer__dropdown">
                {Help.map((item, i) => (
                  <li key={i} className="footer__dropdown-item">
                    <a href="#">{item.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* ==== *** ==== */}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
