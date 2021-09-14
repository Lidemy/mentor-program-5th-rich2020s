import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/about";
import Login from "./pages/login";
import Register from "./pages/register";
import Header from "./components/Headers";
import Post from "./pages/post";
import { AuthContext } from "./context";
import SinglePost from "./pages/single-post";
import AllPost from "./pages/all-post";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user_token")) {
      setIsLogin(true);
    }
  }, []);
  return (
    <Router>
      <AuthContext.Provider value={{ isLogin, setIsLogin }}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/all-post/:page">
              <AllPost />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/add-post">
              <Post />
            </Route>
            <Route path="/posts/:id">
              <SinglePost />
            </Route>
          </Switch>
        </div>
      </AuthContext.Provider>
    </Router>
  );
}
