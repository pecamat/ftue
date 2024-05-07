import React, { useState } from "react";

function TokenRow({ token }) {
  return (
    <div className="flex h-[32px] bg-white items-center text-[#14171F] text-[9px] pl-4 border-b border-[#ECEEF3]">
      <div className="flex-1 font-semibold">{token[0]}</div>
      <div className="flex-1">{token[1]}</div>
      <div className="flex-1 ">{token[2]}</div>
    </div>
  );
}

export default TokenRow;
