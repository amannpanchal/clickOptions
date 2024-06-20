import React, { useState } from "react";
import './TickMarkOptions.css'
const TickMarkOptions = () => {
  const [options, setOptions] = useState([false, false, false, false, false]);
  const [selectAll, setSelectAll] = useState(false);

  const handleOptionChange = (index) => {
    const newOptions = [...options];
    newOptions[index] = !newOptions[index];
    setOptions(newOptions);
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setOptions(options.map(() => newSelectAll));
    setSelectAll(newSelectAll);
  };

  const handleDone = () => {
    // Handle the done action here, e.g., submitting the selected options
    console.log("Selected options:", options);
  };

  return (
    <div className="tickMarkOptions">
      <div className="boxInbox">
        <div className="pageNo">
          <label>All pages</label>
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
          />
        </div>
        <div className="abc"></div>
        {options.map((option, index) => (
          <div className="pageNo" key={index}>
            <label>Option {index + 1}</label>
            <input
              type="checkbox"
              checked={option}
              onChange={() => handleOptionChange(index)}
            />
          </div>
        ))}
        <div className="abc"></div>
        <button onClick={handleDone}>Done</button>
      </div>
    </div>
  );
};

export default TickMarkOptions;
