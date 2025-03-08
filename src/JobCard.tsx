import { useState } from "react";

interface JobCardProps {
  job: { id: number; title: string; description: string };
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="job-card">
      <h3 className="job-title">{job.title}</h3>
      
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && <p>{job.description}</p>}
    </div>
  );
};

export default JobCard;
