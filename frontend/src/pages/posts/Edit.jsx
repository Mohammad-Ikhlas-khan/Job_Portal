import Form from '../../components/Form';
import { useLocation } from 'react-router-dom';

function Edit() {
  const location = useLocation();
  const postId = location.state?.postId;
  return (
    <div>
        <h1 className='text-3xl font-bold text-white'>Edit Page</h1>
        <Form type="edit" postId={postId}/>
    </div>
  )
}

export default Edit