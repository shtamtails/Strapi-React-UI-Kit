import React, { useState } from "react";
import { useUniqueId } from "../../../Hooks";
import { Autocomplete } from "../../../UI";
import { BiSearch } from "react-icons/bi";
export const HeaderSearch = () => {
  const [value, setValue] = useState();
  const options = [
    { id: useUniqueId(), text: "React", value: "react" },
    { id: useUniqueId(), text: "Angular", value: "angular" },
    { id: useUniqueId(), text: "Vue", value: "vue" },
  ];
  return (
    <div className="header-search">
      <Autocomplete
        borderRadius="xxl"
        height="md"
        value={value}
        setValue={setValue}
        optionsList={options}
        sideIcon={<BiSearch />}
        placeholder="Search..."
      />
    </div>
  );
};
