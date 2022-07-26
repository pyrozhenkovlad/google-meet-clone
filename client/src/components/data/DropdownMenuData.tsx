import {
  AnnouncementOutlined,
  AutoAwesome,
  BorderColorOutlined,
  ClosedCaption,
  DashboardOutlined,
  FullscreenOutlined,
  PhoneForwardedRounded,
  QueryStatsOutlined,
  RadioButtonCheckedOutlined,
  ReportGmailerrorredOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import Divider from "@mui/material/Divider";

export const dropdownData = [
  {
    icon: <BorderColorOutlined />,
    title: "Дошка для конференцій",
  },
  {
    icon: <RadioButtonCheckedOutlined />,
    title: "Записувати зустріч",
    divide: <Divider sx={{ my: 0.5 }} />,
  },
  {
    icon: <DashboardOutlined />,
    title: "Змінити макет",
  },
  {
    icon: <FullscreenOutlined />,
    title: "Повноекранний режим",
  },
  {
    icon: <AutoAwesome />,
    title: "Застосувати візуальні ефекти",
  },
  {
    icon: <ClosedCaption />,
    title: "Увімкнути субтитри",
  },
  {
    icon: <PhoneForwardedRounded />,
    title: "Використовувати телефон для передачі зв'язку",
    divide: <Divider sx={{ my: 0.5 }} />,
  },
  {
    icon: <AnnouncementOutlined />,
    title: "Повідомити про проблему",
  },
  {
    icon: <ReportGmailerrorredOutlined />,
    title: "Повідомити про порушення",
  },
  {
    icon: <QueryStatsOutlined />,
    title: "Вирішення проблема і довідка",
  },
  {
    icon: <SettingsOutlined />,
    title: "Налаштування",
  },
];
