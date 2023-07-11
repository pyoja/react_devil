import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";

function App() {
  const name = "Tom";
  const naver = {
    name: "네이버",
    url: "https://naver.com",
  };
  return (
    <div className="App">
      <h1 style={{ color: "red", backgroundColor: "black" }}>안녕!!{name}</h1>
      <h2>
        <a href={naver.url}>{naver.name}</a>
      </h2>
      <Hello />
      <Welcome />
    </div>
  );
}

export default App;
