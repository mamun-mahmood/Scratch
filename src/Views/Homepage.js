import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import ListAllWords from "../Components/ListAllWords";
import SearchBar from "../Components/SearchBar";
import ListIcon from "@mui/icons-material/List";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SettingsIcon from "@mui/icons-material/Settings";
import * as Realm from "realm-web";
import AddNewWord from "../Components/AddNewWord";
import EditWord from "../Components/EditWord";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Fab } from "@mui/material";
import Dictionary from "./Dictionary";
import Practice from "./Practice";
import Account from "./Account";
import Setting from "./Setting";
export default function Homepage({loggedInUser, logOut}) {
  const ref = React.useRef(null);
  const [value, setValue] = React.useState(0);
  const [allWords, setAllWords] = React.useState([]);
  const [searchWord, setSearchWord] = React.useState("")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    const REALM_APP_ID = "realmappwordstore-mgzfz";
    const app = new Realm.App({ id: REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const words = await user.functions.getAllWords();
      setAllWords(words);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const [tab, setTab] = React.useState(0);
  const [editWord, setEditWord] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        pb: 7,
        width: "100%",
        borderTop: "3px solid #0e7b65",
        borderLeft: "3px solid #0e7b65",
        borderRight: "3px solid #0e7b65",
        borderRadius: '10px',
        mt: 1,
        backgroundColor: "white",
      }}
      ref={ref}
    >
      {tab === 0 && (
        <>
          {" "}
          <Paper
            sx={{
              position: "sticky",
              top: 0,
              left: 0,
              right: 0,
              zIndex: "1000",
            }}
          >
            <SearchBar allWords={allWords} searchWord={searchWord} setSearchWord={setSearchWord} sx={{ m: 0, p: 0 }} />
          </Paper>
          <CssBaseline />
          <ListAllWords allWords={allWords} handleClickOpen={handleClickOpen} setEditWord={setEditWord} searchWord={searchWord} setTab={setTab}/>
        </>
      )}
      {tab === 5 && <AddNewWord setTab={setTab}/>}
      {tab === "editTab"  && <EditWord  editWord={editWord} setTab={setTab}/>}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle fullWidth id="alert-dialog-title">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent>
        </DialogContent>
        <DialogActions>
          <Button fullWidth variant="outlined" sx={{color: '#0e7b65',}} onClick={handleClose}>No</Button>
          <Button fullWidth variant="outlined" sx={{color: 'red',}} onClick={handleClose} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      {tab === 1 && <Dictionary loggedInUser={loggedInUser}/>}
      {tab === 2 && <Practice loggedInUser={loggedInUser}/>}
      {tab === 3 && <Account loggedInUser={loggedInUser} logOut={logOut}/>}
      {tab === 4 && <Setting loggedInUser={loggedInUser}/>}
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="My List"
            icon={<ListIcon sx={{ height: 30, width: 30 }} />}
            onClick={() => setTab(0)}
          />
          <BottomNavigationAction
            label="Dictionary"
            icon={<MenuBookIcon sx={{ height: 30, width: 30 }} />}
            onClick={() => setTab(1)}
          />
          <BottomNavigationAction
            label="Practice"
            icon={<SportsEsportsIcon sx={{ height: 30, width: 30 }} />}
            onClick={() => setTab(2)}
          />
          <BottomNavigationAction
            label="Profile"
            icon={<Avatar sx={{ height: 30, width: 30 }} />}
            onClick={() => setTab(3)}
          />
          {/* <BottomNavigationAction
            label="Setting"
            icon={<SettingsIcon sx={{ height: 30, width: 30 }} />}
            onClick={() => setTab(4)}
          /> */}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
