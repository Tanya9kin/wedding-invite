import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

const Navigation = () => {
  const [selectedLangCode, setSelectedLandCode] = useState("en");
  const [selectedLang, setSelectedLang] = useState("English");

  const handleClick = (e) => {
    const lang = e.target.id;
    setSelectedLandCode(lang);
    setSelectedLang(
      lang === "en" ? "English" : lang === "he" ? "Hebrew" : "Ukrainian"
    );
  };

  return (
    <nav>
      <div className="nav-element">
        <a href="#">Up</a>
      </div>
      <div className="nav-element">
        <NavLink to="RSVP">RSVP</NavLink>
      </div>
      <div className="nav-element" id="lang-menu">
        <div id="selected-lang">{selectedLang}</div>
        <ul>
          <li>
            <Link className="lang" to="/" id="he" onClick={handleClick}>
              Hebrew
            </Link>
          </li>
          <li>
            <Link className="lang" to="/" id="ua" onClick={handleClick}>
              Ukrainian
            </Link>
          </li>
          <li>
            <Link className="lang" to="/" id="en" onClick={handleClick}>
              English
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
