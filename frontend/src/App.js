import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./components/Login";
import Users from "./pages/Users";
import Events from "./pages/Events";
import EventPage from "./pages/EventPage";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddProduct from "./pages/AddProduct";
import EditEvent from "./pages/EditEvent";
import NewsLetterSignUp from "./pages/NewsLetterSignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/event-page" element={<EventPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newsletter-signup" element={<NewsLetterSignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/add" element={<AddProduct />} />
          <Route path="/event/edit/:id" element={<EditEvent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
