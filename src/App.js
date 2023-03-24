import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
// import MediaQuery from "react-responsive/types/Component";
import Navigation from "./components/Navigation/Nevigation";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="gradiantBG">
      <Outlet />
      <Navigation />
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
