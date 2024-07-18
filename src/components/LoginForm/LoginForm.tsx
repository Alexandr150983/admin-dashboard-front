import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, ErrorMessage, Form, Input, Label } from "./LoginForm.styled";

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
    // Тут ви можете додати логіку для обробки даних форми, наприклад, авторизацію користувача
  });

  return (
    <Form onSubmit={onSubmit}>
      <Label>Email</Label>
      <Input {...register("email")} />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <Label>Password</Label>
      <Input type="password" {...register("password")} />
      {errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}

      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
