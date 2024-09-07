import "../styles/index.css";
import Input from "./Input";

export default function EducationSection({ data, setData }) {
   return (
      <div className="form-wrapper">
         <h2>Education:</h2>
         <Input
            label="School name"
            id="school-name"
            type="text"
            value={data.schoolName}
            onChange={(e) =>
               setData((prev) => ({ ...prev, schoolName: e.target.value }))
            }
         />
         <Input
            label="Title"
            id="title"
            type="text"
            value={data.title}
            onChange={(e) =>
               setData((prev) => ({ ...prev, title: e.target.value }))
            }
         />
         <Input
            label="Date"
            id="date"
            type="date"
            value={data.date}
            onChange={(e) =>
               setData((prev) => ({ ...prev, date: e.target.value }))
            }
         />
      </div>
   );
}
