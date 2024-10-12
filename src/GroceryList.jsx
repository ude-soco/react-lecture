import React, { useState } from "react";
import FruitButton from "./FruitButton";
import { useDispatch, useSelector } from "react-redux";
import { addGroceryItemToList } from "./redux/groceryReducer";

export default function GroceryList() {
  // ** Create a state using useState hook *******************
  const [groceryItem, setGroceryItem] = useState("apple");

  // * Store data using useSelector hook
  const groceryListStore = useSelector(
    (state) => state.groceryReducer.groceryList
  );
  // const [groceryList, setGroceryList] = useState([
  //   "banana",
  //   "oats",
  //   "milk",
  //   "chia seeds",
  // ]);
  // * Side effects caused using useDispatch hook
  const dispatch = useDispatch();

  const [groceryListOptions, setGroceryListOptions] = useState([
    { fruitName: "apple", color: "red" },
    { fruitName: "kiwi", color: "green" },
    { fruitName: "papaya", color: "yellow" },
    { fruitName: "plum", color: "purple" },
  ]);

  // ** Custom function to add an item ***********************
  const handleAddItem = () => {
    dispatch(addGroceryItemToList(groceryItem));
    // setGroceryList((prevState) => [...prevState, groceryItem]);
    setGroceryItem("");
  };

  // ** Custom function with parameters to add an item *******
  const handleAddFruit = (fruit) => {
    dispatch(addGroceryItemToList(fruit));
    // setGroceryList((prevState) => [...prevState, fruit]);
  };

  const handleInputFruitName = (event) => {
    const { value } = event.target;
    setGroceryItem(value);
  };

  return (
    <div>
      <div>
        <h2>Grocery List</h2>

        <ul>
          {[...groceryListStore].sort().map((item, index) => (
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
          onClick={
            () => dispatch(addGroceryItemToList(groceryItem))
            // setGroceryList((prevState) => [...prevState, groceryItem])
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
