import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUser } from "../../../Providers/UserContext/@types";
import { UserContext } from "../../../Providers/UserContext/UserContext";
import { BaseInput } from "../Input";
import { schemaLogin } from "../schemas/loginSchemas";
import { StyledDivLoginPage, Overlay, StyledSection } from "./styled";
import imagemLogin from "../../../assets/img/LoginPage.svg";

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

      <StyledDivLoginPage>

        <img src={imagemLogin} alt="" className="imageLogin" />
        <form onSubmit={handleSubmit(submit)}>
          <span>おかえり</span>
          <h1>Bem vindo de volta!</h1>
          <label>Email</label>
          <BaseInput
            type="email"
            error={errors.email}
            register={register("email")}
            label={""}
          />
          <label>Senha</label>
          <BaseInput
            type="password"
            error={errors.password}
            register={register("password")}
            label={""}
          />
          <button type="submit">Entrar</button>
        </form>

      </StyledDivLoginPage>
      
      < Overlay />

    </StyledSection>
    );
};
