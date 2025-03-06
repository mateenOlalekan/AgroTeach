import "./App.css";
import { useTheme } from "../src/Context/ThemeContext";
import Sidebar from "./components/Sidebar";
import  MainSec from "./components/MainSec"
function App() {
  const { isDark } = useTheme();

  return (
    <div
      className={` w-screen flex transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      } overflow-hidden`}
    >
      {/* Sidebar */}
      <Sidebar />
      <MainSec/>
    </div>
  );
}

export default App;
