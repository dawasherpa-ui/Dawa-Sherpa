import { Box, Typography } from '@mui/material'
import React,{ useContext } from 'react'
import Workbg from '../image/workbg.png'
import { Toggle } from "../App";
export default function Work() {
  const { mode } = useContext(Toggle);
  return (
    <Box sx={{height:{xs:"100%",md:"550px"},padding:{xs:"40px",sm:"50px",md:"60px"},backgroundColor:"background.default",display:"grid",gridTemplateColumns:{xs:"1fr",md:"1fr 1fr"},gridTemplateRows:{xs:"45vw 1fr",md:"1fr"},placeItems:"center"}} id="Works">
      <Box sx={{width:{xs:"70vw",md:"40vw"}}}>
        <img src={Workbg} style={mode=="dark"?{ filter: "grayscale(0%) contrast(100%) brightness(80%)",height:"100%",width:"100%" }:{height:"100%",width:"100%"}} alt="image" />
      </Box>
      <Box sx={{textAlign:"center",width:{xs:"80vw",md:"100%"}}}>
        <Typography variant='h4' sx={{fontSize:{xs:"18px",sm:"24px",md:"26px"}}}>#Works</Typography>
        <Typography variant='subtitle' sx={{fontSize:{xs:"14px",sm:"16px"}}}>For the past two years, I've been immersed in the world of web development. While I haven't had the chance to work within a company, I've been busy creating numerous projects. You can explore my <a href='https://github.com/dawasherpa-ui' target='_blank'>Github</a> to see my work. I've also had the opportunity to collaborate with teams on various projects and competetions, contributing to a diverse portfolio.</Typography>
      </Box>
    </Box>
  )
}
