import { Routes, Route } from "react-router-dom";
import DailyTasks from "./pages/DailyTasks/DailyTasks";
import Calendar from "./pages/Calendar/Calendar";
import { ReloadProvider } from "./contexts/ReloadContext";

function App() {

  return (
    <>
      <ReloadProvider>
        <Routes>
          <Route path="/" element={<DailyTasks />}/>
          <Route path="/calendar" element={<Calendar />}/>
        </Routes>
      </ReloadProvider>
    </>
  )
}

export default App
