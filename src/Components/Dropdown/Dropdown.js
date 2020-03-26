import React from "react";

function Dropdown({ styleSheetList, styleSheets, setStyleSheets }) {
  return (
    <div className="dropdown">
      <div
        className="btn btn-secondary dropdown-toggle"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {styleSheetList.name}
      </div>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        {styleSheetList.items.map(styleSheetObject => {
          return (
            <div
              key={styleSheetObject.route}
              className="dropdown-item"
              onClick={() =>
                styleSheetList.type === "layout"
                  ? setStyleSheets({
                      ...styleSheets,
                      layout: styleSheetObject.route
                    })
                  : styleSheetList.type === "color"
                  ? setStyleSheets({
                      ...styleSheets,
                      colors: styleSheetObject.route
                    })
                  : console.log("Not color or layout")
              }
            >
              {styleSheetObject.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
