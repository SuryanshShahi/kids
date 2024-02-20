import * as Yup from "yup";

export const contactUs = Yup.object({
  name: Yup.string()
    .min(2)
    .max(25)
    .required("This field is mandatory")
    .matches(/^[a-zA-Z ]+$/, "Name cannot have special characters")
    .strict(true),
  childName: Yup.string()
    .min(2)
    .max(25)
    .required("This field is mandatory")
    .matches(/^[a-zA-Z ]+$/, "Name cannot have special characters")
    .strict(true),
  email: Yup.string().email("Invalid email address"),
  phone: Yup.string()
    .required("This field is mandatory")
    .matches(/^[6-9]\d{9}$/, {
      message: "Please enter valid number.",
      excludeEmptyString: false,
    }),
  message: Yup.string().min(2).max(25),
  branch: Yup.string().required("This field is mandatory"),
  dob: Yup.date().required("This field is mandatory"),
});
