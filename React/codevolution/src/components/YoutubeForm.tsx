import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    facebook: string;
    twitter: string;
  };
  phoneNumbers: string[];
  phNumbers: { number: string }[];
};
export const YoutubeForm = () => {
  const { register, control, handleSubmit, formState, reset } =
    useForm<FormValues>({
      defaultValues: {
        username: "React",
        email: "",
        channel: "Hook Form",
        social: {
          facebook: "",
          twitter: "",
        },
        phoneNumbers: [],
        phNumbers: [{ number: "" }],
      },
    });
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });
  const onSubmit = (data: FormValues) => {
    console.log("Form state:", data);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1>Youtube form</h1>
        <div>
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
          <p className="error">{errors.username?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
              validate: {
                notAdmin: (value) => {
                  return value !== "admin" || "not allowed";
                },
                notBlackListed: (value) => {
                  return (
                    !value.endsWith("example.com") ||
                    "This domain is not supported"
                  );
                },
              },
            })}
            id="email"
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            {...register("channel", { required: "Channel is required" })}
            id="channel"
          />
          <p className="error">{errors.channel?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <input type="text" {...register("social.facebook")} id="facebook" />
        </div>
        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <input type="text" {...register("social.twitter")} id="twitter" />
        </div>
        <div className="form-control">
          <label htmlFor="primary-phone">Primary phone number</label>
          <input
            type="text"
            {...register("phoneNumbers.0", {
              required: {
                value: true,
                message: "Phone number is required",
              },
            })}
            id="primary-phone"
          />
          <p className="error">{errors.phoneNumbers?.[0]?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="secondary-phone">Secondary phone number</label>
          <input
            type="text"
            {...register("phoneNumbers.1")}
            id="secondary-phone"
          />
        </div>
        <div>
          <label>List of phone numbers</label>
          {fields.map((item, index) => {
            return (
              <div className="form-control" key={item.id}>
                <input
                  type="text"
                  {...register(`phNumbers.${index}.number` as const)}
                />
                {index > 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    Remove
                  </button>
                )}
              </div>
            );
          })}
          <button type="button" onClick={() => append({ number: "" })}>
            Add
          </button>
        </div>
        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
