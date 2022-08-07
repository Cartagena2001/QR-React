import React from "react";

const Basicinput = ({ label, type, value, onChange, ...rest }) => {
  return (
    <div className="flex flex-col" {...rest}>
      <label className="text-center py-3 font-bold text-white">{label}</label>
      <input className="p-3 bg-white rounded-lg focus:outline-none" type={type} value={value} onChange={onChange} required/>
    </div>
  );
};

export default Basicinput;
