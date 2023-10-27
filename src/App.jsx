import React, { useState ,createContext } from 'react'
import Navbar from './layout/Navbar'
import { Box } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './layout/Main'
import Footer from './layout/Footer'
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './Theme.jsx'; // Import your custom themes
export const Toggle=createContext()
function App() {
  const [mode,setMode]=useState("light");
  const modes=()=>{
    mode==="light"?setMode("dark"):setMode("light")
  }
  return (
    <Toggle.Provider value={{modes: modes,mode:mode}}>
    <ThemeProvider theme={mode!="dark"?lightTheme:darkTheme}>
    <>
      <div style={{height:"100vh"}}>
    <Router>
        <Navbar/>
        <Main/>
        <Footer/>
    </Router>
      </div>
    </>
    </ThemeProvider>
  </Toggle.Provider>
  )
}

export default App
