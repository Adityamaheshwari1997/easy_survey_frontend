import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Index = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/v1/surveys');
        setSurveys(response.data);
      } catch (error) {
        console.error('Error fetching surveys:', error);
      }
    };

    fetchSurveys();
  }, []);

  return (
    <div>
      <Link to="/create-survey">
        Create Survey
      </Link>
      <h2>Survey List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {surveys.map(survey => (
            <tr key={survey.id}>
              <td>{survey.name}</td>
              <td>{survey.description}</td>
              <td>

	             	<Link to={`/edit-survey/${survey.id}`}>
					        edit Survey
					      </Link>
					    </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
