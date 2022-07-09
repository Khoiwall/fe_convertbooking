import "./styles/globals.css";
import "./styles/Dashboard.css";
import "./styles/Message.css";
import "./styles/Sign.css";
import "./styles/Button.css";
import "./styles/HeaderFooter.css";
import "./styles/Input.css";
import "video-react/dist/video-react.css";
import "./App.css";
import {
  HeaderComponent,
  HeaderDashboard,
  HeaderRecord,
} from "./components/header";
import Navigation from "./navigation/navigation";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/sidebar";

function App() {
  const pathname = window.location.pathname.split("/");
  return (
    <div className="App">
      <Router>
        {pathname[1] === "dashboard" ? (
          <div className="min-h-screen max-h-screen flex w-full bg-gray-100 dark:bg-gray-800 text-white">
            <SideBar />
            <div className="min-h-screen max-h-screen bg-dashboard h-full flex-grow overflow-auto">
              <HeaderDashboard />
              <Navigation />
            </div>
          </div>
        ) : pathname[1] === "record-video" ? (
          <div>
            <HeaderRecord />
            <Navigation />
          </div>
        ) : (
          <div>
            <HeaderComponent />
            <Navigation />
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
