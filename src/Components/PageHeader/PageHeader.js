import React from "react";
import Dropdown from "../Dropdown/Dropdown";

function PageHeader({ styleSheetsArray, styleSheets, setStyleSheets }) {
  return (
    <div className="PageHeader">
      <h1 style={{ textAlign: "center" }}>A Study In CSS Grid</h1>
      <div className="dropdowns">
        {styleSheetsArray.map(list => {
          return (
            <Dropdown
              key={list.name}
              styleSheets={styleSheets}
              setStyleSheets={setStyleSheets}
              styleSheetList={list}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PageHeader;
