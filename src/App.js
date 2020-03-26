import React, { useState } from "react";
import "./App.css";
import PageHeader from "./Components/PageHeader/PageHeader";
import FakeBody from "./Components/FakeBody/FakeBody";
import LargeLayoutStyleSheets from "./Media/LargeLayoutStyleSheets.json";
import MediumLayoutStyleSheets from "./Media/MediumLayoutStyleSheets.json";
import SmallLayoutStyleSheets from "./Media/SmallLayoutStyleSheets.json";
import ColorsStyleSheets from "./Media/ColorsStyleSheets.json";

function App() {
  const [styleSheets, setStyleSheets] = useState({
    layout: LargeLayoutStyleSheets.items[0].route,
    colors: ColorsStyleSheets.items[0].route
  });

  const styleSheetsArray = [
    LargeLayoutStyleSheets,
    MediumLayoutStyleSheets,
    SmallLayoutStyleSheets,
    ColorsStyleSheets
  ];

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href={`${process.env.PUBLIC_URL + styleSheets.layout}`}
      />
      <link
        rel="stylesheet"
        href={`${process.env.PUBLIC_URL + styleSheets.colors}`}
      />
      <PageHeader
        styleSheetsArray={styleSheetsArray}
        styleSheets={styleSheets}
        setStyleSheets={setStyleSheets}
      />
      <FakeBody />
    </div>
  );
}

export default App;
