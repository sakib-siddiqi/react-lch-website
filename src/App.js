import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./Components/404/NotFound";
import About from "./Components/About/About";
import Courses from "./Components/Courses/Courses";
import Orders from "./Components/Courses/Orders";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import SingleCourse from "./Components/SingleCourse/SingleCourse";
import Teachers from "./Components/Teachers/Teachers";
// =========================
// laoding data by useing useCourses custom hook
// =========================
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route exact path="/courses">
          <Courses></Courses>
        </Route>
        <Route path="/courses/:id">
          <SingleCourse></SingleCourse>
        </Route>
        <Route path="/teachers">
          <Teachers></Teachers>
        </Route>
        <Route path="/orders">
          <Orders></Orders>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
