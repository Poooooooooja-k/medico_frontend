import React, { useState } from 'react';
import { AxiosInstance } from '../components/AxiosInstance';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import DocNavbar from './DocNavbar';
import ProfileSideBar from './ProfileSideBar';

const DocBlog= () => {
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState(null);
  const [video, setVideo] = useState(null);

  const handleArticle = (e) => {
    setArticle(e.target.files[0]);
  };

  const handleVideo = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('article', article);
    formData.append('video', video);
    
    try {
      const response = await AxiosInstance.post('doctor/docaddblog/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('response.data', response.data);
      toast('Blog added successfully!!');
    } catch (error) {
      console.log('error while uploading video', error);
      toast('Error while Uploading Blog');
    }
  };

  return (
    <>
       <DocNavbar/>
    <div className=' flex '>
        
        <ProfileSideBar/>
        
        <div className='flex justify-center mx-auto my-24'>
          <Toaster />
          <div>
            <h2 className="text-lg font-semibold mb-4">Add New Post</h2>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-4">
                <label className="block mb-2">Title:</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="border border-gray-400 px-3 py-2 rounded-md w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2">Article:</label>
                <input
                  type="file"
                  onChange={handleArticle}
                  className="border border-gray-400 px-3 py-2 rounded-md w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2">Video:</label>
                <input
                  type="file"
                  onChange={handleVideo}
                  className="border border-gray-400 px-3 py-2 rounded-md w-full"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        <Link to="/doctor/docblogview">
          <button className='bg-green-400 w-36 h-12 rounded-lg'>View All Posts</button>
        </Link>
        </div>
      </div>
      
    </>
  );
};

export default DocBlog;
