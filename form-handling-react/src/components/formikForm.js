import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define the validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const FormikForm = () => {
  const initialValues = { username: '', email: '', password: '' };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field name="username" type="text" />
        <ErrorMessage name="username" component="div" />
        
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="div" />
        
        <Field name="password" type="password" />
        <ErrorMessage name="password" component="div" />
        
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;