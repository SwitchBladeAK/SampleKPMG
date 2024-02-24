import {
  Autocomplete,
  Checkbox,
  createFilterOptions,
  FormControl,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import FormInput from "../textbox/FormInput";
import { useEffect, useState } from "react";
import { PopperMy } from "../AutoComplete/AutocompletePopper";
import FormTooltip from "../Tooltip";
import getLabelName from "../SharedFunction";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const FormAutoCompleteMulti = ({
  options,
  value,
  margin,
  onChange,
  textname,
  textrequired,
  id,
  label,
  info,
  placeholder,
  fitContent,
  groupBy,
  disabled,
}) => {
  useEffect(() => {
    setSelectedOptions(value);
  }, [value]);
  const [selectedOptions, setSelectedOptions] = useState(value);
  // console.log("val", value, selectedOptions);
  const allSelected = options.length === selectedOptions.length;
  const valueLength = value === undefined || value === null ? 0 : value.length;
  const fcMargin = margin !== undefined && margin !== null ? margin : 1;
  const tooltipTitle =
    value !== null &&
    value !== undefined &&
    value !== "" &&
    Object.keys(value).length > 0
      ? value.map((head) => head.displayName).join(",")
      : info;
  const labelVal = getLabelName(label);
  const getOptionLabel = (option) => {
    return option.displayName;
  };
  const handleToggleOption = (selectedOptions) =>
    setSelectedOptions(selectedOptions);
  const handleClearOptions = () => setSelectedOptions([]);
  const handleSelectAll = (isSelected) => {
    if (isSelected) {
      setSelectedOptions(options);
    } else {
      handleClearOptions();
    }
  };

  const handleToggleSelectAll = () => {
    handleSelectAll && handleSelectAll(!allSelected);
  };

  const handleChange = (event, selectedOptions, reason) => {
    // console.log("???????", event, selectedOptions, reason);
    if (reason === "selectOption" || reason === "removeOption") {
      if (selectedOptions.find((option) => option.id === "-1")) {
        handleToggleSelectAll();
        let result = [];
        result = options.filter((el) => el.id !== "-1");
        // console.log("1", selectedOptions, result);
        return onChange(event, allSelected ? [] : result);
      } else {
        handleToggleOption && handleToggleOption(selectedOptions);
        // console.log("2", selectedOptions);
        return onChange(event, selectedOptions);
      }
    } else if (reason === "clear") {
      handleClearOptions && handleClearOptions();
      return onChange(event, selectedOptions);
    }
  };
  const optionRenderer = (props, option, { selected }) => {
    // console.log(option);
    const selectAllProps =
      option.id === "-1" // To control the state of '-1' checkbox
        ? { checked: allSelected }
        : {};
    return (
      <FormTooltip
        key={option.id}
        title={option.displayName}
        data={
          <li {...props} key={option.id}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={
                selected ||
                (selectedOptions.find((rec) => rec.id === option.id) ===
                undefined
                  ? false
                  : selectedOptions.find((rec) => rec.id === option.id))
              }
              {...selectAllProps}
            />
            {getOptionLabel(option)}
          </li>
        }
      ></FormTooltip>
    );
  };
  const inputRenderer = (params) => (
    <FormInput
      params={params}
      name={textname}
      id={id}
      label={label}
      helpText={`${textname}-text`}
      info={tooltipTitle}
      required={textrequired && valueLength === 0}
      // disable={disabled}
      placeholder={placeholder && placeholder}
    />
  );

  const filter = createFilterOptions();
  return (
    <>
      <FormControl fullWidth key={id}>
        <Autocomplete
          multiple
          id={id}
          limitTags={2}
          clearOnEscape
          disableCloseOnSelect
          PopperComponent={fitContent === true ? PopperMy : ""}
          onChange={handleChange}
          options={options}
          value={selectedOptions}
          readOnly={disabled}
          groupBy={groupBy && groupBy}
          getOptionLabel={getOptionLabel}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            if (filtered.length === 0) {
              return [];
            } else {
              return [{ displayName: "Select All", id: "-1" }, ...filtered];
            }
          }}
          renderOption={optionRenderer}
          renderInput={inputRenderer}
        />
      </FormControl>
    </>
  );
};

FormAutoCompleteMulti.defaultProps = {
  options: [],
  selectedValues: [],
  getOptionLabel: (value) => value,
};
export default FormAutoCompleteMulti;
