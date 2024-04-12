import React, { useEffect, useState } from 'react'
import { AxiosInstance } from '../components/AxiosInstance'
import toast,{Toaster} from 'react-hot-toast';
import AdminSideBar from './AdminSideBar'
import { BaseUrl } from '../components/BaseUrl';

const DoctorBlog = () => {
 const [Blogs,setBlog]=useState([])
 const [currentPage,setCurrentPage]=useState(1)
 const [itemsPerPage]=useState(1)

 useEffect(()=>{
    AxiosInstance.get('adminn/admindoctorblogview/')
    .then(response=>{
        setBlog(response.data)
    }).catch(error=>{
        console.error("Error fetching blog posts:",error)
    })
 },[])


 const indexOfLastBlog=currentPage*itemsPerPage;
 const indexOfFirstBlog=indexOfLastBlog-itemsPerPage
 const currentBlogs=Blogs.slice(indexOfFirstBlog,indexOfLastBlog)
 
 const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
 };


 const approveBlog = async(blogId) => {
    try {
        await AxiosInstance.post('adminn/adminapprovedoctorblog/', { blog_id: blogId })
        .then(response => {
            console.log('approved successfully')
            toast.success('Blog approved successfully')
        })
    } catch (error) {
        console.error("Error approving blog", error)
    }
}

  return (
    <>
<div className="flex">
      <AdminSideBar />
      <div className="flex flex-col overflow-x-auto">
        <Toaster/>
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
                    {currentBlogs.map((blog,index)=>{
                        return(
                                <tr key={blog.id}>
                             <td className="whitespace-nowrap px-12 py-12 font-medium">{index + 1}</td>
                             <td className="whitespace-normal px-12 py-12">{blog.title}</td>
                             <td className="whitespace-normal px-12 py-12">{blog.blog_content}</td>
                             <td className="whitespace-nowrap px-12 py-12">
                                {blog.article && (
                                    <img src={BaseUrl+blog.article} width="100px" height="300px" title="Article Preview" />
                                )}
                             </td>
                             <td className="whitespace-nowrap px-12 py-12">
                                {blog.video && (
                                    <video width="320" height="240" controls>
                                    <source src={BaseUrl+blog.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                    </video>
                                )}
                             </td>
                             <td className="whitespace-normal px-12 py-12">{blog.created_by}</td>
                             <td className="whitespace-nowrap px-12 py-12">
                              <button className='bg-green-500 text-white w-20 h-7 rounded-md mr-3' onClick={()=>approveBlog(blog.id)}>Approve</button>
                              {/* <button className='bg-red-500 text-white w-20 h-7 rounded-md'>Reject</button> */}
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
    </>
  )
}

export default DoctorBlog
