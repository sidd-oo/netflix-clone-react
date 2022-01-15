import React, { useContext } from "react";
import {
  BrowserRouter as Router, Navigate, Route, Routes
} from "react-router-dom";
import { AuthContext } from "./context/authContext/AuthContext";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import MyList from "./pages/MyList/MyList";
import NewAndPopular from "./pages/NewAndPopular/NewAndPopular";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        ></Route>
        {user ? (
          <>
            <Route path="/movies" element={<Home type="movie" />} />
            <Route path="/series" element={<Home type="serie" />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/newPopular" element={<NewAndPopular />} />
            <Route path="/myList" element={<MyList />} />
            <Route path="*"  element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/movies" element={<Login/>} />
            <Route path="/series" element={<Login/>} />
            <Route path="/watch" element={<Login/>} />
            <Route path="/newPopular" element={<Login />} />
            <Route path="/myList" element={<Login />} />
            <Route path="*" exact = {true} element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
