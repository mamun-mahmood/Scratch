import { Avatar } from "@mui/material";

const Account = ({loggedInUser, logOut}) => {
  return (
    <div>
      <h4>Account</h4>
      <div>
        <Avatar src={loggedInUser?.picture}/>
        <p>{loggedInUser?.name}</p>
        <small>{loggedInUser?.email}</small>
        <button onClick={logOut}>Logout</button>
      </div>
    </div>
  );
};

export default Account;
