import React, { useState } from "react";
import {
  AuthProvider,
  useDescope,
  useSession,
  useUser,
} from "@descope/react-sdk";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import StandingLayout from "./components/Standings/StandingLayout";
import Header from "./components/Standings/Header/Header";
import Home from "./components/Standings/Login/Home";
import TeamDetail from "./components/TeamDetail";

const App = () => {
  const { isAuthenticated, isSessionLoading } = useSession();

  console.log("isAuthnticated", isAuthenticated, "Loading", isSessionLoading)
  return (
    <BrowserRouter>
      {isAuthenticated && !isSessionLoading && <Header/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/leagues"
          element={
            <ProtectedRoute isSignedIn={isAuthenticated} isLoading={isSessionLoading}>
              <StandingLayout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leagues/teams/:id"
          element={
            <ProtectedRoute isSignedIn={isAuthenticated} isLoading={isSessionLoading}>
              <TeamDetail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
