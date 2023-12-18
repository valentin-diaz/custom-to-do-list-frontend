import { Routes, Route } from "react-router-dom";
import DailyTasks from "./pages/DailyTasks/DailyTasks";
import Calendar from "./pages/Calendar/Calendar";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<DailyTasks />}/>
        <Route path="/calendar" element={<Calendar />}/>
      </Routes>
    </>
  )
}

export default App
