import { Box } from '@mui/material'
import React from 'react'
import Notfoundimg from "../image/404.png"
export default function Notfound() {
  return (
    <Box className="Main-page" sx={{backgroundColor:"background.paper",color:"text.primary",width:"100vw",height:"100vh",display:"grid",placeItems:"center"}}>
     <Box sx={{height:{xs:"250px",sm:"400px",md:"600px"}}}>
      <img style={{height:"100%"}} src={Notfoundimg} alt="404" />
    </Box>
    </Box>
  )
}
