import React, { useState } from 'react';
import { saveData } from '../services/api';
import InputField from './InputField';

const defaultData = { title: '', company: '', location: '', description: '' };

function JobForm({ setShowForm }) {
  const [formData, setFormData] = useState(defaultData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await saveData(formData);

    setShowForm(false);
    setFormData(defaultData);
  };

  return (
    <div>
      <h2 className="mt-3 mb-4">Add a Job Listing</h2>
      <form onSubmit={handleSubmit}>
      <InputField 
            type="text"
            label="Job Title"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
        />
        <InputField 
            type="text"
            label="Company"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
        />
        <InputField 
            type="text"
            label="Location"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
        />  
        <InputField 
            type="text"
            label="Description"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
        />  
        <button type="submit" className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
}

export default JobForm;
