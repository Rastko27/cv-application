import "../styles/index.css";
import PropTypes from "prop-types";

export default function Input({ label, id, type, value, onChange }) {
   return (
      <label htmlFor={id}>
         {label}:
         <input type={type} id={id} value={value} onChange={onChange} />
      </label>
   );
}

// Check prop types
Input.propTypes = {
   label: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
};
