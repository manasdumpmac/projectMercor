import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Icon } from "@mui/material";
import Divider from "@mui/material/Divider";

import IconButton from "@mui/material/IconButton";
import av1 from "./avatarImages/av1.png";
import av2 from "./avatarImages/av2.png";
import av3 from "./avatarImages/av3.png";
import av4 from "./avatarImages/av4.png";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DropdownButton from "./dropDownButton";

import addIcon from "./avatarImages/addIcon.svg";
import twoDIcon from "./avatarImages/2dIcon.svg";
import penchilIcon from "./avatarImages/pencilIcon.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.25),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const iconForButtons = {
  Filter: <FilterAltOutlinedIcon />,
  Today: <CalendarMonthOutlinedIcon />,
  Share: <PeopleAltOutlinedIcon />,
};

export default function BodyHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={5} lg={4}>
          <Item elevation={0} textAlign="left">
            <Typography variant="h3" color={"#000000"}>
              Mobile App
              <Icon style={{ marginRight: "0.5rem", marginLeft: "0.5rem" }}>
                <img
                  src={penchilIcon}
                  height={22}
                  width={22}
                  alt="mercor logo"
                />
              </Icon>
              <Icon>
                <img src={twoDIcon} height={22} width={22} alt="mercor logo" />
              </Icon>
            </Typography>
          </Item>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={3} />
          <Grid xs={6} lg={3} />
          <Grid xs={6} lg={3} style={{ paddingRight: "0rem" }}>
            <Item
              elevation={0}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <IconButton size="large" edge="end">
                <Icon>
                  <img src={addIcon} height={22} width={22} alt="mercor logo" />
                </Icon>
                <div style={{ color: "#5030E5", fontSize: "16px" }}>Invite</div>
              </IconButton>
            </Item>
          </Grid>
          <Grid xs={6} lg={3} style={{ paddingLeft: "0rem" }}>
            <Item elevation={0}>
              <AvatarGroup max={5}>
                <Avatar alt="Remy Sharp" src={av1} />
                <Avatar alt="Travis Howard" src={av2} />
                <Avatar alt="Cindy Baker" src={av3} />
                <Avatar alt="Agnes Walker" src={av4} />
                <Avatar alt="Agnes Walker" src={av4} />
                <Avatar alt="Agnes Walker" src={av4} />
              </AvatarGroup>
            </Item>
          </Grid>
        </Grid>
        <Box m={1} pt={1} />
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ fontSize: "12px" }}
        >
          <Grid container spacing={2} sx={{ order: { xs: 2, sm: 1 } }}>
            <Item
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#787486",
                boxShadow: "none",
              }}
            >
              {" "}
              <DropdownButton
                buttonText="Filter"
                iconComponent={iconForButtons["Filter"]}
                isdropdown={true}
              />
            </Item>
            <Box m={1} pt={1} />
            <Item
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#787486",
                boxShadow: "none",
              }}
            >
              {" "}
              <DropdownButton
                buttonText="Today"
                iconComponent={iconForButtons["Today"]}
                isdropdown={true}
              />
            </Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Item
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#787486",
                boxShadow: "none",
                paddingRight: "0.5rem",
              }}
            >
              {" "}
              <DropdownButton
                buttonText="Share"
                iconComponent={iconForButtons["Share"]}
                isdropdown={false}
              />
            </Item>
            <Box m={1} pt={1} />
            <Divider orientation="vertical" flexItem />
            <Box m={1} pt={1} />
            <div style={{padding:"1rem"}}>
              <Icon style={{ marginRight: "0.5rem", marginLeft: "0.5rem" }}>
                <img
                  src={penchilIcon}
                  height={25}
                  width={25}
                  alt="mercor logo"
                />
              </Icon>
              <Icon style={{ marginRight: "0.5rem", marginLeft: "0.5rem" }}>
                <img
                  src={addIcon}
                  height={25}
                  width={25}
                  alt="mercor logo"
                />
              </Icon>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Box m={2} pt={3} />
    </Box>
  );
}
