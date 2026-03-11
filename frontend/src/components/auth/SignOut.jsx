import React from 'react'
import { useParams } from 'react-router-dom';
import api from '../../services/API';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function SignOut() {
  const { username } = useParams();
  const navigate = useNavigate();

  const handleSignOut = (username) => {
        
        try{
             api.delete(`/auth/signout/${username}`);
             localStorage.removeItem("token");
             toast.success('Signed out successfully!');
             navigate("/login");
        }
        catch(error){
            console.error("Error signing out:", error);
            toast.error('Failed to sign out. Please try again.');
        }
    }
  return (
    <div className='w-screen min-h-screen bg-gray-800 flex flex-col justify-center items-center gap-5'>
        <p className='text-center text-3xl'>Are you Sure you want to Sign Out?</p>
        <button onClick={()=>handleSignOut(username)} className='text-white bg-violet-500 hover:bg-violet-600 cursor-pointer px-4 py-2 rounded-lg'>
        Yes, Sign Out</button>
    </div>
  )
}

export default SignOut