import React, { useState } from "react";
import FruitButton from "./FruitButton";

function App() {
  // ** Create a state using useState hook *******************
  const [groceryItem, setGroceryItem] = useState("apple");
  const [groceryList, setGroceryList] = useState([
    "banana",
    "oats",
    "milk",
    "chia seeds",
  ]);
  const [groceryListOptions, setGroceryListOptions] = useState([
    { fruitName: "apple", color: "red" },
    { fruitName: "kiwi", color: "green" },
    { fruitName: "papaya", color: "yellow" },
    { fruitName: "plum", color: "purple" },
  ]);

  // ** Custom function to add an item ***********************
  const handleAddItem = () => {
    setGroceryList((prevState) => [...prevState, groceryItem]);
    setGroceryItem("");
  };

  // ** Custom function with parameters to add an item *******
  const handleAddFruit = (fruit) => {
    setGroceryList((prevState) => [...prevState, fruit]);
  };

  const handleInputFruitName = (event) => {
    const { value } = event.target;
    setGroceryItem(value);
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

        <p>Enter item: "{groceryItem}"</p>

        {/* // ** Enter name of a grocery item **** */}
        <input
          value={groceryItem}
          onChange={(event) => handleInputFruitName(event)}
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

      {/* // ** Button to add fruits ******* */}
      <div style={{ paddingTop: 8 }}>
        {groceryListOptions.map((option, index) => {
          return (
            <FruitButton
              key={index}
              fruitName={option.fruitName}
              fruitColor={option.color}
              handleAddFruit={handleAddFruit}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
