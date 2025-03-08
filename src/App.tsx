import { useState } from "react";
import JobList from "./JobList";

const App: React.FC = () => {
  // State to toggle between showing jobs and an empty job list
  const [jobs, setJobs] = useState([
    { id: 1, title: "Software Engineer", description: "Develop and maintain web applications." },
    { id: 2, title: "Product Manager", description: "Oversee product development and strategy." },
    { id: 3, title: "UI/UX Designer", description: "Design user-friendly interfaces and experiences." },
    { id: 4, title: "Foodieland", description: "Types of foods and the recipes." },
    { id: 5, title: "Teaching", description: "Raise leaders of tomorrow." },
    { id: 6, title: "Accountant", description: "Manage financial records and prepare financial reports." },
    { id: 7, title: "Marketing Manager", description: "Create and implement marketing strategies." },
    { id: 8, title: "HR Manager", description: "Manages employee relations, hiring, and company policies." },
    { id: 9, title: "Electrician", description: "Installs and repairs electrical systems." },
    { id: 10, title: "Mechanic", description: "Repairs and maintains vehicles." },
  ]);

  // Function to toggle jobs list (Clear or Restore)
  const toggleJobs = () => {
    if (jobs.length > 0) {
      setJobs([]); // Clear jobs (show "No jobs available")
    } else {
      setJobs([
        { id: 1, title: "Software Engineer", description: "Develop and maintain web applications." },
        { id: 2, title: "Product Manager", description: "Oversee product development and strategy." },
        { id: 3, title: "UI/UX Designer", description: "Design user-friendly interfaces and experiences." },
        { id: 4, title: "Foodieland", description: "Types of foods and the recipes." },
        { id: 5, title: "Teaching", description: "Raise leaders of tomorrow." },
        { id: 6, title: "Accountant", description: "Manage financial records and prepare financial reports." },
        { id: 7, title: "Marketing Manager", description: "Create and implement marketing strategies." },
        { id: 8, title: "HR Manager", description: "Manages employee relations, hiring, and company policies." },
        { id: 9, title: "Electrician", description: "Installs and repairs electrical systems." },
        { id: 10, title: "Mechanic", description: "Repairs and maintains vehicles." },
      ]);
    }
  };

  return (
    <div>
      <h1>Job Listings</h1>
      
      {/* Toggle button */}
      <button onClick={toggleJobs}>
        {jobs.length > 0 ? "Clear Jobs" : "Show Jobs"}
      </button>

      <JobList jobs={jobs} />
    </div>
  );
};

export default App;
