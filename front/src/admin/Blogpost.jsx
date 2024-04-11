import React, { useState } from 'react';
import { AxiosInstance } from '../components/AxiosInstance';
import AdminSideBar from './AdminSideBar';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Blogpost = () => {
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
      const response = await AxiosInstance.post('adminn/addblog/', formData, {
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
      <div className="flex">
        <AdminSideBar />
        <div className="flex flex-col justify-center items-center min-h-[200px] min-w-[300px] bg-blue-200 shadow rounded-lg p-8">
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
        <Link to="/admin/adminviewblog">
          <button className='bg-green-600 min-w-[10px] min-h-[10px] rounded-lg'>View All Posts</button>
        </Link>
        </div>
      </div>
      
    </>
  );
};

export default Blogpost;
