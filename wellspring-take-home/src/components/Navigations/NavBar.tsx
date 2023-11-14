import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";

import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <React.Fragment>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <ListItemButton
          selected={isActive("/")}
          sx={{
            "&.Mui-selected": {
              backgroundColor: "primary.main", // Change this to your desired color
              color: "primary.main.contrastText", // Change this to your desired text color
            },
          }}
        >
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </Link>
      <Link to="/patients" style={{ textDecoration: "none", color: "inherit" }}>
        <ListItemButton
          selected={isActive("/patients")}
          sx={{
            "&.Mui-selected": {
              backgroundColor: "primary.main", // Change this to your desired color
              color: "primary.main.contrastText", // Change this to your desired text color
            },
          }}
        >
          <ListItemIcon>
            <VolunteerActivismOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Patients" />
        </ListItemButton>
      </Link>
    </React.Fragment>
  );
}

export default NavBar;
