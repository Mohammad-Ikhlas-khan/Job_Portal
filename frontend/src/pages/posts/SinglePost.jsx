import {useState, useEffect} from 'react';
import { useLocation,useNavigate} from 'react-router-dom';
import api from '../../services/API';
import { getUserData } from '../../services/auth';
import Post from '../../components/Post';
import { Link } from 'react-router-dom';

function SinglePost() {
    const [post, setPost] = useState({});
    const location = useLocation();
    const postId = location.pathname.split("/")[2]; 

    const user= getUserData();
    const role = user?.role;


    async function fetchPost(){
        try{
            const response = await api.get(`/jobPost/${postId}`);
            setPost(response.data);
        }
        catch(error){
            console.error('Error fetching post:', error);
        }
    }

    useEffect(() => {
        fetchPost();
    },[]);


    return (
        <div className='w-full flex flex-col  p-6'>
           <Post type="single" post={post} />
           {role=="ROLE_ADMIN" && (
               <div>
                   <Link to={`/job/${postId}/applications`} className="text-blue-500 hover:text-blue-700">
                       View All Applications for this Job
                   </Link>
               </div>
           )}
        </div>
    )
}

export default SinglePost