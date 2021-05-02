import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-table/react-table.css"; // React-Table css
import ReactDOM from "react-dom";
import App from "./scripts/App";
import "./scripts/firebase/init";

// Importing styles
import "./styles/fonts.css";
import "./styles/text.scss";
import "./styles/spacing.css";
import "./styles/responsive.scss";
import "./styles/main.scss";
import "./styles/IDC4U7.scss";

ReactDOM.render(<App />, document.getElementById("root"));
