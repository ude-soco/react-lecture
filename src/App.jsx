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

      {/* // ** Still issues related to redundancy ******* */}
      {/* <div style={{ paddingTop: 8 }}>
        <FruitButton
          fruitName="apple"
          fruitColor="red"
          handleAddFruit={handleAddFruit}
        />
        <FruitButton
          fruitName="kiwi"
          fruitColor="green"
          handleAddFruit={handleAddFruit}
        />
        <FruitButton
          fruitName="papaya"
          fruitColor="yellow"
          handleAddFruit={handleAddFruit}
        />
        <FruitButton
          fruitName="plum"
          fruitColor="purple"
          handleAddFruit={handleAddFruit}
        />
      </div> */}

      {/* // ** Issues related to redundancy, handcoded, and flexibility  */}
      {/* <div style={{ paddingTop: 8 }}>
        <button 
          onClick={() => handleAddFruit("apple")} 
          style={{marginLeft: 4, marginRight: 4, backgroundColor: "orange"}}>
          Add orange
          </button>
          <button 
          onClick={() => handleAddFruit("kiwi")} 
          style={{marginLeft: 4, marginRight: 4, backgroundColor: "green"}}>
          Add Kiwi
          </button>
          <button 
          onClick={() => handleAddFruit("papaya")} 
          style={{marginLeft: 4, marginRight: 4, backgroundColor:  "yellow"}}>
          Add Papaya
          </button>
          <button 
          onClick={() => handleAddFruit("plum")} 
          style={{marginLeft: 4, marginRight: 4, backgroundColor: "purple"}}>
          Add Plum
        </button>
      </div> */}
    </>
  );
}

export default App;
