import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import api from '../services/API';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Form({type,postId}) {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      postProfile:'',
      postLocation:'',
      postDesc:'',
      reqExperience:'',
      postTechStack:[]
    });

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        {type === "create" ? await api.post('/jobPost', formData) :
             await api.put(`/jobPost/${postId}`, formData)}
        toast.success(`Job post ${type === "create" ? "created" : "updated"} successfully!`);
          setFormData({
              postProfile:'',
              postLocation:'',
              postDesc:'',
              reqExperience:'',
              postTechStack:[]
          });
          navigate('/');
      } catch (error) {
        console.error('Error creating job post:', error);
        toast.error('Failed to create job post. Please try again.');
      }
  };
  return (
    <div className='w-full max-w-md mx-auto mt-10 p-5 rounded-lg shadow-md bg-gray-900'>
            <form className='flex flex-col' onSubmit={handleSubmit}>      
                <label htmlFor='postProfile' className='block text-white mb-2'>Job Profile:</label>
                <input 
                  type="text"
                  required
                  placeholder='Job Profile'
                  id='postProfile'
                  name='postProfile'
                  value={formData.postProfile}
                  onChange={(e)=>setFormData({...formData,postProfile:e.target.value})}
                  className='w-full mb-4 p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                <label htmlFor='postLocation' className='block text-white mb-2'>Job Location:</label>
                <input 
                  type="text"
                  required
                  placeholder='Job Location'
                  id='postLocation'
                  name='postLocation'
                  value={formData.postLocation}
                  onChange={(e)=>setFormData({...formData,postLocation:e.target.value})}
                  className='w-full mb-4 p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                />

                <label htmlFor='postDesc' className='block text-white mb-2'>Job Description:</label>
                <textarea 
                  placeholder='Job Description'
                  id='postDesc'
                  name='postDesc'
                  value={formData.postDesc}
                  onChange={(e)=>setFormData({...formData,postDesc:e.target.value})}
                  className='w-full mb-4 p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                ></textarea>
                <label htmlFor='reqExperience' className='block text-white mb-2'>Experience Required:</label>
                <input 
                  type="number"
                  placeholder='Experience required (in years)'
                  id='reqExperience'
                  name='reqExperience'
                  value={formData.reqExperience}
                  onChange={(e)=>setFormData({...formData,reqExperience:parseInt(e.target.value)})}
                  className='w-full mb-4 p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <label htmlFor='postTechStack' className='block text-white mb-2'>Tech Stack (comma separated):</label>
                <input 
                  type="text"
                  placeholder='Tech Stack (comma separated)'
                  id='postTechStack'
                  name='postTechStack'
                  value={formData.postTechStack}
                  onChange={(e)=>setFormData({...formData,postTechStack:e.target.value.split(',').map(item => item.trim())})}
                  className='w-full mb-4 p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                />

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  {type === "create" ? "Add Job" : "Update Job"}
                </button>
            </form>
        </div>
  )
}

export default Form