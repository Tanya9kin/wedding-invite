import "./index.css";
import wreath from "../../images/wreath-gif.gif";
import mobileWreath from "../../images/wreath-small.gif";
import MediaQuery from "react-responsive";

const Header = () => {
  return (
    <header>
      <MediaQuery maxWidth={400}>
        <img id="mobile-wreath" src={mobileWreath}></img>
      </MediaQuery>
      <MediaQuery minWidth={401}>
        <img id="wreath" src={wreath}></img>
      </MediaQuery>
      <span id="header_sentence_1">
        We are happy to invite you to celebrate with us
      </span>
      <h1 id="header_sentence_2">Tanya & Daniel</h1>
      <h2 id="header_sentence_3">03 May 2023</h2>
    </header>
  );
};

export default Header;
