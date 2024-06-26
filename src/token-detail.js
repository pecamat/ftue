import React from "react";

function TokenDetail({ token }) {
  return (
    <div className="flex gap-2 text-[#14171F] tracking-tight text-[9px] border-b border-[#ECEEF3] pb-2 pt-2">
      <div className="w-[60px] h-[36px]"></div>
      <div className="flex-col overflow-hidden h-[36px] content-center">
        <div className="font-semibold text-nowrap text-ellipsis overflow-hidden">
          {token[0]}
        </div>
        <div className="text-[#606981] text-nowrap text-ellipsis overflow-hidden">
          {token[2]}
        </div>
      </div>
    </div>
  );
}

export default TokenDetail;