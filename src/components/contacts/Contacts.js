import React, { Component } from 'react';
import Contact from './Contact';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getContacts} from '../../Actions/ContactActions';

class Contacts extends Component {

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}

//very important dont forget () around {}
const mapStateToProps = (state) => ({
  contacts: state.contact.contacts
}); //follow index.js in reducer // contact is obj which holds contacts


export default connect(mapStateToProps, {getContacts})(Contacts);
