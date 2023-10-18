import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "../Nav/Nav";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";

import "./App.css";
import Dictionary from "../Dictionary/Dictionary";
import KanjiOfTheDay from "../KanjiOfTheDay/KanjiOfTheDay";
import KanjiDetails from "../KanjiDetails/KanjiDetails";
import ChangeNotes from "../KanjiDetails/ChangeNotes";
import Collection from "../Collection/Collection";
import BackToTopButton from "../BackToTopButton/BackToTopButton";
import Stats from "../Stats/Stats";
import ErrorPage from "../ErrorPage/ErrorPage";
import Footer from "../Footer/Footer";
import StudyPage from "../StudyPage/StudyPage";
import StudyStart from "../StudyPage/StudyStart";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/welcome" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/welcome">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route>

          {/* Dictionary Page */}
          <ProtectedRoute exact path="/dictionary">
            <Dictionary />
          </ProtectedRoute>

          {/* Dicitonary load more */}
          <ProtectedRoute path="/dictionary/:count">
            <Dictionary />
          </ProtectedRoute>
          {/* Kanji of Day Page */}
          <ProtectedRoute exact path="/kanjioftheday">
            <KanjiOfTheDay />
          </ProtectedRoute>
          {/* Details for Kanji */}
          <ProtectedRoute exact path="/kanji/:kanji">
            <KanjiDetails />
          </ProtectedRoute>
          {/* Details Edit */}
          <ProtectedRoute exact path="/kanji/:kanji/:change">
            <ChangeNotes />
          </ProtectedRoute>
          {/* Collection Page */}
          <ProtectedRoute exact path="/collection">
            <Collection />
          </ProtectedRoute>
          {/* Collection load more */}
          <ProtectedRoute path="/collection/:count">
            <Collection />
          </ProtectedRoute>
          {/* Stats Page */}
          <ProtectedRoute path="/stats">
            <Stats />
          </ProtectedRoute>
          {/* Study Page */}
          <ProtectedRoute exact path="/study">
            <StudyStart />
          </ProtectedRoute>
          {/* Flashcard Page */}
          <ProtectedRoute exact path="/study/flashcard">
            <StudyPage />
          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
        <BackToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
