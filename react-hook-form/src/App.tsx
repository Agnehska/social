import { useForm, useWatch } from "react-hook-form";
import "./App.css";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  avatarColor: unknown;
  isAcceptRules: boolean;
}

// const schema = yup.object({
//   firstName: yup.string().required(),
//   lastName: yup.string().required(),
//   age: yup.number().positive().integer().required(),
//   isAcceptRules: yup.boolean().required(),
// });

export default function App() {
  const { register, control, handleSubmit, reset, formState: {
    errors,
    isValid
  } } = useForm<FormData>({
    mode: "onBlur", // all, onBlur, onChange, onSubmit, onTouched
    // resolver: yupResolver(schema),
  });

  const firstNameWatch = useWatch({ control, name: "firstName" });

  console.log(firstNameWatch);

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert(JSON.stringify(data));
    reset();
  }

  return (
    <div className="App">
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input
            {...register("firstName", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 5,
                message: "First name must be at least 5 characters long"
              }
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors.firstName && <p>{errors.firstName.message as React.ReactNode}</p>}
        </div>

        <label>
          Last Name:
          <input
            {...register("lastName", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 5,
                message: "Минимум 5 символов."
              }
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors.lastName && <p>{errors.lastName.message as React.ReactNode}</p>}
        </div>

        <label>
          E-mail:
          <input
            {...register("email", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 5,
                message: "Минимум 5 символов."
              },
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Неверный формат e-mail."
              }
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors.email && <p>{errors.email.message as React.ReactNode}</p>}
        </div>

        <label>
          Age:
          <input
            type="number"
            {...register("age", {
              required: "Поле обязательно к заполнению",
              min: {
                value: 15,
                message: "Минимум 15 лет."
              },
              max: {
                value: 99,
                message: "Уже поздно курить."
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors.age && <p>{errors.age.message as React.ReactNode}</p>}
        </div>

        <label>
          Avatar color:
          <input type="color"
            {...register("avatarColor", {
              required: "Поле обязательно к заполнению",
            })}
            style={{ width: "40px", height: "40px", padding: 0 }}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors.avatarColor && <p>{errors.avatarColor.message as React.ReactNode}</p>}
        </div>

        <label className="checkbox-item">
          Согласен с правилами:
          <input type="checkbox"
            {...register("isAcceptRules", {
              required: "Ты должен согласиться!",
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors.isAcceptRules && <p>{errors.isAcceptRules.message as React.ReactNode}</p>}
        </div>

        <input type="submit" disabled={!isValid} style={{ marginBottom: "200px" }} />
      </form>
    </div>
  );
}