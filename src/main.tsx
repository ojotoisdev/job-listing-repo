
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the main App component
import "./App.css"; // Import global styles

// Render App inside the root element in index.html
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
