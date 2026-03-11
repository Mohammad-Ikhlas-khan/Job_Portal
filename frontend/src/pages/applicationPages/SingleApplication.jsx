import React from 'react'
import {useState,useEffect} from 'react';
import api from '../../services/API';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Application from '../../components/application/Application';

function SingleApplication() {
    const [application, setApplication] = useState({});
    const location = useLocation();
    const appId = location.pathname.split("/")[2];

    const navigate = useNavigate();
    
    async function fetchApplication(){
        try{
            const response = await api.get(`/application/userApplications/${appId}`);
            setApplication(response.data);
        }
        catch(error){
            console.error('Error fetching application:', error);
        }
    }

    useEffect(() => {
        fetchApplication();
    },[]);

    return (
        <div>
            <Application application={application} />
        </div>
    )
}

export default SingleApplication