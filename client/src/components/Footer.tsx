import { Stack } from "@mui/material";
import moment from "moment";
import "moment/locale/uk";
import "../styles/Footer.css";
import { useEffect, useState } from "react";
import { centerIcons, additionalIcons } from "./data/IconsData";

moment.locale("uk");

const Footer = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("LT"));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="footer-container">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <div className="call_info">
          <div>{time}</div>
          <span style={{ margin: "0 10px" }}>|</span>
          <div>Meeting</div>
        </div>
        <div className="icons-container">
          {centerIcons.map((e, i) => (
            <div key={i} className={e.className}>
              {e.icon}
            </div>
          ))}
        </div>
        <div className="icons-container">
          {additionalIcons.map((e, i) => (
            <div key={i} className={e.className}>
              {e.icon}
            </div>
          ))}
        </div>
      </Stack>
    </div>
  );
};

export default Footer;
