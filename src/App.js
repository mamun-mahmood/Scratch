import { createContext, useEffect, useState } from "react";
import "./App.css";
import Homepage from "./Views/Homepage";
import Login from "./Views/Login";
import jwt_decode from "jwt-decode";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  const saveUser = (e) => {
    setLoggedInUser(jwt_decode(e));
  };
  // useEffect(() => {
  //   let data = localStorage.getItem("w1o2r3d4b5a6n7k8j9w0t3");
  //   if (data) {
  //     saveUser(data);
  //   }
  // }, []);
  // const logOut = () => {
  //   localStorage.removeItem("w1o2r3d4b5a6n7k8j9w0t3");
  //   window.location.href = "/";
  // };
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
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          {loggedInUser ? <Homepage /> : <Login />}
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
