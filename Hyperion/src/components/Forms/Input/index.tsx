import { TextField } from "@mui/material";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledFieldset } from "./styled";

interface IInputProps {
  label: string;
  type: "password" | "text" | "email";
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

export const Input = ({ label, type, error, register }: IInputProps) => {
  return (
    <StyledFieldset>
      <TextField label={label} type={type} {...register} />
      {error ? <p> {error.message}</p> : null}
    </StyledFieldset>
  );
};
