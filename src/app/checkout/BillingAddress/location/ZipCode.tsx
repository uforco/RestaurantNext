import React, { FC } from "react";

interface ZipCodeType {
  state: any;
  setNewData: any;
  newData: any;
}

const ZipCode: FC<ZipCodeType> = ({ state, setNewData, newData }) => {
  let zipList: string[] = [];
  if (newData?.CName != "") {
    zipList = state
      .slice()
      .filter((zip: any) => zip.upazila === newData?.CName)
      .map((item: any) => item.postCode);
  }
  return (
    <div className=" w-full ">
      <label htmlFor="ZipCode">ZipCode</label>
      <select
        className=" w-full my-3 border rounded-sm text-xl p-1 py-2 "
        id="ZipCode"
        defaultValue={"Choosecity"}
      >
        <option disabled value="Choosecity">
          Zip Code
        </option>
        {zipList.length > 0
          ? zipList.map((zip: string) => (
              <option key={zip} value={zip}>
                {zip}
              </option>
            ))
          : ""}
      </select>
    </div>
  );
};

export default ZipCode;
