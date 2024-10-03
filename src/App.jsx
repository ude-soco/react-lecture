import React, { useState } from "react";

// ****************************************
// * Class based component (deprecated)
// ****************************************
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 7,
//     };
//   }
//   render() {
//     return <h1>{this.state.count}</h1>;
//   }
// }

// ****************************************
// * Functional based component
// ****************************************
function App(props) {
  const [count, setCount] = useState(7);
  return <h1>{count}</h1>;
}

export default App;
