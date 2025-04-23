import React from "react";
import Header from "./Header"; 
import Sidebar from "./Sidebar"; 
import VideoCard from "./VideoCard"; 
import { videos } from "./data"; 

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 bg-gray-100">
          <h2 className="text-xl font-bold mb-4">Recommended</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
