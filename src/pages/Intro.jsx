import { Box, Typography, Button, Avatar } from "@mui/material";
import React, { useContext } from "react";
import Avatarimg from "../image/avatar.jpeg";
import Introbg from "../image/introbg.png";
import { TypeAnimation } from "react-type-animation";
import { Toggle } from "../App";
// import { Avatar } from "@mui/icons-material";
export default function Intro() {
  const { mode } = useContext(Toggle);
  return (
    <Box id="Portfolio"
      sx={{
        height: {xs:"520px",md:"620px"},
        width: "100%",
        display: "flex",
        backgroundImage: `url(${Introbg})`,
        backgroundPosition: "top",
        backgroundSize: "700px",
        backgroundRepeat: "repeat-x",
      }}
    >
      <Box
        sx={{
          flex: {xs:2,md:1},
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <Typography variant="h4" sx={{fontSize:{xs:"17px",sm:"24px",md:"26px"}}}>
          Hello ,I'm{" "}
          <Typography
            component="span"
            variant="h4"
            sx={{ color: "primary.main",fontSize:{xs:"17px",sm:"24px",md:"26px"} }}
          >
            Dawa Sherpa
          </Typography>
        </Typography>
        <Box sx={{fontSize:{xs:"8px",sm:"16px",md:"20px"}}}>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "A Web Developer.",
            1000,
            "A Programmer.",
            1000,
            "A Web Designer.",
            1000,
            "A Freelancer.",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
        </Box>
        <Button
          variant="contained"
          sx={{
            "&:active": { position: "relative", top: "2px" },
            borderRadius: "7px",
            backgroundColor: "primary.main",
            "&:hover": { bgcolor: "secondary.main" },
            
          }}
        >
          Hire Me
        </Button>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            borderRadius: "46% 54% 61% 39% / 71% 68% 32% 29% ",
            height: { xs: "90px", sm: "200px", md: "300px" },
            width: { xs: "90px", sm: "200px", md: "300px" },
            boxShadow: `11px 21px 110px -30px ${
              mode === "dark" ? "gray" : "black"
            }`,
            ...(mode === "dark"
              ? { filter: "grayscale(10%) contrast(100%) brightness(80%)" }
              : { filter: "grayscale(10%) contrast(100%) brightness(100%)" }),
          }}
          src={Avatarimg}
          alt="dawa"
        />
      </Box>
    </Box>
  );
}
