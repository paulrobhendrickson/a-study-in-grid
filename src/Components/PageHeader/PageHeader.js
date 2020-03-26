import React from "react";
import "./PageHeader.css";
import LayoutStyleSheets from "../../Media/LayoutStyleSheets.json";
import Dropdown from "../Dropdown/Dropdown";

function PageHeader({ styleSheets, setStyleSheets }) {
  return (
    <div className="PageHeader">
      <h1 style={{ textAlign: "center" }}>A Study In CSS Grid</h1>
      <Dropdown
        styleSheets={styleSheets}
        setStyleSheets={setStyleSheets}
        styleSheetList={LayoutStyleSheets}
      />
    </div>
  );
}

export default PageHeader;
