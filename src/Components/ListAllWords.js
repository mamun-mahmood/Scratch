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

export default function CheckboxList() {
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
  const [words, setWords] = useState([
    {
      name: "word1",
      adj: "n/a",
    },
    {
      name: "word2",
      adj: "n/a",
    },
    {
      name: "word3",
      adj: "n/a",
    },
    {
      name: "word4",
      adj: "n/a",
    },
    {
      name: "word1",
      adj: "n/a",
    },
    {
      name: "word2",
      adj: "n/a",
    },
    {
      name: "word3",
      adj: "n/a",
    },
    {
      name: "word4",
      adj: "n/a",
    },
    {
      name: "word1",
      adj: "n/a",
    },
    {
      name: "word2",
      adj: "n/a",
    },
    {
      name: "word3",
      adj: "n/a",
    },
    {
      name: "word4",
      adj: "n/a",
    },
    {
      name: "word1",
      adj: "n/a",
    },
    {
      name: "word2",
      adj: "n/a",
    },
    {
      name: "word3",
      adj: "n/a",
    },
    {
      name: "word4",
      adj: "n/a",
    },
  ]);
  return (
    <List style={{height: "100%"}}>
      {words.map((word, index) => {
        return (
          <div key={index}>
            <ListItem
              key={index}
              secondaryAction={
                <>
                  <IconButton sx={{ ml: 1 }} edge="end" aria-label="comments">
                    <StarIcon fontSize="small" sx={{ color: "#0e7b65" }} />
                  </IconButton>
                  <IconButton sx={{ ml: 1 }} edge="end" aria-label="comments">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                  <IconButton sx={{ ml: 1 }} edge="end" aria-label="comments">
                    <EditIcon fontSize="small" />
                  </IconButton>
                </>
              }
            >
              <ListItemButton onClick={handleToggle(word)}>
                <h4>{word.name}</h4>
                <small style={{ marginLeft: "10px" }}>({word.adj})</small>
                <IconButton>
                  <VolumeUpIcon sx={{ color: "#0e7b65" }} fontSize="small" />
                </IconButton>
              </ListItemButton>
            </ListItem>
            <Divider />
          </div>
        );
      })}
    </List>
  );
}
