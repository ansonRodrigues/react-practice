import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

const Dropdown = ({
  label,
  value,
  onChange,
  options = [],
  error = false,
  helperText = "",
  fullWidth = true,
  size = "small",
}) => {
  return (
    <FormControl fullWidth={fullWidth} size={size} error={error}>
      {/*<InputLabel>{label}</InputLabel>*/}
      <label htmlFor="Country">{label}</label>

      <Select
        value={value} //label={label}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default Dropdown;
