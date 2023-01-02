import React, { useState } from "react";
import Selected from "./Selected";
import SelectMenu from "./SelectMenu";

function MultiSelect() {
  const [isOpened, setOpened] = useState(false);
  const [selected, setSelected] = useState([]);
  console.log(selected);
  return (
    <div>
      <Selected
        isOpened={isOpened}
        setSelected={setSelected}
        setOpened={setOpened}
        selected={selected}
      />
      <SelectMenu
        selected={selected}
        setSelected={setSelected}
        isOpened={isOpened}
        setOpened={setOpened}
      />
    </div>
  );
}

export default MultiSelect;
