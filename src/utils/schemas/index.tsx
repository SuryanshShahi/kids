import * as Yup from 'yup';

export const contactUs = Yup.object({
  fname: Yup.string()
    .min(2)
    .max(25)
    .required('This field is mandatory')
    .matches(/^[a-zA-Z ]+$/, 'Name cannot have special characters')
    .strict(true),
  lname: Yup.string()
    .min(2)
    .max(25)
    .required('This field is mandatory')
    .matches(/^[a-zA-Z ]+$/, 'Name cannot have special characters')
    .strict(true),
  email: Yup.string()
    .email('Invalid email address')
    .required('This field is mandatory'),
  phone: Yup.string()
    .required('This field is mandatory')
    .matches(/^[6-9]\d{9}$/, {
      message: 'Please enter valid number.',
      excludeEmptyString: false,
    }),
  message: Yup.string().min(2).max(25).required('This field is mandatory'),
  duration: Yup.string().required('This field is mandatory'),
  code: Yup.number().required('This field is mandatory'),
  date: Yup.date().required('This field is mandatory'),
  visitDate: Yup.date().required('This field is mandatory'),
});
