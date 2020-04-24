import React from "react";
import "./App.css";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Content from "./components/Common/Content";

function App() {
  return (
    <React.Fragment>
      <div className="main-container">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}

export default App;
