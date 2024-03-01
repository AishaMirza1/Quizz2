import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QuizzProvider } from "./context/quizzContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QuizzProvider>
    <App />
  </QuizzProvider>
);
