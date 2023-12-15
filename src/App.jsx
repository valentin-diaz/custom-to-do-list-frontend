import { Routes, Route } from "react-router-dom";
import DailyTasks from "./pages/DailyTasks/DailyTasks";
import Calendar from "./pages/Calendar/Calendar";

function App() {

  return (
    <>
      <h1>Custom to-do list</h1>

      <Routes>
        <Route path="/" element={<DailyTasks />}/>
        <Route path="/calendar" element={<Calendar />}/>
      </Routes>
    </>
  )
}

export default App
