import React from 'react';

function UserProfile({ posts }) {
  return (
    <div className="user-profile">
      
      <div className="background-image">
        <div className="user-image">
          <img src="https://learn.terriblytinytales.com/_next/image?url=%2Fassets%2Fcreators%2Fanuj.png&w=1920&q=75" alt="User" />
        </div>

        <div className="followers-info">
          <span>Following: 100</span>
          <span>Followers: 500</span>
        </div>

        <div className="instagram-link">
          <a href="https://www.instagram.com/userhandle" target="_blank" rel="noopener noreferrer">
            Instagram: @userhandle
          </a>
        </div>

        <div className="interaction-counts">
          <div>
            <span>Starts: 100</span>
            <span>Likes: 200</span>
          </div>
          <div>
            <span>Watch: 300</span>
            <span>Loves: 400</span>
          </div>
        </div>
      </div>

                   <div className="post-section">
         {posts.map((post, index) => (
            <div key={index} className="post-text">
            <h2>{post.title}</h2>
             <p>{post.content}</p>
             <span className="user-details">{`Posted by: ${post.author} - ${post.date}-${post.readingTime} Read-${post.views} Views`}</span>
             <hr/>
           </div>
           
        ))}
       </div>
    </div>
  );
}

export default UserProfile;





