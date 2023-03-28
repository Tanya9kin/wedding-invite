import "./index.css";
import wreath from "../../images/wreath-gif.gif";
import mobileWreath from "../../images/wreath-small.gif";
import MediaQuery from "react-responsive";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      {/* <MediaQuery maxWidth={400}>
          <img id="mobile-wreath" src={mobileWreath}></img>
        </MediaQuery>
        <MediaQuery minWidth={401}>
          <img id="wreath" src={wreath}></img>
        </MediaQuery> */}
      <div id="header_text">
        <p id="header_sentence_1">{t("welcome")}</p>
        <h1 id="header_sentence_2">{t("tanya-n-daniel")}</h1>
        <h2 id="header_sentence_3">{t("date")}</h2>
        <h2 id="invisible-margin"></h2>
      </div>
    </header>
  );
};

export default Header;
