import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routers from "./Routes";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routers />
        <Footer />
      </div>
    </>
  );
}

export default App;
