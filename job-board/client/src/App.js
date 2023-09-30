import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
import JobForm from './components/JobForm';
import jobsData from './constants/data';
import { getData } from './services/api';

function App() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const getJobData = async () => {
      const response = await getData();
      setJobs(response);
    }
    !showForm && getJobData();
  }, [showForm])

  const handleSelectJob = (job) => {
    setSelectedJob(job);
    setShowForm(false);
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
    setSelectedJob(null);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h1 className="mb-4">Job Board</h1>
          <button className="btn btn-primary mb-3" onClick={handleToggleForm}>
            {showForm ? 'Hide Job Form' : 'Show Job Form'}
          </button>
          {showForm && <JobForm setShowForm={setShowForm} />}
          {!showForm && <JobList onSelectJob={handleSelectJob} jobs={jobs} />}
        </div>
        {selectedJob && (
          <div className="col-md-8">
            <JobDetail job={selectedJob} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
