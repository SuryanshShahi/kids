// import { signInSchema } from "@/schemas";
import { contactUs } from "@/utils/schemas";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const useBookVisit = () => {
  const initialValues = {
    name: "",
    childName: "",
    email: "",
    phone: "",
    checkbox: false,
    dob: "",
    message: "",
    branch: "Within a month",
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: contactUs,
    onSubmit: async (values) => {
      var templateParams = {
        name: values?.name,
        email: values?.email,
        message: `name: ${values?.name} 
                  email: ${values?.email} 
                  phone: ${values?.phone} 
                  childName: ${values?.childName} 
                  childDOB: ${values?.dob} 
                  branch: ${values?.branch} 
                  message: ${values?.message}`,
      };
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          templateParams,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(() =>
          toast.success("Visit Booked Successfully!", {
            position: "top-right",
            className: "toast-login",
            hideProgressBar: true,
            autoClose: 3000,
          })
        )
        .catch((err) => console.log(err));
    },
  });
  console.log({ values }, { errors });

  return {
    setFieldValue,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    initialValues,
  };
};
export default useBookVisit;
