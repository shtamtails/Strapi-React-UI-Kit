import React, { useState } from "react";
import { useUniqueId } from "../../../Hooks";
import { Autocomplete } from "../../../UI";
import { BiSearch } from "react-icons/bi";
import { componentsList } from "../../../ComponentsList";
export const HeaderSearch = () => {
  const [value, setValue] = useState();

  const options = componentsList.map((el) => {
    return {
      id: el.id,
      text: el.name,
      value: el.link,
    };
  });

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
