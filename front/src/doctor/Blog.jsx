import React, { useState, useEffect } from 'react';
import { AxiosInstance } from '../components/AxiosInstance';
import { BaseUrl } from '../components/BaseUrl';
import DocNavbar from './DocNavbar';

const Blog = () => {
  const [posts, setPosts] = useState([]);
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

  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <DocNavbar/>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-10 text-gray-600">Make your health a priority</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          {posts.map(post => (
            <div key={post.id} className="mb-8">
              <h2 className="text-xl font-bold">{post.title}</h2>
              {post.article && (
                <img src={BaseUrl + post.article} className="w-full h-80 object-cover" alt="Article" />
              )}
              {post.video && (
                <video className="w-full h-100 object-cover" controls>
                  <source src={BaseUrl + post.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
