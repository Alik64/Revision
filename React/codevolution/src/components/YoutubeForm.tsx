import { useForm, useFieldArray, FieldErrors } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";
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
      phoneNumbers: [""],
      phNumbers: [{ number: "" }],
      age: 0,
      dob: new Date(),
    },
    mode: "onTouched",
  });
  const {
    errors,
    touchedFields,
    dirtyFields,
    isDirty,
    isValid,
    isSubmitting,
    isSubmitted,
    isSubmitSuccessful,
  } = formState;
  // console.log({ errors, touchedFields, dirtyFields, isDirty, isValid });

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });
  const onSubmit = (data: FormValues) => {
    console.log("Form state:", data);
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
  const onError = (errors: FieldErrors<FormValues>) =>
    console.log("err:", errors);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  renderCount++;
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>Youtube form</h1>
        <p style={{ color: isSubmitted ? "green" : "inherit" }}>
          <strong>isSubmitted</strong>
        </p>
        <p style={{ color: isSubmitting ? "green" : "inherit" }}>
          <strong>isSubmitting</strong>
        </p>
        <p style={{ color: isSubmitSuccessful ? "green" : "inherit" }}>
          <strong>isSubmitSuccessful</strong>
        </p>
        <p style={{ color: isValid ? "green" : "inherit" }}>
          <strong>isValid</strong>
        </p>
        <p style={{ color: isDirty ? "green" : "inherit" }}>
          <strong>isDirty</strong>
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
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
                emailAvailable: async (value) => {
                  const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users?email=${value}`
                  );
                  const data = await response.json();
                  return data.length == 0 || "Email already taken";
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
          <input
            type="text"
            {...register("social.twitter", {
              disabled: watch("channel") === "",
              required: { value: false, message: "Twitter is required" },
            })}
            id="twitter"
          />
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
        {/* <div className="form-control">
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
        </div> */}
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        <button type="button" onClick={handleGetValues}>
          Get values
        </button>
        <button type="button" onClick={handleSetValue}>
          Set value
        </button>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
