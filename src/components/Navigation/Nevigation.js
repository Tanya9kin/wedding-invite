import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import "./index.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import globe from "../../images/favicon-32x32.png";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "us",
  },
  {
    code: "he",
    name: "עברית",
    country_code: "il",
  },
  // {
  //   code: "ua",
  //   name: "Українська",
  //   country_code: "ua",
  // },
];

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [selectedLangCode, setSelectedLangCode] = useState(i18n.language);
  const [selectedLang, setSelectedLang] = useState(
    selectedLangCode === "en"
      ? "English"
      : selectedLangCode === "he"
      ? "Hebrew"
      : "Ukrainian"
  );

  useEffect(() => {
    i18n.changeLanguage(selectedLangCode);
    document.querySelector("html").lang = selectedLangCode;
    document.querySelector("html").dir =
      selectedLangCode === "he" ? "rtl" : "ltr";
  }, [selectedLang]);

  const handleClick = (e) => {
    const lang = e.target.id;
    console.log(lang);
    if (selectedLang === lang) {
      return;
    }
    setSelectedLangCode(lang);
    setSelectedLang(
      lang === "en" ? "English" : lang === "he" ? "Hebrew" : "Ukrainian"
    );
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToItinerary = () => {
    document
      .getElementById("itinerary")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav dir="ltr">
      <div className="nav-element">
        <button onClick={handleScrollToItinerary}>
          {t("itinerary.heading")}
        </button>
      </div>
      <div className="nav-element" style={{ color: "grey" }}>
        {/* {t("rsvp_coming_soon")} */}
        <NavLink to="RSVP">{t("RSVP")}</NavLink>
      </div>
      <div className="nav-element" id="lang-menu">
        <img id="selected-lang" src={globe}></img>
        <ul>
          {languages.map(({ code, name, country_code }) => (
            <li
              key={country_code}
              className="lang"
              id={code}
              onClick={handleClick}
            >
              <span
                className={`fi fi-${country_code}`}
                onClick={handleClick}
                id={code}
              ></span>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
