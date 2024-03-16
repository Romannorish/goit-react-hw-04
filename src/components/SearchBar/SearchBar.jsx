import {Field, Form, Formik} from "formik";
import toast, {Toaster} from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({onSeach}) {
  const hundleSubmit = (values) => {
    if (values.search === "") {
      toast.error("Enter the data in the field");
    }
    console.log("values: ", values);

    onSeach(values.search);
  };
  return (
    <header className={css.header}>
      <Formik initialValues={{search: ""}} onSubmit={hundleSubmit}>
        <Form className={css.form}>
          <label>
            <Field className={css.field} type="text" name="search" placeholder="search" />
          </label>
          <Toaster position="top-right" reverseOrder={false} />
          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}
