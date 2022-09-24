import React from "react";

const Basicinput = ({ label, type, value, onChange, ...rest }) => {
  return (
    <div className="flex flex-col" {...rest}>
      <label className="text-center py-3 font-bold text-black">{label}</label>
      <input className="p-3 bg-white focus:outline-none border rounded-xl" placeholder="https://www.twitch.tv/karta012/" type={type} value={value} onChange={onChange} required/>
    </div>
  );
};

export default Basicinput;
