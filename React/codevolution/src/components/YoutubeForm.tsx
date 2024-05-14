import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  channel: string;
};
export const YoutubeForm = () => {
  const { register, control, handleSubmit } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log("Form state:", data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
          id="username"
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          {...register("email", {
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email format",
            },
          })}
          id="email"
        />

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          {...register("channel", { required: "Channel is required" })}
          id="channel"
        />

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
