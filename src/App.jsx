import { useState } from "react";

function App() {
  // *********************************************
  // ** Create a state using useState hook *******
  // *********************************************
  // ** String type ******************************
  const [name, setName] = useState("Simple Counter");

  // ** Number ***********************************
  const [count, setCount] = useState(0);

  // ** Array ************************************
  const [nameArray, setNameArray] = useState([
    "Awesome counter",
    "Extraordinary Counter",
  ]);

  // ** Objects **********************************
  const [nameObject, setNameObject] = useState({
    primary: "Awesome counter",
    secondary: "Extraordinary Counter",
  });
  // ** HTML/CSS *********************************
  const [nameHTML, setNameHTML] = useState(
    <h4>HTML Counter Name</h4>
  );
  // *********************************************

  return (
    <>
      {/* // ** Displays the counter name ************* */}
      <h4>{name}</h4>

      {/* // TODO: Comment line 33 and uncomment line 36 below */}
      {/* {nameHTML} */}

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
