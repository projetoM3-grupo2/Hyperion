import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUser } from "../../../Providers/UserContext/@types";
import { UserContext } from "../../../Providers/UserContext/UserContext";
import { Input } from "../Input";
import { schemaLogin } from "../schemas/loginSchemas";

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
    <form onSubmit={handleSubmit(submit)}>
      <Input
        label="Email"
        type="email"
        error={errors.email}
        register={register("email")}
      />
      <Input
        label="Senha"
        type="password"
        error={errors.password}
        register={register("password")}
      />
      <button type="submit">Entrar</button>
    </form>
  );
};
