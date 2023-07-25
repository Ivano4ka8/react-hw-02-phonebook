export const FilterContacts = ({ filter, filterChange }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={filterChange}
        />
      </label>
    </>
  );
};
