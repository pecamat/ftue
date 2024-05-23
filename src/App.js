import React, { useState } from "react";
import table from "./table.svg";
import editor from "./editor.svg";
import TokenRow from "./token-row";
import "./App.css";
import TokenThumbnail from "./token-thumbnail";
import TokenDetail from "./token-detail";

function App({
  token01,
  token02,
  token03,
  token04,
  token05,
  token06,
  token07,
  token08,
  token09,
  token10,
  token11,
  token12,
}) {
  const [isTableActive, setIsTableActive] = useState(true);
  const [isEditorActive, setIsEditorActive] = useState(false);

  const changeScreenToEditor = () => {
    setIsEditorActive(true);
    setIsTableActive(false);
  };

  const changeScreenToTable = () => {
    setIsEditorActive(false);
    setIsTableActive(true);
  };

  return (
    <div className="flex">

      {/* Temporary controls */}

      <div className="flex flex-col bg-white p-4 z-10 gap-4">
        <button className="bg-slate-200 p-2" onClick={changeScreenToEditor}>
          Editor
        </button>
        <button className="bg-slate-200 p-2" onClick={changeScreenToTable}>
          Table
        </button>
      </div>

      {/* Animations */}

      <div className="relative flex justify-center items-center w-full h-screen overflow-hidden">
        <div className="absolute inset-0 overflow-hidden rounded-xl">

          {/* Gradients */}

          <div className="gradient1"></div>
          <div className="gradient2"></div>
          <div className="gradient3"></div>
        </div>
        <div className="absolute w-[620px] h-[460px] app-screen-container">

          {/* Tokens screen */}

          <div
            id="table"
            className={`svg-container overflow-hidden tokens ${isTableActive ? "active" : ""} absolute flex justify-center items-center w-[620px] h-[460px] rounded-xl shadow-[0_40px_80px_0_rgba(0,0,0,0.08)]`}>
            <div className="absolute bottom-0 right-0 w-[420px] h-[389px]">
              <div className="flex gap-4 h-[20px] bg-[#F4F5F7] items-center text-[#606981] text-[8px] pl-4 border-t-1 border-b border-[#ECEEF3]">
                <div className="flex-1">Name</div>
                <div className="flex-1">Value</div>
                <div className="flex-1 ">Description</div>
              </div>
              <TokenRow token={token01} />
              <TokenRow token={token02} />
              <TokenRow token={token03} />
              <TokenRow token={token04} />
              <TokenRow token={token05} />
              <TokenRow token={token06} />
              <TokenRow token={token07} />
              <TokenRow token={token08} />
              <TokenRow token={token09} />
              <TokenRow token={token10} />
              <TokenRow token={token11} />
              <TokenRow token={token12} />
            </div>
            <img className="min-w-[900px] min-h-[1050px]" src={table} />
          </div>

          {/* Editor screen */}

          <div
            id="editor"
            className={`svg-container overflow-hidden editor ${isEditorActive ? "active" : ""} absolute flex justify-center items-center w-[620px] h-[460px] rounded-xl shadow-[0_40px_80px_0_rgba(0,0,0,0.08)]`}>
            <div className="absolute bottom-0 right-[47px] w-[330px] h-[196px]">
            <TokenDetail token={token01} />
            <TokenDetail token={token02} />
            <TokenDetail token={token03} />
            <TokenDetail token={token04} />
            </div>
            <img className="min-w-[900px] min-h-[1050px]" src={editor} />
          </div>

          {/* Token thumbnails */}
        
        <div className="absolute w-[620px] h-[460px] overflow-hidden">
          <TokenThumbnail token={token01} isEditorActive={isEditorActive} number="01" />
          <TokenThumbnail token={token02} isEditorActive={isEditorActive} number="02" />
          <TokenThumbnail token={token03} isEditorActive={isEditorActive} number="03" />
          <TokenThumbnail token={token04} isEditorActive={isEditorActive} number="04" />
          <TokenThumbnail token={token05} isEditorActive={isEditorActive} number="05" />
          <TokenThumbnail token={token06} isEditorActive={isEditorActive} number="06" />
          <TokenThumbnail token={token07} isEditorActive={isEditorActive} number="07" />
          <TokenThumbnail token={token08} isEditorActive={isEditorActive} number="08" />
          <TokenThumbnail token={token09} isEditorActive={isEditorActive} number="09" />
          <TokenThumbnail token={token10} isEditorActive={isEditorActive} number="10" />
          <TokenThumbnail token={token11} isEditorActive={isEditorActive} number="11" />
          <TokenThumbnail token={token12} isEditorActive={isEditorActive} number="12" />
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;
