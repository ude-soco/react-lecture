import React, { useState } from "react";

// ****************************************
// * Class based component (deprecated)
// ****************************************
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       groceryItem: "apple",
//     };
//   }
//   render() {
//     return <h1>{this.state.groceryItem}</h1>;
//   }
// }

// ****************************************
// * Functional based component
// ****************************************
function App(props) {
  const [groceryItem, setGroceryItem] = useState("apple");
  return <h1>{groceryItem}</h1>;
}

export default App;
