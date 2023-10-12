import MainRoutes from "./routes/MainRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}

export default App;
