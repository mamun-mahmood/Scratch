import './App.css';
import Homepage from './Views/Homepage';

function App() {
  return (
    <div className="App" style={{display: "flex", justifyContent: "center",}}>
      <div style={{width: "600px", }}>
      <Homepage />
      </div>
    </div>
  );
}

export default App;
