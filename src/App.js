import { createContext} from "react";
import "./App.css";
import Homepage from "./Views/Homepage";
import Login from "./Views/Login";
import AuthProvider, { useAuth } from "./Components/AuthContext";
export const UserContext = createContext();
function App() {
  const {currentUser} = useAuth()
  console.log(currentUser);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <div style={{ width: "600px" }}>
        <AuthProvider>
          {currentUser ? <Homepage loggedInUser={currentUser} /> : <Login />}
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
