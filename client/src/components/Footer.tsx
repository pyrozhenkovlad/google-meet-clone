import { Stack } from "@mui/material";
import moment from "moment";
import "moment/locale/uk";
import "../styles/Footer.css";
import { useEffect, useState } from "react";
import {
  CallEndRounded,
  InfoOutlined,
  InterestsOutlined,
  LockOutlined,
  MessageOutlined,
  MicOutlined,
  MoreVertOutlined,
  PanToolOutlined,
  PeopleOutlined,
  PresentToAll,
  VideocamOutlined,
} from "@mui/icons-material";
import DropdownMenu from "./DropdownMenu";

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
          <div className="icons-element">
            <MicOutlined />
          </div>
          <div className="icons-element">
            <VideocamOutlined />
          </div>
          <div className="icons-element">
            <PanToolOutlined />
          </div>
          <div className="icons-element">
            <PresentToAll />
          </div>
          <div className="icons-element">
            <DropdownMenu />
          </div>
          <div className="icons-element end-call">
            <CallEndRounded />
          </div>
        </div>
        <div className="icons-container">
          <div className="additional-icons">
            <InfoOutlined />
          </div>
          <div className="additional-icons">
            <PeopleOutlined />
          </div>
          <div className="additional-icons">
            <MessageOutlined />
          </div>
          <div className="additional-icons">
            <InterestsOutlined />
          </div>
          <div className="additional-icons">
            <LockOutlined />
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default Footer;
