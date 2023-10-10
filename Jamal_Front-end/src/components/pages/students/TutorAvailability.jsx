import React, { useState, useEffect } from 'react';
import StudentLayout from './StudentLayout';

function TutorAvailability() {
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await fetch('api/tutors');  // Adjust this API endpoint as per your backend setup
        const data = await response.json();
        setTutors(data);
      } catch (error) {
        console.error("Failed to fetch tutors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTutors();
  }, []);

  return (
    <StudentLayout>
      <div>
        <label>
          Search by Expertise:
          <input 
            type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
        </label>

        {loading ? (
          <p>Loading tutors...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Tutor</th>
                <th>Expertise</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              {tutors
                .filter((tutor) => tutor.expertise.includes(search))
                .map((tutor) => (
                  <tr key={tutor.id}>
                    <td>{tutor.name}</td>
                    <td>{tutor.expertise}</td>
                    <td>
                      {Object.entries(tutor.availability)
                        .filter(([, isAvailable]) => isAvailable)
                        .map(([day]) => day)
                        .join(', ')}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </StudentLayout>
  );
}

export default TutorAvailability;
