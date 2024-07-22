import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  ErrorMessage,
  Label,
  LogInButton,
  StyledField,
  StyledForm,
} from "./LoginForm.styled";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(6, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
});

type FormData = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // Логіка
  });

  return (
    <StyledForm autoComplete="off" onSubmit={onSubmit}>
      <Label htmlFor="email">
        <StyledField
          type="email"
          {...register("email")}
          placeholder="Email address"
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </Label>
      <Label htmlFor="password">
        <StyledField
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </Label>
      <LogInButton type="submit">Login</LogInButton>
    </StyledForm>
  );
};

export default LoginForm;
