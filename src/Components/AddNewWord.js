import { Button, Divider, Grid, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
const AddNewWord = ({setTab, userId}) => {
  const date = new Date()
  const [formData, setFormData] = useState({
    _partition: "project=" + userId,
    date_created: date.toISOString()
  })
  const handleChange = (event) => {
    console.log(formData);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = () => {
    axios.post("https://us-east-1.aws.data.mongodb-api.com/app/realmappwordstore-mgzfz/endpoint/addNewWord", formData)
    .then(res => {
      console.log(res);
      setTab(0)
    })
    .catch(err => {
      console.log(err);
    })
  }
  return (
    <div style={{ padding: "10px", animation: "rightfadeIn 0.5s ease-in-out",}}>
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
          onClick={handleSubmit}
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
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Parts of speech"
              variant="standard"
              name="partsOfSpeech"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Meaning"
              variant="standard"
              name="meaning"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Example"
              variant="standard"
              name="exampleSentence"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Mnemonics"
              variant="standard"
              name="mnemonics"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Synonyms"
              variant="standard"
              name="synonyms"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Antonyms"
              variant="standard"
              name="antonyms"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Note"
              variant="standard"
              name="notes"
              onChange={handleChange}
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
              <AddIcon sx={{color: "#0e7b65",width: 35,height: 35, border: '2px solid #0e7b65', borderRadius: '50%'}}/>
            </IconButton>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default AddNewWord;
