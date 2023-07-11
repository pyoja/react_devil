import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route index path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route element={<EmptyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
