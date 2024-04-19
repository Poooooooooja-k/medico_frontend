import React, { useEffect, useState } from 'react';
import { AxiosInstance } from '../components/AxiosInstance';
import { BaseUrl } from '../components/BaseUrl';
import { FaTrash, FaUndo, FaEdit } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import ProfileSideBar from './ProfileSideBar';

const DocViewBlog = () => {
  const [Blogs, setBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editData, setEditData] = useState(null);
  const [itemsPerPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  useEffect(() => {
    AxiosInstance.get('doctor/docviewpost/')
      .then(response => {
        setBlog(response.data);
      }).catch(error => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = Blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = async (postId) => {
    try {
      const response = await AxiosInstance.get(`doctor/docblogdelete/${postId}/`);
      console.log(response.data);
      toast.success('Blog deactivated successfully!!');
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleRestore = async (postId) => {
    try {
      const response = await AxiosInstance.get(`doctor/docblogrestore/${postId}/`);
      console.log(response.data);
      toast.success("Blog restored successfully!");
    } catch (error) {
      console.error("Error restoring blog", error);
    }
  };

  const handleEdit = (postId) => {
    AxiosInstance.get(`doctor/getblog/${postId}`)
      .then(response => {
        setEditData(response.data);
        setIsModalOpen(true); // Open the modal
      })
      .catch(error => {
        console.error("error fetching blog data:", error);
      });
  };

  const handleSaveEdit = () => {
    AxiosInstance.patch(`doctor/doceditblog/${editData.id}/`, editData)
      .then(response => {
        console.log('Blog updated successfully:', response.data);
        toast.success('Blog updated successfully!');
        setEditData(null);
        setIsModalOpen(false); // Close the modal after saving changes
      })
      .catch(error => {
        console.error('Error updating blog:', error);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setEditData(null); // Clear the edit data
  };

  return (
    <>
      <div className="flex">
        <ProfileSideBar/>
        <div className="flex flex-col overflow-x-auto">
          <Toaster />
          <h1 className="text-center font-bold text-red-500 mt-4">Blogs</h1>
          <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-12 py-12">#</th>
                      <th scope="col" className="px-12 py-12">Title</th>
                      <th scope="col" className="px-12 py-12">Articles</th>
                      <th scope="col" className="px-12 py-12">BlogContent</th>
                      <th scope="col" className="px-12 py-12">Videos</th>
                      <th scope="col" className="px-12 py-12">Created by</th>
                      <th scope="col" className="px-12 py-12">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentBlogs.map((blog, index) => {
                      return (
                        <tr key={blog.id}>
                          <td className="whitespace-nowrap px-12 py-12 font-medium">{index + 1}</td>
                          <td className="whitespace-normal px-12 py-12">{blog.title}</td>
                          <td className="whitespace-normal px-12 py-12">{blog.blog_content}</td>
                          <td className="whitespace-nowrap px-12 py-12">
                            {blog.article && (
                              <img src={BaseUrl + blog.article} width="100px" height="300px" title="Article Preview" />
                            )}
                          </td>
                          <td className="whitespace-nowrap px-12 py-12">
                            {blog.video && (
                              <video width="320" height="240" controls>
                                <source src={BaseUrl + blog.video} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            )}
                          </td>
                          <td className="whitespace-normal px-12 py-12">{blog.created_by}</td>
                          <td className="whitespace-nowrap px-12 py-12">
                            <button onClick={() => handleDelete(blog.id)} className="mr-2 text-red-500">
                              <FaTrash />
                            </button>
                            <button onClick={() => handleRestore(blog.id)} className="mr-2 text-blue-500">
                              <FaUndo />
                            </button>
                            <button onClick={() => handleEdit(blog.id)} className="mr-2 text-green-500">
                              <FaEdit />
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Pagination controls */}
          <div className="flex justify-center my-4">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="mx-2 px-4 py-2 border rounded">
              Previous
            </button>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(Blogs.length / itemsPerPage)} className="mx-2 px-4 py-2 border rounded">
              Next
            </button>
          </div>
        </div>
      </div>
      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Edit Blog Post</h3>
                    {/* Form for editing blog post */}
                    <form>
                      {/* Input fields for editing blog post */}
                      <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input type="text" name="title" id="title" value={editData.title} onChange={(e) => setEditData({ ...editData, title: e.target.value })} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="article" className="block text-sm font-medium text-gray-700">Article</label>
                        <input type="text" name="article" id="article" value={editData.article} onChange={(e) => setEditData({ ...editData, article: e.target.value })} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="blog_content" className="block text-sm font-medium text-gray-700">Blog content</label>
                        <input type="text" name="blog_content" id="blog_content" value={editData.blog_content} onChange={(e) => setEditData({ ...editData, blog_content: e.target.value })} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="video" className="block text-sm font-medium text-gray-700">video</label>
                        <input type="text" name="video" id="video" value={editData.video} onChange={(e) => setEditData({ ...editData, video: e.target.value })} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="created_by" className="block text-sm font-medium text-gray-700">Created by</label>
                        <input type="text" name="created_by" id="created_by" value={editData.created_by} onChange={(e) => setEditData({ ...editData, created_by: e.target.value })} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="flex justify-end">
                        <button type="button" onClick={handleSaveEdit} className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 mr-2">
                          Save Changes
                        </button>
                        <button type="button" onClick={closeModal} className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500">
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DocViewBlog;
