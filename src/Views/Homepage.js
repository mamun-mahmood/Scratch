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
import * as  Realm from "realm-web"
export default function Homepage() {
  const [value, setValue] = React.useState(0);
  const [allWords, setAllWords] = React.useState([])
  const ref = React.useRef(null);
  React.useEffect(async () => {
    const REALM_APP_ID = 'application-0-rwiqy'
    const app = new Realm.App({id: REALM_APP_ID})
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.login(credentials);
      const words = await user.functions.getAllWords();
      setAllWords(words)
      console.log(words);
    } catch (error) {
      console.log(error);
    }
  }, [])
  return (
    <Box
      sx={{ pb: 7, width: "100%", border: "1px solid #0e7b65", mt: 1 }}
      ref={ref}
    >
      <Paper
        sx={{ position: "sticky", top: 0, left: 0, right: 0, zIndex: "1000" }}
      >
        <SearchBar sx={{ m: 0, p: 0 }} />
      </Paper>

      <CssBaseline />
      <ListAllWords />
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
          <BottomNavigationAction label="My List" icon={<ListIcon sx={{ height: 30, width: 30 }}/>} />
          <BottomNavigationAction label="Dictionary" icon={<MenuBookIcon sx={{ height: 30, width: 30 }}/>} />
          <BottomNavigationAction
            label="Games"
            icon={<SportsEsportsIcon sx={{ height: 30, width: 30 }}/>}
          />
          <BottomNavigationAction
            label="Account"
            icon={<Avatar sx={{ height: 30, width: 30 }} />}
          />
          <BottomNavigationAction label="Setting" icon={<SettingsIcon sx={{ height: 30, width: 30 }}/>} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
