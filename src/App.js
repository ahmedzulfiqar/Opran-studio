import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3500);
  }, []);

  return (
    <div className="App p-0 m-0" data-theme={"dark"}>
      <Home />
      {loading && (
        <div className="absolute">
          <div class="loader">
            <span className="display-5">OPRANSTUDIO</span>
            <span className="display-5">OPRANSTUDIO</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

// country , dirst name , last name , email