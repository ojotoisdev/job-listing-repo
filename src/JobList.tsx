import JobCard from "./JobCard";

interface JobListProps {
  jobs: { id: number; title: string; description: string }[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div className="job-list-container">
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p className="no-jobs">No jobs available at the moment.</p>
      )}
    </div>
  );
};

export default JobList;
