import { useContext } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from "react-hook-form";
import { IUserRegister } from "../../../Providers/UserContext/@types";
import { UserContext } from "../../../Providers/UserContext/UserContext";
import { schemaRegister } from "../schemas/registerSchemas";
import { Input } from "../Input";

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
      <Input
        type='text'
        label='Nome'
        register={register('name')}
        error={errors.name}
      />

      <Input
        type='text'
        label='Nome'
        register={register('age')}
        error={errors.age}
      />

      <Input
        type='email'
        label='Email'
        register={register('email')}
        error={errors.email}
      />

      <Input
        type='password'
        label='Senha'
        register={register('password')}
        error={errors.password}
      />

      <Input
        type='password'
        label='Confirmar Senha'
        register={register('confirmPassword')}
        error={errors.confirmPassword}
      />
  </form>

  )
  
};
