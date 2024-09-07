# CV Maker

Welcome to the CV Maker project! This application allows users to create a personalized CV by filling out their personal information, education, and experience. After submitting the form, the data is displayed in a formatted CV view.

## Features

- **Form Sections**: Fill in personal information, education, and work experience.

- **Form Submission**: Preview and edit your CV after submission.

## Getting Started

To get started with the CV Maker application, follow the instructions below.

### Prerequisites

- Node.js (v14 or higher recommended)

- npm or yarn (Node package managers)

### Installation

1\. **Clone the Repository**

   ```bash

   git clone https://github.com/Rastko27/cv-application.git

   cd cv-maker

   ```

2\. **Install Dependencies**

   ```bash

   npm install

   ```

   or if you're using yarn:

   ```bash

   yarn install

   ```

3\. **Start the Development Server**

   ```bash

   npm run dev

   ```

   or with yarn:

   ```bash

   yarn run dev

   ```

## Project Structure

- **`src/components/`**: Contains React components used in the application.

  - `App.jsx`: The main component that holds the state and renders other components.

  - `InfoSection.jsx`: Component for entering personal information.

  - `EducationSection.jsx`: Component for entering education details.

  - `ExperienceSection.jsx`: Component for entering work experience.

  - `Input.jsx`: A reusable input component with label.

  - `Buttons.jsx`: Component with submit and edit buttons.

  - `CV.jsx`: Component for displaying the final CV.

  - `Mobile.jsx`: Component to display a message for mobile users.

- **`src/styles/`**: Contains CSS files for styling.

  - `index.css`: Main stylesheet with global and custom styles.

- **`index.jsx`**: The entry point of the application, where the root React component is rendered.

- **`public/`**: Contains static assets and the HTML file.

## Usage

1\. **Fill out the Form**: Enter your personal information, education, and work experience in the respective sections.

2\. **Submit the Form**: Click the "Submit" button to view your CV.

3\. **Edit the Form**: Click the "Edit" button to make changes to your information.

## Customization

You can customize the styling and functionality of the application by editing the components and CSS files in the `src` directory.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

---

Happy CV making! 🎉