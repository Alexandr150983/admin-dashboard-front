import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const onSubmit = handleSubmit((data) => console.log(data));
  // firstName and lastName will have correct type

  return (
    <form onSubmit={onSubmit}>
      <label>email</label>
      <input {...register("email")} />
      <label>password</label>
      <input {...register("password")} />
      <button
        type="button"
        onClick={() => {
          setValue("password", "luo");
          setValue("email", true);
          errors.bill;
        }}
      >
        SetValue
      </button>
    </form>
  );
};

export default LoginForm;
