import React, { useContext } from "react";
import { GroceryListContext } from "./GroceryList";

export default function FruitButton(props) {
  const { fruitName, fruitColor } = props;
  const { handleAddFruit } = useContext(GroceryListContext);
  return (
    <button
      onClick={() => handleAddFruit(fruitName)}
      style={{
        marginLeft: 4,
        marginRight: 4,
        backgroundColor: fruitColor,
      }}
    >
      Add {fruitName}
    </button>
  );
}
