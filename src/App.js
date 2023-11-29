import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { useSelector } from "react-redux";

function App() {
  const isMenuOpen = useSelector(store => store.app?.isMenuOpen);

  return (
    <div>
      <Header />
      <div className={`grid gap-5 px-5 ${isMenuOpen ? "grid-cols-[1fr_7fr]" : "grid-cols-1"} pt-16 relative`}>
        { isMenuOpen && <Sidebar /> }
        <Outlet />
      </div>
    </div>
  );
}

export default App;
