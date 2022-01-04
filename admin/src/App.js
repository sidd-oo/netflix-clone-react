import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import User from "./pages/user/User";
import "./App.css";
import NewUser from "./pages/newUser/NewUser";
import Movies from "./pages/Movies/Movies";
import Movie from "./pages/movie/Movie";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      { user && <Topbar /> }
      <div className="container">
        {user && <Sidebar />}
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          {user && (
            <>
              <Route exact path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movie/:movieId" element={<Movie />} />
              <Route path="/newProduct" element={<NewProduct />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
