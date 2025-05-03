import css from "./ContactsPage.module.css";
import ContactForm  from "../../components/contactForm/ContactForm";
import SearchBox  from "../../components/searchBox/SearchBox";
import ContactList from "../../components/contactList/ContactList"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import { selectLoading } from "../../redux/contacts/contactsSelectors";
import { selectIsRefreshing } from "../../redux/auth/authSelectors";

export default function ContactsPage() {
  const isRefreshing = useSelector(selectIsRefreshing)
  
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

    return isRefreshing ? <div>Refreshing user...</div> : (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList/>
    </div>
  )
}