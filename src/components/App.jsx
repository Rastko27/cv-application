import { useState } from "react";
import "../styles/index.css";
import InfoSection from "./InfoSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import Buttons from "./Buttons";
import CV from "./CV";
import Mobile from "./Mobile";

function App() {
   // State in parent
   const [info, setInfo] = useState({
      firstName: "",
      lastName: "",
      email: "",
      number: "",
   });

   const [education, setEducation] = useState({
      schoolName: "",
      title: "",
      date: "",
   });

   const [experience, setExperience] = useState({
      company: "",
      position: "",
      responsibilities: "",
      startWork: "",
      endWork: "",
   });

   // Display submitted or not
   const [isSubmitted, setIsSubmitted] = useState(false);
   // Turn formData into state so it can be imported to CV component
   const [formData, setFormData] = useState(null);

   const handleSubmit = () => {
      // Combine all data for submission
      const data = { info, education, experience };
      setFormData(data); // Set formData to submitted data

      // Hide after form submission
      setIsSubmitted(true);
   };

   const handleEdit = () => {
      setIsSubmitted(false);
   };

   return (
      <div className="app">
         <h1>CV Maker</h1>
         {!isSubmitted && (
            <>
               <InfoSection data={info} setData={setInfo} />
               <EducationSection data={education} setData={setEducation} />
               <ExperienceSection data={experience} setData={setExperience} />
            </>
         )}
         {isSubmitted && <CV formData={formData} />}
         <Buttons onSubmit={handleSubmit} onEdit={handleEdit} />
         <Mobile />
      </div>
   );
}

export default App;
