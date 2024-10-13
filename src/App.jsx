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
          {/* <Route path="/news" element={<News />} /> */}

          {/* // ? Nested routes */}
          <Route path="/news">
            <Route index element={<News />} />
            
            {/* // ? Nested route with predefined path */}
            <Route path="path" element={<News />} />

            {/* // ? Nested route with dynamic parameter */}
            <Route path=":id" element={<News />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
