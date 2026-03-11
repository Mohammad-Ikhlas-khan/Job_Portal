import React from 'react'
import { useState,useEffect } from 'react';
import api from '../../services/API';
import Application from '../../components/application/Application';

function UserApplications() {
  const [applications, setApplications] = useState([]);
  
  async function fetchApplications() {
    try {
      const response = await api.get('/application/userApplications');
      setApplications(response.data);
    }
    catch (error) {
      console.error('Error fetching applications:', error);
    }
  }

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div>
      <h1 className='text-2xl text-blue-400 mb-4'>My Applications</h1>
      {applications?.length === 0 ? (
        <p className='text-gray-300'>You have not applied to any jobs yet.</p>
      ) : (
        <ul className='space-y-4'>
          {applications.map(application => (
            <li key={application.appId} className='p-4 border border-gray-700 rounded-lg bg-gray-900'>
              <div className='p-4 border flex justify-between border-gray-700 rounded-lg bg-gray-900'>
                <h2 className='text-xl font-bold text-white underline'><a href={`/job/${application.jobPost?.postId}`}>{application.jobPost?.postProfile}</a></h2>
                <p className='text-gray-300 underline'><a href={`/myapplications/${application.appId}`}>View Application</a></p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UserApplications