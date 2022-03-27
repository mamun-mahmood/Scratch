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


export default function Homepage() {
  const ref = React.useRef(null);
  const [value, setValue] = React.useState(0);
  const [allWords, setAllWords] = React.useState([]);
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
  return (
    <Box
      sx={{
        pb: 7,
        width: "100%",
        borderLeft: "2px solid #0e7b65",
        borderRight: "2px solid #0e7b65",
        borderRadius: '5px',
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
            <SearchBar allWords={allWords} sx={{ m: 0, p: 0 }} />
          </Paper>
          <CssBaseline />
          <ListAllWords allWords={allWords} setTab={setTab}/>
        </>
      )}
      {tab === "NEWWORD" && <AddNewWord setTab={setTab}/>}
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
            label="Games"
            icon={<SportsEsportsIcon sx={{ height: 30, width: 30 }} />}
            onClick={() => setTab(2)}
          />
          <BottomNavigationAction
            label="Account"
            icon={<Avatar sx={{ height: 30, width: 30 }} />}
            onClick={() => setTab(3)}
          />
          <BottomNavigationAction
            label="Setting"
            icon={<SettingsIcon sx={{ height: 30, width: 30 }} />}
            onClick={() => setTab(4)}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
