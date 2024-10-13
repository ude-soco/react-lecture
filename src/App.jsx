import { useState } from "react";

function App() {
  // ** String type ******************************
  const [groceryItem, setGroceryItem] = useState("apple");

  // ** Array ************************************
  const [groceryList, setGroceryList] = useState([
    "banana",
    "oats",
    "milk",
    "chia seeds",
  ]);

  // ** Number ***********************************
  const [countItems, setCountItems] = useState(0);

  // ** Objects **********************************
  const [nameObject, setNameObject] = useState({
    primary: "Awesome grocery list",
    secondary: "Description of the grocery list",
  });

  // ** HTML/CSS *********************************
  const [nameHTML, setNameHTML] = useState(
    <h2 style={{ color: "red" }}>HTML Grocery List</h2>
  );
  // *********************************************

  return (
    <>
      <h2>Grocery List</h2>

      {/* // TODO: Comment line 32 and uncomment line 35 below */}
      {/* {nameHTML} */}

      {/* // TODO: Comment line 32 and uncomment line 38 below */}
      {/* {Object.values(nameObject).map((name, index) => <h3 key={index}>{name}</h3>)} */}

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
