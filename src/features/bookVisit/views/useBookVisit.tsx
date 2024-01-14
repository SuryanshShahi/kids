// import { signInSchema } from "@/schemas";
import { contactUs } from '@/utils/schemas';
import { useFormik } from 'formik';

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
      console.log(values);
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
