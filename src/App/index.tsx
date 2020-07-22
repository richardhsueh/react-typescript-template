import React from "react";
import "./index.scss";

const App = () => {
  const [number, setNumber] = React.useState(1);
  const [text, setText] = React.useState("sometext");
  const add = () => {
    setText('asdas');
    setNumber(number + 1);
  };

  return (
    <div>
      <h1> Welcome to React Typescript Webpack template ! </h1>
      {number}
      {/* {text} */}
      <br/>
      <button onClick={add}>Add</button>
    </div>
  );
};

export default App;
