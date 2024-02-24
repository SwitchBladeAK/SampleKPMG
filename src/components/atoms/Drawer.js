import * as React from "react";
import "../../styles/drawer.css";
import { drawerData } from "../../data/DrawerData";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  return (
    <div className="app">
      <div className="drawer">
        <ul>
          <Typography
            variant="span"
            className="text-[rgb(0,0,0,0.5)]"
            sx={{ fontSize: { md: "14px", xl: "16px" } }}
          >
            General
          </Typography>
          {drawerData.General.map((data, index) => (
            <li key={index}>
              <Typography
                variant="span"
                sx={{ fontSize: { md: "12px", xl: "14px" } }}
              >
                {data}
              </Typography>
            </li>
          ))}
          <Typography
            variant="span"
            className="text-[rgb(0,0,0,0.5)]"
            sx={{ fontSize: { md: "14px", xl: "16px" } }}
          >
            Admin Workspace
          </Typography>
          {drawerData.AdminWorkspace.map((data, index) => (
            <li key={index}>
              <Typography
                variant="span"
                sx={{ fontSize: { md: "12px", xl: "14px" } }}
              >
                {data}
              </Typography>
            </li>
          ))}
          <Typography
            variant="span"
            className="text-[rgb(0,0,0,0.5)]"
            sx={{ fontSize: { md: "14px", xl: "16px" } }}
          >
            User Workspace
          </Typography>
          {drawerData.UserWorkspace.map((data, index) => (
            <li key={index}>
              <Typography
                variant="span"
                sx={{ fontSize: { md: "12px", xl: "14px" } }}
              >
                {data}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
