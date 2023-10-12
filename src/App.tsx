import MainRoutes from "./routes/MainRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import "./App.css";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <MainRoutes />
      </Provider>
    </Router>
  );
}

export default App;
