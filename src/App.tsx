import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-full bg-slate-600">
      <Outlet />
    </div>
  );
}

export default App;
