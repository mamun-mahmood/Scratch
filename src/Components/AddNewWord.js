import { Button, Divider, Grid, IconButton, TextField } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
const AddNewWord = ({setTab}) => {
  return (
    <div style={{ padding: "10px"}} className="menu">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "green",
            fontWeight: "800",
            borderRadius: "20px",
            border: "2px solid #0e7b65",
            mb: 1,
          }}
          onClick={() => setTab(0)}
        >
          Cancel
        </Button>
        <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>Add New Word</h4>
        <Button
          variant="outlined"
          sx={{
            color: "green",
            fontWeight: "800",
            borderRadius: "20px",
            border: "2px solid #0e7b65",
            mb: 1,
          }}
        >
          Save
        </Button>
      </div>
      <Divider />
      <div>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Word"
              variant="standard"
              name="word"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Parts of speech"
              variant="standard"
              name="partsOfSpeech"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Meaning"
              variant="standard"
              name="meaning"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Example"
              variant="standard"
              name="exampleSentence"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Mnemonics"
              variant="standard"
              name="mnemonics"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Synonyms"
              variant="standard"
              name="synonyms"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Antonyms"
              variant="standard"
              name="antonyms"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Note"
              variant="standard"
              name="notes"
            />
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              padding: '10px'
            }}
          >
            <h4>Groups:</h4>
            <TextField
            //   fullWidth
              id="standard-basic"
              label="Add new group"
              variant="standard"
              name="group"
            />
            <IconButton>
              <AddIcon />
            </IconButton>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default AddNewWord;
