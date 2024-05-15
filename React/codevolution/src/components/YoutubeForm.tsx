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
  age: number;
  dob: Date;
};
let renderCount = 0;
export const YoutubeForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState,
    reset,
    watch,
    getValues,
    setValue,
  } = useForm<FormValues>({
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
      age: 0,
      dob: new Date(),
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
  const watchUserName = watch("username");
  const handleGetValues = () => {
    console.log("Get values:", getValues());
  };
  const handleSetValue = () => {
    setValue("username", "Next.js", {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
  renderCount++;
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1>Youtube form</h1>
        <h2>Render Count: {renderCount / 2}</h2>
        <h2>Watched username: {watchUserName}</h2>
        <div className="form-control">
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
        <div className="form-control">
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

        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            {...register(
              "age",

              { required: "Age is required", valueAsNumber: true }
            )}
            id="age"
          />
          <p className="error">{errors.age?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="dob">Date of birth</label>
          <input
            type="date"
            {...register(
              "dob",

              {
                required: { value: true, message: "Date of birth is required" },
                valueAsDate: true,
              }
            )}
            id="dob"
          />
          <p className="error">{errors.dob?.message}</p>
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleGetValues}>
          Get values
        </button>
        <button type="button" onClick={handleSetValue}>
          Set value
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
