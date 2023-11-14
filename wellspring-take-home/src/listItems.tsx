import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";

import Link from "@mui/material/Link";

export const mainListItems = (
  <React.Fragment>
    <Link href="/" sx={{ textDecoration: "none", color: "unset" }}>
      <ListItemButton>
        <ListItemIcon>
          <HomeOutlinedIcon />
        </ListItemIcon>

        <ListItemText primary="Home" />
      </ListItemButton>
    </Link>
    <Link href="/patients" sx={{ textDecoration: "none", color: "unset" }}>
      <ListItemButton>
        <ListItemIcon>
          <VolunteerActivismOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Patients" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
