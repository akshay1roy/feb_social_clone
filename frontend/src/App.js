import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/Register/Register";
import {
  // createBrowserRouter,
  // RouterProvider,

  Route,
  Routes,
  // Link,
  BrowserRouter,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {

  const { user } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
