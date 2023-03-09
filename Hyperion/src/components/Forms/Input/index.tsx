import { Input } from '@chakra-ui/react'
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledFieldset } from "./styled";


interface IInputProps {
  label: string;
  type: "password" | "text" | "email" | "age";
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

export const BaseInput = ({ type, error, register }: IInputProps) => {
  return (
    <StyledFieldset>
      <Input  type={type} {...register} />
      {error && (<p> {error?.message}</p>)}
    </StyledFieldset>
  );
};
export { Input };

