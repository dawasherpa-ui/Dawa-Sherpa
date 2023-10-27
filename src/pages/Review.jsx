import {
  Box,
  Button,
  Typography,
  Rating,
  DialogActions,
  Dialog,
  DialogContentText,
  DialogTitle,
  DialogContent,
  FormControl,
  TextField,
} from "@mui/material";
import React, { useState, useEffect,useContext } from "react";
import AddIcon from "@mui/icons-material/Create";
import { db } from "../tools/firebase";
import { uid } from "uid";
import { set, ref, onValue } from "firebase/database";
import { Toggle } from "../App";
// import { Label } from "@mui/icons-material";
export default function Review() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  const [value, setValue] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setName("");
    setComment("");
    setValue(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    writeToDatabase();
    // alert( `Review ${name}Submit`);
    setOpen(false);
    setName("");
    setComment("");
    setValue(0);
  };
  //read Database
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setReviews([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          setReviews((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);
  //write to database
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), { name, comment, value });
  };
  const { mode } = useContext(Toggle);
  return (
    <Box
      id="Reviews"
      sx={{
        minHeight: "400px",
        paddingBlock: { xs: "20px", sm: "25px", md: "50px" },
        width: "100%",
        backgroundColor: "background.default",
        display: "grid",
        gridTemplateRows: "50px 1fr",
        placeItems: "center",
      }}
    >
      <Box
        sx={{ display: "flex", width: "90%", justifyContent: "space-between" }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: "17px", sm: "22px", md: "24px" } }}
        >
          {reviews !==null?reviews.length:"0"} Reviews
        </Typography>
        <Button variant="outlined" onClick={handleClickOpen}>
          {" "}
          <AddIcon />
          Give Review
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Create Review</DialogTitle>
          <DialogContent>
            <DialogContentText  sx={{color:"text.primary"}}>
              *Note: This review can be seen by everyone.
            </DialogContentText>
            <FormControl component="form" onSubmit={handleSubmit}>
              <Typography component="label" htmlFor="name">Name:</Typography >
              <TextField
                type="text"
                id="name"
                size="small"
                value={name}
                onChange={(e) => {const inputValue = e.target.value;
                  if (inputValue.length <= 40) {
                    setName(inputValue);
                  }}}
                placeholder="John Waston"
                required
              />
              <Typography component="label" htmlFor="comment">Comment:</Typography >
              <textarea
              id="comment"
                type="text"
                value={comment}
                onChange={(e) => {  const inputComment = e.target.value;
                  if (inputComment.length <= 200) {
                    setComment(inputComment);
                  }}}
                placeholder="Comment.."
                style={mode==="light"?{ resize: 'none',backgroundColor:"transparent",color:"black" }:{ resize: 'none',backgroundColor:"transparent",color:"white" }}
                required
              />
              <Typography component="label" htmlFor="rating">Rating:</Typography >
              <Rating 
              id="rating"
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Create</Button>
              </DialogActions>
            </FormControl>
          </DialogContent>
        </Dialog>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          width: "90vw",
          minHeight: "340px",
        }}
      >
        {reviews.map((data,index) => (
          <Box key={index}>
            <Box
              sx={{
                display: "inline-block",
                maxWidth: "80%",
                marginBottom: "15px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: "14px", sm: "16px" },textTransform: "capitalize" }}
                >
                 @_{data.name}
                </Typography>
                <Rating size="small" value={data.value} readOnly />
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "14px" },
                  paddingLeft: "20px",
                }}
              >
                {data.comment}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
