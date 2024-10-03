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

  return <></>;
}

export default App;
