import "./index.css";
import wreath from "../../images/wreath-gif.gif";

const Header = () => {
  return (
    <header className="header">
      <img id="wreath" src={wreath}></img>
      <span id="header_sentence_1">
        We are happy to invite you to celebrate with us
      </span>
      <h1 id="header_sentence_2">Tanya & Daniel</h1>
      <h2 id="header_sentence_3">03 May 2023</h2>
    </header>
  );
};

export default Header;
