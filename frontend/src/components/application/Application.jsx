import React from 'react';
import api from '../../services/API';
import { toast } from 'react-toastify';

function Application({application}) {
    const withdrawHandler = async (appId) => {
        try {
          await api.delete(`/application/delete/${appId}`);
          toast.success('Application withdrawn successfully!');
          navigate("/myapplications");
        }
        catch(e){
            toast.error('Failed to withdraw application. Please try again.');
            console.error('Error withdrawing application:', e);
        }
    }

    return(
        <div className='w-100 flex flex-col justify-start max-w-4xl  p-4'>
            <h1 className='text-2xl text-blue-400 mb-4'>Application Details</h1>
             <h2 className='text-xl font-bold text-white mb-2'>{application?.jobPost?.postProfile}</h2>
            <div className='p-4 border border-gray-700 rounded-lg bg-gray-900'>
                <h2 className='text-2xl text-blue-300'>Personal Information</h2>
                <div className="mt-2">
                   <h3 className='text-lg text-blue-400'>Applicant Name:</h3>
                   <p className="text-lg text-indigo-50">{application?.name}</p>
                </div>
                <div className='mt-2'>
                   <h3 className='text-lg text-blue-400'>Email:</h3>
                   <p className="text-lg text-indigo-50">{application?.email}</p>
                </div>
                <div className="mt-2">
                   <h3 className='text-lg text-blue-400'>Phone:</h3>
                   <p className="text-lg text-indigo-50">{application?.phoneNo}</p>
                </div>
                <div className='mt-2'>
                   <h3 className='text-lg text-blue-400'>Current Location:</h3>
                   <p className="text-lg text-indigo-50">{application?.currLoc}</p>
                </div>
                </div>
                <div className='p-4 border border-gray-700 rounded-lg bg-gray-900 mt-4'>
                   <h3 className='text-2xl text-blue-300'>Education</h3>
                    <div className='list-disc list-inside text-gray-300 mt-2'>
                        {application?.educationList?.map((education,index) => (
                        <ul key={index} className="list-inside text-gray-300 mt-2">
                            <li className='mt-2'>
                                <h3 className="text-lg text-blue-400">University:</h3>
                                <p className="text-lg text-indigo-50">{education.university}</p>
                            </li>
                            <li className='mt-2'>
                                <h3 className="text-lg text-blue-400">Degree:</h3>
                                <p className="text-lg text-indigo-50">{education.degree}</p>
                            </li>
                            <li className='mt-2'>
                                <h3 className="text-lg text-blue-400">Specialization:</h3>
                                <p className="text-lg text-indigo-50">{education.specialization}</p>
                            </li>
                            <li className='mt-2'>
                                <h3 className="text-lg text-blue-400">CGPA:</h3>
                                <p className="text-lg text-indigo-50">{education.cgpa}</p>
                            </li>
                            <li className='mt-2'>
                                <h3 className="text-lg text-blue-400">Year of Passing:</h3>
                                <p className="text-lg text-indigo-50">{education.yearOfPassing}</p>
                            </li>
                        </ul>
                        ))}
                    </div>
                </div>
                <div className='p-4 border border-gray-700 rounded-lg bg-gray-900 mt-4'>
                   <h3 className='text-lg text-blue-400'>Work Experience:</h3>
                    <ul className='list-inside text-gray-300 mt-2'>
                        {application?.workExpList?.map((experience, index) => (
                            <ul key={index} className="list-inside text-gray-300 mt-2">
                                <li className="mt-2">
                                    <h3 className="text-lg text-blue-400">Company Name:</h3>
                                    <p className="text-lg text-indigo-50">{experience.compName}</p>
                                </li>
                                <li className="mt-2">
                                    <h3 className="text-lg text-blue-400">Job Title:</h3>
                                    <p className="text-lg text-indigo-50">{experience.jobTitle}</p>
                                </li>
                                <li className="mt-2">
                                    <h3 className="text-lg text-blue-400">Years Being Working:</h3>
                                    <p className="text-lg text-indigo-50">{experience.years}</p>
                                </li>
                                <li className="mt-2">
                                  <h3 className="text-lg text-blue-400">Currently Working:</h3>
                                {experience.isCurrentlyWorking ? (
                                    <p className="text-lg text-green-400">Yes</p>
                                        ) : (
                                            <p className="text-lg text-red-400">No</p>
                                        )
                                    }
                                </li>
                            </ul>
                        ))}
                    </ul>
                </div>
                <button onClick={()=>withdrawHandler(application.appId)}
                className='mt-4 bg-red-600 px-4 py-2 rounded hover:bg-red-700 hover:cursor-pointer text-white w-48'>
                     Withdraw Application
                </button>
        </div>
    )
}

export default Application;