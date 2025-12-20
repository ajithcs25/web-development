import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    //  MUST BE HERE
    <div className={`app ${theme}`}>
      <Navbar />
      <h1>Context API Theme</h1>
      <p>Click toggle to change theme</p>
    </div>
  );
}

export default App;
