import "./index-media.css";
import coupleImg from "../../../images/IMG_2097.jpg";
import catsImg from "/src/images/PXL_20230225_105532811.jpg";
import tanya from "/src/images/tanya-square2.jpg";
import daniel from "/src/images/daniel-square.jpg";
import { useTranslation } from "react-i18next";

const Story = () => {
  const { t } = useTranslation();
  return (
    <div id="story" className="section">
      <h3 id="story-heading">{t("story.heading")}</h3>
      <div className="container">
        <article id="couple">
          <img className="storyImg" id="coupleImg" src={coupleImg}></img>
          <p id="coupleText" className="storyText">
            {t("story.couple")}
          </p>
        </article>
        <article>
          <div id="solo-images">
            <img className="storyImg" id="daniel" src={daniel}></img>
            <img className="storyImg" id="tanya" src={tanya}></img>
          </div>
          <p id="clubText" className="storyText">
            {t("story.solo")}
          </p>
          <p id="partyText" className="storyText">
            {t("story.party")}
          </p>
        </article>
        <article>
          <img className="storyImg" id="cats" src={catsImg}></img>
          <p id="catsText" className="storyText">
            {t("story.cats")}
          </p>
        </article>
      </div>
    </div>
  );
};

export default Story;
