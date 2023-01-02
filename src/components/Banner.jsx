import React from "react";

function Banner() {
  return (
    <div className='max-w-6xl m-auto h-fit flex py-6 flex-col items-center justify-center gap-6'>
      <h1 className='text-slate-900 text-4xl font-thin'>
        React customizable multi-select component
      </h1>
      <p className='font-semibold'>
        Elegant, customizable and dynamic multi-select component
      </p>
      <button className='px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-700'>
        Repository Link
      </button>
    </div>
  );
}

export default Banner;
