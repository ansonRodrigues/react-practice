import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
} from "@mui/material";

const Dropdownsec = ({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select",
  error = false,
  helperText = "",
  fullWidth = false,
  size = "small",
  disabled = false,
}) => {
  return (
    <FormControl fullWidth={fullWidth} error={error} disabled={disabled}>
      {/* Static label on top */}
      {label && (
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          {label}
        </Typography>
      )}

      <Select value={value} onChange={onChange} size={size} displayEmpty>
        <MenuItem disabled value="">
          {placeholder}
        </MenuItem>

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

export default Dropdownsec;
