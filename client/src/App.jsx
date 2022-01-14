import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/Home/Home";
import Watch from "./pages/watch/Watch";
import { AuthContext} from "./context/authContext/AuthContext";
import NewAndPopular from "./pages/NewAndPopular/NewAndPopular";

const App = () => {
  const {user} = useContext(AuthContext);

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
          {user && (
            <>
              <Route path="/movies" element={<Home type="movie" />} />
              <Route path="/series" element={<Home type="serie" />} />
              <Route path="/watch" element={<Watch />} />
              <Route path="/newPopular" element={<NewAndPopular/>}/>
            </>
          )}
        </Routes>
      </Router>
  );
};

export default App;
