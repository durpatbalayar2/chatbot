import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Gallary from "./pages/Gallary";
import Intro from "./pages/Intro";
import Profile from "./pages/Profile";
import Chatbot from "./pages/Chatbot";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h2>Page is not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
