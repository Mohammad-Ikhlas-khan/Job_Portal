import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import api from '../../services/API';
import Application from '../../components/application/Application';

function JobApplications(){
    const [applications,setApplications] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const jobId = location.pathname.split("/")[2];

    async function fetchApplications(){
        try{
            const response = await api.get(`/application/${jobId}`);
            setApplications(response.data);
        }catch(error){
            toast.error("Failed to fetch applications");
        }
    }
    useEffect(()=>{
        fetchApplications();
    },[jobId]);

    return (
        <div>
            <h2 className='text-2xl text-center text-blue-500'>Job Applications</h2>
            {applications.length === 0 ? (
                <p className="text-gray-300 text-lg text-center">No applications found for this job.</p>
            ) : (
                <ul>
                    {applications.map(app => (
                      <li key={app.appId}>
                          <div className='p-4 border flex justify-between border-gray-700 rounded-lg bg-gray-900'>
                            <h2 className='text-xl font-bold text-white'>{app.name}</h2>
                            <p className='text-gray-300 underline'><a href={`/myapplications/${app.appId}`}>View Application</a></p>
                        </div>
                      </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default JobApplications;