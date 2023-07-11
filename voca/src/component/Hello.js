import { useState } from "react";

export default function Hello(props) {
  const [name, setName] = useState("Mike");
  const [age, setAge] = useState(props.age);

  function changeName() {
    const newName = name === "Mike" ? "Jane" : "Mike";
    setName(newName);
    setAge(age + 1);
  }

  return (
    <div>
      <h2>
        {name}({age}세)
      </h2>
      <button onClick={changeName}>버튼</button>
    </div>
  );
}
