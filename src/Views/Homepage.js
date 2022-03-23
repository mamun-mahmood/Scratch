import React from "react";
import ListAllWords from "../Components/ListAllWords";
import AddIcon from "@mui/icons-material/Add";
import Select from "react-select";
const customStyles = {
  control: (base, state) => ({
    ...base,
    fontSize: 16,
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    cursor: "text",
    borderRadius: "5px",
    backgroundColor: "#0e7b65",
    textAlign: "center",
  }),

  option: (styles, { isFocused }) => {
    return {
      ...styles,
      cursor: "pointer",
      backgroundColor: isFocused ? "#0e7b65" : "white",
      color: isFocused ? "white" : "black",
    };
  },

  input: (styles) => ({
    ...styles,
    color: "white",
  }),

  menu: (styles) => ({
    ...styles,
    marginTop: -3,
    boxShadow: "none",
    borderRadius: 0,
    backgroundColor: "#0e7b65",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderLeft: "4px solid #0e7b65",
    borderRight: "4px solid #0e7b65",
    animation: "fadeIn 0.2s ease-in-out",
  }),

  singleValue: (styles) => ({
    ...styles,
    color: "white",
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "white",
      fontSize: "14px",
    };
  },
};
const Homepage = () => {
  const aquaticCreatures = [
    { label: "Apple", value: "Apple" },
    { label: "Ball", value: "Ball" },
    { label: "Cat", value: "Cat" },
    { label: "Dog", value: "Dog" },
    { label: "Elon Musk", value: "Elon Musk" },
    { label: "Taylor Swift", value: "Taylor Swift" },
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "95vh",
        marginTop: "1vh",
        backgroundColor: "white",
        marginBottom: "1vh",
      }}
    >
      <div style={{ width: "95%", marginLeft: "2.5%" }}>
        <Select
          classNamePrefix="menu"
          styles={customStyles}
          placeholder="Search for word..."
          options={aquaticCreatures}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
        />
      </div>
      <div
        className="scrollBar"
        style={{
          height: "100%",
          overflowY: "scroll",
        }}
      >
        <ListAllWords />
        <div></div>
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
