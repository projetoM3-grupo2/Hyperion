import { TextField } from "@mui/material";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  label: string;
  type: "password" | "text" | "email";
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

export const Input = ({ label, type, error, register }: IInputProps) => {
  return (
    <fieldset>
      <TextField label={label} type={type} {...register} />
      {error ? <p> {error.message}</p> : null}
    </fieldset>
  );
};
