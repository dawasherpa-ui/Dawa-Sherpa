import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: 'background.default', height:"90px",display:"grid",placeItems:"center" }}>
            <Typography variant='h6' sx={{color:"text.primary", fontSize: { xs: "17px", sm: "20px", md: "20px" },padding:"20px"}}>&copy; 2023 Dawa Sherpa. All rights reserved.</Typography>
        </Box>
  )
}
