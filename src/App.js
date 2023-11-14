import './App.css';
import React from 'react';
import NavBar from './NavBar';
import UserProfile from './UserProfile';
const postsData = [
  {
    "title": "A Changing World Order",
    "content": "The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including... ",
    "date": "August 2",
    "readingTime": "2 mins",
    "views": 102,
    "author": "anujgosalia"
  },
  {
    "title": "Indian v/s Australia",
    "content": "Think about it - this cricket series was akin to therapy. Laying our childhood trauma up top, working with it slowly and surely over two m...",
    "date": "January 21",
    "readingTime": "1 min",
    "views": 156,
    "author": "anujgosalia"
  },
  {
    "title": "Write To Build",
    "content": "Writing is the first step to create: - stories - products companies",
    "date": "November 18",
    "readingTime": "1 min",
    "views": 228,
    "author": "anujgosalia"
  }

];

function App() {
  return (
    <div className="App">
      <NavBar />
      <UserProfile posts={postsData} />
    </div>
  );
}

export default App;
