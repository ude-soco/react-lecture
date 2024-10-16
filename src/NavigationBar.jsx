import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavigationBar() {
  // * Use useNavigate hook to navigate between components
  const navigate = useNavigate();

  // * Use useLocation hook to get current url info
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{ marginRight: 4 }} onClick={() => navigate("/")}>
          Grocery List
        </button>
        <button style={{ marginRight: 4 }} onClick={() => navigate("/news")}>
          News section
        </button>
        <button
          style={{ marginRight: 4 }}
          onClick={() => navigate("/news/path")}
        >
          News section (Path)
        </button>
        <button
          style={{ marginRight: 4 }}
          onClick={() => navigate("/news/123")}
        >
          News section (Param)
        </button>
      </div>
    </div>
  );
}
