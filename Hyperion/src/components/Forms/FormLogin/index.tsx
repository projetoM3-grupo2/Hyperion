import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUser } from "../../../Providers/UserContext/@types";
import { UserContext } from "../../../Providers/UserContext/UserContext";
import { BaseInput } from "../Input";
import { schemaLogin } from "../schemas/loginSchemas";
import { StyledSection } from "./styled";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(schemaLogin),
  });
  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<IUser> = (data) => {
    userLogin(data);
    reset();
  };

  return (
    <StyledSection>
        <form onSubmit={handleSubmit(submit)}>
        <span>おかえり</span>
          <h1>Bem vindo de volta!</h1>
          <BaseInput
            type="email"
            error={errors.email}
            register={register("email")}
            label={""}
          />
          <BaseInput
            type="password"
            error={errors.password}
            register={register("password")}
            label={""}
          />
          <button type="submit">Entrar</button>
        </form>
    </StyledSection>
  );
};
