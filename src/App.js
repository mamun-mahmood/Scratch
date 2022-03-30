import { createContext } from "react";
import "./App.css";
import AuthProvider from "./Components/AuthContext";
import Landing from "./Landing";
// import PrivateRoute from "./Views/PrivateRoute";
export const UserContext = createContext();
function App() {
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
          <Landing/>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
