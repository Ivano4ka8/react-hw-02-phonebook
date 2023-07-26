import { Component } from 'react';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import {
  Form,
  FormLabel,
  FormInput,
  ButtonSubmit,
} from './ContactsForm.styled';

export class ContactsForm extends Component {
  state = {
    number: '',
    name: '',
  };

  handleChange = event => {
    const { name, value } = event.target;

    return this.setState({
      [name]: value,
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;

    onSubmit({
      id: nanoid(),
      ...this.state,
    });

    this.reset();
  };

  reset() {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { name, number } = this.state;
    const { onFormSubmit, handleChange } = this;
    return (
      <Form onSubmit={onFormSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </FormLabel>
        <FormLabel>
          Phone
          <FormInput
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </FormLabel>
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </Form>
    );
  }
}

ContactsForm.propTypes = {
  name: propTypes.string,
  number: propTypes.number,
  handleChange: propTypes.func,
  onFormSubmit: propTypes.func,
};
