import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import Signup from "./pages/Signup";

function App() {
  
  return (
    <Router>
      <Routes>

        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup/>}/>

      </Routes>
    </Router>
  );
}

export default App;