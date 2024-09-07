import "../styles/index.css";
import Input from "./Input";

export default function InfoSection({ data, setData }) {
   return (
      <div className="form-wrapper">
         <h2>Personal Information:</h2>
         <Input
            label="First name"
            id="first-name"
            type="text"
            // Set value to state prop
            value={data.firstName}
            // Use setState to set change value
            onChange={(e) =>
               setData((prev) => ({ ...prev, firstName: e.target.value }))
            }
         />
         <Input
            label="Last name"
            id="last-name"
            type="text"
            value={data.lastName}
            onChange={(e) =>
               setData((prev) => ({ ...prev, lastName: e.target.value }))
            }
         />
         <Input
            label="Email"
            id="email"
            type="email"
            value={data.email}
            onChange={(e) =>
               setData((prev) => ({ ...prev, email: e.target.value }))
            }
         />
         <Input
            label="Phone number"
            id="number"
            type="tel"
            value={data.number}
            onChange={(e) =>
               setData((prev) => ({ ...prev, number: e.target.value }))
            }
         />
      </div>
   );
}
