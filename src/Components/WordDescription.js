import { Rating } from "@mui/material";
import { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const WordDescription = ({handleClickOpen, setEditWord, setTab, word, handleToggle, index}) => {
    const [show, setShow] = useState()
    const [ratingValue, setRatingValue] = useState(0);
    return (
        <>
            <ListItem
              onClick={() => {
                setShow(!show);
              }}
              secondaryAction={
                <>
                  <IconButton sx={{ ml: 1 }} edge="end" aria-label="comments">
                    <small style={{display: `${ratingValue > 0 ? "block" : "none"}`}}>{ratingValue}</small>
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
              <ListItemButton onClick={handleToggle(word)}>
                <small style={{ marginRight: "5px", }}>{index+1}.</small>
                <h4>{word.word}</h4>
                {/* <small style={{ marginLeft: "10px" }}>({word.adj})</small> */}
                <IconButton>
                  <VolumeUpIcon sx={{ color: "#0e7b65" }} fontSize="small" />
                </IconButton>
              </ListItemButton>
            </ListItem>
            {show && <div
              style={{
                padding: "5px 15px",
                display: 'flex',
                justifyContent: 'space-between',
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
              
                name="simple-controlled"
                value={ratingValue}
                sx={{ color: "#0e7b65" }}
                onChange={(event, newValue) => {
                  setRatingValue(newValue);
                }}
              />
            </div>}
        </>
    );
};

export default WordDescription;