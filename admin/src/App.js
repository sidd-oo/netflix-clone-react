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
import Movies from "./pages/movies/Movies";
import Movie from "./pages/movie/Movie";
import Login from "./pages/login/Login";
import NewMovie from "./pages/newMovie/NewMovie";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";
import MovieLists from "./pages/movieLists/MovieLists";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      {user && <Topbar />}
      <div className="container">
        {user && <Sidebar />}
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          {!user && <>
            <Route exact path="*" element={<Login />} />
            <Route exact path="/" element={<Login/>}/>
          </>}
          {user && (
            <>
              <Route exact path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movie/:movieId" element={<Movie />} />
              <Route path="/newMovie" element={<NewMovie />} />
              <Route path="/lists" element={<MovieLists />} />
              <Route path="/list/:listId" element={<List />} />
              <Route path="/newlist" element={<NewList />} />
              <Route exact path="*" element={<Navigate to="/" />}/>
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
