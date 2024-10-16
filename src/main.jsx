import ReactDOM from "react-dom/client";
import React from "react";
import { Home } from "./home.jsx";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{<Home />}</React.StrictMode>
);
