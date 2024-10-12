import React from "react";

export default function FruitButton(props) {
  const { fruitName, fruitColor, handleAddFruit } = props;
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
