import PropTypes from 'prop-types';

export const UpdateContactForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Number
        <input type="text" name="number" />
      </label>
      <button type="submit">Update</button>
    </form>
  );
};

UpdateContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};