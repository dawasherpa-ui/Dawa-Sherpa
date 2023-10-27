import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import Hireimg from "../image/hireimg.png";
import Facebook from "../image/facebook.png";
import Telegram from "../image/telegram.png";
import Instagram from "../image/instagram.png";
import Whatsapp from "../image/whatsapp.png";
import { Toggle } from "../App";

export default function Hire() {
  const { mode } = useContext(Toggle);
  return (
    <Box
      className="Main-page"
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
        paddingTop: "60px",
        width: "100vw",
        height: {xs:"100%",md:"100vh",}
      }}
    >
      <Box
        sx={{
          height: { xs: "100%", md: "550px" },
          width: "100%",
          padding: { xs: "20px", sm: "25px", md: "50px" },
          backgroundColor: "background.default",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gridTemplateRows: { xs: "45vh 1fr", md: "1fr" },
          placeItems: "center",
        }}
      >
        <Box sx={{ width: { xs: "40vh", md: "40vw" } }}>
          <img
            src={Hireimg}
            style={
              mode == "dark"
                ? {
                    filter: "grayscale(0%) contrast(100%) brightness(80%)",
                    height: "100%",
                    width: "100%",
                  }
                : { height: "100%", width: "100%" }
            }
            alt="image"
          />
        </Box>
        <Box
          sx={{
            textAlign: "center",
            width: { xs: "80vw", md: "100%" },
            color: "text.primary",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: "18px", sm: "24px", md: "26px" } }}
          >
            #Hire
          </Typography>
          <Typography
            variant="subtitle"
            sx={{ fontSize: { xs: "14px", sm: "16px" } }}
          >
            As a passionate web developer I'm ready to bring your digital vision
            to life. With expertise in HTML, CSS, JavaScript, React.js, and
            more, I'm well-equipped to create responsive, user-friendly
            websites. My dedication, problem-solving abilities, and quick
            learning make me an ideal addition to your team. Let's turn your
            concepts into reality. Contact me today, and let's build something
            amazing together!
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              gap:{xs:"10px",md:"20px"},
              marginTop:"20px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "5.5vw", sm: "4vw", md: "40px" },
                height: { xs: "5.5vw", sm: "4vw", md: "40px" },
              }}
            >
              <img style={{width:"100%",height:"100%"}} src={Facebook} alt="facebook" />
            </Box>
            <Box
              sx={{
                width: { xs: "5.5vw", sm: "4vw", md: "40px" },
                height: { xs: "5.2vw", sm: "4vw", md: "40px" },
              }}
            >
              <img style={{width:"100%",height:"100%"}} src={Instagram} alt="facebook" />
            </Box>
            <Box
              sx={{
                width: { xs: "5.5vw", sm: "4vw", md: "40px" },
                height: { xs: "5.5vw", sm: "4vw", md: "40px" },
              }}
            >
              <img style={{width:"100%",height:"100%"}} src={Telegram} alt="facebook" />
            </Box>
            <Box
              sx={{
                width: { xs: "5.5vw", sm: "4vw", md: "40px" },
                height: { xs: "5.5vw", sm: "4vw", md: "40px" },
              }}
            >
              <img style={{width:"100%",height:"100%"}} src={Whatsapp} alt="" />
            </Box>
            {/* <Box
              sx={{
                width: { xs: "5.5vw", sm: "4vw", md: "40px" },
                height: { xs: "5.5vw", sm: "4vw", md: "40px" },
              }}
            >
              <img style={{width:"100%",height:"100%"}} src={} alt="" />
            </Box> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
