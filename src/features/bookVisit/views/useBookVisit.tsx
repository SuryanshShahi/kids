// import { signInSchema } from "@/schemas";
import { contactUs } from '@/utils/schemas';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const useBookVisit = () => {
  const initialValues = {
    fname: '',
    lname: '',
    email: '',
    code: '',
    phone: '',
    checkbox: false,
    date: '',
    visitDate: '',
    message: '',
    duration: 'Within a month',
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
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(values as any).toString(),
      })
        .then(() =>
          toast.success("Visit Booked Successfully!", {
            position: 'top-right',
            className: "toast-login",
            hideProgressBar: true,
            autoClose: 3000,
          })
        )
        .catch((error) => alert(error));
    },
  });

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
