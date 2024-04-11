import React, { useEffect, useState } from 'react'
import { AxiosInstance } from '../components/AxiosInstance'
import ProfileSideBar from './ProfileSideBar';
import { BaseUrl } from '../components/BaseUrl';
import DocNavbar from './DocNavbar';

const DocViewPost = () => {
 const [Blogs,setBlog]=useState([])


 useEffect(()=>{
    AxiosInstance.get('doctor/docviewpost/')
    .then(response=>{
        setBlog(response.data)
    }).catch(error=>{
        console.error("Error fetching blog posts:",error)
    })
 },[])


  return (
    <>
 <DocNavbar/>
    <div className=' flex '>
        
        <ProfileSideBar/>
        
        <div className='flex justify-center mx-auto my-20'>
        {/* <h1 className="text-center font-bold text-red-500 mt-4">Blogs</h1> */}
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-12 py-12">#</th>
                    <th scope="col" className="px-12 py-12">Title</th>
                    <th scope="col" className="px-12 py-12">Articles</th>
                    <th scope="col" className="px-12 py-12">Videos</th>
                    <th scope="col" className="px-12 py-12">Actions</th>
                  </tr>
                </thead>
                <tbody>
                    {Blogs.map((blog,index)=>{
                        return(
                                <tr key={blog.id}>
                             <td className="whitespace-nowrap px-12 py-12 font-medium">{index + 1}</td>
                             <td className="whitespace-nowrap px-12 py-12">{blog.title}</td>
                             <td className="whitespace-nowrap px-12 py-12">
                            
                                {blog.article && (
                                    <img src={BaseUrl+blog.article} width="100px" height="300px" title="Article Preview" />
                                )}
                                </td>
                                <td className="whitespace-nowrap px-12 py-12">
                
                                {console.log(blog)}
                                {blog.video && (
                            
                                    <video width="320" height="240" controls>
                                    <source src={BaseUrl+blog.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                    </video>
                                )}
                                </td>


                             <td className="whitespace-nowrap px-12 py-12">
                               {/* <button onClick={() => handleDelete(blog.id)} className="mr-2 text-red-500">
                                 <FaTrash />
                               </button> */}
                               {/* <button onClick={() => handleRestore(blog.id)} className="mr-2 text-blue-500">
                                 <FaUndo />
                               </button> */}
                               {/* <button className="text-green-500">
                                 <FaEdit />
                               </button> */}
                             </td>
                           </tr>

                        )
                    
                    })}
                     
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default DocViewPost
