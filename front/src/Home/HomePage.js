import React from 'react';
import HomeNavbar from './HomeNavbar';
import { Carousel } from "@material-tailwind/react";

const backgroundImageUrl = 'https://lh3.googleusercontent.com/proxy/FXTPqp1BfokDTthbVUjHUwJQ4jq56wKTDsq972ohfstxXIaFu1tqPgooN_WUt7Zyv6kicCvQQ4GIpWN3XNWV9CGa37Jx5qgQXJ6IPH5w4y4gIO6qkXT8nh4U6BQ-';

const HomePage = (userId) => {
  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <HomeNavbar />
      {/* Your content here */}
    </div>
  );
}

export default HomePage;
