import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{ marginRight: 4 }} onClick={() => navigate("/")}>
          Grocery List
        </button>
        <button style={{ marginRight: 4 }} onClick={() => navigate("/news")}>
          News section
        </button>
      </div>
    </div>
  );
}
