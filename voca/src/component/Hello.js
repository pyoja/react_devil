import { useState } from "react";

export default function Hello() {
  const [name, setName] = useState("Mike");

  function changeName() {
    const newName = name === "Mike" ? "Jane" : "Mike";
    setName(newName);
  }

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={changeName}>버튼</button>
    </div>
  );
}
