import {
  CallEndRounded,
  InfoOutlined,
  InterestsOutlined,
  LockOutlined,
  MessageOutlined,
  MicOutlined,
  PanToolOutlined,
  PeopleOutlined,
  PresentToAll,
  VideocamOutlined,
} from "@mui/icons-material";
import DropdownMenu from "../DropdownMenu";

export const centerIcons = [
  {
    icon: <MicOutlined />,
    className: "icons-element",
  },
  {
    icon: <VideocamOutlined />,
    className: "icons-element",
  },
  {
    icon: <PanToolOutlined />,
    className: "icons-element",
  },
  {
    icon: <PresentToAll />,
    className: "icons-element",
  },
  {
    icon: <DropdownMenu />,
    className: "icons-element",
  },
  {
    icon: <CallEndRounded />,
    className: "icons-element end-call",
  },
];

export const additionalIcons = [
  {
    icon: <InfoOutlined />,
    className: "additional-icons",
  },
  {
    icon: <PeopleOutlined />,
    className: "additional-icons",
  },
  {
    icon: <MessageOutlined />,
    className: "additional-icons",
  },
  {
    icon: <InterestsOutlined />,
    className: "additional-icons",
  },
  {
    icon: <LockOutlined />,
    className: "additional-icons",
  },
];
