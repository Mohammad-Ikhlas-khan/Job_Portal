import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../services/auth';
import { toast } from 'react-toastify';
import api from '../services/API';

function Navbar() {
  const navigate = useNavigate();

  const user = getUserData();

  const username = user?.username;
  const role = user?.role;

  console.log("Decoded Token:", { username, role});

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success('Logged out successfully!');
    navigate("/login");
  }

  return (
    <div>
        <nav className='w-full p-5 flex justify-between items-center bg-gray-900'>
            <div className='text-2xl font-bold text-white ml-10'>Job Portal</div>

            {user && (
            <div className='flex items-center'>
            <span className='text-gray-300 mr-4'>Welcome, <b className='text-yellow-400'>{username}</b>!</span>
            <div className='flex gap-4 mr-10'>
                <Link to='/' className='text-white hover:text-gray-300'>Home</Link>
                {role === 'ROLE_ADMIN' && (
                    <Link to='/create' className='text-white hover:text-gray-300'>Add Job</Link>
                )}
                {
                role === 'ROLE_USER' && (
                    <Link to='/myapplications' className='text-white hover:text-gray-300'>My Applications</Link>
                )

                }
                <button onClick={handleLogout} className='text-white hover:text-gray-300'>Logout</button>
                <Link to={`/signout/${username}`} className='text-white hover:text-gray-300'>Sign Out</Link>
            </div>
            </div>)
            }
        </nav>
    </div>
  )
}

export default Navbar