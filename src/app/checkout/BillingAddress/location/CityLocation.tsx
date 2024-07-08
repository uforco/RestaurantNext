import React, { FC } from "react";

interface CityDataType {
  state: any;
  setNewData: any;
  newData: any;
}

const CityLocation: FC<CityDataType> = ({ state, setNewData, newData }) => {
  let cityList: any = [];
  if (newData.SName != "") {
    const sortCity: any = new Set(
      state
        .slice()
        .filter((city: any) => city.district_name === newData.SName)
        .map((uc: any) => uc.upazila)
    );

    cityList = [...sortCity];
  }
  const setValue = (e: any) => {
    setNewData((prevState: any) => ({ ...prevState, CName: e?.target?.value }));
  };

  return (
    <div className=" w-full ">
      <label htmlFor="City">City</label>
      <select
        className=" w-full my-3 border rounded-sm text-xl p-1 py-2 "
        id="City"
        defaultValue={"Choosecity"}
        onChange={setValue}
      >
        <option disabled value="Choosecity">
          Choose city
        </option>
        {cityList.length > 0
          ? cityList.map((uc: string) => (
              <option key={uc} value={uc}>
                {uc}
              </option>
            ))
          : ""}
      </select>
    </div>
  );
};

export default CityLocation;
