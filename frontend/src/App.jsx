import AllPosts from './pages/posts/AllPosts';
import SinglePost from './pages/posts/SinglePost';
import Create from './pages/posts/Create';
import Edit from './pages/posts/Edit';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import SignOut from './components/auth/SignOut';
import ProtectedRoute from './ProtectedRoute';
import Apply from './pages/applicationPages/Apply';
import UserApplications from './pages/applicationPages/UserApplications';
import SingleApplication from './pages/applicationPages/SingleApplication';
import JobApplications from './pages/applicationPages/JobApplications';

function App() {
  return (
  <div className="w-full min-h-screen accent-rose-50 bg-gray-800">

   <BrowserRouter>
      <Navbar/>
   <Routes>
   <Route path='/login' element={<Login/>}/>
   <Route path='/signup/' element={<SignUp/>}/>
   <Route path='/signout/:username' element={<SignOut/>}/>
   <Route path='/' element={<ProtectedRoute><AllPosts/></ProtectedRoute>}/>
   <Route path='/job/:id' element={<ProtectedRoute><SinglePost/></ProtectedRoute>}/>
   <Route path='/create' element={<ProtectedRoute><Create/></ProtectedRoute>}/>
   <Route path='/edit' element={<ProtectedRoute><Edit/></ProtectedRoute>}/>
   <Route path='/apply' element={<ProtectedRoute><Apply/></ProtectedRoute>}/>
   <Route path='/myapplications' element={<ProtectedRoute><UserApplications/></ProtectedRoute>}/>
   <Route path="/myapplications/:appId" element={<ProtectedRoute><SingleApplication/></ProtectedRoute>}/>
   <Route path="/job/:id/applications" element={<ProtectedRoute><JobApplications/></ProtectedRoute>}/>
   </Routes>
   </BrowserRouter> 
  </div>
  );
}

export default App;