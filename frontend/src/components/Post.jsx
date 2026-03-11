import {MdDelete,MdEdit} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../services/auth';

function Post({type,post}) {
  const navigate = useNavigate();

  const user = getUserData();
  
  const username = user?.username;
  const role = user?.role;

  const handleApply = (postId) => {
    navigate(`/apply`,{state:{postId:postId}});
  }

  const handleEdit = (postId) => {
    navigate(`/edit`,{state:{postId:postId}});
  }
  
    async function deletePost(postId){
        try {
          await api.delete(`/jobPost/${postId}`)
          navigate('/posts');
        } catch (error) {
            console.error("Error deleting post:", error)
        }
    }

    const handleDelete =  async (postId) => {
        await deletePost(postId);
      }

  return (
    <div className='w-full border flex flex-col justify-between  border-gray-700 rounded-lg p-6 bg-gray-900 gap-10'>
        <div>
        <a href={`/job/${post.postId}`} rel="noopener noreferrer">
            <h2 className='text-xl font-bold text-white underline'>{post.postProfile}</h2>
        </a>
        <div className='mt-2'>
            <h4 className='text-blue-400 text-lg'>Location : <b className='text-yellow-400'>{post.postLocation}</b></h4>
        </div>
        {type === "single" ? (
            <div className='mt-2 flex flex-col gap-2'>
                <p className='text-blue-400 text-xl'>Job Description:</p>
                <p className='text-gray-300'>{post.postDesc}</p>
            </div>):
            (
               <div className='mt-2 flex flex-col gap-2'>
                <p className='text-blue-400 text-xl'>Job Description:</p>
                <p className='text-gray-300 mt-2'>{post.postDesc.substring(0,50)}... 
                <a href={`/job/${post.postId}`} className='text-blue-400 hover:underline'>more</a></p>
            </div>)
        }
        <p className='text-blue-400 text-xl mt-2'>Experience Required: <b className='text-yellow-400'>{post.reqExperience} years</b></p>
        <div className='mt-2'>
           <h4 className='text-white text-lg'>Skills Required:</h4>
           <ul className='list-disc list-inside text-gray-300'>
            {post?.postTechStack?.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
           </ul>
        </div>
        </div>
        {role === 'ROLE_ADMIN' && (<div className='mt-4 flex justify-end gap-4'>
        <button onClick={()=>handleDelete(post.postId)} className='bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white p-2 rounded-full'>
            <MdDelete  size={24} color='white'/>
        </button>
            <button onClick={()=>handleEdit(post.postId)} className='bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white p-2 rounded-full'>
                <MdEdit size={24} color='white'/>
            </button>
        </div>)
        }
        {role === 'ROLE_USER' && (
            <div className='mt-4 flex justify-end gap-4'>
                <button onClick={()=>handleApply(post.postId)} className='bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white p-2 rounded-full'>
                    Apply
                </button>
            </div>
        )
        }

    </div>
  )
}

export default Post