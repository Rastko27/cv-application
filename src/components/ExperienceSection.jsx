import "../styles/index.css";
import Input from "./Input";

export default function ExperienceSection({ data, setData }) {
   return (
      <div className="form-wrapper">
         <h2>Experience:</h2>
         <Input
            label="Company"
            id="company"
            type="text"
            value={data.company}
            onChange={(e) =>
               setData((prev) => ({ ...prev, company: e.target.value }))
            }
         />
         <Input
            label="Position"
            id="position"
            type="text"
            value={data.position}
            onChange={(e) =>
               setData((prev) => ({ ...prev, position: e.target.value }))
            }
         />
         <Input
            label="Responsibilities"
            id="responsibilities"
            type="text"
            value={data.responsibilities}
            onChange={(e) =>
               setData((prev) => ({
                  ...prev,
                  responsibilities: e.target.value,
               }))
            }
         />
         <Input
            label="Start work date"
            id="start-work"
            type="date"
            value={data.startWork}
            onChange={(e) =>
               setData((prev) => ({ ...prev, startWork: e.target.value }))
            }
         />
         <Input
            label="End work date"
            id="end-work"
            type="date"
            value={data.endWork}
            onChange={(e) =>
               setData((prev) => ({ ...prev, endWork: e.target.value }))
            }
         />
      </div>
   );
}
