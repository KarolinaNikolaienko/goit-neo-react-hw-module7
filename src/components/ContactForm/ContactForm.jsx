import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleAddContact = (value, actions) => {
    dispatch(addContact(value));
    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Minimum 3 letters')
      .max(50, 'Maximum 50 letters')
      .required('Name is required'),
    number: Yup.string()
      // .matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/, 'Must be in format 123-45-67')
      .min(3, 'Minimum 3 letters')
      .max(50, 'Maximum 50 letters')
      .required('Number is required'),
    id: Yup.string().required(),
  });

  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
        id: nanoid(),
      }}
      onSubmit={handleAddContact}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.fields}>
          <div className={css.field}>
            <label htmlFor={nameId}>Name</label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nameId}
            ></Field>
            <ErrorMessage
              className={css.errorMsg}
              name="name"
              component="span"
            ></ErrorMessage>
          </div>
          <div className={css.field}>
            <label htmlFor={numberId}>Number</label>
            <Field
              className={css.input}
              type="text"
              name="number"
              id={numberId}
            ></Field>
            <ErrorMessage
              className={css.errorMsg}
              name="number"
              component="span"
            ></ErrorMessage>
          </div>
        </div>
        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
