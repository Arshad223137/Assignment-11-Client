import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../header/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
