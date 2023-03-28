import { useTranslation } from "react-i18next";
import "./index.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <p>{t("credits")}</p>
      {/* <img id="flower1" src={flowerBorder}></img> */}
    </footer>
  );
};

export default Footer;
