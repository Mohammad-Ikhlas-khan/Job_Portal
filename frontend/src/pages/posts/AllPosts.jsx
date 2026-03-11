import {useState,useEffect} from 'react'
import Post from '../../components/Post';
import api from '../../services/API';
import { useNavigate } from 'react-router-dom';

function AllPosts() {
  const [posts,setPosts] = useState([]);
  const [query,setQuery] = useState('');

  async function intialPosts(){
    try{
        const response = await api.get('/jobPosts');
        setPosts(response.data);
    }
    catch(error){
        console.error('Error fetching posts:', error);
    }
  }

  async function fetchPosts(){
    try{
        const response = await api.get(`/jobPosts/${query}`);
        setPosts(response.data);
    }
    catch(error){
        console.error('Error fetching posts:', error);
    }
  }

  
  useEffect(() => {
    if(query){
        fetchPosts();
    }
    else{
        intialPosts();
    }
  },[query]);
  return (
    <div className="w-full min-h-screen mx-auto my-auto p-6 rounded-lg shadow-md flex  flex-col flex-wrap justify-center items-center gap-5">
      <input
        type="search"
        placeholder="Search by profile"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full md:w-1/2 p-2 mb-4 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map(post => (
          <Post type="all" key={post.postId} post={post}/>
        ))}
      </div>
    </div>
  )
}

export default AllPosts