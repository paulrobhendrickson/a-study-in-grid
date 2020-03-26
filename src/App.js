import React, { useState } from "react";
import "./App.css";
import PageHeader from "./Components/PageHeader/PageHeader";
import FakeBody from "./Components/FakeBody/FakeBody";
import LayoutStyleSheets from "./Media/LayoutStyleSheets.json";

function App() {
  const [styleSheets, setStyleSheets] = useState({
    layout: LayoutStyleSheets.items[0].route
  });

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href={`${process.env.PUBLIC_URL + styleSheets.layout}`}
      />
      <PageHeader styleSheets={styleSheets} setStyleSheets={setStyleSheets} />
      <FakeBody />
    </div>
  );
}

export default App;
