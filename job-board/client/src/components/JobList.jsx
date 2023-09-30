import React from 'react';

function JobList({ onSelectJob, jobs }) {
  return (
    <div>
      <h2 className="mt-3 mb-4">Job Listings</h2>
      <ul className="list-group">
        {jobs.map((job) => (
          <li className="list-group-item" key={job.id}>
            <a href="#" onClick={() => onSelectJob(job)} className="text-decoration-none">
              {job.title} - {job.company}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
