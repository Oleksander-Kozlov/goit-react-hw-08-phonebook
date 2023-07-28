import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { selectIsLoading } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter.jsx';
import { Loader } from 'components/Loader/Loader';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <ContactForm />
      {isLoading && <Loader />}
      <Filter />
      <ContactList />
    </>
  );
}
