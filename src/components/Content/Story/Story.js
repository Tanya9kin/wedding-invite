import "./index.css";
import coupleImg from "../../../images/IMG_2097.jpg";
import catsImg from "/src/images/PXL_20230225_105532811.jpg";
import tanya from "/src/images/tanya-square2.jpg";
import daniel from "/src/images/daniel-square.jpg";

const Story = () => {
  return (
    <div id="story" className="section">
      <h3 id="story-heading">Our Stroy</h3>
      <div className="grid-container">
        <img className="storyImg" id="couple" src={coupleImg}></img>
        <span id="coupleText" className="storyText">
          Tanya and Daniel met while dancing Bachata at the Technion.
          <br /> Since then, they haven't stoped dancing together, traveling,
          cooking, eating good food and making wonderful memories. <br /> The
          breathtaking photo you see here, was takes while on a caraven trip to
          north Italy.
        </span>
        <span id="catsText" className="storyText">
          These are their two cats - Fisk and Wesley. Which sadly can't attend
          the ceremony..
        </span>
        <img className="storyImg" id="cats" src={catsImg}></img>
        <img className="storyImg" id="daniel" src={daniel}></img>
        <img className="storyImg" id="tanya" src={tanya}></img>
        <span id="clubText" className="storyText">
          At the latin dance club they both work at, she is an instructor, and
          he is a DJ.
        </span>
        <span id="partyText" className="storyText">
          So you can bet the party will be amazing! ;)
        </span>
      </div>
    </div>
  );
};

export default Story;
