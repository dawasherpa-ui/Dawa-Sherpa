import React from "react";
import Intro from "./Intro";
import Chatbot from "./Chatbot";
import { Box } from "@mui/material";
import Skills from "./Skills";
import Work from "./Work";
import About from "./About";
import Review from "./Review";


function Home() {
  // const [open, setOpen] = useState(false); // Change the initial state to boolean

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setOpen(true); // Update the state to true after the delay
  //   }, 4000);

  //   return () => clearTimeout(timeoutId);
  // }, []);

  return (
    <>
    <Box className="Main-page" sx={{backgroundColor:"background.paper",color:"text.primary",width:"100vw"}}>
      <Intro />
      <Skills/>
      <Work/>
      <About/>
      <Review/>
      </Box>
      <Box sx={{position:"fixed",bottom:"0px",right:{xs:"5px",sm:"5vw"},zIndex:999}}>
      <Chatbot/>
      </Box>
    </>
  );
}

export default Home;
