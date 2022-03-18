import React from "react";
import ListAllWords from "../Components/ListAllWords";
import AddIcon from "@mui/icons-material/Add";
const Homepage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "95vh",
        marginTop: "1vh",
        backgroundColor: "white",
        marginBottom: "1vh"
      }}
    >
      <div className="scrollBar"
        style={{
          height: "100%",
          overflowY: "scroll",
        }}
      >
        <h4>Homepage</h4>
        <ListAllWords />
        <div>
      </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          marginRight: "8%",
        }}
      >
        <button
          style={{
            marginTop: "-11%",
            position: "fixed",
            backgroundColor: "#0e7b65",
            color: "white",
            borderRadius: "20px",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <AddIcon />
          <span>New Word</span>
        </button>
      </div>
      {/* bottom bar */}
     
    </div>
  );
};

export default Homepage;
