import React, { useState } from "react";

function App() {
  // ** Create a state using useState hook *******************
  const [groceryItem, setGroceryItem] = useState("apple");
  const [groceryList, setGroceryList] = useState([
    "banana",
    "oats",
    "milk",
    "chia seeds",
  ]);

  // ** Custom function to add an item ***********************
  const handleAddItem = () => {
    setGroceryList((prevState) => [...prevState, groceryItem]);
  };

  // ** Custom function with parameters to add an item *******
  const handleAddFruit = (fruit) => {
    setGroceryList((prevState) => [...prevState, fruit]);
  };

  return (
    <>
      <div>
        <h2>Grocery List</h2>

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

        {/* // ** Add grocery item with a custom function ******* */}
        <button onClick={handleAddItem}>Add (Function)</button>
      </div>
      <div style={{ paddingTop: 8 }}>
        {/* // ** Button to add fruits ******* */}
        <button onClick={() => handleAddFruit("apple")}>
          Add orange
        </button>
        <button onClick={() => handleAddFruit("kiwi")}>
          Add Kiwi
        </button>
      </div>
    </>
  );
}

export default App;
