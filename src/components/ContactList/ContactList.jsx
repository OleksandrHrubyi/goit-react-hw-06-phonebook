import PropTypes from "prop-types";
import styles from "../ContactList/contactList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/Contacts/contactAction";

function Card({ arr, onDel }) {
  return (
    <div className={styles.container}>
      <TransitionGroup component="ul">
        {arr.map(({ id, name, number }) => {
          return (
            <CSSTransition key={id} timeout={3000} classNames={styles}>
              <li className={styles.item}>
                <h3 className={styles.name}>{name} : </h3>
                <a className={styles.number} href={number}>
                  {number}
                </a>
                <button
                  className={styles.btn}
                  onClick={() => {
                    onDel(id);
                  }}
                  type="button"
                >
                  delite
                </button>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}

Card.propTypes = {
  arr: PropTypes.array.isRequired,
  onDel: PropTypes.func.isRequired,
};

const getVisibleContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter((el) => el.name.toLowerCase().includes(normalizedFilter));
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  return { arr: getVisibleContacts(items, filter) };
};

const mapDispatchToProps = (dispatch) => ({
  onDel: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
