import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import GroceryList from "./GroceryList";
import News from "./News";
import { Provider } from "react-redux";
import store from "./redux/storeConfig";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<GroceryList />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
