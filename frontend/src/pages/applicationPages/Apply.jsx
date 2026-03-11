import {useState} from 'react'
import { useLocation} from 'react-router-dom';
import EduForm from '../../components/application/EduForm';
import WorkExpForm from '../../components/application/WorkExpForm';
import api from '../../services/API';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Apply() {
  const location = useLocation();
  const postId = location.state?.postId;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    phoneNo:'',
    currLoc:'',
    educationList:[
        {
        university:'',
        degree:'',
        specialization:'',
        cgpa:'',
        yearOfPassing:''
        }
    ],
    workExpList:[{
        compName:'',
        jobTitle:'',
        years:'',
        isCurrentlyWorking:false
    }],
    jobPost:{
        postId:postId
    }
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/application/apply', formData);
      console.log('Application submitted:', response.data);
      toast.success('Application submitted successfully!');
      setFormData({
        name:'',
        email:'',
        phoneNo:'',
        currLoc:'', 
        educationList:[
            {
            university:'',
            degree:'',
            specialization:'',
            cgpa:'',
            yearOfPassing:''
            }
        ],
        workExpList:[{
            compName:'',
            jobTitle:'',
            years:'',
            isCurrentlyWorking:false
        }],
        jobPost:{
            postId:postId
        }
        });
        navigate('/');
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Failed to submit application. Please try again.');
    }
  };

  return (
    <div>
        <h1 className='text-3xl font-bold text-white'>Apply Page for Post ID: {postId}</h1>
        <div className='w-full flex flex-col justify-center items-center max-w-4xl mx-auto p-4'>
            <form className='mt-4 flex flex-col gap-4' onSubmit={handleSubmit}>
               <section className='flex flex-col gap-2 text-gray-300' required>
                <h2 className='text-xl font-semibold'>Personal Information</h2>
                <hr className='border border-gray-700'/>
                <label htmlFor='name' className='text-white mt-2'>
                <p>Full Name<sup className='text-red-500'> *</sup></p>
                </label>
                <input
                    type="text"
                    required
                    id="name"
                    name='name'
                    value={formData.name}
                    onChange={(e)=>setFormData({...formData,name:e.target.value})}
                    placeholder="Enter Your Name"
                    className='w-75 p-2 rounded-md bg-gray-800 text-white'
                />
                <label htmlFor='email' className='text-white'>
                    <p>Email<sup className='text-red-500'> *</sup></p>
                </label>
                <input
                    type="email"
                    required
                    id="email"
                    name='email'
                    value={formData.email}
                    onChange={(e)=>setFormData({...formData,email:e.target.value})}
                    placeholder="Enter Your Email"
                    className='w-75 p-2 rounded-md bg-gray-800 text-white'
                />
                <label htmlFor='phoneNo' className='text-white'>
                    <p>Phone Number<sup className='text-red-500'> *</sup></p>
                </label>
                <input
                    type="tel"
                    required
                    id="phoneNo"
                    name='phoneNo'
                    value={formData.phoneNo}
                    onChange={(e)=>setFormData({...formData,phoneNo:e.target.value})}
                    placeholder="Enter Your Phone Number"
                    className='w-75 p-2 rounded-md bg-gray-800 text-white'
                />
                <label htmlFor='currLoc' className='text-white'>
                      <p>Current Location<sup className='text-red-500'> *</sup></p>
                </label>
                <input
                    type="text"
                    required
                    id="currLoc"
                    name='currLoc'
                    value={formData.currLoc}
                    onChange={(e)=>setFormData({...formData,currLoc:e.target.value})}
                    placeholder="Enter Your Current Location"
                    className='w-75 p-2 rounded-md bg-gray-800 text-white'
                />
               </section>
               <section className='flex flex-col gap-2 text-gray-300 mt-4'>
                <h2 className='text-xl font-semibold'>Education Details</h2>
                <hr className='border border-gray-700'/>
                <EduForm formData={formData} setFormData={setFormData}/>
               </section>
               <section className='flex flex-col gap-2 text-gray-300 mt-4'>
                <h2 className='text-xl font-semibold'>Work Experience</h2>
                <hr className='border border-gray-700'/>
                <WorkExpForm formData={formData} setFormData={setFormData}/>
               </section>
                <button type="submit" className='w-75 bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded-lg transition duration-300 mt-4'>
                    Submit Application
                </button>
            </form>
        </div>
    </div>
  )
}

export default Apply