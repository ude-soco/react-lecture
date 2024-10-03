import { useState } from "react";

function App() {
  // *********************************************
  // ** Create a state using useState hook *******
  // *********************************************
  const [name, setName] = useState("Simple Counter");
  const [count, setCount] = useState(0);
  // *********************************************

  console.log(useState("Simple Counter"));

  return (
    <>
      {/* // ** Displays the counter name ************* */}
      <h4>{name}</h4>

      {/* // ** Displays the count value ************** */}
      <h1>{count}</h1>

      {/* // ** Button to decrease count ************* */}
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      {/* // ** Button to increase count ************** */}
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      {/* // ** Button to reset the count to zero ***** */}
      <button onClick={() => setCount(0)}>
        Reset
      </button>

      {/* // ** Input field to rename the counter ****** */}
      <input onChange={(event) => setName(event.target.value)} />
    </>
  );
}

export default App;
