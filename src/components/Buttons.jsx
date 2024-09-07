import "../styles/index.css";

export default function Buttons({ onSubmit, onEdit }) {
   return (
      <div className="buttons-wrapper">
         <button onClick={onEdit}>Edit</button>
         <button onClick={onSubmit}>Submit</button>
      </div>
   );
}
