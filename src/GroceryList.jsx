import React, { useEffect, useState } from "react";
import FruitButton from "./FruitButton";

export default function GroceryList() {
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

  // * Variation 1: Without dependency array
  // ? Uncomment the lines 38-41. Make sure to comment other useEffects
  useEffect(() => {
    // * This runs after every re-render
    console.log("useEffect executed!");
  });

  // * Variation 2: Empty dependency array
  // ? Uncomment the lines 45-48. Make sure to comment other useEffects
  // useEffect(() => {
  //   // * This runs after the component mounts
  //   console.log("useEffect executed!");
  // }, []);

  // * Variation 3: Dependency array with value(s)
  // ? Uncomment the lines 52-55. Make sure to comment other useEffects
  // useEffect(() => {
  //   // * This runs only when `groceryItem` changes
  //   console.log("useEffect executed!");
  // }, [groceryItem]);

  // * Variation 4: Empty dependecy array and
  // * clean up function
  // ? Uncomment the lines 60-68. Make sure to comment other useEffects
  // useEffect(() => {
  //   // * This runs after the component mounts
  //   console.log("useEffect executed!");

  //   return () => {
  //     // * This runs on unmount
  //     console.log("Clean up function executed!");
  //   };
  // }, []);

  // * Variation 5: Without dependecy array and
  // * clean up function
  // ? Uncomment the lines 73-81. Make sure to comment other useEffects
  // useEffect(() => {
  //   // * useEffect will show only execute,
  //   // * regardless of any state updates.
  //   console.log("useEffect executed!");
  //   return () => {
  //     // * This runs on unmount
  //     console.log("Clean up function executed!");
  //   };
  // });

  return (
    <div>
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
    </div>
  );
}
