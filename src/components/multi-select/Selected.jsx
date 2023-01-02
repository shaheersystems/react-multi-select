import React from "react";
import Pill from "./Pill";
function Selected({ setOpened, selected, setSelected }) {
  const selectHandle = (item) => {
    const newSelected = selected.filter((i) => {
      return item.id !== i.id;
    });
    setSelected(newSelected);
  };
  return (
    <div
      onClick={() => setOpened((prev) => !prev)}
      className={`border-2 mb-2 cursor-pointer w-96 px-4 py-2 min-h-fit rounded flex flex-wrap items-center gap-1`}
    >
      {selected.length !== 0 ? (
        selected.map((item) => {
          return (
            <Pill
              key={item.id}
              text={item.title}
              onClick={() => selectHandle(item)}
            />
          );
        })
      ) : (
        <p className='font-semibold text-sm'>Select your expertise</p>
      )}
    </div>
  );
}

export default Selected;
