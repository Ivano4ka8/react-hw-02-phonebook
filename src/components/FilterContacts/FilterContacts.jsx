import propTypes from 'prop-types';
import {
  FormInput,
  FormLabel,
} from 'components/ContactsForm/ContactsForm.styled';
import { FilterWrapper } from './FilterContacts.styled';

export const FilterContacts = ({ filter, filterChange }) => {
  return (
    <FilterWrapper>
      <FormLabel>
        Find contacts by name
        <FormInput
          type="text"
          name="filter"
          value={filter}
          onChange={filterChange}
        />
      </FormLabel>
    </FilterWrapper>
  );
};

FilterContacts.propTypes = {
  filter: propTypes.string,
  filterChange: propTypes.func,
};
