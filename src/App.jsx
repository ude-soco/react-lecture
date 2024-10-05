import React, { useState } from "react";

function App() {
  // ** Create a state using useState hook **
  const [groceryItem, setGroceryItem] = useState("apple");
  const [groceryList, setGroceryList] = useState([
    "banana",
    "oats",
    "milk",
    "chia seeds",
  ]);

  console.log(useState("apple"));

  return (
    <>
      <h2 style={{ color: "red" }}>Grocery List</h2>

      {React.createElement("h2", { style: { color: "red" } }, "Grocery List")}

      <ul>
        {groceryList.sort().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p>Enter item</p>

      {/* // ** Enter name of a grocery item **** */}
      <input
        value={groceryItem}
        onChange={(event) => setGroceryItem(event.target.value)}
      />

      {/* // ** Button to add grocery item ******* */}
      <button
        onClick={() =>
          setGroceryList((prevState) => [...prevState, groceryItem])
        }
      >
        Add
      </button>
    </>
  );
}

export default App;
