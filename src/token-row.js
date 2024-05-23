import React from "react";

function TokenRow({ token }) {
  return (
    <div className="flex gap-4 h-[32px] bg-white items-center text-[#14171F] tracking-tight text-[9px] pl-4 border-b border-[#ECEEF3]">
      <div className="flex-1 text-nowrap font-semibold text-ellipsis overflow-hidden">{token[0]}</div>
      <div className="flex-1 overflow-hidden">
        <div className="flex gap-2 items-center">
          <div className="w-[12px] h-[12px]"></div>{token[1]}</div>
      </div>
      <div className="flex-1 text-nowrap text-ellipsis overflow-hidden">{token[2]}</div>
    </div>
  );
}

export default TokenRow;
