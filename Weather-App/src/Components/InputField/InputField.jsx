import Button from '../Button/Button';
import React, {useState, useContext } from 'react'
import { Context } from '../../Context/Context'

function InputField() {
 const {inputValue, setInputValue, handlesearchCity}=useContext(Context)
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex mobile:flex-col items-center gap-2">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="p-3 placeholder-slate-700 rounded-lg bg-[rgba(255,255,255,0.55)] text-black inp mobile:mt-8"
        placeholder="Enter City Name...."
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handlesearchCity(inputValue);
          }
        }}
      />
      <Button inputValue={inputValue} /> 
    </div>
  );
}

export default InputField;