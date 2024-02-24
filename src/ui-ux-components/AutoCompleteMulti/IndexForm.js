import styled from "@emotion/styled";
import {
  Autocomplete,
  Checkbox,
  Chip,
  TextField,
  createFilterOptions,
} from "@mui/material";
import FormTooltip from "../../ui-components/Tooltip";
import { PopperMy } from "../../ui-components/AutoComplete/AutocompletePopper";
import "../../customCssFile/cssMaster.css";
import { useEffect, useState } from "react";
import getLabelName from "../../ui-components/SharedFunction";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CustomAutoCompleteMulti(props) {
  const [selectedOptions, setSelectedOptions] = useState(props.value);
  console.log("val", props.value, selectedOptions, props.options);
  useEffect(() => {
    setSelectedOptions(props.value);
  }, [props.value]);
  const allSelected =
    props.options !== undefined && props.options !== null
      ? props.options.length === selectedOptions.length
      : false;
  const valueLength =
    props.value === undefined || props.value === null ? 0 : props.value.length;
  const tooltipTitle =
    props.value !== null &&
    props.value !== undefined &&
    props.value !== "" &&
    Object.keys(props.value).length > 0
      ? props.value.map((head) => head.displayName).join(",")
      : props.info !== null && props.info !== undefined
      ? props.info
      : "";
  const getOptionLabel = (option) => {
    return option.displayName;
  };
  const handleToggleOption = (selectedOptions) =>
    setSelectedOptions(selectedOptions);
  const handleClearOptions = () => setSelectedOptions([]);
  const handleSelectAll = (isSelected) => {
    if (isSelected) {
      setSelectedOptions(props.options);
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
        result = props.options.filter((el) => el.id !== "-1");
        // console.log("1", selectedOptions, result);
        return props.onChange(event, allSelected ? [] : result);
      } else {
        handleToggleOption && handleToggleOption(selectedOptions);
        // console.log("2", selectedOptions);
        return props.onChange(event, selectedOptions);
      }
    } else if (reason === "clear") {
      handleClearOptions && handleClearOptions();
      return props.onChange(event, selectedOptions);
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
    <FormTooltip
      title={tooltipTitle}
      data={
        <StyledTextField
          {...params}
          label={props.label && getLabelName(props.label)}
          size="small"
          placeholder={selectedOptions.length > 0 ? "" : props.placeholder}
          name={props.textname}
          required={props.textrequired && valueLength === 0}
          helperText={props.helperText && props.helperText}
          // focused
        />
      }
    />
  );

  const filter = createFilterOptions();

  return (
    <Autocomplete
      className={"custom-autocomplete small"}
      multiple
      id={props.id}
      limitTags={2}
      // disablePortal
      // PopperComponent={props.fitContent === true ? PopperMy : ""}
      onChange={handleChange}
      options={props.options}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            variant="outlined"
            label={option.displayName}
            {...getTagProps({ index })}
          />
        ))
      }
      value={selectedOptions}
      readOnly={props.disabled}
      groupBy={props.groupBy && props.groupBy}
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
  );
}

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#545454",
  },

  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      border: "solid 1px #545454",
    },
  },
});
