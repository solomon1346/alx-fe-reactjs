import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div>
      <h1>Form Handling in React</h1>

      <h2>Controlled Component</h2>
      <RegistrationForm />

      <h2>Formik Version</h2>
      <FormikForm />
    </div>
  );
}

export default App;