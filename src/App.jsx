import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import GroceryList from "./GroceryList";
import News from "./News";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<GroceryList />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
