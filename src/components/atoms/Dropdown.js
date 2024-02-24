import React, { useState, useEffect } from "react";
import { Select, MenuItem, FormControl } from "@mui/material";

const Dropdown = ({ data }) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    // Set the initial selected value to the first item in the data array
    if (data.length > 0) {
      setSelectedValue(data[0]);
    }
  }, [data]);

  return (
    <>
      <FormControl
        sx={{ minWidth: 120, bgcolor: "#4856BEF5", borderRadius: "5px" }}
      >
        <Select
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          displayEmpty
          sx={{
            color: "white",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(228, 219, 233, 0.25)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(228, 219, 233, 0.25)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(228, 219, 233, 0.25)",
            },
            ".MuiSvgIcon-root ": {
              fill: "white !important",
            },
          }}
        >
          {data &&
            data.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Dropdown;
