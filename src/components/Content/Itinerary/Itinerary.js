import "./index.css";
import wazeLogo from "/src/images/Waze_logo_2022.png";
import googleMapsLogo from "/src/images/Google_Maps_icon.png";
import googleCalendar from "/src/images/Google_Calendar_icon.png";
import outlookCalendar from "/src/images/outlook-calendar.png";
import flower from "/src/images/single-flower.png";
import { useTranslation } from "react-i18next";

const Itinerary = () => {
  const { t } = useTranslation();
  return (
    <div className="section" id="itinerary">
      <h3>{t("itinerary.heading")}</h3>
      <div className="border"></div>
      <div className="hours">
        <img className="decoration" src={flower}></img>
        <div className="hours_element">
          <h4>19:30</h4>
          <p>{t("itinerary.hugs_n_kisses")}</p>
        </div>
        <div className="hours_element">
          <h4>20:30</h4>
          <p>{t("itinerary.ceremony")}</p>
        </div>
        <div className="hours_element">
          <h4>21:00</h4>
          <p>{t("itinerary.dinner")}</p>
        </div>
        <div className="hours_element">
          <h4>21:30</h4>
          <p>{t("itinerary.party")}</p>
        </div>
        <img className="decoration" src={flower}></img>
      </div>
      {/* <div className="border"></div> */}

      <div className="section" id="#where">
        <h3>{t("itinerary.navigate")}</h3>
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
        {/* <a
          target="_blank"
          href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MGRocHBpY2tvNWNycjc1bTY1aW5sc3JyM3UgdGFueWE5a2luQG0&amp;tmsrc=tanya9kin%40gmail.com"
        > */}
        {/* <img
            className="linkToNavigate"
            alt="Add to Google Calendar"
            border="0"
            src="https://www.google.com/calendar/images/ext/gc_button1_iw.gif"
          ></img> */}
        {/* </a> */}
      </div>
      <div className="section" id="#save_to_calendar">
        <h3>{t("itinerary.calendar")}</h3>
        <div className="border"></div>
        <a
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230503T163000Z%2F20230503T205900Z&details=https%3A%2F%2Ftanyandaniel.netlify.app%2F&location=%D7%90%D7%95%D7%9C%D7%9D%20%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99%D7%9D%20%D7%9B%D7%A8%D7%9E%D7%9C%D7%94%2C%20%D7%99%D7%92%D7%95%D7%A8&text=%F0%9F%95%BA%F0%9F%92%83Tanya%20%26%20Daniel%20-%20The%20Wedding"
          title="Save Event in Google Calendar"
          className="addToCalendar"
          target="_blank"
        >
          <img className="linkToNavigate" src={googleCalendar}></img>
        </a>
        <a
          href="https://outlook.live.com/calendar/0/deeplink/compose?allday=false&body=https%3A%2F%2Ftanyandaniel.netlify.app%2F&enddt=2023-05-03T20%3A59%3A00%2B00%3A00&location=%D7%90%D7%95%D7%9C%D7%9D%20%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99%D7%9D%20%D7%9B%D7%A8%D7%9E%D7%9C%D7%94%2C%20%D7%99%D7%92%D7%95%D7%A8&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2023-05-03T16%3A30%3A00%2B00%3A00&subject=%F0%9F%95%BA%F0%9F%92%83Tanya%20%26%20Daniel%20-%20The%20Wedding"
          title="Save Event in Outlook Calendar"
          className="addToCalendar"
          target="_blank"
        >
          <img className="linkToNavigate" src={outlookCalendar}></img>
        </a>
      </div>
    </div>
  );
};

export default Itinerary;
