import React, { Component } from "react";
import PhonebookForm from "../PhonebookForm/PhonebookForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import Container from "../Container/Container";
import "react-toastify/dist/ReactToastify.css";
import { CSSTransition } from "react-transition-group";

import title from "./title.module.css";

class App extends Component {
  render() {
    return (
      <Container>
        <CSSTransition
          in={true}
          classNames={title}
          timeout={500}
          appear={true}
          unmountOnExit
        >
          <h1>Phonebook</h1>
        </CSSTransition>

        <PhonebookForm onSubmit={this.handlerFormSubmit} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    );
  }
}

export default App;
