import React from "react";

const Option = (props) => {
  function handleGroupSelection(event) {
    setGroup(event.target.value);
    console.log(props.group);
  }

  return (
    <>
      <select
        className="w-24 bg-slate-600 text-gray-50 p-2"
        onChange={handleGroupSelection}
        value={props.group}
      >
        <option value="group1">Group 1</option>
        <option value="group2">Group 2</option>
        <option value="group3">Group 3</option>
      </select>
    </>
  );
};

export default Option;
