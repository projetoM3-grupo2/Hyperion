import { useContext } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from "react-hook-form";
import { IUserRegister } from "../../../Providers/UserContext/@types";
import { UserContext } from "../../../Providers/UserContext/UserContext";
import { schemaRegister } from "../schemas/registerSchemas";
import { BaseInput } from "../Input";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(schemaRegister),
  });

  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IUserRegister> = (data) => {
    userRegister(data);
    reset();
  };


  return(
  <form onSubmit={handleSubmit(submit)} >
      <BaseInput
        type='text'
        register={register('name')}
        error={errors.name} label={""}      />

      <BaseInput
        type='text'
        register={register('age')}
        error={errors.age} label={""}      />

      <BaseInput
        type='email'
        register={register('email')}
        error={errors.email} label={""}      />

      <BaseInput
        type='password'
        label='Senha'
        register={register('password')}
        error={errors.password}
      />

      <BaseInput
        type='password'
        label='Confirmar Senha'
        register={register('confirmPassword')}
        error={errors.confirmPassword}
      />
      <button type="submit" >Cadastrar</button>
  </form>

  )
  
};
