// import { useState } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { CircularProgress, Fab } from "@mui/material";
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
  dataLoading
}) {

  return (
    <List style={{ minHeight: "100vh" }}>
      <div
        style={{
          display: `${dataLoading ? "flex" : "none"}`,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50%",
        }}
      >
        <CircularProgress sx={{ color: "#0e7b65" }} />
      </div>
      <div style={{
        display: `${allWords.length <= 0  && dataLoading === false ? "block" : "none"}`,
        textAlign: 'center',
        marginTop: '50px'
      }}>
        <h4>No word found!</h4>
        <small>Click the plus icon to add word</small>
      </div>
      {allWords.map((word, index) =>
        searchWord ? (
          word.word === searchWord && (
            <div key={index} style={{ animation: "fadeIn 0.4s ease-in-out" }}>
              <WordDescription
              handleClickOpen={handleClickOpen}
              setEditWord={setEditWord}
              setTab={setTab}
              word={word}
              index={index}
            />
            <Divider />
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
              index={index}
            />
            <Divider />
          </div>
        )
      )}
      <Fab
        sx={style}
        style={{ display: `${dataLoading ? "none" : "block"}` }}
        color="primary"
        aria-label="add"
        onClick={() => setTab(5)}
      >
        <AddIcon sx={{ mt: 1 }} />
      </Fab>
    </List>
  );
}
