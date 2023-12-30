import { Routes, Route, NavLink } from "react-router-dom";
import DailyTasks from "./pages/DailyTasks/DailyTasks";
import Calendar from "./pages/Calendar/Calendar";
import { ReloadProvider } from "./contexts/ReloadContext";
import Navbar from "./components/Navbar/Navbar";
import Time from "./pages/Time/Time";

function App() {

  return (
    <>
      <ReloadProvider>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<DailyTasks />}/>
          <Route path="/calendar" element={<Calendar />}/>
          <Route path="/time" element={<Time />}/>
        </Routes>
      </ReloadProvider>
    </>
  )
}

export default App
