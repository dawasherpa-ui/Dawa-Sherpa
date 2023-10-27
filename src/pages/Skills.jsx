import { Box, Paper, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import Html from "../image/html.png";
import Css from "../image/css.png";
import Javascript from "../image/javascript.png";
import Bootstrap from "../image/bootstrap.png";
import Tailwind from "../image/tailwind.png";
import Mui from "../image/mui.png";
import Reactimg from "../image/react.png";
import Vite from "../image/vite.png";
import Python from "../image/python.png";
import Flask from "../image/flask.png";
import Git from "../image/git.png";
import Card1 from "../image/card1.png";
import Card2 from "../image/card2.png";
import Card3 from "../image/card3.png";
import { Toggle } from "../App";
import "../css/card.css";
export default function Skills() {
  const array = [
    Html,
    Css,
    Javascript,
    Bootstrap,
    Tailwind,
    Mui,
    Reactimg,
    Vite,
    Python,
    Flask,
    Git,
  ];
  const [cardHover, setCardHover] = useState(0);
  const { mode } = useContext(Toggle);
  return (
    <Box sx={{ height: "100%" }} id="Skills">
      <Paper
        sx={{
          height: { xs: "100px", sm: "130px", md: "160px" },
          width: "100vw",
          backgroundColor: "secondary.second",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "5px", md: "20px" },
        }}
        square
      >
        <Typography
          sx={{
            flex: 3,
            fontSize: { xs: "18px", sm: "24px", md: "26px" },
            textAlign: { xs: "center", sm: "left" },
            fontWeight: { xs: "lighter" },
          }}
          variant="h4"
        >
          #Skills
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "right",
            gap: { xs: "4px", sm: "7px", md: "20px" },
          }}
        >
          {array.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "5.5vw", sm: "6vw", md: "45px" },
                height: { xs: "5.2vw", sm: "6vw", md: "40px" },
              }}
            >
              <img
                style={
                  mode == "dark"
                    ? {
                        filter: "grayscale(10%) contrast(100%) brightness(80%)",
                        height: "100%",
                        width: "100%",
                      }
                    : { height: "100%", width: "100%" }
                }
                src={item}
                alt={item}
              />
            </Box>
          ))}
        </Box>
      </Paper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          height: "100%",
          width: "100%",
          paddingBlock: { xs: "60px", md: "90px" },
        }}
      >
        <Paper
          sx={{
            display: "grid",
            gridTemplateRows: "50px 1fr",
            placeItems: "center",
            height: { xs: "280px", md: "320px" },
            width: { xs: "210px", md: "300px" },
            backgroundColor: "background.default",
          }}
          onClick={()=>{setCardHover(1)}}
          
          onMouseEnter={() => {
            console.log("enter");
            setCardHover(1);
          }}
          onMouseLeave={() => {
            console.log("Left");
            setCardHover(0);
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "18px", sm: "24px", md: "26px" } }}
          >
            Languages
          </Typography>
          <Box sx={{ width: "200px" }}>
            <Box
              className={`card ${
                cardHover === 1 ? "front-hover" : "back-hover"
              }`}
              sx={{
                position: "absolute",
                zIndex: 99,
                backdropFilter: "blur(15px)",
                width: "200px",
              }}
            >
              <Typography variant="subtitle">
                As there are many programming languages. Among them I have expertise in HTML,
                CSS, JavaScript And Python. These languages are mostly popular and related with many IT sectors. Still Learning more...
              </Typography>
            </Box>
            <img
              src={`${Card2}`}
              style={
                mode == "dark"
                  ? {
                      filter: "grayscale(10%) contrast(100%) brightness(80%)",
                      height: "100%",
                      width: "100%",
                    }
                  : { height: "100%", width: "100%" }
              }
              alt="Html"
            />
          </Box>
        </Paper>
        <Paper
          sx={{
            display: "grid",
            gridTemplateRows: "50px 1fr",
            placeItems: "center",
            height: { xs: "280px", md: "320px" },
            width: { xs: "210px", md: "300px" },
            backgroundColor: "background.default",
          }}
          onClick={()=>{setCardHover(2)}}
          
          onMouseEnter={() => {
            console.log("enter");
            setCardHover(2);
          }}
          onMouseLeave={() => {
            console.log("Left");
            setCardHover(0);
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "18px", sm: "24px", md: "26px" } }}
          >
            Frameworks
          </Typography>
          <Box sx={{ width: "200px" }}>
            <Box
              className={`card ${
                cardHover === 2 ? "front-hover" : "back-hover"
              }`}
              sx={{
                position: "absolute",
                zIndex: 99,
                backdropFilter: "blur(15px)",
                width: "200px",
              }}
            >
              <Typography variant="subtitle">
                Based on the programming language I know frameworks like
                React.js, BootStrap, Tailwind, Material UI & Flask. As these frameworks are popular I mostly use it because of it's large community and tools.
              </Typography>
            </Box>
            <img
              src={`${Card1}`}
              style={
                mode == "dark"
                  ? {
                      filter: "grayscale(10%) contrast(100%) brightness(80%)",
                      height: "100%",
                      width: "100%",
                    }
                  : { height: "100%", width: "100%" }
              }
              alt="Frameworks"
            />
          </Box>
        </Paper>
        <Paper
          sx={{
            display: "grid",
            gridTemplateRows: "50px 1fr",
            // placeItems: "center",
            justifyContent:"center",
            alignItems:"center",
            height: { xs: "280px", md: "320px" },
            width: { xs: "210px", md: "300px" },
            backgroundColor: "background.default",
          }}
          onClick={()=>{setCardHover(3)}}
          
          onMouseEnter={() => {
            console.log("enter");
            setCardHover(3);
          }}
          onMouseLeave={() => {
            console.log("Left");
            setCardHover(0);
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "18px", sm: "24px", md: "26px" } }}
          >
            Tools
          </Typography>
          <Box sx={{ width: "200px" }}>
            <Box
              className={`card ${
                cardHover === 3 ? "front-hover" : "back-hover"
              }`}
              sx={{
                position: "absolute",
                zIndex: 99,
                
                backdropFilter: "blur(15px)",
                width: "200px",
              }}
            >
              <Typography variant="subtitle">
                Tools or libraries are the most usefull and fast to learn. Some tools I use most are Git & Github for version control, React Query for fetch and Langchain  for the AI chatbots and more.
              </Typography>
            </Box>
            <img
              src={`${Card3}`}
              style={
                mode == "dark"
                  ? {
                      filter: "grayscale(10%) contrast(100%) brightness(80%)",
                      height: "100%",
                      width: "100%",
                    }
                  : { height: "100%", width: "100%" }
              }
              alt="Tools"
            />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
