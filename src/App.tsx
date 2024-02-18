import { Outlet } from "react-router-dom";
import TopAppBar from "./components/TopAppBar/TopAppBar";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="sticky top-0 z-20">
        <TopAppBar />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
