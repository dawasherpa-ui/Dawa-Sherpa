import { Box, Typography } from '@mui/material';
import Aboutimg from "../image/aboutme.png";
import React, { useContext } from 'react';
import { Toggle } from "../App";

export default function About() {
  const { mode } = useContext(Toggle);

  return (
    <Box
      sx={{
        height: { xs: "100%", md: "550px" },
        padding: { xs: "20px", sm: "25px", md: "50px" },
        backgroundColor: "background.paper",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gridTemplateRows: { xs: "40vw 1fr", md: "1fr" },
        placeItems: "center",
      }}
      id="About"
    >
      <Box
        sx={{
          width: { xs: "80vw", md: "100%" },
          textAlign: "center",
          order: { xs: 2, md: 1 }, // Change the order for xs screens
        }}
      >
        <Typography variant='h4' sx={{ fontSize: { xs: "18px", sm: "24px", md: "26px"}}}>#About Me</Typography>
        <Typography variant='subtitle' sx={{ fontSize: { xs: "14px", sm: "16px"} }}>
        I'm Dawa Sherpa, a dedicated web developer on a journey of continuous learning and growth. My passion for technology and computer programming has led me to proficiency in HTML, CSS, JavaScript, React.js, and more. I excel in crafting responsive designs and ensuring seamless user experiences. With a strong foundation in version control, I collaborate effectively on various projects. I'm a quick learner, a creative problem-solver, and proficient in multiple languages. My education, coupled with a self-directed learning approach, has fortified my skills. I'm eager to contribute to innovative projects and explore new horizons in the tech world. Feel free to get in touch; I'm excited to connect and collaborate!
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "35vw", md: "20vw" },
          order: { xs: 1, md: 2 }, // Change the order for xs screens
        }}
      >
        <img
          src={Aboutimg}
          style={mode === "dark" ? { filter: "grayscale(0%) contrast(100%) brightness(80%)", height: "100%", width: "100%" } : { height: "100%", width: "100%" }}
          alt="image"
        />
      </Box>
    </Box>
  )
}
