import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ModifiedTextField = styled(TextField)({
  "& fieldset": {
    borderRadius: "10px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "blue",
  },
  "&.MuiInputBase-multiline": {
    padding: 1,
  },
});
