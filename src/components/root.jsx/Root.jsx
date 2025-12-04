import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../header/NavBar";
import { useEffect, useState } from "react";

const Root = () => {
  const [time, setTime] = useState("");
  const [color, setColor] = useState(false);

  // Time update
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  // Color change
  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prev) => !prev); 
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative">
      <h1
        className={`fixed bottom-8 left-4 text-2xl z-50 font-mono font-extrabold transition-all duration-500
    ${color ? "text-primary" : ""}
    opacity-40 hover:opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,1)]
   `}
      >
        {time}
      </h1>

      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
