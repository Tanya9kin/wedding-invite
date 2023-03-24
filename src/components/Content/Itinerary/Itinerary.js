import "./index.css";
import wazeLogo from "/src/images/Waze_logo_2022.png";
import googleMapsLogo from "/src/images/Google_Maps_icon.png";
import flower from "/src/images/single-flower.png";

const Itinerary = () => {
  return (
    <div className="section">
      <h3>Time and Place</h3>
      <div className="border"></div>
      <div className="hours">
        <img className="decoration" src={flower}></img>
        <div className="hours_element">
          <h4>19:30</h4>
          <p>Hugs & Kisses</p>
        </div>
        <div className="hours_element">
          <h4>20:30</h4>
          <p>Ceremony</p>
        </div>
        <div className="hours_element">
          <h4>21:00</h4>
          <p>Dinner</p>
        </div>
        <div className="hours_element">
          <h4>21:30</h4>
          <p>Party</p>
        </div>
        <img className="decoration" src={flower}></img>
      </div>
      <div className="border"></div>
      <a href="https://www.carmelayagur.co.il/?gclid=CjwKCAjwq-WgBhBMEiwAzKSH6EbPFtYLIDKVITU7BgV1O_i9Da6QszJftARZLV76kzp890-U1EBiUxoCo2wQAvD_BwE">
        <img
          id="venueLogo"
          src="https://www.carmelayagur.co.il/warehouse/dynamic/268894.svg"
        ></img>
      </a>

      <a
        href="https://ul.waze.com/ul?preview_venue_id=23003463.229838026.16034&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
        target="_blank"
      >
        <img
          className="linkToNavigate"
          src={wazeLogo}
          alt="Navigate with Waze"
        ></img>
      </a>

      <a
        href="https://maps.google.com/maps?q=carmela+yagur+israel"
        target="_blank"
      >
        <img
          className="linkToNavigate"
          src={googleMapsLogo}
          alt="Navigate with Google Maps"
        ></img>
      </a>
      <a
        target="_blank"
        href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MGRocHBpY2tvNWNycjc1bTY1aW5sc3JyM3UgdGFueWE5a2luQG0&amp;tmsrc=tanya9kin%40gmail.com"
      >
        <img
          className="linkToNavigate"
          alt="Add to Google Calendar"
          border="0"
          src="https://www.google.com/calendar/images/ext/gc_button1_iw.gif"
        ></img>
      </a>
    </div>
  );
};

export default Itinerary;
