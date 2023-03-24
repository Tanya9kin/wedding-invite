import Story from "./Story/Story";
import Itinerary from "./Itinerary/Itinerary";
import { useEffect, useState } from "react";

const Content = () => {
  const formWorking = false;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={
        isVisible
          ? { opacity: 1, transition: "1s opacity ease-out" }
          : { opacity: 0 }
      }
    >
      <Story />
      <Itinerary />
    </div>
  );
};

export default Content;
