import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/loginPage/userLogin";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Login />
    </Layout>
  );
}

export default App;
