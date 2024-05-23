import React from "react";
import "./token.css";

function TokenThumbnail({ token, isEditorActive, number }) {
  const tokenColor = { backgroundColor: token[1] };

  return (
    <div
      className={`
        absolute 
        token
        ${isEditorActive ? "token-editor" : ""}
        position-${isEditorActive ? "editor" : "table"}-${number}
        delay-${number}
      `}
      style={tokenColor}
    ></div>
  );
}

export default TokenThumbnail;
