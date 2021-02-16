import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import PhonebookForm from "../PhonebookForm/PhonebookForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import Container from "../Container/Container";
import titleStyles from "./title.module.css";
import filterStyles from "./filter.module.css";

function App({ contacts }) {
  return (
    <Container>
      <CSSTransition
        in={true}
        classNames={titleStyles}
        timeout={500}
        appear={true}
        unmountOnExit
      >
        <h1>Phonebook</h1>
      </CSSTransition>

      <PhonebookForm />
      <CSSTransition
        in={contacts.length > 0}
        classNames={filterStyles}
        timeout={250}
        unmountOnExit
      >
        <div>
          {" "}
          <h2>Contacts</h2>
          <Filter />
        </div>
      </CSSTransition>

      <ContactList />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps, null)(App);
