import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const SurveyFormEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Fetching the survey ID from the URL params
  const [survey, setSurvey] = useState({ name: '', description: '' });

  useEffect(() => {
    // Fetch survey data from the backend API using Axios
    const fetchSurvey = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/api/v1/surveys/${id}`);
        setSurvey(response.data); // Update state with fetched survey data

      } catch (error) {
        console.error('Error fetching survey:', error);
      }
    };

    fetchSurvey();
  }, [id]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(`http://127.0.0.1:3000/api/v1/edit-survey/${id}`, survey);
      console.log('Survey updated:', response.data);
      if(response){
        navigate(`/`)
        }
    } catch (error) {
      console.error('Error updating survey:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSurvey({ ...survey, [name]: value });
  };

  return (
    <div>
      <h2>Edit Survey</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={survey.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={survey.description}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Update Survey</button>
      </form>
    </div>
  );
};

export default SurveyFormEdit