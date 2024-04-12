import React, { useState, useEffect } from 'react';
import { AxiosInstance } from '../components/AxiosInstance';
import { BaseUrl } from '../components/BaseUrl';
import DocNavbar from './DocNavbar';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState([]);
  const backgroundImageUrl = 'https://lh3.googleusercontent.com/proxy/FXTPqp1BfokDTthbVUjHUwJQ4jq56wKTDsq972ohfstxXIaFu1tqPgooN_WUt7Zyv6kicCvQQ4GIpWN3XNWV9CGa37Jx5qgQXJ6IPH5w4y4gIO6qkXT8nh4U6BQ-';

  useEffect(() => {
    AxiosInstance.get('doctor/docviewpost/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);


    // Function to toggle expanded state for a post
    const toggleExpanded = (postId) => {
        setExpandedPosts(prevState => {
          if (prevState.includes(postId)) {
            return prevState.filter(id => id !== postId);
          } else {
            return [...prevState, postId];
          }
        });
      };

  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <DocNavbar/>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-10 text-black">Make your health a priority</h1>
        <h1 className='text-xl font-medium text-gray-600 mb-24'>To keep the body in good health is a duty...
          otherwise we shall not be able to keep our mind strong
          and clear.</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          {posts.map(post => (
            <div key={post.id} className="mb-8">
              {post.article && (
                <img src={BaseUrl + post.article} className="w-full h-60 object-cover mb-1" alt="Article" />
              )}
              {post.video && (
                <video className="w-full h-60 object-cover mb-12" controls>
                  <source src={BaseUrl + post.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <h2 className="text-xl font-bold mb-5">{post.title}</h2>
              <p className='text-sm font-normal'>{expandedPosts.includes(post.id) ? post.blog_content : post.blog_content.slice(0, 100)}</p>
              {post.blog_content.length > 100 && (
                <button className="text-sm text-green-700 font-light mt-2" onClick={() => toggleExpanded(post.id)}>
                  {expandedPosts.includes(post.id) ? 'Read Less' : 'Read More'}
                </button>
              )}
              <p className='text-sm text-blue-700 font-light mt-2'>Created by:{post.created_by}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
