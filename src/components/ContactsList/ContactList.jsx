import { ContactsItem } from 'components/ContactsItem/ContactsItem';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          ></ContactsItem>
        );
      })}
    </ul>
  );
};
