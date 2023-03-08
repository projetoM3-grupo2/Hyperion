import { Input } from "@mui/material";
import { useForm } from "react-hook-form";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = () => {};

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
