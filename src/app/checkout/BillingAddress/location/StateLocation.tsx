"use client";
import React, { FC } from "react";

interface statename {
  state: any;
  setNewData: any;
  newData: any;
}

const StateLocation: FC<statename> = ({ state, setNewData, newData }) => {
  const newd: any = new Set(state.map((item: any) => item?.district_name));
  const allDistrict = [...newd];

  const setValue = (e: any) => {
    setNewData((prevState: any) => ({ ...prevState, SName: e?.target?.value }));
  };

  return (
    <div className=" w-full ">
      <label htmlFor="State">State</label>
      <select
        className=" w-full my-3 border rounded-sm text-xl p-1 py-2 "
        id="City"
        onChange={setValue}
        defaultValue={"ChooseState"}
      >
        <option disabled value={"ChooseState"}>
          Choose State
        </option>
        {allDistrict.length > 0
          ? allDistrict.map((stateName: any) => (
              <option key={stateName} value={stateName}>
                {stateName}
              </option>
            ))
          : ""}
      </select>
    </div>
  );
};

export default StateLocation;
