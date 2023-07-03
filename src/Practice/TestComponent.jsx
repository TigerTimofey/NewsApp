import { useState } from "react";
import InfoComponent from "./InfoComponent";

function TestComponent({ firstName, lastName, age }) {
  const [count, setCount] = useState(0);
  const Color = ({ color }) => <div>Hair color: {color}</div>;
  const [show, setShow] = useState(false);
  return (
    <div>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>

      <Color color="brown" />
      {show ? (
        <InfoComponent
          heigth={190}
          weigth={80}
          setCount={setCount}
          HairColor={Color}
        />
      ) : null}
      <p>Age: {age}</p>
      <p>
        Count: {count}{" "}
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </p>

      <button onClick={() => setShow(!show)}>Show</button>
    </div>
  );
}

export default TestComponent;
