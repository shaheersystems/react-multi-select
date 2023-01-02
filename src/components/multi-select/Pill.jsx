import React from "react";

function Pill({ text, onClick }) {
  return (
    <span
      onClick={onClick}
      className='text-xs font-semibold rounded-full py-1 px-2 bg-slate-300 text-slate-600'
    >
      {text}
    </span>
  );
}

export default Pill;
