import { CheckIcon } from "@radix-ui/react-icons";
import React from "react";
import Pill from "./Pill";

function SelectItem({ title, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className='px-4 flex items-center justify-between rounded py-2 hover:bg-slate-200 cursor-pointer text-sm font-semibold'
    >
      <span>{title}</span>
      {isSelected && <Pill text={<CheckIcon />} />}
    </div>
  );
}

export default SelectItem;
