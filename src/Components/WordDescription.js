import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
} from "@mui/material";
import { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
const WordDescription = ({ setEditWord, setTab, word, index }) => {
  const [show, setShow] = useState();
  const [ratingValue, setRatingValue] = useState(0);
  // delete a word
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const wordId = {
    id: word._id.toString()
  }
  const handleDeleteWord = (id) => {
    axios
      .post(
        "https://us-east-1.aws.data.mongodb-api.com/app/realmappwordstore-mgzfz/endpoint/deleteWord",
        id
      )
      .then((res) => {
        console.log(res);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <ListItem
        onClick={() => {
          setShow(!show);
        }}
        secondaryAction={
          <>
            <IconButton sx={{ ml: 1 }} edge="end" aria-label="comments">
              <small
                style={{ display: `${ratingValue > 0 ? "block" : "none"}` }}
              >
                {ratingValue}
              </small>
              <StarIcon fontSize="small" sx={{ color: "#0e7b65" }} />
            </IconButton>
            <IconButton
              onClick={handleClickOpen}
              sx={{ ml: 1 }}
              edge="end"
              aria-label="comments"
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => {
                setEditWord(word);
                setTab("editTab");
              }}
              sx={{ ml: 1 }}
              edge="end"
              aria-label="comments"
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </>
        }
      >
        <ListItemButton>
          <small style={{ marginRight: "5px" }}>{index + 1}.</small>
          <h4>{word.word}</h4>
          {/* <small style={{ marginLeft: "10px" }}>({word.adj})</small> */}
          <IconButton>
            <VolumeUpIcon sx={{ color: "#0e7b65" }} fontSize="small" />
          </IconButton>
        </ListItemButton>
      </ListItem>
      {show && (
        <div
          style={{
            padding: "5px 15px",
            display: "flex",
            justifyContent: "space-between",
            animation: "fadeIn 0.4s ease-in-out",
          }}
        >
          <h4>
            Meaning:
            <span>
              <small>{word.meaning}</small>
            </span>
          </h4>
          <Rating
          readOnly
            name="simple-controlled"
            value={ratingValue}
            sx={{ color: "#0e7b65" }}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
          />
        </div>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button
            fullWidth
            variant="outlined"
            sx={{ color: "#0e7b65" }}
            onClick={handleClose}
          >
            No
          </Button>
          <Button
            fullWidth
            variant="outlined"
            sx={{ color: "red" }}
            onClick={() => handleDeleteWord(wordId)}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WordDescription;
