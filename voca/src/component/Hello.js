export default function Hello() {
  function showtText(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <h1>Hello</h1>
      <input type="text" onChange={showtText} />
    </div>
  );
}
