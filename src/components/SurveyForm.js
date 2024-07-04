import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SurveyForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:3000/api/v1/surveys', {
        name,
        description,
      });
      console.log('Survey created:', response.data);
      setName('');
      setDescription('');
      if(response){
        navigate(`/edit-survey/${response?.data?.id}`)
      }
    } catch (error) {
      console.error('Error creating survey:', error);
    }
  };

  return (
    <div>
      <h2>Create Survey</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Create Survey</button>
      </form>
    </div>
  );
};

export default SurveyForm;
