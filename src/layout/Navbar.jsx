import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Avatar,
  Typography,
} from "@mui/material";
import { Toggle } from "../App.jsx";
import logo from "../image/portfolioLogo.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "../css/nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const arr = ["Portfolio", "Skills", "Works", "About","Reviews"];
  const { modes } = useContext(Toggle);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("light");

  const navigationBarHeight = 60; // Adjust this value to match your navigation bar height

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - navigationBarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <List
        component="nav"
        sx={{
          display: "flex",
          height: { xs: "65px", sm: "75px" },
          position: "fixed",
          width: "100vw",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "background.default",
          paddingRight: { md: "10px" },
          zIndex: "999",
        }}
      >
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "text.primary",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <ListItemText>
              <Box>
                <a href="#">
                <Avatar
                  sx={{
                    height: { xs: "60px", sm: "70px" },
                    width: { xs: "60px", sm: "70px" },
                  }}
                  src={logo}
                  alt="logo"
                />
                </a>
              </Box>
            </ListItemText>
            {arr.map((e) => (
              <ListItemButton
                key={e}
                sx={{
                  "&:hover": {
                    borderBottom: "2px solid ",
                    borderColor: "secondary.main",
                  },
                  display: { xs: "none", md: "initial" },
                }}
                onClick={() => scrollToSection(e)}
              >
                <Link to="/" style={mode==="light"?{display:"block",height:"100%",width:"100%",color:"black"}:{display:"block",height:"100%",width:"100%",color:"white"}}>{e}</Link>
              </ListItemButton>
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button
              onClick={() => {
                modes();
                mode === "light" ? setMode("dark") : setMode("light");
              }}
              sx={{
                "&:focus": {
                  backgroundColor: "transparent",
                  outline: "none",
                  border: "none",
                },
                color: "text.primary",
                outline: "none",
                border: "none",
              }}
              disableRipple
            >
              {mode === "dark" ? (
                <LightModeIcon className="lightMode" />
              ) : (
                <DarkModeIcon className="darkMode" />
              )}
            </Button>
            <ListItemButton
              sx={{
                "&:active": { position: "relative", top: "2px" },
                borderRadius: "7px",
                backgroundColor: "primary.main",
                "&:hover": { bgcolor: "secondary.main" },
                fontSize: { xs: "14px", sm: "16px" },
                paddingInline: { xs: "8px", sm: "16px" },
                color: "white",
              }}
            >
             <Link to="/hire" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%", color: "white" }}>
              Hire Me
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ display: { xs: "initial", md: "none" }}}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </ListItemButton>
          </Box>
        </ListItem>
      </List>
      <Drawer open={open} anchor={"bottom"} onClose={() => setOpen(false)}>
        <div
          style={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "background.default",
          }}
        >
          <List>
            {arr.map((e) => (
              <ListItem key={e}>
                <ListItemButton
                  sx={{
                    "&:hover": {
                      borderBottom: "2px solid ",
                      borderColor: "secondary.main",
                    },
                    display: { xs: "initial", md: "none" },
                    height: "40px",
                  }}
                  onClick={() => {
                    setOpen(false);
                    scrollToSection(e);
                  }}
                  disableRipple
                >
                  <Link to="/" style={mode==="light"?{display:"block",height:"100%",width:"100%",color:"black"}:{display:"block",height:"100%",width:"100%",color:"white"}}>{e}</Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
