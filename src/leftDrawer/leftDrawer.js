import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import mercorIcon from "../navBarHeader2/resources/mercorIcon.svg";
import leftArrow from "./resources/leftArrow.svg";
import { Icon } from "@mui/material";
import homeIcon from "./resources/homeIcon.svg";
import messageIcon from "./resources/messageIcon.svg";
import settingIcon from "./resources/settingIcon.svg";
import taskIcon from "./resources/tasksIcon.svg";
import memberIcon from "./resources/membersIcon.svg";
import CircleIcon from "@mui/icons-material/Circle";
import BottomCard from "./bottomCard";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "0.8rem",
  alignItems: "center",
  // necessary for content to be below app bar
  fontSize: "large",
  fontWeight: "bolder",
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const IconForSidebar = {
  Home: (
    <Icon>
      <img src={homeIcon} height={22} width={22} alt="mercor logo" />
    </Icon>
  ),
  Messages: (
    <Icon>
      <img src={messageIcon} height={22} width={22} alt="mercor logo" />
    </Icon>
  ),
  Tasks: (
    <Icon>
      <img src={taskIcon} height={22} width={22} alt="mercor logo" />
    </Icon>
  ),
  Members: (
    <Icon>
      <img src={memberIcon} height={22} width={22} alt="mercor logo" />
    </Icon>
  ),
  Settings: (
    <Icon>
      <img src={settingIcon} height={22} width={22} alt="mercor logo" />
    </Icon>
  ),
};
const colorForSidebarIcons = {
  "Mobile App": "#7AC555",
  "Website Redesign": "#FFA500",
  "Design System": "#E4CCFD",
  Wireframes: "#76A5EA",
};

export default function LeftDrawer(props) {
  const { drawerWidth, open, handleDrawerClose } = props;
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <img src={mercorIcon} height={25} width={25} alt="mercor logo" />
        Project Mercor
        <Box m={1} pt={3} />
        <IconButton onClick={handleDrawerClose} sx={{ marginRight: "auto" }}>
          <img src={leftArrow} height={25} width={25} alt="mercor logo" />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <div style={{ padding: "0.5rem" }}>
        <List>
          {["Home", "Messages", "Tasks", "Members", "Settings"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{IconForSidebar[text]}</ListItemIcon>
                  <ListItemText primary={text} style={{ color: '#787486' }}/>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {[
            "Mobile App",
            "Website Redesign",
            "Design System",
            "Wireframes",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ fontSize: "small" }}>
                  <CircleIcon style={{ fontSize: "small", color: `${colorForSidebarIcons[text]}` }} />
                </ListItemIcon>
                <ListItemText primary={text} style={{ color: '#787486' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box m={2} pt={2} />
        <Box m={2} pt={2} />
        <BottomCard/>
      </div>
    </Drawer>
  );
}
