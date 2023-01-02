import React from "react";
import data from "../../data/data";
import SelectItem from "./SelectItem";
function SelectMenu({ isOpened, setOpened, setSelected, selected }) {
  function checkSelected(item) {
    if (selected.includes(item)) {
      return true;
    } else {
      false;
    }
  }
  const selectHandle = (item) => {
    setOpened(false);
    if (!checkSelected(item)) {
      setSelected([...selected, item]);
    } else if (checkSelected(item)) {
      const newSelected = selected.filter((i) => {
        return item.id !== i.id;
      });
      setSelected(newSelected);
    }
  };

  return (
    <div
      className={`h-64 overflow-auto border drop-shadow-sm w-96 rounded p-1 ${
        !isOpened ? "hidden" : ""
      }`}
    >
      {/* {data.map((lang) => {
        return (
          <p
            onClick={() => selectHandle(lang)}
            className='px-4 rounded py-2 hover:bg-slate-200 cursor-pointer text-sm font-semibold'
            key={lang.id}
          >
            {lang.title}
          </p>
        );
      })} */}
      {data.map((lang) => {
        return (
          <SelectItem
            key={lang.id}
            title={lang.title}
            onClick={() => selectHandle(lang)}
            isSelected={selected.includes(lang) ? true : false}
          />
        );
      })}
    </div>
  );
}

export default SelectMenu;
