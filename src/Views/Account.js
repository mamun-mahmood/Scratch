import { Avatar } from "@mui/material";
import { useAuth } from "../Components/AuthContext";

const Account = () => {
  const { logout, currentUser } = useAuth();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        marginTop: "20%",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h4>Account</h4>
        <div style={{ display: "flex", justifyContent: "center", marginTop: '10px'}}>
          <Avatar sx={{ width: 100, height: 100 }} src={currentUser?.photoURL} />
        </div>
        <p style={{fontWeight: '700', fontSize: '18px'}}>{currentUser?.displayName}</p>
        <small>{currentUser?.email}</small> <br />
        <button onClick={logout} style={{backgroundColor: '#009788', padding: '10px 20px', borderRadius: "20px", fontSize: '16px', color: "white",marginTop: '10px', cursor: 'pointer'}}>Logout</button>
      </div>
    </div>
  );
};

export default Account;
