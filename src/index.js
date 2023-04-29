import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// import { createElement } from "react";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const root = document.getElementById("root");
// const main = document.createElement("div");
// root.append(main);

// const p = React.createElement("P");

// const mainAttrs = {
//   id: "main_id",
//   class: "test",
//   children: [p, "hi", " ", "Kiwi"],
// };
// const main = React.createElement("div", mainAttrs);

// ReactDOM.createRoot(root).render(main);

ReactDOM.createRoot(root).render(<App />);
