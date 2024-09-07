import "../styles/index.css"

export default function CV({formData}) {
   return (
      <div className="cv-wrapper">
         <h2 className="cv-heading">
            {formData.info.firstName + " " + formData.info.lastName}
         </h2>
         <div className="cv-info-wrapper">
            <a href={"mailto:" + formData.info.email}>{formData.info.email}</a>
            <a href={"tel:" + formData.info.number}>{formData.info.number}</a>
         </div>
         <div className="cv-content-wrapper">
            <h3>Education</h3>
            <div className="cv-text-wrapper">
               <div className="cv-text-big">School name:</div>
               <div className="cv-text-small">{formData.education.schoolName}</div>
            </div>
            <div className="cv-text-wrapper">
               <div className="cv-text-big">Title:</div>
               <div className="cv-text-small">{formData.education.title}</div>
            </div>
            <div className="cv-text-wrapper">
               <div className="cv-text-big">Date:</div>
               <div className="cv-text-small">{formData.education.date}</div>
            </div>
         </div>
         <div className="cv-content-wrapper">
            <h3>Experience</h3>
            <div className="cv-text-wrapper">
               <div className="cv-text-big">Company:</div>
               <div className="cv-text-small">{formData.experience.company}</div>
            </div>
            <div className="cv-text-wrapper">
               <div className="cv-text-big">Position:</div>
               <div className="cv-text-small">{formData.experience.position}</div>
            </div>
            <div className="cv-text-wrapper">
               <div className="cv-text-big">Responsibilities:</div>
               <div className="cv-text-small">{formData.experience.responsibilities}</div>
            </div>
            <div className="cv-text-wrapper">
               <div className="cv-text-big">Start Date:</div>
               <div className="cv-text-small">{formData.experience.startWork}</div>
            </div>
            <div className="cv-text-wrapper">
               <div className="cv-text-big">End Date:</div>
               <div className="cv-text-small">{formData.experience.endWork}</div>
            </div>
         </div>
      </div>
   );
}