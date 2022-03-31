import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import { CircularProgress, Fab, Rating } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import WordDescription from "./WordDescription";

const style = {
  position: "sticky",
  top: "auto",
  right: 20,
  bottom: 100,
  left: "auto",
  marginLeft: "75%",
  backgroundColor: "#0e7b65",
};
export default function CheckboxList({
  allWords,
  setTab,
  searchWord,
  setEditWord,
  handleClickOpen,
}) {
  const [checked, setChecked] = useState([0]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const [show, setShow] = useState(false);
  const [showDescript, setShowDescript] = useState({});
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <List style={{ minHeight: "100vh" }}>
      <div
        style={{
          display: `${allWords.length ? "none" : "flex"}`,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50%",
        }}
      >
        <CircularProgress sx={{ color: "#0e7b65" }} />
      </div>
      {allWords.map((word, index) =>
        searchWord ? (
          word.word === searchWord && (
            <div key={index} style={{ animation: "fadeIn 0.4s ease-in-out" }}>
              <ListItem
                onClick={() => {
                  setShow(!show);
                  setShowDescript(index);
                }}
                key={index}
                secondaryAction={
                  <>
                    <IconButton sx={{ ml: 1 }} edge="end" aria-label="comments">
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
                  <h4>{word.word}</h4>
                  <small style={{ marginLeft: "10px" }}>({word.adj})</small>
                  <IconButton>
                    <VolumeUpIcon sx={{ color: "#0e7b65" }} fontSize="small" />
                  </IconButton>
                </ListItemButton>
              </ListItem>
              <Divider />
            </div>
          )
        ) : (
          <div key={index} style={{ animation: "fadeIn 0.4s ease-in-out" }}>
            <WordDescription
              handleClickOpen={handleClickOpen}
              setEditWord={setEditWord}
              setTab={setTab}
              word={word}
              handleToggle={handleToggle}
              index={index}
            />
            <Divider />
          </div>
        )
      )}
      <Fab
        sx={style}
        style={{ display: `${allWords.length ? "block" : "none"}` }}
        color="primary"
        aria-label="add"
        onClick={() => setTab(5)}
      >
        <AddIcon sx={{ mt: 1 }} />
      </Fab>
    </List>
  );
}
