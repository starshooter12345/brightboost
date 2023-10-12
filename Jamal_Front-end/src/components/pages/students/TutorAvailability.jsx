import React, { useState, useEffect } from 'react';
import StudentLayout from './StudentLayout';

function ViewTutors() {
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState('');

  // Dummy fetching of tutor data on component mount
  useEffect(() => {
    // This is a dummy call, replace it with an actual API call to fetch tutors
    const fetchTutors = async () => {
      // ... fetch data logic here ...
      // setTutors(data);
    };
    fetchTutors();
  }, []);

  const filteredTutors = tutors.filter(tutor => 
    tutor.name.toLowerCase().includes(search.toLowerCase()) ||
    tutor.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <StudentLayout>
      <div>
        <label>
          Search by Tutor Name or Email:
          <input 
            type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
        </label>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Expertise</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {filteredTutors.map((tutor) => (
              <tr key={tutor.id}>
                <td>{tutor.name}</td>
                <td>{tutor.email}</td>
                <td>{tutor.expertise}</td>
                <td>
                  {Object.keys(tutor.availability)
                    .filter(day => tutor.availability[day])
                    .join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </StudentLayout>
  );
}

export default ViewTutors;


//Here's a breakdown of the main features of this page:
//This code allows students to search for tutors by either their name or email. If a student types in a part of a tutor's name or email in the search box, the table will filter to show only the matching tutors.