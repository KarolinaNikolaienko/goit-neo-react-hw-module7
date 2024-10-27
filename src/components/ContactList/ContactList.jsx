import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && (
        <div className={css.error}>
          <p>Oops... Something went wrong</p>
          <p className={css.errorMsg}>{error}</p>
        </div>
      )}
      {contacts && contacts.length > 0 && (
        <ul className={css.contactList}>
          {contacts.map(contact => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
