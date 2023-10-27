import React, { useState, useRef, useEffect } from "react";
import "../css/chat.css";
import avatarImage from "../image/avatar.jpeg";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Paper, Button, Typography, Badge } from "@mui/material";
import { Howl } from "howler";
import notificationSound from "../assets/discord.mp3"; // Import the sound file
const fetchData = async (text, signal) => {
  const response = await fetch(
    "https://chatbot-production-ae17.up.railway.app/chat",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: text }),
      signal: signal, // Pass the signal to the fetch request
    }
  );
  const data = await response.json();
  return data;
};

function Chat() {
  const [chatHistory, setChatHistory] = useState([]);
  const [input, setInput] = useState("");
  // const [bot, setBot] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [badge, setBadge] = useState(0);
  const [once, setOnce] = useState(0);
  const controllerRef = useRef(null); // Create a ref to hold the AbortController instance
  const chatContainerRef = useRef(null);

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);
  const notification = () => {
    const sound = new Howl({
      src: [notificationSound], // Use the imported sound file
      autoplay: false,
    });
    sound.play();
  };
  useEffect(()=>{
    if(badge >= 1&&open===false){
      notification()
    }
  },[badge])
  useEffect(() => {
    if(once===0){
      const timer = setTimeout(() => {
        setBadge(1);
        setShowMessage(true);
      }, 3000);
      const closetime = setTimeout(() => {
        setShowMessage(false);
      }, 10000);
      return () => {
        clearTimeout(timer);
        clearTimeout(closetime);
      };
    }else{
      setBadge(0)
      setShowMessage(false);
    }
  }, [once]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = async () => {
    if (input.trim() !== "") {
      setLoading(true);
      const userMessage = { text: input, type: "user" };
      setChatHistory((prevHistory) => [...prevHistory, userMessage]);

      // Create a new AbortController instance
      const controller = new AbortController();
      controllerRef.current = controller;

      try {
        const data = await fetchData(input, controller.signal);
        // setBot(`${data && data}`);
        const botResponse = { text: `${data && data}`, type: "bot" };
        setChatHistory((prevHistory) => [...prevHistory, botResponse]);
        setInput("");
      } catch (error) {
        const botResponse = { text: `${error.message}`, type: "bot" };
        setChatHistory((prevHistory) => [...prevHistory, botResponse]);
        setInput("");
      } finally {
        setLoading(false);
        setInput("");
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && loading === false) {
      sendMessage();
    } else if (e.key === "Enter" && loading === true) {
      stopRequest();
      console.log("enter key pressed");
    }
  };

  const stopRequest = () => {
    if (controllerRef.current) {
      controllerRef.current.abort(); // Abort the fetch request
      setLoading(false);
    }
  };

  return (
    <>
      <Paper
        className="chat-container"
        elevation={3}
        sx={
          open
            ? { display: "flex", backgroundColor: "background.default" }
            : { display: "none" }
        }
        square
      >
        <Box
          className="chat-title"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingInline: "10px",
            backgroundColor: "primary.main",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <img src={avatarImage} alt="Avatar" className="avatar" />
            <Typography variant="h6" sx={{ color: "white" }}>
              Dawa
              <span style={{ color: "#b0ceee", fontSize: "17px" }}>(AI)</span>
            </Typography>
          </Box>
          <Button
            onClick={() => {
              setOpen(false);
              setOnce((e)=>e+1)
            }}
          >
            <CloseIcon sx={{ color: "white" }} />
          </Button>
        </Box>
        <Box
          className="chat"
          sx={{ flex: 1, color: "black" }}
          ref={chatContainerRef}
        >
          <img src={avatarImage} alt="Avatar" className="avatar" />
          <div className="message bot">
            Hello! I'm an AI Assistance How may I help you?
          </div>
          {!loading ? (
            chatHistory.map((message, index) => (
              <>
                {message.type === "user" ? null : (
                  <img src={avatarImage} alt="Avatar" className="avatar" />
                )}
                <Box
                  key={index}
                  className={`message ${
                    message.type === "user" ? "user" : "bot"
                  }`}
                >
                  {message.text}
                </Box>
              </>
            ))
          ) : (
            <>
              {chatHistory.map((message, index) => (
                <>
                  {message.type === "user" ? null : (
                    <img src={avatarImage} alt="Avatar" className="avatar" />
                  )}
                  <div
                    key={index}
                    className={`message ${
                      message.type === "user" ? "user" : "bot"
                    }`}
                  >
                    {message.text}
                  </div>
                </>
              ))}
              <img src={avatarImage} alt="Avatar" className="avatar" />
              <div className="message bot">loading..</div>
            </>
          )}
        </Box>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={handleInput}
            onKeyPress={handleKeyPress}
          />
          {!loading ? (
            <Button
              variant="contained"
              sx={{ "&:active": { position: "relative", top: "1px" } }}
              onClick={sendMessage}
              disabled={loading}
            >
              Send
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ "&:active": { position: "relative", top: "1px" } }}
              onClick={stopRequest}
              disabled={!loading}
            >
              Stop
            </Button>
          )}
        </div>
      </Paper>
      {open ? null : (
        <Box
          sx={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            display: "flex",
          }}
        >
          {showMessage && (
            <div className="outmessage user">Hello! How may I help you?</div>
          )}
          <Button
            onClick={() => {
              setOpen(true);
              setBadge(0);
            }}
          >
            <Badge badgeContent={badge} color="error" sx={{ width: "50px" }}>
              <img
                style={{ width: "60px", height: "60px" }}
                src={avatarImage}
                alt="Avatar"
                className="avatar"
              />
            </Badge>
          </Button>
        </Box>
      )}
    </>
  );
}

export default Chat;
